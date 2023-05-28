import { Distribution } from '../../molecules/Distribution/Distribution'
import { Title } from '../../atoms/Title/Title'
import { PeriodicTable } from '../../molecules/PeriodicTable/PeriodicTable'
import './Main.scss'
import { ItemHTML } from '../../../types/periodicTable'

type Props = {
  mainContent: ItemHTML[]
}

export const Main = ({ mainContent }: Props) => {

  return (
    <div className='main'>
      <Title text={'Periodic table of HTML elements' } />
      <PeriodicTable periodicContent={mainContent} />
      <Distribution/>
    </div>
  )
}