import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  ArtistRemoved,
  ArtistWhitelisted,
  DataRequestMade,
  DataResponse,
  MintStreamTokens,
  OwnershipTransferRequested,
  OwnershipTransferred,
  RequestFulfilled,
  RequestSent,
  SongAdded
} from "../generated/StreamEarn/StreamEarn"

export function createArtistRemovedEvent(artist: Address): ArtistRemoved {
  let artistRemovedEvent = changetype<ArtistRemoved>(newMockEvent())

  artistRemovedEvent.parameters = new Array()

  artistRemovedEvent.parameters.push(
    new ethereum.EventParam("artist", ethereum.Value.fromAddress(artist))
  )

  return artistRemovedEvent
}

export function createArtistWhitelistedEvent(
  artist: Address
): ArtistWhitelisted {
  let artistWhitelistedEvent = changetype<ArtistWhitelisted>(newMockEvent())

  artistWhitelistedEvent.parameters = new Array()

  artistWhitelistedEvent.parameters.push(
    new ethereum.EventParam("artist", ethereum.Value.fromAddress(artist))
  )

  return artistWhitelistedEvent
}

export function createDataRequestMadeEvent(
  requestId: Bytes,
  songId: string
): DataRequestMade {
  let dataRequestMadeEvent = changetype<DataRequestMade>(newMockEvent())

  dataRequestMadeEvent.parameters = new Array()

  dataRequestMadeEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )
  dataRequestMadeEvent.parameters.push(
    new ethereum.EventParam("songId", ethereum.Value.fromString(songId))
  )

  return dataRequestMadeEvent
}

export function createDataResponseEvent(
  requestId: Bytes,
  response: Bytes,
  err: Bytes
): DataResponse {
  let dataResponseEvent = changetype<DataResponse>(newMockEvent())

  dataResponseEvent.parameters = new Array()

  dataResponseEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )
  dataResponseEvent.parameters.push(
    new ethereum.EventParam("response", ethereum.Value.fromBytes(response))
  )
  dataResponseEvent.parameters.push(
    new ethereum.EventParam("err", ethereum.Value.fromBytes(err))
  )

  return dataResponseEvent
}

export function createMintStreamTokensEvent(
  artist: Address,
  tokensMinted: BigInt,
  songId: string
): MintStreamTokens {
  let mintStreamTokensEvent = changetype<MintStreamTokens>(newMockEvent())

  mintStreamTokensEvent.parameters = new Array()

  mintStreamTokensEvent.parameters.push(
    new ethereum.EventParam("artist", ethereum.Value.fromAddress(artist))
  )
  mintStreamTokensEvent.parameters.push(
    new ethereum.EventParam(
      "tokensMinted",
      ethereum.Value.fromUnsignedBigInt(tokensMinted)
    )
  )
  mintStreamTokensEvent.parameters.push(
    new ethereum.EventParam("songId", ethereum.Value.fromString(songId))
  )

  return mintStreamTokensEvent
}

export function createOwnershipTransferRequestedEvent(
  from: Address,
  to: Address
): OwnershipTransferRequested {
  let ownershipTransferRequestedEvent = changetype<OwnershipTransferRequested>(
    newMockEvent()
  )

  ownershipTransferRequestedEvent.parameters = new Array()

  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferRequestedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferRequestedEvent
}

export function createOwnershipTransferredEvent(
  from: Address,
  to: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )

  return ownershipTransferredEvent
}

export function createRequestFulfilledEvent(id: Bytes): RequestFulfilled {
  let requestFulfilledEvent = changetype<RequestFulfilled>(newMockEvent())

  requestFulfilledEvent.parameters = new Array()

  requestFulfilledEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return requestFulfilledEvent
}

export function createRequestSentEvent(id: Bytes): RequestSent {
  let requestSentEvent = changetype<RequestSent>(newMockEvent())

  requestSentEvent.parameters = new Array()

  requestSentEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromFixedBytes(id))
  )

  return requestSentEvent
}

export function createSongAddedEvent(
  artist: Address,
  songId: string
): SongAdded {
  let songAddedEvent = changetype<SongAdded>(newMockEvent())

  songAddedEvent.parameters = new Array()

  songAddedEvent.parameters.push(
    new ethereum.EventParam("artist", ethereum.Value.fromAddress(artist))
  )
  songAddedEvent.parameters.push(
    new ethereum.EventParam("songId", ethereum.Value.fromString(songId))
  )

  return songAddedEvent
}
