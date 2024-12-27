import { abi } from "../../abi/createFunding"
import { ethers } from "ethers"
import { CreateFunding } from "../interface/typechain-types/createfunding"

const CONTRACT_ADDRESS = "0x5C6C2861D15FcF93DbaBd8034235dCdeD9dc5946"

const connectContract = async () => {
    try {
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        return new ethers.Contract(CONTRACT_ADDRESS, abi, signer) as unknown as CreateFunding
    } catch (error) {
        console.error(error)
    }
}

export default connectContract