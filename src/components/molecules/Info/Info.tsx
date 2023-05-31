import './Info.scss'
import {useContext} from 'react'
import { Editor } from '../Editor/Editor'
import { AppContext } from '../../../context/AppContext'

type Props = {
  title: string
  description: string
}

export const Info = ({ title, description }: Props) => {
  const {alternateModal} = useContext(AppContext)

  return (
    <div className='info'>
      <header>
        <button className='info__button-close' onClick={alternateModal}>
          <i className='fa-solid fa-circle-xmark'></i>
        </button>
        <h2 className='info__title'>{title}</h2>
        <p className='info__description'>{ description}</p>
      </header>
      <Editor
        htmlDefault='<h1>jaen</h1>
<h2>jaen</h2>
<h3>jaen</h3>
<h4>jaen</h4>
<h5>jaen</h5>
<h6>jaen</h6>'
        cssDefault='h1{color:blue}'
      />
    </div>
  )
}