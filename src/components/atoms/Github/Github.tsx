import './Github.scss'

export const Github = () => {
  return (
    <a href='https://github.com/jaenfigueroa/Periodic-table-of-HTML-elements-new' className='github' target='_blank'>
      <div className='github__box-1'>
        <i className='fa-regular fa-star'></i>
        <p>Star</p>
      </div>
      <div className='github__box-2'>
        <i className='fa-brands fa-github'></i>
      </div>
    </a>
  )
}