// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ArtistRemoved extends ethereum.Event {
  get params(): ArtistRemoved__Params {
    return new ArtistRemoved__Params(this);
  }
}

export class ArtistRemoved__Params {
  _event: ArtistRemoved;

  constructor(event: ArtistRemoved) {
    this._event = event;
  }

  get artist(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ArtistWhitelisted extends ethereum.Event {
  get params(): ArtistWhitelisted__Params {
    return new ArtistWhitelisted__Params(this);
  }
}

export class ArtistWhitelisted__Params {
  _event: ArtistWhitelisted;

  constructor(event: ArtistWhitelisted) {
    this._event = event;
  }

  get artist(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class DataRequestMade extends ethereum.Event {
  get params(): DataRequestMade__Params {
    return new DataRequestMade__Params(this);
  }
}

export class DataRequestMade__Params {
  _event: DataRequestMade;

  constructor(event: DataRequestMade) {
    this._event = event;
  }

  get requestId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get songId(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class DataResponse extends ethereum.Event {
  get params(): DataResponse__Params {
    return new DataResponse__Params(this);
  }
}

export class DataResponse__Params {
  _event: DataResponse;

  constructor(event: DataResponse) {
    this._event = event;
  }

  get requestId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get response(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get err(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class MintStreamToken extends ethereum.Event {
  get params(): MintStreamToken__Params {
    return new MintStreamToken__Params(this);
  }
}

export class MintStreamToken__Params {
  _event: MintStreamToken;

  constructor(event: MintStreamToken) {
    this._event = event;
  }

  get artist(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokensMinted(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get songId(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class OwnershipTransferRequested extends ethereum.Event {
  get params(): OwnershipTransferRequested__Params {
    return new OwnershipTransferRequested__Params(this);
  }
}

export class OwnershipTransferRequested__Params {
  _event: OwnershipTransferRequested;

  constructor(event: OwnershipTransferRequested) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RequestFulfilled extends ethereum.Event {
  get params(): RequestFulfilled__Params {
    return new RequestFulfilled__Params(this);
  }
}

export class RequestFulfilled__Params {
  _event: RequestFulfilled;

  constructor(event: RequestFulfilled) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class RequestSent extends ethereum.Event {
  get params(): RequestSent__Params {
    return new RequestSent__Params(this);
  }
}

export class RequestSent__Params {
  _event: RequestSent;

  constructor(event: RequestSent) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class SongAdded extends ethereum.Event {
  get params(): SongAdded__Params {
    return new SongAdded__Params(this);
  }
}

export class SongAdded__Params {
  _event: SongAdded;

  constructor(event: SongAdded) {
    this._event = event;
  }

  get artist(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get songId(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class StreamEarn extends ethereum.SmartContract {
  static bind(address: Address): StreamEarn {
    return new StreamEarn("StreamEarn", address);
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  requestIdToSongId(param0: Bytes): string {
    let result = super.call(
      "requestIdToSongId",
      "requestIdToSongId(bytes32):(string)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toString();
  }

  try_requestIdToSongId(param0: Bytes): ethereum.CallResult<string> {
    let result = super.tryCall(
      "requestIdToSongId",
      "requestIdToSongId(bytes32):(string)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  responses(param0: Bytes): BigInt {
    let result = super.call("responses", "responses(bytes32):(uint256)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);

    return result[0].toBigInt();
  }

  try_responses(param0: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall("responses", "responses(bytes32):(uint256)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  sendRequest(
    source: string,
    encryptedSecretsUrls: Bytes,
    donHostedSecretsSlotID: i32,
    donHostedSecretsVersion: BigInt,
    args: Array<string>,
    bytesArgs: Array<Bytes>,
    subscriptionId: BigInt,
    gasLimit: BigInt,
    donID: Bytes
  ): Bytes {
    let result = super.call(
      "sendRequest",
      "sendRequest(string,bytes,uint8,uint64,string[],bytes[],uint64,uint32,bytes32):(bytes32)",
      [
        ethereum.Value.fromString(source),
        ethereum.Value.fromBytes(encryptedSecretsUrls),
        ethereum.Value.fromUnsignedBigInt(
          BigInt.fromI32(donHostedSecretsSlotID)
        ),
        ethereum.Value.fromUnsignedBigInt(donHostedSecretsVersion),
        ethereum.Value.fromStringArray(args),
        ethereum.Value.fromBytesArray(bytesArgs),
        ethereum.Value.fromUnsignedBigInt(subscriptionId),
        ethereum.Value.fromUnsignedBigInt(gasLimit),
        ethereum.Value.fromFixedBytes(donID)
      ]
    );

    return result[0].toBytes();
  }

  try_sendRequest(
    source: string,
    encryptedSecretsUrls: Bytes,
    donHostedSecretsSlotID: i32,
    donHostedSecretsVersion: BigInt,
    args: Array<string>,
    bytesArgs: Array<Bytes>,
    subscriptionId: BigInt,
    gasLimit: BigInt,
    donID: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "sendRequest",
      "sendRequest(string,bytes,uint8,uint64,string[],bytes[],uint64,uint32,bytes32):(bytes32)",
      [
        ethereum.Value.fromString(source),
        ethereum.Value.fromBytes(encryptedSecretsUrls),
        ethereum.Value.fromUnsignedBigInt(
          BigInt.fromI32(donHostedSecretsSlotID)
        ),
        ethereum.Value.fromUnsignedBigInt(donHostedSecretsVersion),
        ethereum.Value.fromStringArray(args),
        ethereum.Value.fromBytesArray(bytesArgs),
        ethereum.Value.fromUnsignedBigInt(subscriptionId),
        ethereum.Value.fromUnsignedBigInt(gasLimit),
        ethereum.Value.fromFixedBytes(donID)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  sendRequestCBOR(
    request: Bytes,
    subscriptionId: BigInt,
    gasLimit: BigInt,
    donID: Bytes
  ): Bytes {
    let result = super.call(
      "sendRequestCBOR",
      "sendRequestCBOR(bytes,uint64,uint32,bytes32):(bytes32)",
      [
        ethereum.Value.fromBytes(request),
        ethereum.Value.fromUnsignedBigInt(subscriptionId),
        ethereum.Value.fromUnsignedBigInt(gasLimit),
        ethereum.Value.fromFixedBytes(donID)
      ]
    );

    return result[0].toBytes();
  }

  try_sendRequestCBOR(
    request: Bytes,
    subscriptionId: BigInt,
    gasLimit: BigInt,
    donID: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "sendRequestCBOR",
      "sendRequestCBOR(bytes,uint64,uint32,bytes32):(bytes32)",
      [
        ethereum.Value.fromBytes(request),
        ethereum.Value.fromUnsignedBigInt(subscriptionId),
        ethereum.Value.fromUnsignedBigInt(gasLimit),
        ethereum.Value.fromFixedBytes(donID)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  songIdTotalPaid(param0: string): BigInt {
    let result = super.call(
      "songIdTotalPaid",
      "songIdTotalPaid(string):(uint256)",
      [ethereum.Value.fromString(param0)]
    );

    return result[0].toBigInt();
  }

  try_songIdTotalPaid(param0: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "songIdTotalPaid",
      "songIdTotalPaid(string):(uint256)",
      [ethereum.Value.fromString(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  songToArtist(param0: string): Address {
    let result = super.call("songToArtist", "songToArtist(string):(address)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toAddress();
  }

  try_songToArtist(param0: string): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "songToArtist",
      "songToArtist(string):(address)",
      [ethereum.Value.fromString(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  streamToken(): Address {
    let result = super.call("streamToken", "streamToken():(address)", []);

    return result[0].toAddress();
  }

  try_streamToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("streamToken", "streamToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalPlays(param0: string): BigInt {
    let result = super.call("totalPlays", "totalPlays(string):(uint256)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toBigInt();
  }

  try_totalPlays(param0: string): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalPlays", "totalPlays(string):(uint256)", [
      ethereum.Value.fromString(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  whitelistedAddresses(param0: Address): boolean {
    let result = super.call(
      "whitelistedAddresses",
      "whitelistedAddresses(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_whitelistedAddresses(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "whitelistedAddresses",
      "whitelistedAddresses(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get router(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _streamToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall extends ethereum.Call {
  get inputs(): AcceptOwnershipCall__Inputs {
    return new AcceptOwnershipCall__Inputs(this);
  }

  get outputs(): AcceptOwnershipCall__Outputs {
    return new AcceptOwnershipCall__Outputs(this);
  }
}

export class AcceptOwnershipCall__Inputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall__Outputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class AddSongCall extends ethereum.Call {
  get inputs(): AddSongCall__Inputs {
    return new AddSongCall__Inputs(this);
  }

  get outputs(): AddSongCall__Outputs {
    return new AddSongCall__Outputs(this);
  }
}

export class AddSongCall__Inputs {
  _call: AddSongCall;

  constructor(call: AddSongCall) {
    this._call = call;
  }

  get songId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get artistAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AddSongCall__Outputs {
  _call: AddSongCall;

  constructor(call: AddSongCall) {
    this._call = call;
  }
}

export class AddWhitelistedAddressCall extends ethereum.Call {
  get inputs(): AddWhitelistedAddressCall__Inputs {
    return new AddWhitelistedAddressCall__Inputs(this);
  }

  get outputs(): AddWhitelistedAddressCall__Outputs {
    return new AddWhitelistedAddressCall__Outputs(this);
  }
}

export class AddWhitelistedAddressCall__Inputs {
  _call: AddWhitelistedAddressCall;

  constructor(call: AddWhitelistedAddressCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddWhitelistedAddressCall__Outputs {
  _call: AddWhitelistedAddressCall;

  constructor(call: AddWhitelistedAddressCall) {
    this._call = call;
  }
}

export class ChangeStreamTokenCall extends ethereum.Call {
  get inputs(): ChangeStreamTokenCall__Inputs {
    return new ChangeStreamTokenCall__Inputs(this);
  }

  get outputs(): ChangeStreamTokenCall__Outputs {
    return new ChangeStreamTokenCall__Outputs(this);
  }
}

export class ChangeStreamTokenCall__Inputs {
  _call: ChangeStreamTokenCall;

  constructor(call: ChangeStreamTokenCall) {
    this._call = call;
  }

  get newStreamToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeStreamTokenCall__Outputs {
  _call: ChangeStreamTokenCall;

  constructor(call: ChangeStreamTokenCall) {
    this._call = call;
  }
}

export class GetPaidCall extends ethereum.Call {
  get inputs(): GetPaidCall__Inputs {
    return new GetPaidCall__Inputs(this);
  }

  get outputs(): GetPaidCall__Outputs {
    return new GetPaidCall__Outputs(this);
  }
}

export class GetPaidCall__Inputs {
  _call: GetPaidCall;

  constructor(call: GetPaidCall) {
    this._call = call;
  }

  get songId(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class GetPaidCall__Outputs {
  _call: GetPaidCall;

  constructor(call: GetPaidCall) {
    this._call = call;
  }
}

export class HandleOracleFulfillmentCall extends ethereum.Call {
  get inputs(): HandleOracleFulfillmentCall__Inputs {
    return new HandleOracleFulfillmentCall__Inputs(this);
  }

  get outputs(): HandleOracleFulfillmentCall__Outputs {
    return new HandleOracleFulfillmentCall__Outputs(this);
  }
}

export class HandleOracleFulfillmentCall__Inputs {
  _call: HandleOracleFulfillmentCall;

  constructor(call: HandleOracleFulfillmentCall) {
    this._call = call;
  }

  get requestId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get response(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get err(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class HandleOracleFulfillmentCall__Outputs {
  _call: HandleOracleFulfillmentCall;

  constructor(call: HandleOracleFulfillmentCall) {
    this._call = call;
  }
}

export class RemoveWhitelistedAddressCall extends ethereum.Call {
  get inputs(): RemoveWhitelistedAddressCall__Inputs {
    return new RemoveWhitelistedAddressCall__Inputs(this);
  }

  get outputs(): RemoveWhitelistedAddressCall__Outputs {
    return new RemoveWhitelistedAddressCall__Outputs(this);
  }
}

export class RemoveWhitelistedAddressCall__Inputs {
  _call: RemoveWhitelistedAddressCall;

  constructor(call: RemoveWhitelistedAddressCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveWhitelistedAddressCall__Outputs {
  _call: RemoveWhitelistedAddressCall;

  constructor(call: RemoveWhitelistedAddressCall) {
    this._call = call;
  }
}

export class SendRequestCall extends ethereum.Call {
  get inputs(): SendRequestCall__Inputs {
    return new SendRequestCall__Inputs(this);
  }

  get outputs(): SendRequestCall__Outputs {
    return new SendRequestCall__Outputs(this);
  }
}

export class SendRequestCall__Inputs {
  _call: SendRequestCall;

  constructor(call: SendRequestCall) {
    this._call = call;
  }

  get source(): string {
    return this._call.inputValues[0].value.toString();
  }

  get encryptedSecretsUrls(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get donHostedSecretsSlotID(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get donHostedSecretsVersion(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get args(): Array<string> {
    return this._call.inputValues[4].value.toStringArray();
  }

  get bytesArgs(): Array<Bytes> {
    return this._call.inputValues[5].value.toBytesArray();
  }

  get subscriptionId(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get gasLimit(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get donID(): Bytes {
    return this._call.inputValues[8].value.toBytes();
  }
}

export class SendRequestCall__Outputs {
  _call: SendRequestCall;

  constructor(call: SendRequestCall) {
    this._call = call;
  }

  get requestId(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class SendRequestCBORCall extends ethereum.Call {
  get inputs(): SendRequestCBORCall__Inputs {
    return new SendRequestCBORCall__Inputs(this);
  }

  get outputs(): SendRequestCBORCall__Outputs {
    return new SendRequestCBORCall__Outputs(this);
  }
}

export class SendRequestCBORCall__Inputs {
  _call: SendRequestCBORCall;

  constructor(call: SendRequestCBORCall) {
    this._call = call;
  }

  get request(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get subscriptionId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get gasLimit(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get donID(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SendRequestCBORCall__Outputs {
  _call: SendRequestCBORCall;

  constructor(call: SendRequestCBORCall) {
    this._call = call;
  }

  get requestId(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
