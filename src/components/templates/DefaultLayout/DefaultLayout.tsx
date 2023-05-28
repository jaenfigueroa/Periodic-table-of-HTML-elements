import { Footer } from '../../molecules/Footer/Footer'
import { Header } from '../../molecules/Header/Header'
import { Content } from '../../organisms/Content/Content'
import './DefaultLayout.scss'

export const DefaultLayout = () => {
  return (
    <div>
      <Header/>
      <Content />
      <Footer/>
    </div>
  )
}