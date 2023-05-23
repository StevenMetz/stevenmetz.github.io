/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import './index.scss'
import { AnimatedLetters } from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { Logo } from './Logo'
import Loader from 'react-loaders'
export function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = 'Steven Metz,'.split('')
  const jobArray = 'Software Engineer.'.split('')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _11`}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m </span>{' '}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={26}
            />
          </h1>
          <br />
          <h2> Full-Stack / Ruby on Rails / React </h2>
          <span>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </span>
          <span>
            <Link to="/about" className="flat-button">
              ABOUT ME
            </Link>
          </span>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}
