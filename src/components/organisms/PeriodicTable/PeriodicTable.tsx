import './PeriodicTable.scss'
import { ItemHTML } from '../../../types/periodicTable'
import { Title } from '../../atoms/Title/Title'
import { Distribution } from '../../molecules/Distribution/Distribution'
import { Table } from '../../molecules/Table/Table'

type Props = {
  mainContent: ItemHTML[]
  distributionContent: string[]
}

export const PeriodicTable = ({ mainContent,distributionContent }:Props) => {
  return (
    <div className='PeriodicTable'>
      <Title text={'Tabla periodica de elementos HTML'} />
      <Table periodicContent={mainContent} />
      <Distribution distributionContent={distributionContent } />
    </div>
  )
}