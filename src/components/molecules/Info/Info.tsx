import './Info.scss'
import {useContext} from 'react'
import { Editor } from '../Editor/Editor'
import { AppContext } from '../../../context/AppContext'
import { ItemHTML } from '../../../types/periodicTable'
import ReactMarkdown from 'react-markdown'

type Props = {
  element: ItemHTML
}

export const Info = ({ element }: Props) => {
  const { alternateModal } = useContext(AppContext)

  return (
    <div className='info'>
      <header>
        <button className='info__button-close' >
          <i className='fa-solid fa-circle-xmark'onClick={() => alternateModal(false)}></i>
        </button>
        <h2 className='info__title'>&lt;{element.tag}&gt;</h2>
        {
          element.description && (
            <div className='aver'>
              <ReactMarkdown>{element.description}</ReactMarkdown>
            </div>
          )
        }
      </header>
      <Editor
        htmlDefault={element.codeHTML}
        cssDefault={element.codeCSS}
      />
    </div>
  )
}