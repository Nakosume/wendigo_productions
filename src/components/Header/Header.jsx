import { Outlet, Link, NavLink } from 'react-router-dom'
import { Button, BurgerMenu } from '../index'
import { pagNav } from '../../const/navInfo'
import { burgerNav } from '../../const/burgerInfo'

import './style.css'

import desktopLogo from '../../img/WendigoSmall.png'
import mobileLogo from '../../img/WeindigoBig.png'

// ? Check difference between Link nd NavLink
//! Check UseNavigate for the LogIn Page
//! send states using navigate or link/navlink
//! path='/projects/:name' so that the params name can be used
// ? Check private route to see if we can secure the Admin page when logged

const NavLister = () => {
  return (
    pagNav.map((list) => (
      <li key={list.id}>
        <NavLink
          to={list.url}
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''}
        >
          {list.text}
        </NavLink>
      </li>
    ))
  )
}

const BurgerLister = () => {
  return (
    burgerNav.map((list) => (
      <li key={list.id}>
        <NavLink
          to={list.url}
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''}
        >
          {list.text}
        </NavLink>
      </li>
    ))
  )
}

export function Header () {
  return (
    <>
      <header id='nav-bar'>
        <Link to='/wendigo_productions/' className='img-link'><img src={mobileLogo} alt='Wendigo Logo' className='wendigo-mobile' /></Link>
        <Link to='/wendigo_productions/' className='img-link'><img src={desktopLogo} alt='Wendigo Logo' className='wendigo-desktop' /></Link>
        <ul>
          <NavLister />
        </ul>
        <Button url='/logIn' text='Login' cssId='hide-mobile' />
        <BurgerMenu links={BurgerLister} />
      </header>
      <Outlet />
    </>
  )
}
