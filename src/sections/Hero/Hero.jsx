import styles from './HeroStyles.module.css'
import heroImg from '../../assets/Design uten navn.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'

import InstaDark from '../../assets/InstaDark.svg'
import InstaLight from '../../assets/InstaLight.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
  const themeContext = useTheme()

  if (!themeContext) {
    return <div>Error: Theme context is not available.</div>
  }

  const { theme, toggleTheme } = themeContext

  const themeIcon = theme === 'light' ? sun : moon
  const twitterIcon = theme === 'light' ? InstaDark : InstaLight
  const githubIcon = theme === 'light' ? githubLight : githubDark
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={heroImg} className={styles.hero} alt='' />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='Color mode icon'
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Anshul
          <br />
          Rawat
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a
            href='https://www.instagram.com/anshulrawat132/?hl=en'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={twitterIcon} alt='Twitter icon' />
          </a>
          <a
            href='https://github.com/dastan132'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={githubIcon} alt='Github icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/anshul-rawat-2b8b08293/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={linkedinIcon} alt='Linkedin icon' />
          </a>
        </span>
        <p className="text">
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero
