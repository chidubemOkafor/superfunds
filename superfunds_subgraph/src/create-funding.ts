import {
  ContributionMade as ContributionMadeEvent,
  FeeTransferred as FeeTransferredEvent,
  FundsWithdrawn as FundsWithdrawnEvent,
  GoalReached as GoalReachedEvent
} from "../generated/CreateFunding/CreateFunding"
import {
  ContributionMade,
  FeeTransferred,
  FundsWithdrawn,
  GoalReached
} from "../generated/schema"

export function handleContributionMade(event: ContributionMadeEvent): void {
  let entity = new ContributionMade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.amount = event.params.amount
  entity.totalAmount = event.params.totalAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeTransferred(event: FeeTransferredEvent): void {
  let entity = new FeeTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.factoryOwner = event.params.factoryOwner
  entity.fee = event.params.fee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFundsWithdrawn(event: FundsWithdrawnEvent): void {
  let entity = new FundsWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGoalReached(event: GoalReachedEvent): void {
  let entity = new GoalReached(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
