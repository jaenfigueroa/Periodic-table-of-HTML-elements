import './Button.scss'

type Props = {
  children: string | JSX.Element
  onClick?: () => void
}

export const Button = ({children, onClick}: Props) => {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  )
}