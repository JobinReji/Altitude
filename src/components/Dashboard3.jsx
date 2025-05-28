import Select from "react-select";
import { useState, useEffect } from "react";
import { BrandAdoptionL, BrandAdoption } from "./DashCharts";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Loader from "./Loader";

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
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate API/data fetch
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Replace with actual API call
        const response = await fetch("your-api-endpoint");
        const result = await response.json();
        setData(result);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <Loader />;
  }
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
        <button className="inActiveBtn">HCP Speciality</button>
      </div>
      <div className="w-full h-[70vh] overflow-x-auto">
        <div className="w-full flex">
          <div className="sm:w-[25%] min-w-[300px] flex justify-center items-center py-2 border-b-2 border-r-2 border-[#5224B5] font-semibold bg-[#E9E3F6]">
            Base
          </div>
          <div className="sm:w-[12.5%] min-w-[200px] flex flex-col justify-center items-center py-2 border-b-2 border-r-2 border-[#5224B5] font-semibold bg-[#E9E3F6]">
            <div>Total</div>
            <div>n=200</div>
          </div>
          <div className="sm:w-[12.5%] min-w-[200px] flex flex-col justify-center items-center py-2 border-b-2 border-r-2 border-[#5224B5] font-semibold bg-[#E9E3F6]">
            <div>Metro</div>
            <div>n=70</div>
          </div>
          <div className="sm:w-[12.5%] min-w-[200px] flex flex-col justify-center items-center py-2 border-b-2 border-r-2 border-[#5224B5] font-semibold bg-[#E9E3F6]">
            <div>Semi-Metro</div>
            <div>n=30</div>
          </div>
          <div className="sm:w-[12.5%] min-w-[200px] flex flex-col justify-center items-center py-2 border-b-2 border-r-2 border-[#5224B5] font-semibold bg-[#E9E3F6]">
            <div>Tier 1</div>
            <div>n=41</div>
          </div>
          <div className="sm:w-[12.5%] min-w-[200px] flex flex-col justify-center items-center py-2 border-b-2 border-r-2 border-[#5224B5] font-semibold bg-[#E9E3F6]">
            <div>Tier 2</div>
            <div>n=34</div>
          </div>
          <div className="sm:w-[12.5%] min-w-[200px] flex flex-col justify-center items-center py-2 font-semibold border-b-2 border-[#5224B5] bg-[#E9E3F6]">
            <div>Others</div>
            <div>n=25</div>
          </div>
        </div>
        <div className="h-[80%] flex">
          <div className="sm:w-[25%] min-w-[300px] h-full border-r-2 border-[#5224B5]">
            <BrandAdoptionL />
          </div>
          <div className="sm:w-[12.5%] min-w-[200px] h-full border-r-2 border-[#5224B5]">
            <BrandAdoption data={[72, 47, 40, 34, 32, 30, 27, 20, 20]} />
          </div>
          <div className="sm:w-[12.5%] min-w-[200px] h-full border-r-2 border-[#5224B5]">
            <BrandAdoption data={[65, 42, 38, 30, 28, 25, 22, 18, 15]} />
          </div>
          <div className="sm:w-[12.5%] min-w-[200px] h-full border-r-2 border-[#5224B5]">
            <BrandAdoption data={[50, 40, 35, 30, 25, 20, 15, 10, 5]} />
          </div>
          <div className="sm:w-[12.5%] min-w-[200px] h-full border-r-2 border-[#5224B5]">
            <BrandAdoption data={[80, 60, 50, 40, 30, 20, 15, 10, 5]} />
          </div>
          <div className="sm:w-[12.5%] min-w-[200px] h-full border-r-2 border-[#5224B5]">
            <BrandAdoption data={[45, 35, 30, 25, 20, 15, 10, 5, 2]} />
          </div>
          <div className="sm:w-[12.5%] min-w-[200px] h-full">
            <BrandAdoption data={[30, 25, 20, 15, 10, 8, 5, 3, 1]} />
          </div>
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
