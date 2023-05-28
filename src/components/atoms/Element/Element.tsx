import './style.scss'

type Props = {
  variant: string
  text: string
}

export const Element = ({variant, text}: Props) => {
  return (
    <div className={`element ${variant}`}>
      {text}
    </div>
  )
}