import { ItemHTML } from '../../../types/periodicTable'
import { Element } from '../../atoms/Element/Element'
import './PeriodicTable.scss'

type Props = {
  periodicContent: ItemHTML[]
}

export const PeriodicTable = ({periodicContent}:Props) => {
  return (
    <div className='PeriodicTable'>
      {
        periodicContent.map((element, index) => (
          <Element key={index} text={element.tag} variant={element.group}/>
        ))
      }
    </div>
  )
}