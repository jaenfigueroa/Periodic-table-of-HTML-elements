import './Title.scss'

type Props = {
  text: string
}

export const Title = ({text}:Props) => {
  return (
    <header className='title'>
      <p className='title__text'>{text}</p>
    </header>
  )
}