export function UserCheck (props) {
  const { name, handleChange } = props

  return (
    <div className='user-tag'>
      <input
        type='checkbox'
        value={name}
        onChange={handleChange}
      />
      <h2>{name}</h2>
    </div>
  )
}
