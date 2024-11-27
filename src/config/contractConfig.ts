import { abi } from "../../abi/createFunding"
import { ethers } from "ethers"
import { CreateFunding } from "../interface/typechain-types/CreateFunding"

// const SEPOLIA_TESTNET_URL = import.meta.env.VITE_API_URL_SEPOLIA_TESTNET_URL;

const connectContract = async () => {
    try {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const fundingContractAddress = "0x2519fB31841287D4524AdD74c79117651F1024e9"
        const FundingContractABI = abi
        const signer = await provider.getSigner()
        return new ethers.Contract(fundingContractAddress, FundingContractABI, signer) as unknown as CreateFunding
    } catch (error) {
        console.error(error)
    }
}

export default connectContract
