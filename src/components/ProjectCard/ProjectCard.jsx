export function ProjectCard (props) {
  const { project } = props
  return (
    <div key={project.id}>
      {
        project.img.trim().length === 0
          ? <img src='https://softsmarttech.co.za/wp-content/uploads/2018/06/image-not-found-1038x576.jpg' />
          : <img src={project.img} />
    }
      <div className='info-cont'>
        <b>{project.title}</b>
        <b>{project.type}</b>
        <b>{project.author}</b>
      </div>
    </div>
  )
}
