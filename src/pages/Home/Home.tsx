import './Home.scss'
import { ELEMENTS_ES } from '../../data/elements_es'
import { Main } from '../../components/Main/Main'
import { Header } from '../../components/Header/Header'
import { Table } from '../../components/Table/Table'
import { Distribution } from '../../components/Distribution/Distribution'
import { Deprecados } from '../../components/Deprecados/Deprecados'

export const Home = () => {
  return (
    <section className='Home'>
      <Header/>
      <Main>
        <div className='table-container'>
          <Table periodicContent={ELEMENTS_ES.elements} />
          <details>
            <summary>Ver elementos obsoletos o deprecados</summary>
            <div className='container-deprecados'>
              <Deprecados />
            </div>
          </details>
          <Distribution distributionContent={ELEMENTS_ES.distribution} />
        </div>
      </Main>
    </section>
  )
}