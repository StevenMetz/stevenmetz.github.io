/* eslint-disable react/no-unescaped-entities */
import Loader from 'react-loaders'
import './index.scss'
import { AnimatedLetters } from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
export function Contact() {
  const refForm = useRef()
  const sendEmail = (event) => {
    event.preventDefault()

    emailjs
      .sendForm(
        'default_service',
        'template_a7kv4dc',
        refForm.current,
        'g8SPOAXBmEcPAciCF'
      )
      .then(
        () => {
          alert('Message successfully sent')
          window.location.reload(false)
        },
        () => {
          alert('Message failed to send')
        }
      )
  }
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in any opportunity small to large - especially
            ambitous or large projects. If you have any questions or requests
            don't hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input type="text" placeholder="Subject" name="subject" />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    type="text"
                    required
                  />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
