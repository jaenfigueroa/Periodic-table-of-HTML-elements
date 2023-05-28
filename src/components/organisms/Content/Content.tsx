import { Distribution } from '../../molecules/Distribution/Distribution'
import { Title } from '../../atoms/Title/Title'
import { PeriodicTable } from '../../molecules/PeriodicTable/PeriodicTable'
import './Content.scss'

export const Content = () => {
  return (
    <div className='content'>
      <Title text={'Periodic table of HTML elements' } />
      <PeriodicTable />
      <Distribution/>
    </div>
  )
}