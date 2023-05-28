import './Home.scss'
import { DefaultLayout } from '../../components/templates/DefaultLayout/DefaultLayout'
import { ElementProvider } from '../../context/ElementsContext'

export const Home = () => {

  return (
    <ElementProvider>
      <DefaultLayout />
    </ElementProvider>
  )
}