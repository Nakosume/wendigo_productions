import { Outlet, Link, useParams } from 'react-router-dom'
import { Header, Button } from '../../components'
import './ProjectDetails.css'
import { useWendi } from '../../hooks/useWendi'
import backArrow from '../../img/backarrrow-white.png'

export function ProjectDetails () {
  const {
    projects,
    loader
  } = useWendi()

  const { id } = useParams()
  const project = projects.find((p) => String(p.id) === id)
  console.log(project);

  return (
    <main className='detail-main'>
      <Header />
      <Link to='/projects' className='back-link'><img src={backArrow} alt='Back Arrow' className='backArrow' /></Link>
      {loader
        ? (
          <div>loading</div>
          )
        : (

          <div className='project-display'>
            <div className='img-display'>
              {
                project.img.trim().length === 0
                  ? <img className='proj-img' src='https://softsmarttech.co.za/wp-content/uploads/2018/06/image-not-found-1038x576.jpg' />
                  : <img className='proj-img' src={project.img} />
                }
            </div>
            {console.log(project.id)}

            <div className='detail-display'>
              <h1 className='project-title'>{project.title}</h1>
              <h3>{project.type}</h3>
              <h3>{project.author}</h3>
              <p>{project.description}</p>
              <Button url={project.url} text="Visit Project" cssId='login-btn'/>
            </div>
          </div>
          )}

      <Outlet />
    </main>
  )
}
