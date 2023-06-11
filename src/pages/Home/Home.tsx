import './Home.scss'
import { elementsData2 } from '../../data/elementsData2'
import { Main } from '../../components/organisms/Main/Main'
import { Header } from '../../components/atoms/Header/Header'
import { Table } from '../../components/molecules/Table/Table'
import { Distribution } from '../../components/molecules/Distribution/Distribution'
import { Deprecados } from '../../components/molecules/Deprecados/Deprecados'

export const Home = () => {
  return (
    <section className='Home'>
      <Header/>
      <Main>
        <div className='table-container'>
          <Table periodicContent={elementsData2.elements} />
          <details>
            <summary>Ver elementos obsoletos o deprecados</summary>
            <div className='container-deprecados'>
              <Deprecados />
            </div>
          </details>
          <Distribution distributionContent={elementsData2.distribution} />
        </div>
      </Main>
    </section>
  )
}