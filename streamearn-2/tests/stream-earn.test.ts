import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import { ArtistRemoved } from "../generated/schema"
import { ArtistRemoved as ArtistRemovedEvent } from "../generated/StreamEarn/StreamEarn"
import { handleArtistRemoved } from "../src/stream-earn"
import { createArtistRemovedEvent } from "./stream-earn-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let artist = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newArtistRemovedEvent = createArtistRemovedEvent(artist)
    handleArtistRemoved(newArtistRemovedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ArtistRemoved created and stored", () => {
    assert.entityCount("ArtistRemoved", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ArtistRemoved",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "artist",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
