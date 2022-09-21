import React from 'react'
import './about.css'
import ME from '../../assets/ABOUTME.png'
import {TbChecklist} from 'react-icons/tb'
import {MdOutlineSchool} from 'react-icons/md'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5> Here's a little</h5>
      <h2>About Me</h2> 

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbChecklist className='about__icon' />
              <h5>Experience</h5>
              <small>1 Year Learning</small>
            </article>

            <article className="about__card">
              <MdOutlineSchool className='about__icon' />
              <h5>Education</h5>
              <small>Freshman in High School</small>
            </article>

            <article className="about__card">
              <AiOutlineFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto temporibus cum quis dolorem nemo vel repellat ex, modi, ipsa quidem distinctio libero odit quos, earum incidunt ea mollitia iusto?
            </p>

            <a href="#contact" className="btn btn-primary">Contact me</a>
        </div>
      </div>
    </section>
  )
}

export default About