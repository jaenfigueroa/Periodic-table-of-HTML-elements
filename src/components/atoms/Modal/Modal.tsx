import './Modal.scss'
import {useState} from 'react'

type Props = {
  children:JSX.Element
}

export const Modal = ({children}:Props) => {
  const [isActive] = useState<boolean>(true)

  return (
    <>
      {
        isActive && (
          <div className='modal'>
            {children}
          </div>
        )
      }
    </>
  )
}