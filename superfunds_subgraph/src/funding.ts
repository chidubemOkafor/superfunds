import { FundsWithdrawn as FundsWithdrawnEvent, ContributionMade as ContributionMadeEvent } from "../generated/templates/Funding/Funding"
import { CreateFundingEvent, FundsWithdrawn, ContributionMade, OwnerToFundingMap } from "../generated/schema"

export function handleFundsWithdrawn(event: FundsWithdrawnEvent): void {
    let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();

    const mappingId = event.params.owner.toHex();
    const ownerMap = OwnerToFundingMap.load(mappingId);
    if(ownerMap) {
        const createFunding = CreateFundingEvent.load(ownerMap.fundingEventId);
        if(createFunding) {
            createFunding.isActive = true;
            createFunding.save();
        }
    }

    let entity = new FundsWithdrawn(id)
    entity.amount = event.params.amount
    entity.owner = event.params.owner

    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash
    entity.blockNumber = event.block.number

    entity.save()
}


export function handleContributionMade(event: ContributionMadeEvent): void {
    let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString();
   
    const mappingId = event.params.owner.toHex();
    const ownerMap = OwnerToFundingMap.load(mappingId);
    if (ownerMap) {
        const createFunding = CreateFundingEvent.load(ownerMap.fundingEventId);
        if(createFunding) {
            createFunding.currentAmount = event.params.totalAmount;
            createFunding.save();
        }
    }

    let entity = new ContributionMade(id)
    entity.amount = event.params.amount
    entity.totalAmount = event.params.totalAmount
    entity.sender = event.params.sender
    entity.owner = event.params.owner

    entity.blockTimestamp = event.block.timestamp
    entity.transactionHash = event.transaction.hash
    entity.blockNumber = event.block.number

    entity.save()
}

// function handleUpdate(mappingId: string, type: string, event: any): void {
//     let ownerMap = OwnerToFundingMap.load(mappingId);

//     if (!ownerMap) {
//         console.error(`OwnerToFundingMap not found for mappingId: ${mappingId}`);
//         return;
//     }

//     let createFunding = CreateFundingEvent.load(ownerMap.fundingEventId);
//     if (!createFunding) {
//         console.error(`CreateFundingEvent not found for fundingEventId: ${ownerMap.fundingEventId}`);
//         return;
//     }

//     if (type === 'updateAmount') {
//         if (!event) {
//             console.error("Event must be provided for 'updateAmount' type");
//             return;
//         }
//         createFunding.currentAmount = event.params.totalAmount;
//     } else if (type === 'updateIsActive') {
//         createFunding.isActive = true;
//     }

//     createFunding.save();
// }