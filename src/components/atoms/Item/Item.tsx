import './Item.scss'
import classnames from 'classnames'

type Props = {
  text: string
}

export const Item = ({ text}: Props) => {
  const itemClasses = classnames('item__color', {
    'item__color--green': text ===  'Root element',
    'item__color--blue': text ===  'Metadata and scripting',
    'item__color--violet': text ===  'Embedding content',
    'item__color--yellow': text ===  'Text-level semantics',
    'item__color--orange': text ===  'Grouping content',
    'item__color--green2': text ===  'Forms',
    'item__color--blue2': text ===  'Document sections',
    'item__color--orange2': text ===  'Tabular data',
    'item__color--gray': text ===  'Interactive elements',
  })

  return (
    <div className='item'>
      <div className={itemClasses}/>
      <p className='item__name'>{text}</p>
    </div>
  )
}