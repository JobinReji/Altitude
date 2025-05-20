import { ChevronLeft, ChevronRight } from "lucide-react";
export default function QuestionPatternM1() {
  return (
    <div className="w-full sm:w-[80%] border-2 sm:border-[#5224b5] text-[#5224b5] border-transparent p-1 rounded-md">
      <div className="sm:mx-6 sm:my-2">
        1. Do you get the Rx. of Following Brands from the respective doctor?
      </div>
      <div className=" flex justify-center">
        <section className="w-full sm:w-[80%] h-auto sm:h-full grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:gap-2.5 ">
          <div className="flex px-4 items-center p-1">
            <input
              type="checkbox"
              name="M_1"
              className="accent-[#5224b5]"
              id="M_1_1"
            />
            <label htmlFor="M_1_1" className="mx-2">
              Ensure Diabetes Care (Abbott)
            </label>
          </div>
          <div className="flex px-4 items-center p-1">
            <input
              type="checkbox"
              name="M_1"
              className="accent-[#5224b5]"
              id="M_1_2"
            />
            <label htmlFor="M_1_2" className="mx-2">
              Prohance D (Sun Pharma)
            </label>
          </div>
          <div className="flex px-4 items-center p-1">
            <input
              type="checkbox"
              name="M_1"
              className="accent-[#5224b5]"
              id="M_1_3"
            />
            <label htmlFor="M_1_3" className="mx-2">
              Protinex Diabetes Care (Danone -Nutricia)
            </label>
          </div>
          <div className="flex px-4 items-center p-1">
            <input
              type="checkbox"
              name="M_1"
              className="accent-[#5224b5]"
              id="M_1_4"
            />
            <label htmlFor="M_1_4" className="mx-2">
              D-Protin (British Biologicals)
            </label>
          </div>
          <div className="flex px-4 items-center p-1">
            <input
              type="checkbox"
              name="M_1"
              className="accent-[#5224b5]"
              id="M_1_5"
            />
            <label htmlFor="M_1_5" className="mx-2">
              Horlicks Diabetes Plus (HUL)
            </label>
          </div>
          <div className="flex px-4 items-center p-1">
            <input
              type="checkbox"
              name="M_1"
              className="accent-[#5224b5]"
              id="M_1_6"
            />
            <label htmlFor="M_1_6" className="mx-2">
              Celevida (Dr. Reddy’s Laboratories)
            </label>
          </div>
          <div className="flex px-4 items-center p-1">
            <input
              type="checkbox"
              name="M_1"
              className="accent-[#5224b5]"
              id="M_1_7"
            />
            <label htmlFor="M_1_7" className="mx-2">
              Resource Diabetes (Nestlé India)
            </label>
          </div>
          <div className="flex px-4 items-center p-1">
            <input
              type="checkbox"
              name="M_1"
              className="accent-[#5224b5]"
              id="M_1_8"
            />
            <label htmlFor="M_1_8" className="mx-2">
              Fresubin DM (Fresenius Kabi India)
            </label>
          </div>
          <div className="flex px-4 items-center p-1">
            <input
              type="checkbox"
              name="M_1"
              className="accent-[#5224b5]"
              id="M_1_9"
            />
            <label htmlFor="M_1_9" className="mx-2">
              Pentasure DM (Hexagon Nutrition)
            </label>
          </div>
          <div className="sm:flex px-4 items-center p-1">
            <input
              type="checkbox"
              name="M_1"
              className="accent-[#5224b5]"
              id="M_1_10"
            />
            <label htmlFor="M_1_10" className="mx-2">
              Others-1
            </label>
            <input
              type="text"
              id="M_1_10t"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none"
            />
          </div>
          <div className="sm:flex px-4 items-center p-1">
            <input
              type="checkbox"
              name="M_1"
              className="accent-[#5224b5]"
              id="M_1_11"
            />
            <label htmlFor="M_1_11" className="mx-2">
              Others-2
            </label>
            <input
              type="text"
              id="M_1_11t"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none"
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
