import { createContext, useState } from 'react'

type Props = {
  children: JSX.Element
}

interface AppContext {
  modalActive: boolean,
  alternateModal: ()=> void
}

export const AppContext = createContext<AppContext>({} as AppContext)

export const AppProvider = ({ children }: Props) => {
  const [modalActive, setModalActive] = useState<boolean>(false)

  const alternateModal = () => {
    setModalActive(!modalActive)
  }

  const sharedData:AppContext = {
    modalActive,
    alternateModal,
  }

  return (
    <AppContext.Provider value={sharedData}>
      {children}
    </AppContext.Provider>
  )
}