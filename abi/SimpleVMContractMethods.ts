import { ContractMethod, TransactionResponse } from "ethers";

export type SimpleVMContractMethods = {
  execute: ContractMethod<
    [number[], number[]],
    TransactionResponse,
    TransactionResponse
  >;
  getLastResult: ContractMethod<[], number[], number[]>;
  lastResult: ContractMethod<[number], number, number>;
};
