import { ChevronLeft, ChevronRight } from "lucide-react";
export default function TableView_ResourceD() {
  return (
    <div className="w-full sm:w-[80%] border-2 sm:border-[#5224b5] text-[#5224b5] border-transparent p-1 rounded-md sm:min-h-[70vh]">
      <div className="sm:mx-6 sm:my-2">
        3. Kindly help me to understand on the units that you dispensed in a
        week?
      </div>
      <div className="flex justify-center h-full">
        <section className="w-full sm:w-[80%] h-full grid grid-cols-1 sm:gap-2.5 ">
          <div className="font-bold sm:mx-4">Resource Diabetes (Nestlé India)</div>
          <div class="relative max-h-[60vh] overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right border-2 text-[#5224B5] rounded-xl">
              <thead class="text-xs sticky top-0 text-white uppercase bg-[#5224B5]">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 w-[55%] border-white border-r-2"
                  >
                    Units Sold
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 w-[15%] border-white border-r-2"
                  >
                    Rx
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 w-[15%] border-white border-r-2"
                  >
                    Rc
                  </th>
                  <th scope="col" class="px-6 py-3 w-[15%]">
                    In a week
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b-2 border-[#5224B5]">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium border-[#5224B5] border-r-2 text-[#0199BE] whitespace-nowrap"
                  >
                    400GM-Vanilla-Tin 
                  </th>
                  <td class="px-6 py-4 border-r-2">16</td>
                  <td class="px-6 py-4 border-r-2">16</td>
                  <td class="px-6 py-4">32</td>
                </tr>
                </tbody>
            </table>
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
