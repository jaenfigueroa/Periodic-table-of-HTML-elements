import { Item } from '../../atoms/Item/Item'
import './Distribution.scss'

type Props = {
  distributionContent: string[]
}

export const Distribution = ({distributionContent}:Props) => {
  return (
    <div className='distribution'>
      {
        distributionContent.map(element => (
          <Item text={element} />
        ))
      }
    </div>
  )
}