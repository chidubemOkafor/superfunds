import { CreateFundingEvent as CreateFundingEventEvent } from "../generated/CreateFunding/CreateFunding"
import { CreateFundingEvent, OwnerToFundingMap  } from "../generated/schema"
import { Funding } from '../generated/templates'
import { BigInt } from "@graphprotocol/graph-ts";

export function handleCreateFundingEvent(event: CreateFundingEventEvent): void {
  let id = event.transaction.hash.toHex();
  let entity = new CreateFundingEvent(id)

  // Map the event parameters to the entity fields
  entity.creator = event.params.creator
  entity.issueLink = event.params.issueLink
  entity.maxAmount = event.params.maxAmount
  entity.unlockTime = event.params.unlockTime
  entity.minAmount = event.params.minAmount
  entity.feePercentage = event.params.feePercentage
  entity.newFundingAddress = event.params.newFundingAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.isActive = true
  entity.currentAmount = BigInt.fromI32(0)

  entity.save()
  Funding.create(event.params.newFundingAddress)
  
  let mappingId = event.params.creator.toHex();
  let ownerMap = new OwnerToFundingMap(mappingId);

  ownerMap.owner = event.params.creator;
  ownerMap.fundingEventId = id;
  ownerMap.save();
}