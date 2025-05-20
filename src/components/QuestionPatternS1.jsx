import { ChevronLeft, ChevronRight } from "lucide-react";
export default function QuestionPatternS1() {
  return (
    <>
      <OuterSec>
        <div className="flex px-4 items-center font-semibold">
          <label htmlFor="S_1">Date</label>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <input
            type="date"
            id="S_1"
            className="border-2 border-[#5224b5] p-2 rounded-md w-full outline-none"
          />
        </div>
        <div className="flex px-4 items-center font-semibold">
          <label htmlFor="S_2">Interviewed by Impeerical Analyst</label>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <input
            type="text"
            name=""
            id="S_2"
            className="border-2 border-[#5224b5] p-2 rounded-md w-full outline-none"
          />
        </div>
        <div className="flex px-4 items-center font-semibold">
          <label htmlFor="S_3">Client Serial No.</label>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <input
            type="text"
            name=""
            id="S_3"
            className="border-2 border-[#5224b5] p-2 rounded-md w-full outline-none"
          />
        </div>
        <div className="flex px-4 items-center font-semibold">
          <label htmlFor="S_4">OCE ID</label>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <input
            type="text"
            name=""
            id="S_4"
            className="border-2 border-[#5224b5] p-2 rounded-md w-full outline-none"
          />
        </div>
        <div className="flex px-4 items-center font-semibold">
          <label>Zone</label>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <select
            className="border-2 border-[#5224b5] p-2 rounded-md w-full outline-none"
            id="S_5"
          >
            <option>--Select--</option>
          </select>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <label>Type of city</label>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <select
            className="border-2 border-[#5224b5] py-2 rounded-md w-full"
            id="S_6"
          >
            <option>--Select--</option>
          </select>
        </div>
      </OuterSec>
      <OuterSec>
        <div className="flex px-4 items-center font-semibold">
          <label htmlFor="date">City</label>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <select
            className="border-2 border-[#5224b5] py-2 rounded-md w-full"
            id="S_7"
          >
            <option>--Select--</option>
          </select>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <label htmlFor="Int">State</label>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <select
            className="border-2 border-[#5224b5] py-2 rounded-md w-full"
            id="S_8"
          >
            <option>--Select--</option>
          </select>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <label htmlFor="S_9">HCP Name</label>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <input
            type="text"
            name=""
            id="S_9"
            className="border-2 border-[#5224b5] p-2 rounded-md w-full outline-none"
          />
        </div>
        <div className="flex px-4 items-center font-semibold">
          <label>Core/ Super Core</label>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <div className="border-2 border-[#5224b5] p-2 rounded-md w-full outline-none flex justify-around">
            <div>
              <input
                type="radio"
                name="S_10"
                id="S_10_1"
                className="accent-[#5224b5]"
              />
              <label htmlFor="S_10_1" className="px-1">
                Core
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="S_10"
                id="S_10_2"
                className="accent-[#5224b5]"
              />
              <label htmlFor="S_10_2" className="px-1">
                Super Core
              </label>
            </div>
          </div>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <label htmlFor="S_11">Zone</label>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <input
            type="text"
            name="S_11"
            id="S_11"
            className="border-2 border-[#5224b5] p-2 rounded-md w-full outline-none"
          />
        </div>
        <div className="flex px-4 items-center font-semibold">
          <label>Clinic/ Hospital</label>
        </div>
        <div className="flex px-4 items-center font-semibold">
          <div className="border-2 border-[#5224b5] p-2 rounded-md w-full outline-none flex justify-around">
            <div>
              <input
                type="radio"
                name="S_12"
                id="S_12_1"
                className="accent-[#5224b5]"
              />
              <label htmlFor="S_12_1" className="px-1">
                Clinic
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="S_12"
                id="S_12_2"
                className="accent-[#5224b5]"
              />
              <label htmlFor="S_12_2" className="px-1">
                Hospital
              </label>
            </div>
          </div>
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
