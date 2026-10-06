/* eslint-disable react/prop-types */
import './index.scss'
export function AnimatedLetters({ letterClass, strArray, idx }) {
  const fullText = strArray.join('')
  return (
    <span aria-label={fullText}>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} _${i + idx}`}
          aria-hidden="true"
        >
          {char}
        </span>
      ))}
    </span>
  )
}
