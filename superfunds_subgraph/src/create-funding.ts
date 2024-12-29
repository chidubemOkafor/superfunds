import { CreateFundingEvent as CreateFundingEventEvent } from "../generated/CreateFunding/CreateFunding"
import { CreateFundingEvent } from "../generated/schema"

export function handleCreateFundingEvent(event: CreateFundingEventEvent): void {
  let entity = new CreateFundingEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
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

  entity.save()
}
