/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatedLetters } from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import {
  faCss3,
  faCss3Alt,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
export function About() {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Hi, my name is Steven! I'm a Full-Stack Engineer with a background in
          carpentry framing new construction homes.{' '}
        </p>
        <p>
          While building homes you are given a blueprint of what the homeowner
          wants. From there I got to use my creative side to come up with a
          system to build the end result the homeowners were looking for.{' '}
        </p>
        <p>
          I pivoted to Software Engineering because I wanted to blend my
          passions of creating solutions to problems not yet solved, creating a
          project from nothing to something, and my fascination with how
          computers work. The skills I learned framing homes transfer perfectly
          to devloping software solutions from dealing with ambiguity to
          constantly changing needs of clients. I will use the same skills I
          used to build homes but with a keyboard instead of a hammer.{' '}
        </p>
        <p>
          I am looking forward to being the solution to your business needs.{' '}
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faJsSquare} color="yellow" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faReact} color="5ED4F4" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGithub} color="white" />
          </div>
        </div>
      </div>
    </div>
  )
}
