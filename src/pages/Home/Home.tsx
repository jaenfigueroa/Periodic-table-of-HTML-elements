import './Home.scss'
import { DefaultLayout } from '../../components/templates/DefaultLayout/DefaultLayout'
import { getElements } from '../../helpers/getElements'
import {useState, useEffect} from 'react'
import { ItemHTML } from '../../types/periodicTable'

export const Home = () => {
  const [elements, setElements] = useState<ItemHTML[]>([])

  useEffect(() => {
    getElements()
      .then(data => setElements(data))
  }, [])

  return (
    <DefaultLayout mainContent={elements}/>
  )
}