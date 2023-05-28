import { createContext, useEffect, useState } from 'react'
import { getElements } from '../helpers/getElements'

type Props = {
  children: JSX.Element
}

interface ElementsContext {
  elements: Element[],
  setElements: React.Dispatch<React.SetStateAction<Element[]>>
}

type Element = {
  tag: string,
  group: string,
  url: string,
  description: string
}

export const ElementsContext = createContext<ElementsContext>({} as ElementsContext)

export const ElementProvider = ({children}:Props) => {
  const [elements, setElements] = useState<Element[]>([])

  useEffect(() => {
    getElements()
     .then(data => setElements(data))
  }, [])

  const sharedData:ElementsContext = {
    elements,
    setElements
  }

  return (
    <ElementsContext.Provider value={sharedData}>
      {children}
    </ElementsContext.Provider>
  )
}