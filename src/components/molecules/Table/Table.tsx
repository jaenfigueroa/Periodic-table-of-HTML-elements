import { ItemHTML } from '../../../types/periodicTable'
import { Element } from '../../atoms/Element/Element'
import './Table.scss'

type Props = {
  periodicContent: ItemHTML[]
}

export const Table = ({ periodicContent }: Props) => {
  const arrayPeriodicContent = Array.from(periodicContent)

  return (
    <div className='Table'>
      {
        arrayPeriodicContent.map((element, index) => (
          <Element key={index} element={element}/>
        ))
      }
    </div>
  )
}