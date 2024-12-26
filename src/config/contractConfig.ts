import { abi } from "../../abi/createFunding"
import { ethers } from "ethers"
import { CreateFunding } from "../interface/typechain-types/createfunding"

const CONTRACT_ADDRESS = "0x05854bFE5a891aBDc802c1871cF55f75b4f1ba29"

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
