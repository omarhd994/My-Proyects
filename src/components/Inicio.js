import React from 'react'
import { Link } from "react-router-dom";


export const Inicio = () => {
  return (
    <div className='home'>

      <h1>Hello, my name is <strong>Omar Haddia</strong>, I'm a <strong>FullStack Developer</strong> and I currently live in Barcelona,
        I am open to new opportunities as a FullStack, Frond-end & Back-end developer for any kind 
        of project or mission.
      </h1>

      <h2>I am able to create projects from scratch, participate in the entire proces, 
        I identify and fix bugs, ensure testing prosesses. I am a good team-worker and have 
        good communications skills. I am polyglot as well and I am fluent in French, Spanish, English and Dutch.
        If you are interested in my profile <Link to='/Contacto'className={({isActive}) => isActive ? "active" : ""}>contact me.</Link>
      </h2>
      <section className='last projects:'>
        <h2 className='heading'>Here are some of my projects</h2>
        <p>These are some projects that I created as FullStack Developer</p>

    </section>
    </div>
  )
}
