import './Modal.scss'
import { AppContext } from '../../context/AppContext'
import { useContext} from 'react'

export const Modal = () => {
  const {modalActive, modalContent,alternateModal} = useContext(AppContext)

  return (
    <>
      {
        modalActive && (
          <div className='modal' >
            <div className='modal__background' onClick={() => alternateModal(false)}></div>
            {modalContent}
          </div>

        )
      }
    </>
  )
}