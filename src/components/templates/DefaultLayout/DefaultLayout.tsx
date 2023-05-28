import './DefaultLayout.scss'
// import { Footer } from '../../organisms/Footer/Footer'
// import { Header } from '../../organisms/Header/Header'
import { Main } from '../../organisms/Main/Main'
import { ItemHTML } from '../../../types/periodicTable'

type Props = {
  mainContent: ItemHTML[]
}

export const DefaultLayout = ({mainContent}:Props) => {

  return (
    <div>
      {/* <Header/> */}
      <Main mainContent={mainContent} />
      {/* <Footer/> */}
    </div>
  )
}