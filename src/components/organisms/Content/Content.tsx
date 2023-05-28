import { Distribution } from '../../molecules/Distribution/Distribution'
import { Title } from '../../atoms/Title/Title'
import { PeriodicTable } from '../../molecules/PeriodicTable/PeriodicTable'
import './Content.scss'

export const Content = () => {
  return (
    <div>
      <Title text={'Periodic table of HTML elements' } />
      <div className='content'>
        <PeriodicTable />
      </div>
      <Distribution/>
    </div>
  )
}