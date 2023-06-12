import './Deprecados.scss'
import { Element } from '../Element/Element'
import { DEPRECADOS_lIST } from './data/DeprecadosList'

export const Deprecados = () => {
  return (
    <div className='deprecados'>
      {
        DEPRECADOS_lIST.elements.map((item, index) => (
          <Element element={item} key={index}/>
        ))
      }
    </div>
  )
}