// import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import './style.css'
import BurgerMenuIcon from '../../img/BurgerMenu.png'

const CustomBurgerIcon = () => <img src={BurgerMenuIcon} alt='Burger Menu Icon' />

export function BurgerMenu (props) {
  const { links } = props
  return (
    <Menu right className='burger-menu' isOpen={false} noOverlay customBurgerIcon={<CustomBurgerIcon />}>
      {links()}
    </Menu>
  )
}
