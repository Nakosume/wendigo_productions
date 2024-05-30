import { UserCheck } from '../Usercheck/Usercheck'

export function AdminForm (props) {
  const {
    title,
    setTitle,
    description,
    setDescription,
    type,
    setType,
    url,
    setUrl,
    imgUrl,
    setImgUrl,
    handleChange,
    handleSubmit,
    plusIcon
  } = props

  return (
    <form
      className='newproject-container'
      onSubmit={handleSubmit}
    >

      <div className='add-project'>
        <h1 className='logTitle'>Add New Project</h1>
        <button><img className='plus-icon' src={plusIcon} /></button>
      </div>
      <div className='title-cont'>
        <p>Project title</p>
        <input
          className='text-input'
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Title'
        />
      </div>
      <div className='description-cont'>
        <p>Description</p>
        <input
          className='text-input'
          type='text'
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder='...'
        />
      </div>
      <div className='type-cont'>
        <p>Project Type</p>
        <input
          className='text-input'
          type='text'
          value={type}
          onChange={e => setType(e.target.value)}
          placeholder='none'
        />
      </div>
      <div className='url-cont'>
        <p>Url</p>
        <input
          className='text-input'
          type='text'
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder='https:'
        />
      </div>
      <div className='img-url-cont'>
        <p>Image Url</p>
        <input
          className='text-input'
          type='text'
          value={imgUrl}
          onChange={e => setImgUrl(e.target.value)}
          placeholder='https:'
        />
      </div>
      <h2>Members that worked on this project:</h2>
      <div className='members-project'>
        <UserCheck name='María José' handleChange={handleChange} />
        <UserCheck name='Nicolás' handleChange={handleChange} />
        <UserCheck name='Sebastian' handleChange={handleChange} />
        <UserCheck name='Eduardo' handleChange={handleChange} />
      </div>
      <button type='submit' id='submit-btn'>Submit</button>
    </form>
  )
}
