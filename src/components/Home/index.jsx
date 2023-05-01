/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import './index.scss'
export function Home() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm Steven Metz
        </h1>
        <br />
        <h2> Full-Stack Engineer / Ruby on Rails / Javascript </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}
