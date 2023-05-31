import './Info.scss'
import {useContext} from 'react'
import { Editor } from '../Editor/Editor'
import { AppContext } from '../../../context/AppContext'
import { ItemHTML } from '../../../types/periodicTable'

type Props = {
  element: ItemHTML
}

export const Info = ({ element }: Props) => {
  const {alternateModal} = useContext(AppContext)

  return (
    <div className='info'>
      <header>
        <button className='info__button-close' >
          <i className='fa-solid fa-circle-xmark'onClick={() => alternateModal(false)}></i>
        </button>
        <h2 className='info__title'>{element.tag}</h2>
        <p className='info__description'>{ element.description}</p>
      </header>
      <Editor
        htmlDefault={element.codeHTML}
        cssDefault={element.codeCSS}
      />
    </div>
  )
}