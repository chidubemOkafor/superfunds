import { connectContract } from "../config/contractConfig"
import { Funding } from "../interface/typechain-types/funding";
import { fromWeiToEther } from "../utils/fromWeiToEther"


export const handleCurrentValue = async (address: string): Promise<number | null> => {
    try {
        const contract = await connectContract({
            type: "generated",
            contract_address: address,
        })

        if (!contract) {
            console.error("Failed to connect to contract")
            throw new Error("Contract connection failed")
        }

        const currentValue = await (contract as Funding).totalFunds()
        return fromWeiToEther(parseInt(currentValue))
    } catch (error) {
        console.error("Error fetching current value:", error)
        return null
    }
};

