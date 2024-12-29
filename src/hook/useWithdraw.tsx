import { useState } from "react"
import { connectContract } from "../config/contractConfig"
import { useNotification, Ntype } from "../hook/useNotification"

export const useWithdraw = () => {
    const { handleNotification } = useNotification()
    const [ isLoading, setIsLoading ] = useState(false)

    const handleWithdraw = async (address: string) => {
        try {
            setIsLoading(true)
            const contract = await connectContract({type: 'generated', contract_address: address})
            if(!contract) {
                handleNotification({type: Ntype.error, message: "Failed to connect to contract" })
                console.error("Failed to connect to contract")
                throw new Error("contract connection failed")
                
            }

            const tx = await contract.withdraw()
            const reciept = await tx.wait()

            if(reciept.status === 0) {
                handleNotification({type: Ntype.error, message: "Transaction reverted" })
                console.error("Transaction failed")
                throw new Error("Transaction reverted")
            }

            handleNotification({type: Ntype.success , message: "contrubution successful"} )
            
        } catch (error: any) {
            handleNotification({type: Ntype.error , message: error.message})
            console.error("Error during submission:", error);
        } finally {
            setIsLoading(false)
        }
    }
    return { handleWithdraw, isLoading }
}