import './style.scss'

type Props = {
  variant: string
  text: string
}

export const Item = ({variant, text}: Props) => {
  return (
    <div className='item'>
      <div className={`item__color ${variant}`}/>
      {text}
    </div>
  )
}