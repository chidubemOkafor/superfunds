import { ethers } from "ethers"
import {createContext, useState, useContext, ReactNode, SetStateAction, Dispatch } from "react"

interface Address {
    address: string | ethers.Wallet
    setAddress: Dispatch<SetStateAction<string>>
}

const AddressContext = createContext<Address | undefined>(undefined)

export const AddressProvider:React.FC<{children: ReactNode }> = ({ children }) => {
    const [address, setAddress] = useState("")

    return (
        <AddressContext.Provider value={{address, setAddress}}>
            {children}
        </AddressContext.Provider>
    )
}

export const useAddressContext = () => {
    const context = useContext(AddressContext)
    if(!context) {
        throw new Error("useToggle must be used within a ToggleProvider");
    }

    return context
}