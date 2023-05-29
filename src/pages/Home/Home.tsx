import './Home.scss'
import { PeriodicTable } from '../../components/organisms/PeriodicTable/PeriodicTable'
import { getElements } from '../../helpers/getElements'
import {useState, useEffect} from 'react'
import { Data } from '../../types/periodicTable'
import { Github } from '../../components/atoms/Github/Github'

export const Home = () => {
  const [data, setData] = useState<Data>()

  useEffect(() => {
    getElements()
      .then(data => {
        setData(data)
      })
  }, [])

  return (
    <section className='Home'>
      <Github/>
      {
        data && <PeriodicTable
          mainContent={data.elements}
          distributionContent={data.distribution}
        />
      }
    </section>
  )
}