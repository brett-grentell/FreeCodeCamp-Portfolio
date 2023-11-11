import React, { useEffect, useState } from 'react'
import Variables from '../../config.js'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index.js'
import Logo from './Logo/index.js'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = Variables.firstNameWithMissingFirstLetter.split('')
  const jobArray = 'Web Developer'.split('')
  const hiArray = 'Hi,'.split('')
  const imArray = "I'm".split('')
  const hiArrayIdx = 12
  const imArrayIdx = hiArrayIdx + hiArray.length
  const nameArrayIdx = imArrayIdx + imArray.length
  const jobArrayIdx = nameArrayIdx + nameArray.length

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
            <AnimatedLetters
              letterClass={letterClass}
              strArray={hiArray}
              idx={hiArrayIdx}
            />{' '}
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={imArray}
              idx={imArrayIdx}
            />
            <img src={Variables.logoImageUrl} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={nameArrayIdx}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={jobArrayIdx}
            />
          </h1>
          <h2>Fullstack Developer / MERN Stack</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
