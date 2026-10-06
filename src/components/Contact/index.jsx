/* eslint-disable react/no-unescaped-entities */
import Loader from 'react-loaders'
import './index.scss'
import { AnimatedLetters } from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
export function Contact() {
  const refForm = useRef()
  const [submissionMessage, setSubmissionMessage] = useState('')
  const [messageType, setMessageType] = useState('')

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
          setSubmissionMessage('Message successfully sent!')
          setMessageType('success')
          refForm.current.reset()
          setTimeout(() => {
            setSubmissionMessage('')
            setMessageType('')
          }, 5000)
        },
        () => {
          setSubmissionMessage('Message failed to send. Please try again.')
          setMessageType('error')
          setTimeout(() => {
            setSubmissionMessage('')
            setMessageType('')
          }, 5000)
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
              strArray={'Contact Me'.split('')}
              idx={15}
            />
          </h1>
          <p className="contact-description">
            I'm open to opportunities of all sizes—especially bold or
            high-impact projects. If you have a question, idea, or collaboration
            in mind, feel free to reach out using the form below. I'd love to
            connect.
          </p>

          <div className="contact-form">
            {submissionMessage && (
              <div
                role="alert"
                aria-live="polite"
                className={`form-message form-message-${messageType}`}
              >
                {submissionMessage}
              </div>
            )}
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <label htmlFor="name">Name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    aria-required="true"
                  />
                </li>
                <li className="half">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    aria-required="true"
                  />
                </li>
                <li>
                  <label htmlFor="subject">Subject *</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    aria-required="true"
                  />
                </li>
                <li>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    aria-required="true"
                  />
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="Send Message"
                  />
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
