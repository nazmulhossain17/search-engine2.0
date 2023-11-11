import firstImg from "../../assets/bg.svg";
import Input from "../Input/Input";
const StartPage = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-24">
        <img src={firstImg} width={600} height={500} />
        <h1 className="text-green-600">Hi</h1>
      </div>
    </>
  );
};

export default StartPage;
