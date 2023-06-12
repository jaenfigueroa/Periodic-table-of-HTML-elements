import './Item.scss'
import classnames from 'classnames'

type Props = {
  text: string
}

export const Item = ({ text}: Props) => {
  const itemClasses = classnames('item__color', {
    'item__color--green': text === 'Elemento root',
    'item__color--blue': text === 'Elems. de estructura',
    'item__color--violet': text === 'Elems. multimedia',
    'item__color--orange': text === 'Elems. de lista',
    'item__color--orange4': text === 'Elems. de lista de definiciones',
    'item__color--green2': text === 'Elems. de formulario',
    'item__color--blue2': text === 'Elems. para secciones',
    'item__color--orange2': text === 'Elems. de tabla',
    'item__color--gray': text === 'Elems. de interacción',
    'item__color--white': text === 'Elems. de contenido incrustado',
    'item__color--yellow': text === 'Elems. de texto',
    'item__color--green3': text === 'Elems. de enlace',
    'item__color--skyblue': text === 'Elems. de enfasis',
    'item__color--morado': text === 'Elems. de estilo',
    'item__color--orange3': text === 'Elems. de codigo y variable',
    'item__color--pink': text === 'Elems. para anotaciones ruby',
    'item__color--yellow2': text === 'Elems. de direccion',
    'item__color--green4': text === 'Elems. de salto de linea',
    'item__color--blue3': text === 'Elems. para MathML',
    'item__color--gray-dark': text === 'Elems. deprecados',
  })

  return (
    <div className='item'>
      <div className={itemClasses}/>
      <p className='item__name'>{text}</p>
    </div>
  )
}