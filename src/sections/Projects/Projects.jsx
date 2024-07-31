import styles from './ProjectsStyles.module.css'
import auction from '../../assets/auction.png'
import AI from '../../assets/Ai.png'
import AdminPanel from '../../assets/AdminPanel.png'
import Guide from '../../assets/Guide.png'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={auction}
          link='https://bidboli-anshulrawat132gmailcoms-projects.vercel.app/'
          h3='Auction'
          p='Online Auction site'
        />
        <ProjectCard
          src={AI}
          link='https://an-open-ai.vercel.app/'
          h3='Open AI'
          p='Chat GPT look a like'
        />
        <ProjectCard
          src={AdminPanel}
          link='https://bidboli-admin-panel.vercel.app/'
          h3='Admin Panel'
          p='Admin Panel'
        />
        <ProjectCard
          src={Guide}
          link='https://uttarakhand-guide.vercel.app/'
          h3='Uttarakhand guide'
          p='A Uttarakhand Guide'
        />
      </div>
    </section>
  )
}

export default Projects
