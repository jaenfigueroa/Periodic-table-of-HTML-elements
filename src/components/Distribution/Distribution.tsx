import { Item } from '../Item/Item'
import './Distribution.scss'

type Props = {
  distributionContent: string[]
}

export const Distribution = ({distributionContent}:Props) => {
  return (
    <div className='distribution'>
      {
        distributionContent.map((element, index) => (
          <div key={index} className={`distribution__item${index + 1}`}>
            <Item text={element}/>
          </div>
        ))
      }
    </div>
  )
}