import { VariantGroup } from '../../../types/periodicTable'
import './Element.scss'
import classnames from 'classnames'

interface Props {
  variant: VariantGroup
  text: string
}

export const Element = ({ variant, text }:Props) => {
  const buttonClasses = classnames('element', {
    'element--green': variant ===  'Root element',
    'element--blue': variant ===  'Metadata and scripting',
    'element--violet': variant ===  'Embedding content',
    'element--yellow': variant ===  'Text-level semantics',
    'element--orange': variant ===  'Grouping content',
    'element--green2': variant ===  'Forms',
    'element--blue2': variant ===  'Document sections',
    'element--orange2': variant ===  'Tabular data',
    'element--gray': variant ===  'Interactive elements',
  })

  return (
    <div className={buttonClasses}>
      <p>{text}</p>
    </div>
  )
}
