import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Home.css';
function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Ankit</h2>
        <div className='prompt'><p>A software developer with a passion for learning and creating.</p></div>
        <LinkedInIcon />
        <EmailIcon />
        <GitHubIcon />
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Back-End</h2>
            <span>Spring Boot</span>
          </li>
          <li className='item'>
            <h2>Front-End</h2>
            <span>React</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>C++, Java, Python</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home