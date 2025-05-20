import { ChevronLeft, ChevronRight } from "lucide-react";
export default function QuestionPatternS2() {
  return (
    <>
      <OuterSec>
        <div className="flex px-4 items-center font-semibold">
          <label htmlFor="S_13">Address of the clinic & Hospital</label>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <input
            type="text"
            name=""
            id="S_13"
            className="border-2 border-[#5224b5] p-2 rounded-md w-full outline-none"
          />
        </div>
        <div className="flex px-4 items-center font-semibold">
          <label htmlFor="S_14">Name of the Chemist</label>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <input
            type="text"
            name=""
            id="S_14"
            className="border-2 border-[#5224b5] p-2 rounded-md w-full outline-none"
          />
        </div>
        <div className="flex px-4 items-center font-semibold">
          <label htmlFor="S_15">
            Distance from Doctor's Clinic (in mt./km)
          </label>
        </div>
        <div className="flex gap-1 px-4 items-center font-semibold">
          <input
            type="number"
            name=""
            id="S_15"
            className="border-2 border-[#5224b5] p-2 rounded-md w-[70%] outline-none"
          />
          <select
            className="border-2 border-[#5224b5] p-2 rounded-md w-[30%] outline-none"
            id="S_15_u"
          >
            <option value="mt">mt</option>
            <option value="km">km</option>
          </select>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <label>Location of the chemist</label>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <select
            className="border-2 border-[#5224b5] p-2 rounded-md w-full outline-none"
            id="S_16"
          >
            <option value="">--Select--</option>
            <option value="Front">Front</option>
            <option value="Back">Back</option>
            <option value="Left_Adjacent">Left Adjacent</option>
            <option value="Right_Adjacent">Right Adjacent</option>
            <option value="Distant">Distant</option>
            <option value="Wihin_Campus">Wihin Campus</option>
          </select>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <label htmlFor="S_17">Address of the Chemist</label>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <input
            type="text"
            name=""
            id="S_17"
            className="border-2 border-[#5224b5] p-2 rounded-md w-full outline-none"
          />
        </div>
        <div className="flex px-4 items-center font-semibold">
          <label htmlFor="S_18">Name of the Respondent in the chemist</label>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <input
            type="text"
            name=""
            id="S_18"
            className="border-2 border-[#5224b5] p-2 rounded-md w-full outline-none"
          />
        </div>
      </OuterSec>
      <OuterSec>
        <div className="flex px-4 items-center font-semibold">
          <label htmlFor="S_19">Designation</label>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <input
            type="text"
            name=""
            id="S_19"
            className="border-2 border-[#5224b5] p-2 rounded-md w-full outline-none"
          />
        </div>
        <div className="flex px-4 items-center font-semibold">
          <label htmlFor="S_20">Mobile No</label>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <input
            type="number"
            name=""
            id="S_20"
            className="border-2 border-[#5224b5] p-2 rounded-md w-full outline-none"
          />
        </div>
        <div className="flex px-4 items-center font-semibold">
          <label htmlFor="S_21">Email ID</label>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <input
            type="email"
            name=""
            id="S_21"
            className="border-2 border-[#5224b5] p-2 rounded-md w-full outline-none"
          />
        </div>
      </OuterSec>
      <div
        className="fixed p-2 bg-[#5224b5] text-white rounded-full cursor-pointer"
        style={{ top: "50%", left: "20px", transform: "translate(-50%,0%)" }}
        title="Previous"
      >
        <ChevronLeft />
      </div>
      <div
        className="fixed p-2 bg-[#5224b5] text-white rounded-full cursor-pointer"
        style={{ top: "50%", right: "-20px", transform: "translate(-50%,0%)" }}
        title="Next"
      >
        <ChevronRight />
      </div>
      <div className="bg-[#9f0711c6] backdrop-blur-sm text-white p-3 rounded-md fixed bottom-4 right-4 hidden">
        Some fields are missing or invalid!
      </div>
    </>
  );
}

function OuterSec({ children }) {
  return (
    <section className="w-full sm:w-[45%] h-auto sm:h-full border-2 sm:border-[#5224b5] text-[#5224b5] border-transparent p-3 rounded-md grid grid-cols-1 grid-rows-6 sm:grid-cols-2 gap-2.5">
      {children}
    </section>
  );
}
