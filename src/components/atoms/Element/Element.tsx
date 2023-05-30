import { ItemHTML } from '../../../types/periodicTable'
import './Element.scss'
import classnames from 'classnames'

interface Props {
  element: ItemHTML
}

export const Element = ({ element }: Props) => {
  const { tag, group, url } = element

  const buttonClasses = classnames('element', {
    'element--green': group === 'Root element',
    'element--blue': group === 'Elementos de estructura',
    'element--violet': group === 'Elementos multimedia',
    // 'element--yellow': group === 'Text-level semantics',
    'element--orange': group === 'Elementos de lista',
    'element--green2': group === 'Elementos de formulario',
    'element--blue2': group === 'Document sections',
    'element--orange2': group === 'Elementos de tabla',
    'element--gray': group === 'Elementos de interacción',

    'element--white': group === 'Contenido incrustado',

    'element--yellow': group === 'Elementos de texto',
    'element--green3': group === 'Elementos de enlace',
    'element--skyblue': group === 'Elementos de enfasis',
    'element--morado': group === 'Estilo y presentacion',
    'element--orange3': group === 'Codigo y variable',
    'element--pink': group === 'Elementos de anotaciones',
    'element--yellow2': group === 'Elementos de direccion',
    'element--green4': group === 'Elementos de salto de linea',
  })

  return (
    <div className={buttonClasses}>
      <a href={url} target='_blank'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </a>
      <p>{tag}</p>
      <span>{group}</span>
    </div>
  )
}
