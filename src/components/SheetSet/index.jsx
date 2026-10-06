/* eslint-disable react/no-unescaped-entities */
import './index.scss'
import content from '../../Data/sheetSet.json'
import { ThemeToggle } from './ThemeToggle'
import { SectionHeader } from './SectionHeader'
import { DimensionLine } from './DimensionLine'
import { ProjectCard } from './ProjectCard'
import { RevisionRow } from './RevisionRow'
import { NoteRow } from './NoteRow'

const sheets = [
  { code: 'A-101', label: 'PROJECTS', href: '#projects' },
  { code: 'A-201', label: 'EXPERIENCE', href: '#experience' },
  { code: 'A-301', label: 'STORY', href: '#story' },
  { code: 'A-401', label: 'NOTES', href: '#notes' },
  { code: 'A-501', label: 'CONTACT', href: '#contact' },
]

const career = [
  { label: '2016 TO 2023 · FOREMAN', ratio: 7 },
  { label: '2023 TO NOW · ENGINEER', ratio: 3.8, accent: true },
]

export function SheetSet() {
  const { links, generalNotes, projects, revisions, notes } = content
  return (
    <div className="sheet-set">
      <a href="#top" className="sheet-skip-link">
        Skip to main content
      </a>
      <div className="sheet-frame">
        <div className="edge-strip" aria-hidden="true">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>

        <header className="title-block">
          <a href="#top" className="title-block-name">
            <span className="title-block-title">STEVEN METZ</span>
            <span className="title-block-subtitle">
              SOFTWARE ENGINEER · SHEET SET
            </span>
          </a>
          <nav aria-label="Sheet index">
            {sheets.map(({ code, label, href }) => (
              <a key={code} href={href} className="sheet-link">
                <span className="sheet-link-code">{code}</span>
                <span className="sheet-link-label">{label}</span>
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </header>

        <main>
          <section id="top" className="cover">
            <div className="cover-meta">
              <span>A-000 · COVER SHEET</span>
              <span>WAUKESHA, WISCONSIN</span>
            </div>

            <div className="cover-heading">
              <h1>Hi, I'm Steven.</h1>
              <DimensionLine
                label="Career so far: 2016 to 2023 as a foreman, 2023 to now as a software engineer"
                segments={career}
              />
            </div>

            <div className="cover-columns">
              <div className="cover-intro">
                <p className="cover-lede">
                  I build storefront features for Shopify merchants, and I'm
                  usually the one who gets on the call when something isn't
                  working.
                </p>
                <p>
                  Right now I'm an Implementation Engineer at Rebuy, writing Vue
                  and TypeScript for merchants' custom builds. Before any of
                  this I spent seven years as a foreman in home construction.
                  More on that below. It's relevant, I promise.
                </p>
                <div className="cover-actions">
                  <a href="#projects" className="sheet-button solid">
                    SEE WHAT I'VE BUILT
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="square"
                      aria-hidden="true"
                    >
                      <path d="M12 4v16M5 13l7 7 7-7" />
                    </svg>
                  </a>
                  <a href="#contact" className="cover-say-hi">
                    or just say hi
                  </a>
                </div>
              </div>
              <aside className="general-notes">
                <div className="general-notes-title">GENERAL NOTES</div>
                <ol>
                  {generalNotes.map((note, i) => (
                    <li key={note}>
                      <span className="general-notes-number">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ol>
              </aside>
            </div>
          </section>

          <section id="projects" className="sheet-section">
            <div className="sheet-container">
              <SectionHeader
                number="1"
                sheet="A-101"
                title="Stuff I've built"
                subtitle="Some for work, some for fun, a couple still in progress."
                label="SCALE: 1:1"
              />
              <div className="project-grid">
                {projects.map((project, i) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    detail={i + 1}
                  />
                ))}
              </div>
            </div>
          </section>

          <section id="experience" className="sheet-section band">
            <div className="sheet-container">
              <SectionHeader
                number="2"
                sheet="A-201"
                title="Where I've been"
                subtitle="Every version of me so far, newest on top."
                label="REVISION SCHEDULE"
              />
              <div className="revision-schedule">
                <div className="revision-schedule-head" aria-hidden="true">
                  <span className="rev">REV</span>
                  <span className="date">DATE</span>
                  <span className="description">DESCRIPTION</span>
                </div>
                <ol>
                  {revisions.map((revision) => (
                    <RevisionRow key={revision.rev} revision={revision} />
                  ))}
                </ol>
              </div>
              <a href={links.resume.href} className="resume-link">
                {`FULL RÉSUMÉ: ${links.resume.label}`}
              </a>
            </div>
          </section>

          <section id="story" className="sheet-section">
            <div className="sheet-container story">
              <SectionHeader
                number="3"
                sheet="A-301"
                title="The construction thing"
                label="SECTION THROUGH A CAREER"
              />
              <div className="story-columns">
                <div className="story-aside">
                  <div className="story-hatch" aria-hidden="true" />
                  <p className="story-quote">
                    "The plans never quite match what's actually there."
                  </p>
                  <div className="story-keynote">
                    <span className="story-keynote-rule" />
                    <span>KEYNOTE 01. SEE ALSO: EVERY SHOPIFY THEME</span>
                  </div>
                </div>
                <div className="story-body">
                  <p className="story-lede">
                    I spent seven years as a foreman building houses. I liked
                    it. The part I liked most was when something didn't line up
                    and I got to figure out why.
                  </p>
                  <p>
                    In 2022 I went through a coding bootcamp at Actualize. I
                    stayed on as a TA, picked up a contract gig, and landed at
                    Rebuy in 2023. I've been writing software for a living ever
                    since.
                  </p>
                  <p>
                    More of the jobsite carried over than I expected. The plans
                    never quite match what's actually there, whether it's a
                    basement or somebody's Shopify theme. And the person paying
                    for it wants to hear from someone who gets both the work
                    and their problem. That's pretty much my whole thing now.
                  </p>
                  <p>
                    On the side I'm working through CS fundamentals, because I
                    want to keep getting better at the hard parts.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="notes" className="sheet-section">
            <div className="sheet-container notes">
              <SectionHeader
                number="4"
                sheet="A-401"
                title="Field notes"
                subtitle="Things I figured out, written down so I don't have to figure them out twice."
              />
              <div className="note-list">
                {notes.map((note) => (
                  <NoteRow key={note.rfi} note={note} />
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="sheet-section contact">
            <div className="contact-main">
              <span className="contact-sheet">A-501 · CONTACT</span>
              <h2>Say hi.</h2>
              <p>
                Email's the easiest way to reach me. I'm happy to talk shop,
                Shopify weirdness included.
              </p>
              <div className="contact-links">
                <a href={`mailto:${links.email}`} className="sheet-button solid">
                  {links.email}
                </a>
                <a href={links.github} className="sheet-button">
                  GITHUB
                </a>
                <a href={links.gitlab} className="sheet-button">
                  GITLAB
                </a>
                <a href={links.linkedin} className="sheet-button">
                  LINKEDIN
                </a>
              </div>
              <div className="contact-stamp" aria-hidden="true">
                <div>
                  ISSUED FOR
                  <br />
                  REVIEW
                </div>
              </div>
            </div>
            <dl className="contact-block">
              <div>
                <dt>DRAWN BY</dt>
                <dd>Steven Metz</dd>
              </div>
              <div>
                <dt>CHECKED BY</dt>
                <dd>Also Steven</dd>
              </div>
              <div>
                <dt>LOCATION</dt>
                <dd>Waukesha, Wisconsin</dd>
              </div>
              <div>
                <dt>STACK</dt>
                <dd>Vue, TypeScript, Shopify</dd>
              </div>
              <div className="contact-block-sheet">
                <dt>SHEET</dt>
                <dd>A-501</dd>
              </div>
              <div className="contact-block-rev">
                <dt>REV</dt>
                <dd>2026.10</dd>
              </div>
            </dl>
          </section>
        </main>

        <footer className="footer-strip">
          <span>BUILT BY HAND, MOSTLY.</span>
          <span>DO NOT SCALE DRAWINGS</span>
        </footer>
      </div>
    </div>
  )
}
