import { Contract } from "ethers";
import walletProvider from "./walletProvider";
import SimpleVM from "./SimpleVM";
import { SimpleVMContractMethods } from "./SimpleVMContractMethods";

const getSimpleVMWithSigner = async (): Promise<
  Contract & SimpleVMContractMethods
> => {
  const signer = await walletProvider.getSigner();
  return SimpleVM.connect(signer) as Contract & SimpleVMContractMethods;
};
export default getSimpleVMWithSigner;
