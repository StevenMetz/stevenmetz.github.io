import { describe, expect, it } from '@jest/globals'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../src/App'
import { Sidebar } from '../src/components/Sidebar'

const findByTextContent = (text) => {
  const matches = screen.getAllByText((_, node) => {
    const content = node?.textContent?.replace(/\s+/g, ' ').trim() ?? ''
    return content.toLowerCase().includes(text.toLowerCase())
  })

  expect(matches.length).toBeGreaterThan(0)
  return matches[0]
}

describe('App routing', () => {
  it('renders the home page by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', { level: 1, name: "Hi, I'm Steven." })
    ).toBeInTheDocument()
    expect(findByTextContent('Implementation Engineer')).toBeInTheDocument()
    expect(
      screen.getByRole('navigation', { name: 'Sheet index' })
    ).toBeInTheDocument()
  })

  it('toggles and saves the theme', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    fireEvent.click(
      screen.getByRole('button', { name: 'Switch to blueprint (dark) view' })
    )

    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
    expect(
      screen.getByRole('button', { name: 'Switch to paper (light) view' })
    ).toHaveAttribute('aria-pressed', 'true')
  })

  it('lists published field notes on the home page, newest first', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    const rows = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('href')?.startsWith('/notes/'))
    expect(rows.map((row) => row.getAttribute('href'))).toEqual([
      '/notes/second-note',
      '/notes/first-note',
    ])
    expect(rows[0]).toHaveTextContent('RFI-002')
    expect(rows[0]).toHaveTextContent('2026.02.10')
    expect(screen.queryByText('Unfinished note')).not.toBeInTheDocument()
  })

  it('renders a field note at /notes/:slug', () => {
    window.scrollTo = () => {}
    render(
      <MemoryRouter initialEntries={['/notes/first-note']}>
        <App />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', { level: 1, name: 'First note' })
    ).toBeInTheDocument()
    expect(screen.getByText('RFI-001')).toBeInTheDocument()
    expect(screen.getByText('Body of the first note.')).toBeInTheDocument()
  })

  it('handles a field note that does not exist', () => {
    window.scrollTo = () => {}
    render(
      <MemoryRouter initialEntries={['/notes/nope']}>
        <App />
      </MemoryRouter>
    )

    expect(
      screen.getByRole('heading', { level: 1, name: 'No note here.' })
    ).toBeInTheDocument()
  })

  it('renders the about page when navigating to /about', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    )

    expect(findByTextContent('About Me')).toBeInTheDocument()
    expect(findByTextContent('What I Do')).toBeInTheDocument()
  })

  it('renders the sidebar navigation links', () => {
    const { container } = render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    )

    expect(container.querySelector('.home-link')).toHaveAttribute('href', '/')
    expect(container.querySelector('.about-link')).toHaveAttribute(
      'href',
      '/about'
    )
    expect(container.querySelector('.contact-link')).toHaveAttribute(
      'href',
      '/contact'
    )
  })
})
