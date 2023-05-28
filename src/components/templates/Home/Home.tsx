import { Footer } from '../../atoms/Footer/Footer'
import { Header } from '../../atoms/Header/Header'
import { Content } from '../../organisms/Content/Content'
import './Home.scss'

export const Home = () => {
  return (
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}