import { Distribution } from '../../molecules/Distribution/Distribution'
import { Title } from '../../atoms/Title/Title'
import { PeriodicTable } from '../../molecules/PeriodicTable/PeriodicTable'
import './Content.scss'

export const Content = () => {
  return (
    <div>
      <Title />
      <div className='content'>
        <PeriodicTable />
      </div>
      <Distribution/>
    </div>
  )
}