import { abi } from "../../abi/createFunding"
import { ethers } from "ethers"
import { CreateFunding } from "../interface/typechain-types/createfunding"

const CONTRACT_ADDRESS = "0x98f9B0D48baF8078B95371298AA1478F5521D89C"

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

// templates:
//   - name: Funding
//     kind: ethereum
//     network: sepolia
//     source:
//       abi: Funding
//     mapping:
//       kind: ethereum/events
//       apiVersion: 0.0.7
//       language: wasm/assemblyscript
//       file: ./src/funding.ts
//       entities:
//         - FundingEvent
//       abis:
//         - name: Funding
//           file: ./abis/Funding.json
//       eventHandlers:
//         - event: ContributionMade(address, uint256)
//           handler: handleContributionMade
//         - event: FundsWithdrawn(address, uint256)
//           handler: handleFundsWithdrawn
//         - event: FeeTransferred(address, uint256)
//           handler: handleFeeTransferred
//         - event: GoalReached()
//           handler: handleGoalReached