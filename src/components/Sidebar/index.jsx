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
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" to="/" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          to="/about"
          className="about-link"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" to="/about" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          to="/portfolio"
          className="portfolio-link"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" to="/" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          to="/contact"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" to="/" />
        </NavLink>
        <FontAwesomeIcon
          className="close-icon"
          onClick={() => {
            setShowNav(false)
          }}
          icon={faClose}
          color=" #46FF30"
          size="3x"
        />
        <ul className={showNav ? 'mobile-show' : ''}>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/steven-metz"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/stevenmetz"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://gitlab.com/StevenMetz"
            >
              <FontAwesomeIcon icon={faGitlab} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </nav>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color=" #46FF30"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}
