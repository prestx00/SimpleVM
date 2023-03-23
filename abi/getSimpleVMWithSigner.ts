import walletProvider from "./walletProvider";
import SimpleVM from "./SimpleVM";

const getSimpleVMWithSigner = async () => {
  const signer = await walletProvider.getSigner();
  return SimpleVM.connect(signer);
};
export default getSimpleVMWithSigner;
