import { AppContext } from '../../../context/AppContext'
import { ItemHTML } from '../../../types/periodicTable'
import './Element.scss'
import classnames from 'classnames'
import {useContext} from 'react'

interface Props {
  element: ItemHTML
}

export const Element = ({ element }: Props) => {
  const { tag, group, url } = element
  const {alternateModal} = useContext(AppContext)

  const buttonClasses = classnames('element', {
    'element--green': group === 'Elemento root',
    'element--blue': group === 'Elems. de estructura',
    'element--violet': group === 'Elems. multimedia',
    'element--orange': group === 'Elems. de lista',
    'element--orange4': group === 'Elems. de lista de definiciones',
    'element--green2': group === 'Elems. de formulario',
    'element--blue2': group === 'Elems. para secciones',
    'element--orange2': group === 'Elems. de tabla',
    'element--gray': group === 'Elems. de interacción',
    'element--white': group === 'Elems. de contenido incrustado',
    'element--yellow': group === 'Elems. de texto',
    'element--green3': group === 'Elems. de enlace',
    'element--skyblue': group === 'Elems. de enfasis',
    'element--morado': group === 'Elems. de estilo',
    'element--orange3': group === 'Elems. de codigo y variable',
    'element--pink': group === 'Elems. para anotaciones ruby',
    'element--yellow2': group === 'Elems. de direccion',
    'element--green4': group === 'Elems. de salto de linea',
    'element--blue3': group === 'Elems. para MathML',
  })

  return (
    <div className={buttonClasses} onClick={alternateModal}>
      <a href={url} target='_blank'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </a>
      <p>{tag}</p>
      <span>{group}</span>
    </div>
  )
}
