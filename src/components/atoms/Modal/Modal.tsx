import './Modal.scss'
import {useState} from 'react'

type Props = {
  children:JSX.Element
}

export const Modal = ({children}:Props) => {
  const [isActive] = useState<boolean>(false)

  // const handleActive = () => setIsActive(!isActive)

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