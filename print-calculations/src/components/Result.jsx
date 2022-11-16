import { useGlobalContext } from "../Context";

const Result = () => {
  const { result } = useGlobalContext();

  return (
    <div className="outer-result">
      <section className="result">${result}</section>
    </div>
  );
};

export default Result;
