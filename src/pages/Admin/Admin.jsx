/* eslint-disable no-undef */
import { Outlet, Link, useNavigate } from 'react-router-dom'
import whiteArrow from '../../img/backarrrow-white.png'
import whiteWendigo from '../../img/wnedigo-white.png'
import profile from '../../img/admin.jpg'
import plusIcon from '../../img/plus-icon.png'
import './Admin.css'
import { AdminForm } from '../../components'
import { useWendi } from '../../hooks/useWendi'
import { doSignOut } from '../../firebase'

export function Admin() {
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
    handleSubmit
  } = useWendi()

  const navigate = useNavigate()

  const handleLogOut = async () => {
    console.log("im outie");
    await doSignOut()
    navigate('/')
  }

  return (
    <main className='admi-page'>
      <div className='profile-cont'>

        <div className='admi-navi'>
          <Link to='/logIn' className='img-link'><img src={whiteArrow} alt='White Back Arrow' className='back-arrow' /></Link>
          <Link to='/login' className='img-link'><img src={whiteWendigo} alt='Wendigo Logo' className='wendigo-small' /></Link>
        </div>
        <div className='photo-cont'>
          <img className='profile-photo' src={profile} />
          <h1>Admin Page</h1>
          <a onClick={handleLogOut}>Log Out</a>
        </div>

      </div>
      <AdminForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        type={type}
        setType={setType}
        url={url}
        setUrl={setUrl}
        imgUrl={imgUrl}
        setImgUrl={setImgUrl}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        plusIcon={plusIcon}

      />

      <Outlet />
    </main>
  )
}
