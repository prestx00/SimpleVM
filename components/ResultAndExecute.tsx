import {
  ResultAndExecuteContainer,
  ResultText,
  ExecuteButton,
} from "./styledcomponents/ResultAndExecuteStyledComponents";

interface ResultAndExecuteProps {
  result: string;
  loader: boolean;
  spinner: React.ComponentType<{ color: string }>;
}

const ResultAndExecute = ({
  result,
  loader,
  spinner: Spinner,
}: ResultAndExecuteProps) => {
  return (
    <>
      <ResultAndExecuteContainer>
        <div>
          <ResultText>{`Result:${result}`}</ResultText>
        </div>
        <div>
          <ExecuteButton disabled={loader}>
            {loader ? <Spinner color="#ffffff" /> : "Execute"}
          </ExecuteButton>
        </div>
      </ResultAndExecuteContainer>
    </>
  );
};

export default ResultAndExecute;
