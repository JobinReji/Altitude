import Select from "react-select";
import { useState } from "react";
import { DistanceDistribution } from "./DashCharts";
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

const customStyles = {
  control: (base, state) => ({
    ...base,
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: "2px",
    borderColor: "#5224b5",
    fontSize: "16px",
    padding: "2px",
    borderRadius: "6px",
    minHeight: "40px",
    boxShadow: state.isFocused ? "0 0 0 1px #5224b5" : null,
    "&:hover": {
      borderColor: "#5224b5",
    },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: "#fff",
    color: "#5224b5",
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

export default function Dashboard2() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      {/* Filter section - compact on mobile */}
      <div className="sticky top-0 z-10 bg-white sm:static sm:bg-transparent sm:flex sm:justify-around w-full sm:w-[90%] h-auto text-[#5224b5] px-2 sm:px-0 py-2 sm:py-0">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-8 sm:w-full">
          <div className="pb-1 sm:pb-3">
            <div className="text-center text-sm sm:text-base">
              <label>State</label>
            </div>
            <FilterData selectId="D_1" options={state} />
          </div>
          <div className="pb-1 sm:pb-3">
            <div className="text-center text-sm sm:text-base">
              <label>City</label>
            </div>
            <FilterData selectId="D_2" options={city} />
          </div>
          <div className="pb-1 sm:pb-3">
            <div className="text-center text-sm sm:text-base">
              <label>Type of City</label>
            </div>
            <FilterData selectId="D_3" options={typeOfCity} />
          </div>
          <div className="pb-1 sm:pb-3">
            <div className="text-center text-sm sm:text-base">
              <label>HCP Speciality</label>
            </div>
            <FilterData selectId="D_4" options={hcp} />
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col w-full h-[80%] justify-around ">
        <div className="sm:w-[30%] w-full h-full">
          <div className="h-[50%] bg-violet-800/10 rounded-xl p-2 w-full mb-2">
            <div className="text-center text-[#5224b5] font-semibold py-1">
              Distance Distribution
            </div>
            <div className="h-[86%]">
              <DistanceDistribution />
            </div>
          </div>
          <div className="h-[50%]">
            <div className="flex flex-col items-center w-full p-2 rounded-xl shadow_out my-2 bg-violet-800/10 text-sm h-[95%]">
              <div className="m-1 overflow-auto w-[95%] h-[26vh] sm-tab dash_tab">
                <table id="dash_tab" className="w-full">
                  <thead className="sticky top-0 text-[#5224b5]">
                    <tr className="">
                      <th>Distance Range</th>
                      <th>Count of Chemists</th>
                    </tr>
                  </thead>
                  <tbody className="text-black text-center">
                    <tr>
                      <td>0-0.2 KM</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>0.21-0.5 KM</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>0.51-1 KM</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>1.1-2 KM</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>&gt; 2 KM</td>
                      <td>18</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-[65%] w-full h-full">
          <div className="flex flex-col items-center w-full p-2 rounded-xl shadow_out bg-violet-800/10 text-sm h-full">
            <div className="m-1 overflow-auto w-[95%] h-[96%] sm-tab dash_tab">
              <table id="dash_tab" className="w-full">
                <thead className="sticky top-0 text-[#5224b5]">
                  <tr className="">
                    <th>HCP Name</th>
                    <th>No. of Chemists</th>
                    <th>Closest Chemists (KM)</th>
                    <th>Farthest Chemists (KM)</th>
                  </tr>
                </thead>
                <tbody className="text-black text-center">
                  <tr>
                    <td>Tanusree Saha</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Mitul Barot</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Paresh Gohel</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Arindam Bhaumik</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Ramprakash R Kothari</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Tanusree Saha</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Mitul Barot</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Paresh Gohel</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Arindam Bhaumik</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Ramprakash R Kothari</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Tanusree Saha</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Mitul Barot</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Paresh Gohel</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Arindam Bhaumik</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Ramprakash R Kothari</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Tanusree Saha</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Mitul Barot</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Paresh Gohel</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Arindam Bhaumik</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                  </tr>
                  <tr>
                    <td>Ramprakash R Kothari</td>
                    <td>18</td>
                    <td>18</td>
                    <td>18</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
    </div>
  );
}
