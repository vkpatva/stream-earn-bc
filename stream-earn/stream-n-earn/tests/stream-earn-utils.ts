import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  DataResponse,
  OwnershipTransferRequested,
  OwnershipTransferred,
  RequestFulfilled,
  RequestSent,
  RequestSent1,
  mintStreamTokens
} from "../generated/StreamEarn/StreamEarn"

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

export function createRequestSent1Event(
  requestId: Bytes,
  songId: string
): RequestSent1 {
  let requestSent1Event = changetype<RequestSent1>(newMockEvent())

  requestSent1Event.parameters = new Array()

  requestSent1Event.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromFixedBytes(requestId)
    )
  )
  requestSent1Event.parameters.push(
    new ethereum.EventParam("songId", ethereum.Value.fromString(songId))
  )

  return requestSent1Event
}

export function createmintStreamTokensEvent(
  artist: Address,
  number: BigInt,
  songId: string
): mintStreamTokens {
  let mintStreamTokensEvent = changetype<mintStreamTokens>(newMockEvent())

  mintStreamTokensEvent.parameters = new Array()

  mintStreamTokensEvent.parameters.push(
    new ethereum.EventParam("artist", ethereum.Value.fromAddress(artist))
  )
  mintStreamTokensEvent.parameters.push(
    new ethereum.EventParam("number", ethereum.Value.fromUnsignedBigInt(number))
  )
  mintStreamTokensEvent.parameters.push(
    new ethereum.EventParam("songId", ethereum.Value.fromString(songId))
  )

  return mintStreamTokensEvent
}
