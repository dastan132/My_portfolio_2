import React from 'react'

import './resume.css'

function Resume() {
  const education = [
    {
      institution: 'GRD INSTITUTE OF MANAGEMENT AND TECHNOLOGY UTTARAKHAND',
      degree:
        'Bachelor of Technology, Major in Computer Science and Engineering ',
      year: '2018 - 2021',
    },

  ]

  const experience = [
    {
      company: 'Phiof Services Pvt. Ltd.',
      role: 'Front-End Developer',
      year: 'Jan2024 - Present',
      description:
        ' Worked as part of the development team as a Front-End Developer for a prominent US-based client, ensuring seamless collaboration and project alignment. Successfully implemented new features to enhance user experience and functionality across the clients platform. Delivered three major projects on schedule, contributing to a 20% cost reduction through optimized development workflows and resource allocation. Focused on creating efficient, responsive, and scalable user interfaces tailored to client needs.',
    },
    {
      company: 'Newtown Technologies Pvt. Ltd',
      role: 'Front-End Developer',
      year: 'July2023-Dec2023',
      description:
        'Designed and maintained an advanced online auction platform for selling bankrupt factories, industries, and other properties. Developed intuitive user interfaces, enabling seamless live auction participation, property bidding, and activity management. Conducted rigorous testing to ensure platform stability and scalability, accommodating a growing user base. Collaborated with cross-functional teams to implement real-time auction updates and responsive web designs.',
    },
  ]

  const skills = [
    'JavaScript',
    'React',
    'CSS',
    'HTML5',
    'Git',
    'TypeScript',
    'BootStrap',
  ]
  return (
    <div className='resume-outter'>
      <div className='resume-profile-card'>
        <div className='resume-text-data'>
          <div className='name'>
            <h1>Resume</h1>
          </div>
          <div className='resume'>
            <div className='resume-section'>
              <h3>Education</h3>
              {education.map((edu, index) => (
                <div key={index} className='resume-item'>
                  <h4>{edu.institution}</h4>
                  <p>{edu.degree}</p>
                  <p>{edu.year}</p>
                </div>
              ))}
            </div>

            <div className='resume-section'>
              <h3>Experience</h3>
              {experience.map((exp, index) => (
                <div key={index} className='resume-item'>
                  <h4>{exp.company}</h4>
                  <p>{exp.role}</p>
                  <p>{exp.year}</p>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>

            <div className='resume-section'>
              <h3>Skills</h3>
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
