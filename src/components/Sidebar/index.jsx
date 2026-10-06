import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faClose,
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faGitlab,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
export function Sidebar() {
  const fontColor = '#4d4d4e'
  const [showNav, setShowNav] = useState(false)
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img
          src="https://res.cloudinary.com/dhtvsvfce/image/upload/v1683255123/Logo-S_z53uq3.png"
          alt="logo"
        />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          to="/"
          className="home-link"
          aria-label="Home"
        >
          <FontAwesomeIcon
            icon={faHome}
            color={fontColor}
            to="/"
            aria-hidden="true"
          />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          to="/about"
          className="about-link"
          aria-label="About"
        >
          <FontAwesomeIcon
            icon={faUser}
            color={fontColor}
            to="/about"
            aria-hidden="true"
          />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          to="/portfolio"
          className="portfolio-link"
          aria-label="Portfolio"
        >
          <FontAwesomeIcon
            icon={faSuitcase}
            color={fontColor}
            to="/"
            aria-hidden="true"
          />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          to="/contact"
          className="contact-link"
          aria-label="Contact"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            color={fontColor}
            to="/"
            aria-hidden="true"
          />
        </NavLink>
        <button
          className={`close-icon ${showNav ? 'visible' : ''}`}
          onClick={() => {
            setShowNav(false)
          }}
          aria-label="Close navigation menu"
          aria-expanded={showNav}
        >
          <FontAwesomeIcon
            icon={faClose}
            color="#46FF30"
            size="3x"
            aria-hidden="true"
          />
        </button>
        <ul className={showNav ? 'mobile-show' : ''} id="nav-menu">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/steven-metz"
              aria-label="Visit LinkedIn profile (opens in new tab)"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                color={fontColor}
                aria-hidden="true"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/stevenmetz"
              aria-label="Visit GitHub profile (opens in new tab)"
            >
              <FontAwesomeIcon
                icon={faGithub}
                color={fontColor}
                aria-hidden="true"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://gitlab.com/StevenMetz"
              aria-label="Visit GitLab profile (opens in new tab)"
            >
              <FontAwesomeIcon
                icon={faGitlab}
                color={fontColor}
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
      </nav>
      <button
        className={`hamburger-icon ${showNav ? 'hidden' : ''}`}
        onClick={() => setShowNav(true)}
        aria-label="Open navigation menu"
        aria-expanded={showNav}
        aria-controls="nav-menu"
      >
        <FontAwesomeIcon
          icon={faBars}
          color="#46FF30"
          size="3x"
          aria-hidden="true"
        />
      </button>
    </div>
  )
}
