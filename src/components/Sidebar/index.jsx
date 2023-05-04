import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faGitlab,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import LogoS from '../../../dist/assets/Logo-S-e1be5bc5.png'
export function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        {/* <img src={} className="sub-logo" alt="logo" /> */}
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" to="/" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/about"
          className="about-link"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" to="/about" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/contact"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" to="/" />
        </NavLink>
      </nav>
      <ul>
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
    </div>
  )
}
