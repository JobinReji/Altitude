import { ChevronLeft, ChevronRight } from "lucide-react";
export default function QuestionPatternM4() {
  return (
    <div className="w-full sm:w-[80%] border-2 sm:border-[#5224b5] text-[#5224b5] border-transparent p-1 rounded-md overflow-auto">
      <div className="sm:mx-6 sm:my-2">
        4. Which are the other doctors who are prescribing the following brands
        within their vicinity ?
      </div>
      <div className=" flex justify-center">
        <section className="w-full sm:w-[80%] h-auto sm:h-full grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:gap-2.5 ">
          <div className="flex flex-col px-4 items-start p-1">
            <label className="mx-2 w-full sm:w-[70%]">
              Ensure Diabetes Care (Abbott)
            </label>
            <textarea
              id="M_2_1"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-full sm:w-[60%]"
            ></textarea>
          </div>
          <div className="flex flex-col px-4 items-start p-1">
            <label className="mx-2 w-full sm:w-[70%]">
              Prohance D (Sun Pharma)
            </label>
            <textarea
              id="M_2_2"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-full sm:w-[60%]"
            ></textarea>
          </div>
          <div className="flex flex-col px-4 items-start p-1">
            <label className="mx-2 w-full sm:w-[70%]">
              Protinex Diabetes Care (Danone -Nutricia)
            </label>
            <textarea
              id="M_2_3"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-full sm:w-[60%]"
            ></textarea>
          </div>
          <div className="flex flex-col px-4 items-start p-1">
            <label className="mx-2 w-full sm:w-[70%]">
              D-Protin (British Biologicals)
            </label>
            <textarea
              id="M_2_4"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-full sm:w-[60%]"
            ></textarea>
          </div>
          <div className="flex flex-col px-4 items-start p-1">
            <label className="mx-2 w-full sm:w-[70%]">
              Horlicks Diabetes Plus (HUL)
            </label>
            <textarea
              id="M_2_5"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-full sm:w-[60%]"
            ></textarea>
          </div>
          <div className="flex flex-col px-4 items-start p-1">
            <label className="mx-2 w-full sm:w-[70%]">
              Celevida (Dr. Reddy’s Laboratories)
            </label>
            <textarea
              id="M_2_6"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-full sm:w-[60%]"
            ></textarea>
          </div>
          <div className="flex flex-col px-4 items-start p-1">
            <label className="mx-2 w-full sm:w-[70%]">
              Resource Diabetes (Nestlé India)
            </label>
            <textarea
              id="M_2_7"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-full sm:w-[60%]"
            ></textarea>
          </div>
          <div className="flex flex-col px-4 items-start p-1">
            <label className="mx-2 w-full sm:w-[70%]">
              Fresubin DM (Fresenius Kabi India)
            </label>
            <textarea
              id="M_2_8"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-full sm:w-[60%]"
            ></textarea>
          </div>
          <div className="flex flex-col px-4 items-start p-1">
            <label className="mx-2 w-full sm:w-[70%]">
              Pentasure DM (Hexagon Nutrition)
            </label>
            <textarea
              id="M_2_9"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-full sm:w-[60%]"
            ></textarea>
          </div>
          <div className="flex flex-col px-4 items-start p-1">
            <label className="mx-2 w-full sm:w-[70%]">Others-1</label>
            <textarea
              id="M_2_10"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-full sm:w-[60%]"
            />
          </div>
          <div className="flex flex-col px-4 items-start p-1">
            <label className="mx-2 w-full sm:w-[70%]">Others-2</label>
            <textarea
              id="M_2_11"
              className="border-2 border-[#5224b5] p-2 rounded-md outline-none w-full sm:w-[60%]"
            ></textarea>
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
