import bgImgD from "./assets/bg-imgD.png";
import bgImgM from "./assets/bg-imgM.png";
import Header from "./components/Header";
import Login from "./components/Login";
import QuestionPatternSa from "./components/QuestionPatternS1";
import QuestionPatternSb from "./components/QuestionPatternS2";
import QuestionPatternM1 from "./components/QuestionPatternM1";
import QuestionPatternM2 from "./components/QuestionPatternM2";
import QuestionPatternM3_Ensure from "./components/QuestionPatternM3_Ensure";
import QuestionPatternM3_ProhanceD from "./components/QuestionPatternM3_ProhanceD";
import QuestionPatternM3_ProtinexD from "./components/QuestionPatternM3_ProtinexD";
import QuestionPatternM3_DProtin from "./components/QuestionPatternM3_DProtin";
import QuestionPatternM3_HorlicksD from "./components/QuestionPatternM3_HorlicksD";
import QuestionPatternM3_Celevida from "./components/QuestionPatternM3_Celevida";
import QuestionPatternM3_ResourceD from "./components/QuestionPatternM3_ResourceD";
import QuestionPatternM3_FresubinDM from "./components/QuestionPatternM3_FresubinDM";
import QuestionPatternM3_PentasureDM from "./components/QuestionPatternM3_PentasureDM";
import TableView_Ensure from "./components/TableView_Ensure";
import TableView_ProhanceD from "./components/TableView_ProhanceD";
import TableView_ProtinexD from "./components/TableView_ProtinexD";
import TableView_DProtin from "./components/TableView_DProtin";
import TableView_HorlicksD from "./components/TableView_HorlicksD";
import TableView_Celevida from "./components/TableView_Celevida";
import TableView_ResourceD from "./components/TableView_ResourceD";
import TableView_FresubinDM from "./components/TableView_FresubinDM";
import TableView_PentasureDM from "./components/TableView_PentasureDM";
import QuestionPatternM4 from "./components/QuestionPatternM4";
import ThankYou from "./components/ThankYou";
import MisStatus from "./components/MisStatus";
import Dashboard from "./components/dashboard";
import Dashboard2 from "./components/Dashboard2";
import Dashboard3 from "./components/Dashboard3";
import Dashboard3_2 from "./components/Dashboard3_2";
import Dashboard4 from "./components/Dashboard4";
import Dashboard4_2 from "./components/Dashboard4_2";
import Dashboard5 from "./components/Dashboard5";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen">
      {/* <Login /> */}
      <Header />
      <section className="h-[90%] w-full sm:p-4 p-2">
        {/* <Dashboard /> */}
        {/* <Dashboard2 /> */}
        {/* <Dashboard3 /> */}
        {/* <Dashboard3_2 /> */}
        {/* <Dashboard4 /> */}
        {/* <Dashboard4_2 /> */}
        {/* <Dashboard5 /> */}
        <div
          className="h-full w-full bg-center bg-cover rounded-xl flex sm:flex-row flex-col justify-around p-4 overflow-auto sm:border-none border-2 border-[#5224b5] relative"
          style={{
            backgroundImage: `url(${bgImgD})`,
            // For screens sm and larger
            "@media (minWidth: 640px)": {
              backgroundImage: `url(${bgImgM})`,
            },
          }}
        >
          {/* <QuestionPatternSa /> */}
          {/* <QuestionPatternSb /> */}
          {/* <QuestionPatternM1 /> */}
          {/* <QuestionPatternM2 /> */}
          {/* <QuestionPatternM3_Ensure /> */}
          {/* <QuestionPatternM3_ProhanceD /> */}
          {/* <QuestionPatternM3_ProtinexD /> */}
          {/* <QuestionPatternM3_DProtin /> */}
          {/* <QuestionPatternM3_HorlicksD /> */}
          {/* <QuestionPatternM3_Celevida /> */}
          {/* <QuestionPatternM3_ResourceD /> */}
          {/* <QuestionPatternM3_FresubinDM /> */}
          {/* <QuestionPatternM3_PentasureDM /> */}
          {/* <TableView_Ensure /> */}
          {/* <TableView_ProhanceD /> */}
          {/* <TableView_ProtinexD /> */}
          {/* <TableView_DProtin /> */}
          {/* <TableView_HorlicksD /> */}
          {/* <TableView_Celevida /> */}
          {/* <TableView_ResourceD /> */}
          {/* <TableView_FresubinDM /> */}
          {/* <TableView_PentasureDM /> */}
          {/* <QuestionPatternM4 /> */}
          {/* <ThankYou /> */}
          <MisStatus />
        </div>
      </section>
    </div>
  );
}

export default App;
