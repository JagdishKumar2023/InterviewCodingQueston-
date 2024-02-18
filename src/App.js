import "./App.css";
// import { InterviewCoding } from "./components/InterviewCoding";
// import InterviewFirstCode from "./components/InterviewFirstCode";
// import { RadioButton } from "./components/RadioButton";
// import { InterviewDropDown } from "./components/IntervieDropDown";
// import { InterviewRound } from "./components/InterviewRound";
import { PostComponent } from "./components/PostComponent";
import { PostApi } from "./components/PostApi";
function App() {
  return (
    <div className="App">
      {/* <InterviewDropDown /> */}
      {/* <InterviewRound /> */}
      {/* <RadioButton /> */}
      {/* <InterviewCoding /> */}
      {/* <InterviewFirstCode /> */}
      <PostComponent />
      <PostApi />
    </div>
  );
}

export default App;
