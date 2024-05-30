import './Projects.css'
import { Outlet, Link } from 'react-router-dom'
import { Header, ProjectCard } from '../../components/index'
import Select from 'react-select'
import { useWendi } from '../../hooks/useWendi'

export function Projects () {
  const {
    selectFilter,
    setSelectFilter,
    groupedOptions,
    filterProjects
  } = useWendi()

  return (
    <main>
      <Header />
      <h1 className='projects-title'>These are some projects we've done throughout the years!</h1>

      <Select
        className='filters'
        options={groupedOptions}
        isClearable
        isMulti
        placeholder='Filters'
        onChange={(selectOption) => setSelectFilter(selectOption)}
        label={selectFilter}
      />

      <div className='card-container'>
        {
          filterProjects.map((p) => (
            <Link className='p-card' to={`/projects/${p.id}`} key={p.id}>
              <ProjectCard project={p} />
            </Link>
          ))
        }
      </div>

      <Outlet />
    </main>
  )
}
