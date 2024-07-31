/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatedLetters } from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import {
  faCss3Alt,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { DiRuby } from 'react-icons/di'
import Loader from 'react-loaders'
export function About() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [windowSize, setWindowWidth] = useState(window.innerWidth)
  const aboutMe = 'About Me'.split('')

  const cubeElement = (
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
          <DiRuby />
        </div>
      </div>
    </div>
  )
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutMe}
              idx={15}
            />
          </h1>
          <p>
            Hey there! I'm Steven, a passionate Full-Stack Software Engineer
            with a knack for turning complex problems into elegant,
            user-friendly solutions. My journey in tech has been an exciting
            ride, and I'm always eager to learn and grow.
          </p>

          <h2>What I Do</h2>
          <p>
            I specialize in building robust web applications using a variety of
            technologies. My toolbox includes:
          </p>
          <ul>
            <li>Frontend: JavaScript, ReactJS, HTML, CSS, SCSS</li>
            <li>Backend: Ruby, Ruby on Rails, Python, GO</li>
            <li>Databases: PostgreSQL, Firebase</li>
            <li>Version Control: Git, GitLab, GitHub</li>
          </ul>

          <h2>My Experience</h2>
          <p>Currently, I'm wearing multiple hats:</p>
          <ul>
            <li>
              As a Software Support Engineer at Rebuy, I'm not just solving
              problems – I'm enhancing user experiences and diving deep into the
              intricacies of e-commerce platforms.
            </li>
            <li>
              I contribute to open-source projects on GitLab, because I believe
              in the power of community-driven development.
            </li>
            <li>
              As a Tech Mentor at Actualize Coding Bootcamp, I'm paying it
              forward by guiding the next generation of developers.
            </li>
          </ul>
          <p>
            Previously, I’ve worked on exciting projects, including building a
            React Native mobile app and optimizing Firebase queries to ensure
            smooth operation and cost-efficiency.
          </p>

          <h2>Why I Love What I Do</h2>
          <p>
            Software engineering isn't just a job for me – it's a passion. I
            love the challenge of creating efficient, scalable solutions that
            make a real difference in people's lives. Whether it's crafting a
            sleek user interface or optimizing backend processes, I'm always
            excited to roll up my sleeves and dive in.
          </p>

          <h2>Beyond the Code</h2>
          <p>
            When I'm not coding, you might find me training for triathalons,
            disk golfing, or hiking trails at my local parks. I believe in
            maintaining a healthy work-life balance and drawing inspiration from
            diverse experiences.
          </p>

          <h2>Let's Connect!</h2>
          <p>
            I'm always open to new opportunities, collaborations, or just a good
            chat about the latest in tech. Feel free to reach out{' '}
            <a href="/contact">here</a> – I'd love to hear from you!
          </p>
          {windowSize < 800 && cubeElement}
        </div>
        {windowSize > 800 && cubeElement}
      </div>
      <Loader type="pacman" />
    </>
  )
}
