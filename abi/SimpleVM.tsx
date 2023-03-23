import { Contract } from "ethers";
import defaultProvider from "./defaultProvider";

const ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256[]",
        name: "resultStack",
        type: "int256[]",
      },
    ],
    name: "Result",
    type: "event",
  },
  {
    inputs: [
      { internalType: "int256[]", name: "initialStack", type: "int256[]" },
      { internalType: "uint8[]", name: "bytecode", type: "uint8[]" },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastResult",
    outputs: [{ internalType: "int256[]", name: "", type: "int256[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "lastResult",
    outputs: [{ internalType: "int256", name: "", type: "int256" }],
    stateMutability: "view",
    type: "function",
  },
];

const SimpleVM = new Contract(
  "0x31c415D6530eEb98b43f413F639309365195B830",
  ABI,
  defaultProvider
);

export default SimpleVM;
