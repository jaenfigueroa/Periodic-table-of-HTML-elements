import { PeriodicTable } from '../../molecules/PeriodicTable/PeriodicTable'
import './Main.scss'
import { ItemHTML } from '../../../types/periodicTable'

type Props = {
  mainContent: ItemHTML[]
}

export const Main = ({ mainContent }: Props) => {

  return (
    <div className='main'>
    </div>
  )
}