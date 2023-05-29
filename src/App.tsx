import { Modal } from './components/atoms/Modal/Modal'
import { Form } from './components/molecules/Form/Form'
import { Home } from './pages/Home/Home'
import './styles/index.scss'

export const App = () => {
  return (
    <div className='app'>
      <Home/>
      <Modal>
        <Form/>
      </Modal>
    </div>
  )
}