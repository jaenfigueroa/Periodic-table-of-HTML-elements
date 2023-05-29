import { ItemHTML } from '../../../types/periodicTable'
import './Element.scss'
import classnames from 'classnames'

interface Props {
  element: ItemHTML
}

export const Element = ({ element }: Props) => {
  const { tag, group, url,id } = element

  const buttonClasses = classnames('element', {
    'element--green': group === 'Root element',
    'element--blue': group === 'Metadata and scripting',
    'element--violet': group === 'Embedding content',
    'element--yellow': group === 'Text-level semantics',
    'element--orange': group === 'Grouping content',
    'element--green2': group === 'Forms',
    'element--blue2': group === 'Document sections',
    'element--orange2': group === 'Tabular data',
    'element--gray': group === 'Interactive elements',
  })

  return (
    <div className={buttonClasses}>
      <a href={url} target='_blank'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </a>
      <p>{tag}</p>
      <span>{group}</span>
      <h3>{id}</h3>
    </div>
  )
}
