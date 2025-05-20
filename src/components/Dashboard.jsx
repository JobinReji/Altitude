import Select from "react-select";
import { useState } from "react";
import hospitalImg from "../assets/hospital_img.png";
import clinicImg from "../assets/clinic_img.png";
import {
  Zone,
  State,
  City,
  TypeOfCity,
  CoreSupercore,
  HCPSpeciality,
  HQOfClient,
} from "./DashCharts";

const options_1 = [
  { value: "Karnataka", label: "Karnataka" },
  { value: "Goa", label: "Goa" },
  { value: "Maharastra", label: "Maharastra" },
  { value: "Delhi", label: "Delhi" },
];
const options_2 = [
  { value: "Bangaluru", label: "Bangaluru" },
  { value: "Mangaluru", label: "Mangaluru" },
  { value: "Mumbai", label: "Mumbai" },
  { value: "Pune", label: "Pune" },
];
const options_3 = [
  { value: "City", label: "City" },
  { value: "Village", label: "Village" },
];
const options_4 = [
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

export default function Dashboard() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      {/* Filter section - compact on mobile */}
      <div className="sticky top-0 z-10 bg-white sm:static sm:bg-transparent sm:flex sm:justify-around w-full sm:w-[90%] h-auto text-[#5224b5] px-2 sm:px-0 py-2 sm:py-0">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-8 sm:w-full">
          <div className="pb-1 sm:pb-3">
            <div className="text-center text-sm sm:text-base">
              <label>State</label>
            </div>
            <FilterData selectId="D_1" options={options_1} />
          </div>
          <div className="pb-1 sm:pb-3">
            <div className="text-center text-sm sm:text-base">
              <label>City</label>
            </div>
            <FilterData selectId="D_2" options={options_2} />
          </div>
          <div className="pb-1 sm:pb-3">
            <div className="text-center text-sm sm:text-base">
              <label>Type of City</label>
            </div>
            <FilterData selectId="D_3" options={options_3} />
          </div>
          <div className="pb-1 sm:pb-3">
            <div className="text-center text-sm sm:text-base">
              <label>HCP Speciality</label>
            </div>
            <FilterData selectId="D_4" options={options_4} />
          </div>
        </div>
      </div>

      {/* Charts section - takes remaining space */}
      <div className="flex-1 overflow-auto p-2 sm:p-4 sm:max-h-[75vh] max-h-[60vh] w-full">
        {/* First row */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4 h-[80vh] w-full min-h-[300px] sm:h-[35vh]">
          <div className="flex-1 sm:flex-none bg-violet-800/10 rounded-xl p-2 sm:w-[30%] w-full">
            <div className="text-center text-[#5224b5] font-semibold py-1">
              Zone
            </div>
            <div className="h-[calc(100%-40px)]">
              <Zone />
            </div>
          </div>
          <div className="flex-1 sm:flex-none bg-violet-800/10 rounded-xl p-2 sm:w-[68%] w-full">
            <div className="text-center text-[#5224b5] font-semibold py-1">
              State
            </div>
            <div className="h-[calc(100%-40px)]">
              <State />
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4 h-[80vh] w-full min-h-[300px] sm:h-[35vh]">
          <div className="flex-1 sm:flex-none bg-violet-800/10 rounded-xl p-2 sm:w-[68%] w-full">
            <div className="text-center text-[#5224b5] font-semibold py-1">
              City
            </div>
            <div className="h-[calc(100%-40px)]">
              <City />
            </div>
          </div>
          <div className="flex-1 sm:flex-none bg-violet-800/10 rounded-xl p-2 sm:w-[30%] w-full">
            <div className="text-center text-[#5224b5] font-semibold py-1">
              Type of City
            </div>
            <div className="h-[calc(100%-40px)]">
              <TypeOfCity />
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4 h-[80vh] w-full min-h-[300px] sm:h-[35vh]">
          <div className="flex-1 sm:flex-none bg-violet-800/10 rounded-xl p-2 sm:w-[30%] w-full">
            <div className="text-center text-[#5224b5] font-semibold py-1">
              Core/Supercore
            </div>
            <div className="h-[calc(100%-40px)]">
              <CoreSupercore />
            </div>
          </div>
          <div className="flex-1 sm:flex-none bg-violet-800/10 rounded-xl p-2 sm:w-[68%] w-full">
            <div className="text-center text-[#5224b5] font-semibold py-1">
              HCP Speciality
            </div>
            <div className="h-[calc(100%-40px)]">
              <HCPSpeciality />
            </div>
          </div>
        </div>

        {/* Fourth row */}
        <div className="flex flex-col sm:flex-row gap-4 h-[80vh] min-h-[300px] sm:h-[35vh]">
          <div className="flex-1 sm:flex-none bg-violet-800/10 rounded-xl p-4 flex flex-col sm:flex-row justify-center items-center gap-4 sm:w-[30%] w-full">
            <div className="flex flex-col items-center">
              <img src={hospitalImg} className="w-16 sm:w-20" alt="Hospital" />
              <div className="text-sm mt-2">Hospital</div>
              <div className="text-2xl font-bold mt-1">76%</div>
            </div>
            <div className="flex flex-col items-center">
              <img src={clinicImg} className="w-16 sm:w-20" alt="Clinic" />
              <div className="text-sm mt-2">Clinic</div>
              <div className="text-2xl font-bold mt-1">87%</div>
            </div>
          </div>
          <div className="flex-1 sm:flex-none bg-violet-800/10 rounded-xl p-2 sm:w-[68%] w-full">
            <div className="text-center text-[#5224b5] font-semibold py-1">
              HQ of Client
            </div>
            <div className="h-[calc(100%-40px)]">
              <HQOfClient />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
