import Select from "react-select";
import { useState } from "react";
import { BrandAdoptionL, BrandAdoption } from "./DashCharts";
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

export default function Dashboard3() {
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
        <button className="activeBtn">Type of City</button>
        <button className="inActiveBtn">HCP Type</button>
      </div>
      <div className="w-full h-[70vh]">
        <div className="w-full flex bg-[#E9E3F6] border-b-2 border-[#5224B5]">
          <div className="w-[25%] flex justify-center items-center py-2 border-r-2 border-[#5224B5] font-semibold">
            Base
          </div>
          <div className="w-[12.5%] flex flex-col justify-center items-center py-2 border-r-2 border-[#5224B5] font-semibold">
            <div>Total</div>
            <div>n=200</div>
          </div>
          <div className="w-[12.5%] flex flex-col justify-center items-center py-2 border-r-2 border-[#5224B5] font-semibold">
            <div>Metro</div>
            <div>n=70</div>
          </div>
          <div className="w-[12.5%] flex flex-col justify-center items-center py-2 border-r-2 border-[#5224B5] font-semibold">
            <div>Semi-Metro</div>
            <div>n=30</div>
          </div>
          <div className="w-[12.5%] flex flex-col justify-center items-center py-2 border-r-2 border-[#5224B5] font-semibold">
            <div>Tier 1</div>
            <div>n=41</div>
          </div>
          <div className="w-[12.5%] flex flex-col justify-center items-center py-2 border-r-2 border-[#5224B5] font-semibold">
            <div>Tier 2</div>
            <div>n=34</div>
          </div>
          <div className="w-[12.5%] flex flex-col justify-center items-center py-2 font-semibold">
            <div>Others</div>
            <div>n=25</div>
          </div>
        </div>
        <div className="h-[85%] flex">
          <div className="w-[25%] h-full border-r-2 border-[#5224B5]">
            <BrandAdoptionL />
          </div>
          <div className="w-[12.5%] h-full border-r-2 border-[#5224B5]">
            <BrandAdoption />
          </div>
          <div className="w-[12.5%] h-full border-r-2 border-[#5224B5]">
            <BrandAdoption />
          </div>
          <div className="w-[12.5%] h-full border-r-2 border-[#5224B5]">
            <BrandAdoption />
          </div>
          <div className="w-[12.5%] h-full border-r-2 border-[#5224B5]">
            <BrandAdoption />
          </div>
          <div className="w-[12.5%] h-full border-r-2 border-[#5224B5]">
            <BrandAdoption />
          </div>
          <div className="w-[12.5%] h-full">
            <BrandAdoption />
          </div>
        </div>
      </div>
    </div>
  );
}
