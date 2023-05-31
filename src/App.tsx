import {useContext} from 'react'
import { Modal } from './components/atoms/Modal/Modal'
import { Info } from './components/molecules/Info/Info'
import { AppContext, AppProvider } from './context/AppContext'
import { Home } from './pages/Home/Home'
import './styles/index.scss'

export const App = () => {
  const {modalActive} = useContext(AppContext)

  return (
    <div className='app'>
      <Home/>
      {
        modalActive && (
          <Modal>
            <Info
              title='span'
              description='Es un contenedor en línea. Sirve para aplicar estilo al texto o agrupar elementos en línea.' />
          </Modal>
        )
      }
    </div>
  )
}