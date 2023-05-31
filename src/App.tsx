import { Modal } from './components/atoms/Modal/Modal'
import { Home } from './pages/Home/Home'
import './styles/index.scss'

export const App = () => {

  return (
    <div className='app'>
      <Home/>
      <Modal/>
    </div>
  )
}