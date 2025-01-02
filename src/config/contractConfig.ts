import { create_funding_abi } from "../../abi/createFunding"
import { funding_abi } from "../../abi/funding"
import { ethers } from "ethers"
import { CreateFunding } from "../interface/typechain-types/createfunding"
import { Funding } from "../interface/typechain-types/funding"

interface ContractType {
    type: 'factory' | 'generated'
    contract_address?: string
}

export const connectionInstance = async (
    contractAddress: string, 
    abi: any, 
    type: 'factory' | 'generated'
): Promise<CreateFunding | Funding | undefined> => {
    try {
        if (!window.ethereum) {
            throw new Error("No Ethereum provider found. Please install MetaMask.");
        }

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        const contract = new ethers.Contract(contractAddress, abi, signer);

        if (type === 'factory') {
            return contract as unknown as CreateFunding;
        } else if (type === 'generated') {
            return contract as unknown as Funding;
        } else {
            throw new Error(`Invalid contract type: ${type}`);
        }
    } catch (error) {
        console.error("Failed to create contract instance:", error);
        return undefined;
    }
};

export const connectContract = async ({
    type = "factory",
    contract_address = ""
  }: ContractType) => {
    const isFactory = type === "factory";
    const address = isFactory ? import.meta.env.VITE_FACTORY_ADDRESS : contract_address;
    const abi = isFactory ? create_funding_abi : funding_abi;
  
    return connectionInstance(address, abi, type);
  };