import './DefaultLayout.scss'
import { ItemHTML } from '../../../types/periodicTable'
import { Title } from '../../atoms/Title/Title'
import { Distribution } from '../../molecules/Distribution/Distribution'
import { PeriodicTable } from '../../molecules/PeriodicTable/PeriodicTable'

type Props = {
  mainContent: ItemHTML[]
  distributionContent: string[]
}

export const DefaultLayout = ({ mainContent,distributionContent }:Props) => {
  return (
    <div className='defaultLayout'>
      <Title text={'Periodic table of HTML elements'} />
      <PeriodicTable periodicContent={mainContent} />
      <Distribution distributionContent={distributionContent } />
    </div>
  )
}