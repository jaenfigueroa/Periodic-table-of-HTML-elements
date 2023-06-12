import './Main.scss'

type Props = {
  children: JSX.Element
}

export const Main = ({children}: Props) => {
  return (
    <main className='main'>
      {children}
    </main>
  )
}