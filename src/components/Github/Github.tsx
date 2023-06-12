import './Github.scss'

export const Github = () => {
  return (
    <div className='github'>

      <a className='github__box github__box--animate' href='https://github.com/jaenfigueroa/Periodic-table-of-HTML-elements-new' target='_blank' >
        <i className='fa-regular fa-star'></i>
        <p>Star</p>
      </a>

      <a className='github__box github__box--animate' href='https://github.com/jaenfigueroa/Periodic-table-of-HTML-elements-new/fork' target='_blank'>
        <i className='fa-solid fa-code-branch'></i>
        <p>Fork</p>
      </a>

      <a className='github__box' href='https://github.com/jaenfigueroa' target='_blank'>
        <i className='fa-brands fa-github'></i>
        <p>jaenfigueroa</p>
      </a>

    </div>
  )
}