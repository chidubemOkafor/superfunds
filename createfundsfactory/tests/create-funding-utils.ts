import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { CreateFundingEvent } from "../generated/CreateFunding/CreateFunding"

export function createCreateFundingEventEvent(
  creator: Address,
  issueLink: string,
  maxAmount: BigInt,
  unlockTime: BigInt,
  minAmount: BigInt,
  feePercentage: BigInt
): CreateFundingEvent {
  let createFundingEventEvent = changetype<CreateFundingEvent>(newMockEvent())

  createFundingEventEvent.parameters = new Array()

  createFundingEventEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  createFundingEventEvent.parameters.push(
    new ethereum.EventParam("issueLink", ethereum.Value.fromString(issueLink))
  )
  createFundingEventEvent.parameters.push(
    new ethereum.EventParam(
      "maxAmount",
      ethereum.Value.fromUnsignedBigInt(maxAmount)
    )
  )
  createFundingEventEvent.parameters.push(
    new ethereum.EventParam(
      "unlockTime",
      ethereum.Value.fromUnsignedBigInt(unlockTime)
    )
  )
  createFundingEventEvent.parameters.push(
    new ethereum.EventParam(
      "minAmount",
      ethereum.Value.fromUnsignedBigInt(minAmount)
    )
  )
  createFundingEventEvent.parameters.push(
    new ethereum.EventParam(
      "feePercentage",
      ethereum.Value.fromUnsignedBigInt(feePercentage)
    )
  )

  return createFundingEventEvent
}
