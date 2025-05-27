import Select from "react-select";
import { useState } from "react";
import { BrandDispersionL2, BrandDispersion2 } from "./DashCharts";
import { ChevronLeft, ChevronRight } from "lucide-react";

const state = [
  { value: "Karnataka", label: "Karnataka" },
  { value: "Goa", label: "Goa" },
  { value: "Maharastra", label: "Maharastra" },
  { value: "Delhi", label: "Delhi" },
];
const city = [
  { value: "Bangaluru", label: "Bangaluru" },
  { value: "Mangaluru", label: "Mangaluru" },
  { value: "Mumbai", label: "Mumbai" },
  { value: "Pune", label: "Pune" },
];
const typeOfCity = [
  { value: "City", label: "City" },
  { value: "Village", label: "Village" },
];
const hcp = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

const customStyles = {
  control: (base, state) => ({
    ...base,
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: "2px",
    borderColor: "#5224b5",
    fontSize: isMobile ? "12px" : "16px",
    padding: isMobile ? "0px" : "2px",
    borderRadius: "6px",
    minHeight: "40px",
    boxShadow: state.isFocused ? "0 0 0 1px #5224b5" : null,
    "&:hover": {
      borderColor: "#5224b5",
    },
  }),
  option: (base) => ({
    ...base,
    backgroundColor: "#fff",
    color: "#5224b5",
    fontSize: isMobile ? "12px" : "16px",
    "&:hover": {
      backgroundColor: "#5224b5",
      color: "#fff",
    },
  }),
  singleValue: (base) => ({
    ...base,
    color: "#5224b5",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#5224b5",
  }),
  clearIndicator: (base) => ({
    ...base,
    color: "#5224b5",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#5224b5",
  }),
};

function FilterData({ selectId, options }) {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <Select
      id={selectId}
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
      isClearable
      styles={customStyles}
      className="mt-2"
      classNamePrefix="select"
      placeholder="--Select--"
    />
  );
}

