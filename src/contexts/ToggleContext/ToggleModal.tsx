import {createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from "react"

interface ToggleModal {
    state: boolean
    setState: Dispatch<SetStateAction<boolean>>
}

const ToggleContext = createContext<ToggleModal | undefined>(undefined)

export const ToggleModalProvider:React.FC<{children: ReactNode }> = ({ children }) => {
    const [state, setState] = useState(false)

  return (
    <ToggleContext.Provider value={{state, setState}}>
        {children}
    </ToggleContext.Provider>
   
  )
}

export const useModalToggle = () => {
    const context = useContext(ToggleContext)
    if(!context) {
        throw new Error("useToggle must be used within a ToggleProvider");
    }

    return context
}