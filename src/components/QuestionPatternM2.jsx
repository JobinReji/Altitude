import { ChevronLeft, ChevronRight } from "lucide-react";
export default function QuestionPatternM2() {
  return (
    <div className="w-full sm:w-[80%] border-2 sm:border-[#5224b5] text-[#5224b5] border-transparent p-1 rounded-md">
      <div className="sm:mx-6">
        2. How many prescriptions do you get on the following brands in a week?
      </div>
      <div className=" flex justify-center">
        <section className="w-full sm:w-[80%] h-auto sm:h-full grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:gap-2.5 ">
          <div className="flex px-4 items-center p-1">
            <label className="mx-2 w-[60%] sm:w-[70%]">
              Ensure Diabetes Care (Abbott)
            </label>
            <input
              type="text"
              id="M_2_1"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-[20%]"
            />
          </div>
          <div className="flex px-4 items-center p-1">
            <label className="mx-2 w-[60%] sm:w-[70%]">
              Prohance D (Sun Pharma)
            </label>
            <input
              type="text"
              id="M_2_2"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-[20%]"
            />
          </div>
          <div className="flex px-4 items-center p-1">
            <label className="mx-2 w-[60%] sm:w-[70%]">
              Protinex Diabetes Care (Danone -Nutricia)
            </label>
            <input
              type="text"
              id="M_2_3"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-[20%]"
            />
          </div>
          <div className="flex px-4 items-center p-1">
            <label className="mx-2 w-[60%] sm:w-[70%]">
              D-Protin (British Biologicals)
            </label>
            <input
              type="text"
              id="M_2_4"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-[20%]"
            />
          </div>
          <div className="flex px-4 items-center p-1">
            <label className="mx-2 w-[60%] sm:w-[70%]">
              Horlicks Diabetes Plus (HUL)
            </label>
            <input
              type="text"
              id="M_2_5"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-[20%]"
            />
          </div>
          <div className="flex px-4 items-center p-1">
            <label className="mx-2 w-[60%] sm:w-[70%]">
              Celevida (Dr. Reddy’s Laboratories)
            </label>
            <input
              type="text"
              id="M_2_6"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-[20%]"
            />
          </div>
          <div className="flex px-4 items-center p-1">
            <label className="mx-2 w-[60%] sm:w-[70%]">
              Resource Diabetes (Nestlé India)
            </label>
            <input
              type="text"
              id="M_2_7"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-[20%]"
            />
          </div>
          <div className="flex px-4 items-center p-1">
            <label className="mx-2 w-[60%] sm:w-[70%]">
              Fresubin DM (Fresenius Kabi India)
            </label>
            <input
              type="text"
              id="M_2_8"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-[20%]"
            />
          </div>
          <div className="flex px-4 items-center p-1">
            <label className="mx-2 w-[60%] sm:w-[70%]">
              Pentasure DM (Hexagon Nutrition)
            </label>
            <input
              type="text"
              id="M_2_9"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-[20%]"
            />
          </div>
          <div className="flex px-4 items-center p-1">
            <label className="mx-2 w-[60%] sm:w-[70%]">Others-1</label>
            <input
              type="text"
              id="M_2_10"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-[20%]"
            />
          </div>
          <div className="flex px-4 items-center p-1">
            <label className="mx-2 w-[60%] sm:w-[70%]">Others-2</label>
            <input
              type="text"
              id="M_2_11"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-[20%]"
            />
          </div>
        </section>
      </div>
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
    </div>
  );
}
