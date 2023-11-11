import React from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faSkype,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

import Variables from '../../config.js'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={Variables.logoImageUrl} alt="logo" />
      <img className="sub-logo" src={Variables.logoUrl} alt="bgrentell" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      {Variables.linkedinHref !== '' ? (
        <li>
          <a target="_blank" rel="noreferrer" href={Variables.linkedInHref}>
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
      ) : (
        ''
      )}
      {Variables.githubHref !== '' ? (
        <li>
          <a target="_blank" rel="noreferrer" href={Variables.githubHref}>
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      ) : (
        ''
      )}
      {Variables.youtubeHref !== '' ? (
        <li>
          <a target="_blank" rel="noreferrer" href={Variables.youtubeHref}>
            <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
          </a>
        </li>
      ) : (
        ''
      )}
      {Variables.facebookHref !== '' ? (
        <li>
          <a target="_blank" rel="noreferrer" href={Variables.facebookHref}>
            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
          </a>
        </li>
      ) : (
        ''
      )}
      {Variables.twitterHref !== '' ? (
        <li>
          <a target="_blank" rel="noreferrer" href={Variables.twitterHref}>
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
          </a>
        </li>
      ) : (
        ''
      )}
      {Variables.skypeHref !== '' ? (
        <li>
          <a target="_blank" rel="noreferrer" href={Variables.skypeHref}>
            <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
          </a>
        </li>
      ) : (
        ''
      )}
      {Variables.instagramHref !== '' ? (
        <li>
          <a target="_blank" rel="noreferrer" href={Variables.instagramHref}>
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
      ) : (
        ''
      )}
    </ul>
  </div>
)

export default Sidebar
