/* eslint-disable react/prop-types */
import '../index.scss'
import { notes } from '../../../Data/notes'
import { ThemeToggle } from '../ThemeToggle'

const sheets = [
  { code: 'A-101', label: 'PROJECTS', href: '#projects' },
  { code: 'A-201', label: 'EXPERIENCE', href: '#experience' },
  { code: 'A-301', label: 'STORY', href: '#story' },
  { code: 'A-401', label: 'NOTES', href: '#notes' },
  { code: 'A-501', label: 'CONTACT', href: '#contact' },
  // Field Notes only shows up once there is at least one published note.
].filter(({ href }) => notes.length > 0 || href !== '#notes')

// The drawing frame shared by every sheet: edge strip, title block and footer.
// Pass `home` on the homepage so the sheet links scroll instead of navigating.
export function SheetFrame({ home = false, children }) {
  const base = home ? '' : '/'
  return (
    <div className="sheet-set">
      <a href="#main" className="sheet-skip-link">
        Skip to main content
      </a>
      <div className="sheet-frame">
        <div className="edge-strip" aria-hidden="true">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>

        <header className="title-block">
          <a href={home ? '#top' : '/'} className="title-block-name">
            <span className="title-block-title">STEVEN METZ</span>
            <span className="title-block-subtitle">
              SOFTWARE ENGINEER · SHEET SET
            </span>
          </a>
          <nav aria-label="Sheet index">
            {sheets.map(({ code, label, href }) => (
              <a key={code} href={base + href} className="sheet-link">
                <span className="sheet-link-code">{code}</span>
                <span className="sheet-link-label">{label}</span>
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </header>

        <main id="main">{children}</main>

        <footer className="footer-strip">
          <span>BUILT BY HAND, MOSTLY.</span>
          <span>DO NOT SCALE DRAWINGS</span>
        </footer>
      </div>
    </div>
  )
}
