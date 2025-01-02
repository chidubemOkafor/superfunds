import { gql } from "graphql-request";

export const CREATE_FUNDING_EVENTS_QUERY = gql`{
    createFundingEvents(first: 5, where: { isActive: true }) {
        id
        creator
        issueLink
        maxAmount
        minAmount
        newFundingAddress
        unlockTime
        isActive
        currentAmount
        feePercentage
    }
    fundsWithdrawns(first: 5) {
      id
      owner
      amount
      blockNumber
    }
  }`