import { Link } from 'react-router-dom'
import Croco from '../../img/Crococ.png'
import { Header } from '../../components/index'
import './ContactUs.css'
export function ContactUs () {
  return (
    <main className='contactPage'>
      <Header />
      <div className='square' />

      <div className='rectangle'>
        <h1 className='abtTitle'>Contact us</h1>
        <h2 className='abtNum'>Cel : +57 3179486920</h2>
        <h2 className='abtMail'>wendi.go@gmail.com</h2>
      </div>

      <Link to='/' className='imgLink'><img src={Croco} alt='Crococ' className='Crocodile' /></Link>
    </main>
  )
}
