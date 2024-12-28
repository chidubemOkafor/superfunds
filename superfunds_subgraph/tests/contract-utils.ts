import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ContributionMade,
  FeeTransferred,
  FundsWithdrawn,
  GoalReached
} from "../generated/Contract/Contract"

export function createContributionMadeEvent(
  sender: Address,
  amount: BigInt,
  totalAmount: BigInt
): ContributionMade {
  let contributionMadeEvent = changetype<ContributionMade>(newMockEvent())

  contributionMadeEvent.parameters = new Array()

  contributionMadeEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  contributionMadeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  contributionMadeEvent.parameters.push(
    new ethereum.EventParam(
      "totalAmount",
      ethereum.Value.fromUnsignedBigInt(totalAmount)
    )
  )

  return contributionMadeEvent
}

export function createFeeTransferredEvent(
  factoryOwner: Address,
  fee: BigInt
): FeeTransferred {
  let feeTransferredEvent = changetype<FeeTransferred>(newMockEvent())

  feeTransferredEvent.parameters = new Array()

  feeTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "factoryOwner",
      ethereum.Value.fromAddress(factoryOwner)
    )
  )
  feeTransferredEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromUnsignedBigInt(fee))
  )

  return feeTransferredEvent
}

export function createFundsWithdrawnEvent(
  owner: Address,
  amount: BigInt
): FundsWithdrawn {
  let fundsWithdrawnEvent = changetype<FundsWithdrawn>(newMockEvent())

  fundsWithdrawnEvent.parameters = new Array()

  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  fundsWithdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return fundsWithdrawnEvent
}

export function createGoalReachedEvent(): GoalReached {
  let goalReachedEvent = changetype<GoalReached>(newMockEvent())

  goalReachedEvent.parameters = new Array()

  return goalReachedEvent
}
