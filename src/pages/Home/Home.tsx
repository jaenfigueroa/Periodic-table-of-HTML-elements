import './Home.scss'
import { DefaultLayout } from '../../components/templates/DefaultLayout/DefaultLayout'
import { getElements } from '../../helpers/getElements'
import {useState, useEffect} from 'react'
import { Data } from '../../types/periodicTable'

export const Home = () => {
  const [data, setData] = useState<Data>()

  useEffect(() => {
    getElements()
      .then(data => {
        setData(data)
      })
  }, [])

  return (
    <>
      {
        data && <DefaultLayout
          mainContent={data.elements}
        />
      }
    </>
  )
}