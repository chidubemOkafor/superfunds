interface CreateFundingEvent {
    id: string;
    creator: string;
    issueLink: string;
    maxAmount: number
    minAmount: number
    newFundingAddress: string
    unlockTime: number
    isActive: boolean
    currentAmount: number
    feePercentage: number
  }
  
export interface CreateFundingEventsData {
    createFundingEvents: CreateFundingEvent[];
}