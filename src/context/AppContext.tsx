import { createContext, useState } from 'react'

type Props = {
  children: JSX.Element
}

interface AppContext {
  modalActive: boolean,
  alternateModal: (value:boolean) => void,
  modalContent: JSX.Element | null,
  updateModal: (element: JSX.Element) => void
}

export const AppContext = createContext<AppContext>({} as AppContext)

export const AppProvider = ({ children }: Props) => {
  const [modalActive, setModalActive] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null)

  const alternateModal = (value:boolean) => {
    setModalActive(value)
  }

  const updateModal = (element:JSX.Element) => {
    setModalContent(element)
  }

  const sharedData:AppContext = {
    modalActive,
    alternateModal,
    modalContent,
    updateModal,
  }

  return (
    <AppContext.Provider value={sharedData}>
      {children}
    </AppContext.Provider>
  )
}