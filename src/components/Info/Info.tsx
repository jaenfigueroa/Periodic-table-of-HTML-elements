import './Info.scss'
import {useContext} from 'react'
import { Editor } from '../Editor/Editor'
import { AppContext } from '../../context/AppContext'
import { ItemHTML } from '../../types/periodicTable'
import ReactMarkdown from 'react-markdown'
import { Button } from '../Button/Button'

type Props = {
  element: ItemHTML
}

export const Info = ({ element }: Props) => {
  const { alternateModal } = useContext(AppContext)

  return (
    <div className='info'>

      <header className='info__header'>
        {/* VER LA DOCUMENTACION */}
        <Button>
          <a href={element.url} target='_blank'>Documentacion MDN</a>
        </Button>
        {/* TITULO */}
        <h2 className='info__title'>&lt;{element.tag}&gt;</h2>

        {/* BOTON CERRAR */}
        <button className='info__button-close' >
          <i className='fa-solid fa-circle-xmark'onClick={() => alternateModal(false)}></i>
        </button>
      </header>

      {/* DESCRIPCION */}
      {
        element.description && (
          <div className='info__description'>
            <ReactMarkdown>{element.description}</ReactMarkdown>
          </div>
        )
      }

      {/* EDITOR INTERGRADO HTML CSS JS */}
      <Editor
        htmlDefault={element.codeHTML || ''}
        cssDefault={element.codeCSS || ''}
        jsDefault={element.codeJS || ''}
      />
    </div>
  )
}