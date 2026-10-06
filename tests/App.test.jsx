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