export default function Dashboard4_2() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      {/* Filter section - compact on mobile */}
      <div className="sticky top-0 z-10 bg-white sm:static sm:bg-transparent sm:flex sm:justify-around w-full sm:w-[90%] h-auto text-[#5224b5] px-2 sm:px-0 py-2 sm:py-0">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-8 sm:w-full">
          <div className="pb-1 sm:pb-3">
            <div className="text-center text-xs sm:text-base">
              <label>State</label>
            </div>
            <FilterData selectId="D_1" options={state} />
          </div>
          <div className="pb-1 sm:pb-3">
            <div className="text-center text-xs sm:text-base">
              <label>City</label>
            </div>
            <FilterData selectId="D_2" options={city} />
          </div>
          <div className="pb-1 sm:pb-3">
            <div className="text-center text-xs sm:text-base">
              <label>Type of City</label>
            </div>
            <FilterData selectId="D_3" options={typeOfCity} />
          </div>
          <div className="pb-1 sm:pb-3">
            <div className="text-center text-xs sm:text-base">
              <label>HCP Speciality</label>
            </div>
            <FilterData selectId="D_4" options={hcp} />
          </div>
        </div>
      </div>
      <div className="w-full p-1 flex justify-end gap-4">
        <button className="inActiveBtn">Brands</button>
        <button className="activeBtn">SKU's</button>
      </div>
      <div className="sm:w-[75%] w-full h-[70vh] overflow-x-auto sm:block hidden">
        <div className="w-full flex">
          <div className="sm:max-w-[67%] sm:min-w-[513px] min-w-[460px] flex justify-center items-center py-2 border-b-2 border-r-2 border-[#5224B5] font-semibold bg-[#E9E3F6]">
            Brands
          </div>
          <div className="sm:max-w-[11%] min-w-[200px] flex flex-col justify-center items-center py-2 border-b-2 border-r-2 border-[#5224B5] font-semibold bg-[#E9E3F6]">
            <div>Incidence</div>
            <div>n=300</div>
          </div>
          <div className="sm:max-w-[11%] min-w-[200px] flex flex-col justify-center items-center py-2 border-b-2 border-r-2 border-[#5224B5] font-semibold bg-[#E9E3F6]">
            <div>Volume Share</div>
            <div>1000 units</div>
          </div>
          <div className="sm:max-w-[11%] min-w-[200px] flex flex-col justify-center items-center py-2 border-b-2 border-[#5224B5] font-semibold bg-[#E9E3F6]">
            <div>Value Share</div>
            <div>₹10,000</div>
          </div>
        </div>
        <div className="h-[80%] flex overflow-x-scroll">
          <div className="flex h-[500%] w-full">
            <div className="sm:w-[70%] min-w-[460px] h-full border-r-2 border-[#5224B5] flex flex-col">
              <BrandDispersionL2 />
            </div>
            <div className="sm:w-[10%] min-w-[200px] h-full border-r-2 border-[#5224B5]">
              <BrandDispersion2
                data={[
                  72, 47, 40, 34, 32, 30, 27, 20, 72, 47, 40, 34, 32, 30, 27,
                  20, 72, 47, 40, 34, 32, 30, 27, 20, 72, 47, 40, 34, 32, 30,
                  27, 20, 72, 47, 40, 34, 32, 30, 27, 20,
                ]}
              />
            </div>
            <div className="sm:w-[10%] min-w-[200px] h-full border-r-2 border-[#5224B5]">
              <BrandDispersion2
                data={[
                  65, 42, 38, 30, 28, 25, 22, 18, 65, 42, 38, 30, 28, 25, 22,
                  18, 65, 42, 38, 30, 28, 25, 22, 18, 65, 42, 38, 30, 28, 25,
                  22, 18, 65, 42, 38, 30, 28, 25, 22, 18,
                ]}
              />
            </div>
            <div className="sm:w-[10%] min-w-[200px] h-full">
              <BrandDispersion2
                data={[
                  50, 40, 35, 30, 25, 20, 15, 10, 50, 40, 35, 30, 25, 20, 15,
                  10, 50, 40, 35, 30, 25, 20, 15, 10, 50, 40, 35, 30, 25, 20,
                  15, 10, 50, 40, 35, 30, 25, 20, 15, 10,
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center sm:w-[33%] w-full p-2 rounded-xl shadow_out bg-violet-800/10 text-sm h-[55vh] sm:hidden">
        <div className="m-1 overflow-auto w-[95%] h-full sm-tab dash_tab2">
          <table id="dash_tab" className="w-full">
            <thead className="sticky top-0 text-[#5224b5]">
              <tr>
                <th className="p-2 min-w-[200px]">Brands</th>
                <th className="p-2 min-w-[100px]">
                  <div>
                    <div>Incidence</div>
                    <div>n=300</div>
                  </div>
                </th>
                <th className="p-2 min-w-[100px]">
                  <div>
                    <div>Volume Share</div>
                    <div>1000 units</div>
                  </div>
                </th>
                <th className="p-2 min-w-[100px]">
                  <div>
                    <div>Value Share</div>
                    <div>₹10,000</div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-black text-center">
              <tr>
                <td>Ensure (Abbott) - 200GM-Chocolate-Box</td>
                <td>49%</td>
                <td>57%</td>
                <td>45%</td>
              </tr>
              <tr>
                <td>Ensure (Abbott) - 200GM-Chocolate-Box</td>
                <td>49%</td>
                <td>57%</td>
                <td>45%</td>
              </tr>
              <tr>
                <td>Ensure (Abbott) - 200GM-Chocolate-Box</td>
                <td>49%</td>
                <td>57%</td>
                <td>45%</td>
              </tr>
              <tr>
                <td>Ensure (Abbott) - 200GM-Chocolate-Box</td>
                <td>49%</td>
                <td>57%</td>
                <td>45%</td>
              </tr>
              <tr>
                <td>Ensure (Abbott) - 200GM-Chocolate-Box</td>
                <td>49%</td>
                <td>57%</td>
                <td>45%</td>
              </tr>
              <tr>
                <td>Ensure (Abbott) - 200GM-Chocolate-Box</td>
                <td>49%</td>
                <td>57%</td>
                <td>45%</td>
              </tr>
              <tr>
                <td>Ensure (Abbott) - 200GM-Chocolate-Box</td>
                <td>49%</td>
                <td>57%</td>
                <td>45%</td>
              </tr>
              <tr>
                <td>Ensure (Abbott) - 200GM-Chocolate-Box</td>
                <td>49%</td>
                <td>57%</td>
                <td>45%</td>
              </tr>
              <tr>
                <td>Ensure (Abbott) - 200GM-Chocolate-Box</td>
                <td>49%</td>
                <td>57%</td>
                <td>45%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        className="fixed p-2 bg-[#5224b5] text-white rounded-full cursor-pointer z-50"
        style={{ top: "50%", left: "20px", transform: "translate(-50%,0%)" }}
        title="Previous"
      >
        <ChevronLeft />
      </div>
      <div
        className="fixed p-2 bg-[#5224b5] text-white rounded-full cursor-pointer z-50"
        style={{ top: "50%", right: "-20px", transform: "translate(-50%,0%)" }}
        title="Next"
      >
        <ChevronRight />
      </div>
    </div>
  );
}
