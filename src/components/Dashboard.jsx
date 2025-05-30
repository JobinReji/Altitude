import Select from "react-select";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

export default function Dashboard() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      {/* Filter section - compact on mobile */}
      <div className="sticky top-0 z-10 bg-white sm:static sm:bg-transparent sm:flex sm:justify-around w-full sm:w-[90%] h-auto text-[#5224b5]">
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
              HQ of Client
            </div>
            <div className="h-[calc(100%-40px)]">
              <HQOfClient />
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

        <div className="flex sm:flex-row flex-col w-full gap-4 h-[70vh]">
          <div className="flex flex-col gap-4 sm:w-[30%] w-full h-full">
            <div className="flex-1 sm:flex-none bg-violet-800/10 rounded-xl p-2 w-full min-h-[230px] sm:h-[25vh]">
              <div className="text-center text-[#5224b5] font-semibold py-1">
                Core/Supercore
              </div>
              <div className="h-[calc(100%-20px)]">
                <CoreSupercore />
              </div>
            </div>
            <div className="flex-1 sm:flex-none bg-violet-800/10 rounded-xl p-4 flex flex-row justify-center items-center gap-8 w-full min-h-[230px] sm:h-[25vh]">
              <div className="flex flex-col items-center">
                <img
                  src={hospitalImg}
                  className="w-16 sm:w-20"
                  alt="Hospital"
                />
                <div className="text-sm mt-2">Hospital</div>
                <div className="text-2xl font-bold mt-1">76%</div>
              </div>
              <div className="flex flex-col items-center">
                <img src={clinicImg} className="w-16 sm:w-20" alt="Clinic" />
                <div className="text-sm mt-2">Clinic</div>
                <div className="text-2xl font-bold mt-1">87%</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center sm:w-[33%] w-full p-2 rounded-xl shadow_out bg-violet-800/10 text-sm h-full">
            <div className="m-1 overflow-auto w-[95%] h-full sm-tab dash_tab2">
              <table id="dash_tab" className="w-full">
                <thead className="sticky top-0 text-[#5224b5]">
                  <tr>
                    <th className="p-2">City</th>
                    <th className="p-2">Count of Chemists</th>
                  </tr>
                </thead>
                <tbody className="text-black text-center">
                  <tr>
                    <td>Agartala</td>
                    <td>180</td>
                  </tr>
                  <tr>
                    <td>Ahmedabad</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Akola</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Aurangabad</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td>Avanashi</td>
                    <td>170</td>
                  </tr>
                  <tr>
                    <td>Bangalore</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Bangalore North</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Bangalore South</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Bardhman</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Bhubaneswar</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Calicut</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Chennai</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Cochin</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Coimbatore</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Coimbatore South</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Dehradun</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Delhi</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Dibrugarh</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Eluru</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Erode</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Faridabad</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Guntur</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Gurugram</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Guwahati</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Hyderabad</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Jamshedpur</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Kakinada</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Kolkata</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Kovilpatti</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Kozhikode</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Kundapur</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Lucknow</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Madurai</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Madurai North</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Malda</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Mangalagiri</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Mangalore</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Melur</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Mumbai</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Nagpur</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Narasaraopet</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Nellore</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Noida</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Ongole</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Patna</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Pondicherry</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Pune</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Rajahmundry</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Ranchi</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Salem</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Surat</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Tenali</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Tezpur</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Tirunelveli</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Tirupathi</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Tiruppur</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>TM HQ - Ahmedabad</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>TM HQ - Aurangabad</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Varanasi</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Vijayawada</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Vizag</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Vuyyuru</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Yawatmal</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Yerragondapalem</td>
                    <td>80</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col items-center sm:w-[34%] w-full p-2 rounded-xl shadow_out bg-violet-800/10 text-sm h-full">
            <div className="m-1 overflow-auto w-[95%] h-full sm-tab dash_tab2">
              <table id="dash_tab" className="w-full">
                <thead className="sticky top-0 text-[#5224b5]">
                  <tr>
                    <th className="p-2">HCP Speciality</th>
                    <th className="p-2">Count of Chemists</th>
                  </tr>
                </thead>
                <tbody className="text-black text-center">
                  <tr>
                    <td>Agartala</td>
                    <td>180</td>
                  </tr>
                  <tr>
                    <td>Ahmedabad</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Akola</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Aurangabad</td>
                    <td>200</td>
                  </tr>
                  <tr>
                    <td>Avanashi</td>
                    <td>170</td>
                  </tr>
                  <tr>
                    <td>Bangalore</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Bangalore North</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Bangalore South</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Bardhman</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Bhubaneswar</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Calicut</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Chennai</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Cochin</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Coimbatore</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Coimbatore South</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Dehradun</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Delhi</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Dibrugarh</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Eluru</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Erode</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Faridabad</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Guntur</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Gurugram</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Guwahati</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Hyderabad</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Jamshedpur</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Kakinada</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Kolkata</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Kovilpatti</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Kozhikode</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Kundapur</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Lucknow</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Madurai</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Madurai North</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Malda</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Mangalagiri</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Mangalore</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Melur</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Mumbai</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Nagpur</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Narasaraopet</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Nellore</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Noida</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Ongole</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Patna</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Pondicherry</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Pune</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Rajahmundry</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Ranchi</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Salem</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Surat</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Tenali</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Tezpur</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Tirunelveli</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Tirupathi</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Tiruppur</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>TM HQ - Ahmedabad</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>TM HQ - Aurangabad</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Varanasi</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>Vijayawada</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>Vizag</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>Vuyyuru</td>
                    <td>130</td>
                  </tr>
                  <tr>
                    <td>Yawatmal</td>
                    <td>150</td>
                  </tr>
                  <tr>
                    <td>Yerragondapalem</td>
                    <td>80</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Third row */}
        {/* <div className="flex flex-col sm:flex-row gap-4 mb-4 h-[80vh] w-full min-h-[300px] sm:h-[35vh]">
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
        </div> */}

        {/* Fourth row */}
        {/* <div className="flex flex-col sm:flex-row gap-4 h-[80vh] min-h-[300px] sm:h-[35vh]">
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
              City
            </div>
            <div className="h-[calc(100%-40px)] overflow-x-auto">
              <City />
            </div>
          </div>
        </div> */}
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
