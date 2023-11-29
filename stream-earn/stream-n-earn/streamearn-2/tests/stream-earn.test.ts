import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { DataResponse } from "../generated/schema"
import { DataResponse as DataResponseEvent } from "../generated/StreamEarn/StreamEarn"
import { handleDataResponse } from "../src/stream-earn"
import { createDataResponseEvent } from "./stream-earn-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let requestId = Bytes.fromI32(1234567890)
    let response = Bytes.fromI32(1234567890)
    let err = Bytes.fromI32(1234567890)
    let newDataResponseEvent = createDataResponseEvent(requestId, response, err)
    handleDataResponse(newDataResponseEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DataResponse created and stored", () => {
    assert.entityCount("DataResponse", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DataResponse",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "requestId",
      "1234567890"
    )
    assert.fieldEquals(
      "DataResponse",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "response",
      "1234567890"
    )
    assert.fieldEquals(
      "DataResponse",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "err",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
