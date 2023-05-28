import { ItemHTML } from '../../../types/periodicTable'
import { Element } from '../../atoms/Element/Element'
import './PeriodicTable.scss'

type Props = {
  periodicContent: ItemHTML[]
}

export const PeriodicTable = ({ periodicContent }: Props) => {
  const arrayPeriodicContent = Array.from(periodicContent)

  return (
    <div className='PeriodicTable'>
      {
        arrayPeriodicContent.map((element, index) => (
          <Element key={index} text={element.tag} variant={element.group}/>
        ))
      }
    </div>
  )
}