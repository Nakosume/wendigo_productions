/* eslint-disable no-undef */
import { Outlet, Link, useNavigate } from 'react-router-dom'
import logo from '../../img/WendigoSmall.png'
import backArrow from '../../img/backArrow1.png'
// import { Button } from '../../components/index'
import Kuti from '../../img/KUTI 1.png'
import './logStyle.css'
import { LogForm } from '../../components'
import { useWendi } from '../../hooks/useWendi'
import { doSignIn } from '../../firebase'

export function LogIn() {
  const navigate = useNavigate()

  const {
    email,
    setEmail,
    password,
    setPassword,
  } = useWendi()

  const handleLogIn = async (event) => {
    event.preventDefault()

    if (email.trim().length === 0 || password.trim().length === 0) {
      alert('Please, fill all spaces')
    } else {
      console.log("yippee");
      await doSignIn(email, password)
      navigate('/admin')
    }
    console.log(email)
    console.log(password)
  }

  return (
    <main className='logPage'>
      <div className='displayNav'>
        <div className='logNavi'>
          <Link to='/' className='imgLink'><img src={backArrow} alt='Back Arrow' className='backArrow' /></Link>
          <Link to='/' className='imgLink'><img src={logo} alt='Wendigo Logo' className='wendigoSmall' /></Link>
        </div>
        <div className='kuti-container'>
          <img src={Kuti} className='kuti-img' />
        </div>
      </div>
      <div className='logSection'>
        <LogForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleSubmit={handleLogIn} />
        {/* <Button url='/admin' text='Login' cssId='login-btn' /> */}
        {/* <button><Link to='/admin'>Log In</Link></button> */}
      </div>
      <Outlet />
    </main>
  )
}
