import { Footer } from '../../atoms/Footer/Footer'
import { Header } from '../../atoms/Header/Header'
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