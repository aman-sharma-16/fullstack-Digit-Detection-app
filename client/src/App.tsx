import { useState } from "react";
import NavBar from "./components/NavBar";
import OutputBox from "./components/OutputBox";
import { PostRequest } from "./controllers/postRequest";
import WritingPad from "./components/WritingPad";

function App() {
  const [predictedNumber, setPredictedNumber] = useState<number | undefined>();
  const classifyImage = async (image: number[]) => {
    const result = await PostRequest(image);
    if (result.success) {
      setPredictedNumber(Number(JSON.parse(result.message)[0]));
    } else {
      console.log(result);
    }
  };
  return (
    <div className="h-screen w-screen overflow-hidden">
      <NavBar />
      {/* <InputForm classifyImage={classifyImage} /> */}
      <WritingPad classifyImage={classifyImage}/>
      <OutputBox predictedNumber={predictedNumber} />
    </div>
  );
}

export default App;
