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
            Hey there! I'm Steven—a UI-focused software engineer passionate
            about building clean, intuitive digital experiences. Currently, I
            work as a Implementations Engineer at Rebuy, where I partner with
            top e-commerce brands to bring their storefront visions to life.
          </p>
          <h2>What I Do</h2>
          <p>
            I specialize in building custom shopping experiences for e-commerce
            brands using modern frontend tools. As a Implementations Engineer at
            Rebuy, I create tailored shopping carts and product recommendation
            widgets that seamlessly blend into each merchant's storefront and
            elevate their customer experience.
          </p>
          <p>
            Rebuy is a personalization platform that uses AI to recommend
            products, boost conversion rates, and increase average order value.
            My role involves making those smart tools feel native to each
            brand's identity through thoughtful UI and responsive design—often
            diagnosing tricky browser-runtime and third-party integration issues
            along the way, like third-party scripts that quietly monkey-patch
            native browser APIs.
          </p>
          <ul>
            <li>
              Frontend: React, Vue.js, JavaScript, Tailwind CSS, HTML, CSS
            </li>
            <li>Tooling: Vite, Git, GitHub, Figma</li>
            <li>
              Platform Experience: Shopify + Rebuy's AI-powered personalization
              tools
            </li>
            <li>
              Back-end Collaboration: Integrating APIs, debugging data-driven
              logic, and working with engineers on scalable UI patterns
            </li>
          </ul>
          <h2>My Experience</h2>
          <p>
            At Rebuy, I help high-performing Shopify merchants Implementations
            personalized onsite experiences by building custom Smart Carts,
            upsell widgets, and product recommendation modules—using React and
            Vue depending on the merchant's stack. These features are powered by
            Rebuy's AI, but my job is to make them look and feel like a natural
            extension of the merchant's brand.
          </p>
          <ul>
            <li>
              Translate merchant branding into custom UI components that enhance
              conversion and retention, contributing to a 15% average lift in
              order value across merchant storefronts
            </li>
            <li>
              Built and maintain an internal tool that automates Shopping Cart
              V1→V2 migrations, reconciling structural differences and custom
              Vue template changes
            </li>
            <li>
              Work cross-functionally with customer success, product, and
              engineering teams to deliver scalable frontend solutions
            </li>
            <li>
              Contribute to internal tooling, reusable components, and best
              practices that inform future product development
            </li>
          </ul>
          <h2>Why I Love What I Do</h2>
          <p>
            I get a kick out of making complex systems feel simple. Whether it's
            solving styling edge cases, improving cart experiences, or finding
            the balance between customization and scalability, I love the blend
            of design, code, and impact.
          </p>
          <h2>Beyond the Code</h2>
          <p>
            When I'm not working, I'm training for triathlons, playing disc
            golf, working on a side project, or exploring trails in local parks.
            I believe that movement fuels creativity, and stepping away from the
            screen can lead to breakthroughs on it.
          </p>
          <h2>Let's Connect!</h2>
          <p>
            Whether you're into headless commerce, frontend performance, or just
            want to geek out about UI—you can reach me{' '}
            <a href="/contact">here</a>. I'd love to connect!
          </p>

          {windowSize < 800 && cubeElement}
        </div>
        {windowSize > 800 && cubeElement}
      </div>

      <Loader type="pacman" />
    </>
  )
}
