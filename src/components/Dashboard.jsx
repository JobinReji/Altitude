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
    <div className="w-full h-full flex flex-col items-center overflow-y-auto sm:overflow-y-hidden">
      <div className="flex sm:flex-row flex-col justify-around w-[90%] h-auto text-[#5224b5]">
        <div className="sm:w-[15%] w-full pb-3">
          <div className="text-center">
            <label>State</label>
          </div>
          <FilterData selectId="D_1" options={options_1} />
        </div>
        <div className="sm:w-[15%] w-full pb-3">
          <div className="text-center">
            <label>City</label>
          </div>
          <FilterData selectId="D_2" options={options_2} />
        </div>
        <div className="sm:w-[15%] w-full pb-3">
          <div className="text-center">
            <label>Type of City</label>
          </div>
          <FilterData selectId="D_3" options={options_3} />
        </div>
        <div className="sm:w-[15%] w-full pb-3">
          <div className="text-center">
            <label>HCP Speciality</label>
          </div>
          <FilterData selectId="D_4" options={options_4} />
        </div>
      </div>
      <div className="w-[96%] flex-1 overflow-x-hidden overflow-y-auto flex flex-col">
        <div className="flex sm:flex-row flex-col gap-3 sm:gap-0 justify-between flex-1 my-2 min-h-[300px]">
          <div className="sm:w-[30%] w-full h-full bg-violet-800/10 rounded-xl">
            <div className="text-center text-[#5224b5] font-semibold py-2">
              Zone
            </div>
            <Zone />
          </div>
          <div className="sm:w-[68%] w-full h-full bg-violet-800/10 rounded-xl">
            <div className="text-center text-[#5224b5] font-semibold py-2">
              State
            </div>
            <State />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-3 sm:gap-0 justify-between flex-1 my-2 min-h-[300px]">
          <div className="sm:w-[68%] w-full h-full bg-violet-800/10 rounded-xl">
            <div className="text-center text-[#5224b5] font-semibold py-2">
              City
            </div>
            <City />
          </div>
          <div className="sm:w-[30%] w-full h-full bg-violet-800/10 rounded-xl">
            <div className="text-center text-[#5224b5] font-semibold py-2">
              Type of City
            </div>
            <TypeOfCity />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-3 sm:gap-0 justify-between flex-1 my-2 min-h-[300px]">
          <div className="sm:w-[30%] w-full h-full bg-violet-800/10 rounded-xl">
            <div className="text-center text-[#5224b5] font-semibold py-2">
              Core/ Supercore
            </div>
            <CoreSupercore />
          </div>
          <div className="sm:w-[68%] w-full h-full bg-violet-800/10 rounded-xl">
            <div className="text-center text-[#5224b5] font-semibold py-2">
              HCP Speciality
            </div>
            <HCPSpeciality />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-3 sm:gap-0 justify-between flex-1 my-2 min-h-[300px]">
          <div className="sm:w-[30%] w-full h-full bg-violet-800/10 rounded-xl flex justify-around items-center text-[#5224b5]">
            <div className="flex flex-col items-center gap-2">
              <img src={hospitalImg} className="w-[50%]" alt="Hospital Image" />
              <div className="text-sm">Hospital</div>
              <div className="text-2xl font-semibold">76%</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src={clinicImg} className="w-[50%]" alt="Clinic Image" />
              <div className="text-sm">Clinic</div>
              <div className="text-2xl font-semibold">87%</div>
            </div>
          </div>
          <div className="sm:w-[68%] w-full h-full bg-violet-800/10 rounded-xl">
            <div className="text-center text-[#5224b5] font-semibold py-2">
              HQ of Client
            </div>
            <HQOfClient />
          </div>
        </div>
      </div>
    </div>
  );
}
