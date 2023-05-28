import { Element } from '../../atoms/Element/Element'
import './PeriodicTable.scss'

export const PeriodicTable = () => {

  /* CREAR LOS 200 ELEMENTOS */
  const elements = Array.from({ length: 106 }, (_, index) => {
    const text = (index + 1).toString();
    const variant = 'green'; // Variante deseada para los elementos

    return <Element key={index} text={text} variant={variant} />;
  })

  return (
    <div className='PeriodicTable'>
      {elements}
      {/* <Element text='1' variant='green'/> */}
    </div>
  )
}