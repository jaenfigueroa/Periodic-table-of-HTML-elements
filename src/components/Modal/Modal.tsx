import './Modal.scss'
import { AppContext } from '../../context/AppContext'
import { useContext} from 'react'

export const Modal = () => {
  const {modalActive, modalContent} = useContext(AppContext)

  return (
    <>
      {
        modalActive && (
          <div className='modal'>
            {modalContent}
          </div>

        )
      }
    </>
  )
}