import { ChevronLeft, ChevronRight } from "lucide-react";
export default function QuestionPatternM3_Celevida() {
  return (
    <div className="w-full sm:w-[80%] border-2 sm:border-[#5224b5] text-[#5224b5] border-transparent p-1 rounded-md sm:min-h-[70vh]">
      <div className="sm:mx-6 sm:my-2">
        3. Kindly help me to understand on the units that you dispensed in a
        week?
      </div>
      <div className=" flex justify-center">
        <section className="w-full sm:w-[80%] h-auto sm:h-full grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:gap-2.5 ">
          <div className="font-bold sm:mx-4">
            Celevida ( Dr. Reddy’s Laboratories)
          </div>
          <div className="sm:block hidden"></div>
          <div className="flex px-4 items-center p-1">
            <input
              type="checkbox"
              name="M_3"
              className="accent-[#5224b5]"
              id="M_3_1"
            />
            <label htmlFor="M_3_1" className="mx-2">
              200GM-Vanilla-Powder Tin
            </label>
          </div>
          <div className="flex px-4 items-center p-1">
            <input
              type="checkbox"
              name="M_3"
              className="accent-[#5224b5]"
              id="M_3_2"
            />
            <label htmlFor="M_3_2" className="mx-2">
              400GM-Vanilla-Powder Tin
            </label>
          </div>
          <div className="flex px-4 items-center p-1">
            <input
              type="checkbox"
              name="M_3"
              className="accent-[#5224b5]"
              id="M_3_3"
            />
            <label htmlFor="M_3_3" className="mx-2">
              500GM-Vanilla-Powder Tin
            </label>
          </div>
          <div className="flex px-4 items-center p-1">
            <input
              type="checkbox"
              name="M_3"
              className="accent-[#5224b5]"
              id="M_3_4"
            />
            <label htmlFor="M_3_4" className="mx-2">
              200GM-Chocolate-Powder Tin
            </label>
          </div>
          <div className="flex px-4 items-center p-1">
            <input
              type="checkbox"
              name="M_3"
              className="accent-[#5224b5]"
              id="M_3_5"
            />
            <label htmlFor="M_3_5" className="mx-2">
              500GM-Chocolate-Powder Tin
            </label>
          </div>
          <div className="flex px-4 items-center p-1">
            <input
              type="checkbox"
              name="M_3"
              className="accent-[#5224b5]"
              id="M_3_6"
            />
            <label htmlFor="M_3_6" className="mx-2">
              400GM-Kesar Elaichi-Powder Tin
            </label>
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
