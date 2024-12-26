import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { CreateFundingEvent } from "../generated/schema"
import { CreateFundingEvent as CreateFundingEventEvent } from "../generated/Funding/Funding"
import { handleCreateFundingEvent } from "../src/funding"
import { createCreateFundingEventEvent } from "./funding-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let creator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let issueLink = "Example string value"
    let maxAmount = BigInt.fromI32(234)
    let unlockTime = BigInt.fromI32(234)
    let minAmount = BigInt.fromI32(234)
    let feePercentage = BigInt.fromI32(234)
    let newCreateFundingEventEvent = createCreateFundingEventEvent(
      creator,
      issueLink,
      maxAmount,
      unlockTime,
      minAmount,
      feePercentage
    )
    handleCreateFundingEvent(newCreateFundingEventEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CreateFundingEvent created and stored", () => {
    assert.entityCount("CreateFundingEvent", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CreateFundingEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "creator",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "CreateFundingEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "issueLink",
      "Example string value"
    )
    assert.fieldEquals(
      "CreateFundingEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "maxAmount",
      "234"
    )
    assert.fieldEquals(
      "CreateFundingEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "unlockTime",
      "234"
    )
    assert.fieldEquals(
      "CreateFundingEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "minAmount",
      "234"
    )
    assert.fieldEquals(
      "CreateFundingEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "feePercentage",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
