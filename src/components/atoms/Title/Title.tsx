import './Title.scss'

type Props = {
  text: string
}

export const Title = ({text}:Props) => {
  return (
    <header className='Title'>
      <p>{text}</p>
    </header>
  )
}