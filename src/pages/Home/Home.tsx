import './Home.scss'
import { PeriodicTable } from '../../components/organisms/PeriodicTable/PeriodicTable'
import { Github } from '../../components/atoms/Github/Github'
import { elementsData2 } from '../../data/elementsData2'

export const Home = () => {
  return (
    <section className='Home'>
      <Github/>
      {
        elementsData2 && <PeriodicTable
          mainContent={elementsData2.elements}
          distributionContent={elementsData2.distribution}
        />
      }
    </section>
  )
}