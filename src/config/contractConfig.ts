import { create_funding_abi } from "../../abi/createFunding"
import { funding_abi } from "../../abi/funding"
import { ethers } from "ethers"
import { CreateFunding } from "../interface/typechain-types/createfunding"

interface ContractType {
    type: 'factory' | 'generated'
    contract_address?: string
}

const connectionInstance = async(contractAddress: string, abi: any) => {
    try {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        return new ethers.Contract(contractAddress, abi, signer) as unknown as CreateFunding
    } catch (error) {
        console.error(error)
    }
}

export const connectContract = async ({
    type = "factory",
    contract_address = ""
  }: ContractType) => {
    const isFactory = type === "factory";
    const address = isFactory ? import.meta.env.VITE_FACTORY_ADDRESS : contract_address;
    const abi = isFactory ? create_funding_abi : funding_abi;
  
    return connectionInstance(address, abi);
  };