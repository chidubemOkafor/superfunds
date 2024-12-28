import { gql } from "graphql-request";

export const CREATE_FUNDING_EVENTS_QUERY = gql`
    {
        createFundingEvents(first: 10) {
        id
        creator
        issueLink
        maxAmount
        feePercentage
        minAmount
        newFundingAddress
        unlockTime
    }
  }
`;