/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface CreateFundingInterface extends Interface {
  getFunction(nameOrSignature: "createNewFunding"): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "CreateFundingEvent"): EventFragment;

  encodeFunctionData(
    functionFragment: "createNewFunding",
    values: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "createNewFunding",
    data: BytesLike
  ): Result;
}

export namespace CreateFundingEventEvent {
  export type InputTuple = [
    creator: AddressLike,
    issueLink: string,
    maxAmount: BigNumberish,
    unlockTime: BigNumberish,
    minAmount: BigNumberish,
    feePercentage: BigNumberish,
    newFundingAddress: AddressLike
  ];
  export type OutputTuple = [
    creator: string,
    issueLink: string,
    maxAmount: bigint,
    unlockTime: bigint,
    minAmount: bigint,
    feePercentage: bigint,
    newFundingAddress: string
  ];
  export interface OutputObject {
    creator: string;
    issueLink: string;
    maxAmount: bigint;
    unlockTime: bigint;
    minAmount: bigint;
    feePercentage: bigint;
    newFundingAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface CreateFunding extends BaseContract {
  connect(runner?: ContractRunner | null): CreateFunding;
  waitForDeployment(): Promise<this>;

  interface: CreateFundingInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  createNewFunding: TypedContractMethod<
    [
      _issueLink: string,
      _maxAmount: BigNumberish,
      _unlockTime: BigNumberish,
      _minAmount: BigNumberish,
      _feePercentage: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createNewFunding"
  ): TypedContractMethod<
    [
      _issueLink: string,
      _maxAmount: BigNumberish,
      _unlockTime: BigNumberish,
      _minAmount: BigNumberish,
      _feePercentage: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "CreateFundingEvent"
  ): TypedContractEvent<
    CreateFundingEventEvent.InputTuple,
    CreateFundingEventEvent.OutputTuple,
    CreateFundingEventEvent.OutputObject
  >;

  filters: {
    "CreateFundingEvent(address,string,uint256,uint256,uint256,uint256,address)": TypedContractEvent<
      CreateFundingEventEvent.InputTuple,
      CreateFundingEventEvent.OutputTuple,
      CreateFundingEventEvent.OutputObject
    >;
    CreateFundingEvent: TypedContractEvent<
      CreateFundingEventEvent.InputTuple,
      CreateFundingEventEvent.OutputTuple,
      CreateFundingEventEvent.OutputObject
    >;
  };
}
