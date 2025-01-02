import { connectContract } from "../config/contractConfig"
import { ethers } from "ethers"
import { useNotification, Ntype } from "../hook/useNotification"
import { useState } from "react"
import { Funding } from "../interface/typechain-types/funding"

export const useDeposit = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { handleNotification } = useNotification()

    const handleDeposit = async(value: string, address: string) => {
        try {
            setIsLoading(true)

            const contract = await connectContract({type: 'generated', contract_address: address});
            contract as Funding
            if (!contract) {
                console.error("Failed to connect to contract");
                throw new Error("Contract connection failed");
              }
    
            const amountInWei = ethers.parseEther(value);
            
            const tx = await (contract as Funding).contribute({
                value: amountInWei,
            })
    
            const receipt = await tx.wait()
            if (receipt?.status === 0) {
              handleNotification({type: Ntype.error , message: "Transaction failed"} )
              console.error("Transaction failed");
              throw new Error("Transaction reverted");
            }
      
            handleNotification({type: Ntype.success , message: "contrubution successful"} )

        } catch (error) {
            handleNotification({type: Ntype.error , message: "something went wrong"})
            console.error("Error during submission:", error);
        } finally {
            setIsLoading(false)
        }
    }

    return { handleDeposit, isLoading }
}