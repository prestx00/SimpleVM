import SimpleVM from "../abi/SimpleVM";
import getSimpleVMWithSigner from "../abi/getSimpleVMWithSigner";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import StyledLabelInput from "../components/StyledLabelInput";
import OpcodeStrings from "../components/OpCodeString";
import ResultAndExecute from "../components/ResultAndExecute";
import {
  StyledFormContainer,
  Title,
} from "../components/styledcomponents/IndexStyledComponents";
import BeatLoader from "react-spinners/BeatLoader";

const Index = () => {
  const [result, setResult] = useState<number[] | undefined>();
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const stackRef = useRef<HTMLInputElement>(null);
  const opCodeRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const lastResult = await SimpleVM.getLastResult();
        console.log(lastResult);
        setResult(lastResult);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const validateValues = (
    stackValue: number[],
    opCodeValue: number[]
  ): boolean => {
    if (stackValue.length === 0 || opCodeValue.length === 0) {
      setError("Both Stack and OpCode values must be provided");
      return false;
    }
    setError("");
    return true;
  };

  const handleExecuteButton = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!stackRef.current || !opCodeRef.current) {
      return;
    }
    const stackValue = stackRef.current?.value.split("").map(Number);
    const opCodeValue = opCodeRef.current?.value.split("").map(Number);

    if (!validateValues(stackValue, opCodeValue)) {
      return;
    }

    console.log("Stack Value:", stackValue);
    console.log("OpCode Value:", opCodeValue);
    try {
      const tx = await (
        await getSimpleVMWithSigner()
      ).execute(stackValue, opCodeValue);
      setLoader(true);
      const response = await tx.wait();
      setLoader(false);
      console.log(response);
      router.reload();
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <Layout>
        <StyledFormContainer onSubmit={handleExecuteButton}>
          <Title>SimpleVM</Title>
          <StyledLabelInput
            label="Stack"
            name="stack"
            id="stack"
            type="text"
            placeholder={"add new stack, e.g. 3456"}
            tooltipText="stack"
            inputRef={stackRef}
          />
          <StyledLabelInput
            label="OpCode"
            name="opcode"
            id="opcode"
            type="text"
            placeholder={"add new opcode, e.g 022"}
            tooltipText="opcode"
            inputRef={opCodeRef}
          />
          {error && (
            <div style={{ color: "red", fontSize: "12px" }}>{error}</div>
          )}

          <OpcodeStrings />

          <ResultAndExecute
            spinner={BeatLoader}
            loader={loader}
            result={result ? result + "" : ""}
          />
        </StyledFormContainer>
      </Layout>
    </>
  );
};

export default Index;
