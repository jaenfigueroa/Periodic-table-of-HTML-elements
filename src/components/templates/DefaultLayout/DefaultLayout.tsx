import './DefaultLayout.scss'
import { Main } from '../../organisms/Main/Main'
import { ItemHTML } from '../../../types/periodicTable'

type Props = {
  mainContent: ItemHTML[]
}

export const DefaultLayout = ({mainContent}:Props) => {

  return (
    <div>
      <Main mainContent={mainContent} />
    </div>
  )
}