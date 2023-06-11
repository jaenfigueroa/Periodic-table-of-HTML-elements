import { Github } from '../Github/Github'
import './Header.scss'

export const Header = () => {
  return (
    <header className='header'>
      <p className='header__logo'>Tabla periodica de elementos HTML</p>
      <Github/>
    </header>
  )
}