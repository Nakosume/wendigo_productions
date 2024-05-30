import { Link } from 'react-router-dom'
import './style.css'

export function Button ({ url, text, cssId = '' }) {
  return (
    <button className='button-component' id={cssId}>
      <Link className='link-component' id={cssId} to={url}>{text}</Link>
    </button>
  )
}
