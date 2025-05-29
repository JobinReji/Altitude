import Select from "react-select";
import { useState } from "react";
import doc from "../assets/doctImg.png";
import { Skus, HCPSpeciality, CoreSupercore, City } from "./DashCharts";
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
const brands = [
  { value: "D-Protin", label: "D-Protin (British Biologicals)" },
  {
    value: "Protinex_Diabetes_Care",
    label: "Protinex Diabetes Care (Danone -Nutricia)",
  },
  {
    value: "Ensure_Diabetes_Care",
    label: "Ensure Diabetes Care (Abbott)",
  },
  {
    value: "Prohance_D",
    label: "Prohance D (Sun Pharma)",
  },
  {
    value: "Celevida",
    label: "Celevida (Dr. Reddy's Laboratories)",
  },
  {
    value: "Resource_Diabetes",
    label: "Resource Diabetes (Nestlé India)",
  },
  {
    value: "Fresubin_DM",
    label: "Fresubin DM (Fresenius Kabi India)",
  },
  {
    value: "Pentasure_DM",
    label: "Pentasure DM (Hexagon Nutrition)",
  },
];

const brandBtn = [
  "D-Protin (British Biologicals)",
  "Protinex Diabetes Care (Danone -Nutricia)",
  "Ensure Diabetes Care (Abbott)",
  "Prohance D (Sun Pharma)",
  "Horlicks Diabetes Plus (HUL)",
  "Celevida (Dr. Reddy's Laboratories)",
  "Resource Diabetes (Nestlé India)",
  "Fresubin DM (Fresenius Kabi India)",
  "Pentasure DM (Hexagon Nutrition)",
];

const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

const customStyles = {
  control: (base, state) => ({
    ...base,
    width: "100%",
    maxWidth: "300px",
    margin: "0 auto",
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

export default function Dashboard5() {
  const [activeBrand, setActiveBrand] = useState(brandBtn[0]);
  return (
    <div className="w-full h-full flex flex-col items-center">
      {/* Filter section - compact on mobile */}
      <div className="sticky top-0 z-10 bg-white sm:static sm:bg-transparent sm:flex sm:flex-col sm:justify-around w-full sm:w-[90%] h-auto text-[#5224b5] px-2 sm:px-0 py-2 sm:py-0">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 sm:w-full max-w-3xl">
            <div className="pb-1 sm:pb-3 flex flex-col items-center">
              <div className="text-center text-xs sm:text-base mb-1">
                <label>State</label>
              </div>
              <div className="w-full flex justify-center">
                <FilterData selectId="D_1" options={state} />
              </div>
            </div>
            <div className="pb-1 sm:pb-3 flex flex-col items-center">
              <div className="text-center text-xs sm:text-base mb-1">
                <label>City</label>
              </div>
              <div className="w-full flex justify-center">
                <FilterData selectId="D_2" options={city} />
              </div>
            </div>
            <div className="pb-1 sm:pb-3 flex flex-col items-center">
              <div className="text-center text-xs sm:text-base mb-1">
                <label>Type of City</label>
              </div>
              <div className="w-full flex justify-center">
                <FilterData selectId="D_3" options={typeOfCity} />
              </div>
            </div>
            <div className="pb-1 sm:pb-3 flex flex-col items-center">
              <div className="text-center text-xs sm:text-base mb-1">
                <label>HCP Speciality</label>
              </div>
              <div className="w-full flex justify-center">
                <FilterData selectId="D_4" options={hcp} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-center sm:hidden">
          <div className="pb-1 sm:pb-3 w-full">
            <div className="text-center text-xs sm:text-base">
              <label>Brands</label>
            </div>
            <FilterData selectId="D_5" options={brands} />
          </div>
        </div>
      </div>

      <div className="w-full h-[80%] flex ">
        <div className="w-[20%] h-full sm:flex hidden flex-col justify-around items-center">
          {brandBtn.map((brand, index) => (
            <button
              key={index}
              className={
                activeBrand === brand ? "activeDDBtn" : "inActiveDDBtn"
              }
              onClick={() => setActiveBrand(brand)}
            >
              {brand}
            </button>
          ))}
        </div>
        <div className="sm:w-[80%] w-full h-full">
          <div className="flex justify-end sm:text-base text-sm">n=200</div>
          <div className="h-[94%] flex sm:flex-row flex-col justify-around overflow-y-auto">
            <div className="sm:w-[40%] w-full">
              <div>
                <div className="flex-1 sm:flex-none flex flex-row justify-center items-center gap-8 w-full min-h-[180px] sm:h-[20vh]">
                  <div className="flex flex-col items-center">
                    <img src={doc} className="w-30 sm:w-40" alt="Hospital" />
                    <div className="bg-[#5224b5] text-white px-8 py-2 rounded-xl text-center">
                      <div className="text-sm">Prescribed Count</div>
                      <div className="text-xl mt-1">30 (50%)</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center font-semibold">
                    <h2 className="text-[#DC4674] sm:text-xl text-base">
                      Monthly Dispense
                    </h2>
                    <div>
                      <span className="text-[#5224b5]">Total Units :</span> 1000
                    </div>
                    <div>
                      <span className="text-[#5224b5]">Rx Unites :</span> 5
                    </div>
                    <div>
                      <span className="text-[#5224b5]">Rc Unites :</span> 2.1
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center sm:w-full w-full p-2 my-4 rounded-xl shadow_out  text-sm h-[78vh]">
                  <div className="m-1 overflow-auto w-[95%] h-full sm-tab dash_tab2">
                    <table
                      id="dash_tab"
                      className="w-full sm:text-base text-sm"
                    >
                      <thead className="sticky top-0 text-black">
                        <tr>
                          <th className="p-2 sm:min-w-[210px] min-w-[100px] border-r-3 border-[#5224b5]">
                            SKU's
                          </th>
                          <th className="p-2 border-r-3 border-[#5224b5]">
                            <div className="flex flex-col items-center">
                              <div className="whitespace-normal break-words text-center max-w-[35px] sm:max-w-none">
                                Incidence
                              </div>
                            </div>
                          </th>
                          <th className="p-2 border-r-3 border-[#5224b5]">
                            <div>
                              <div>Volume Share</div>
                            </div>
                          </th>
                          <th className="p-2">
                            <div>
                              <div>Value Share</div>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-black text-center">
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                        <tr>
                          <td className="border-r-3 border-[#5224b5]">
                            200GM-Chocolate-Box
                          </td>
                          <td className="border-r-3 border-[#5224b5]">49%</td>
                          <td className="border-r-3 border-[#5224b5]">57%</td>
                          <td>45%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="w-full flex justify-center">
                  <div className="flex-1 sm:flex-none bg-violet-800/10 rounded-xl p-2 w-[80%] min-h-[230px] sm:h-[25vh]">
                    <div className="text-center text-[#5224b5] font-semibold py-1">
                      Core/Supercore
                    </div>
                    <div className="h-[calc(100%-20px)]">
                      <CoreSupercore />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:w-[60%] w-full my-2">
              <div className="flex-1 sm:flex-none bg-violet-800/10 rounded-xl p-2 w-full min-h-[230px] h-[60vh] sm:h-[60vh]">
                <div className="text-center text-[#5224b5] font-semibold py-1">
                  SKU's wise with Rx & with Rc
                </div>
                <div className="h-[calc(100%-20px)]">
                  <Skus />
                </div>
              </div>
              <div className="flex-1 sm:flex-none bg-violet-800/10 rounded-xl p-2 w-full sm:h-[40vh] my-2 sm:block hidden">
                <div className="text-center text-[#5224b5] font-semibold py-1">
                  HCP Speciality
                </div>
                <div className="h-[calc(100%-40px)]">
                  <HCPSpeciality />
                </div>
              </div>
              <div className="flex-1 sm:flex-none bg-violet-800/10 rounded-xl p-2 w-full sm:h-[40vh] sm:block hidden">
                <div className="text-center text-[#5224b5] font-semibold py-1">
                  City
                </div>
                <div className="h-[calc(100%-40px)] overflow-x-auto">
                  <City />
                </div>
              </div>
              {/* Table here */}
              <div className="flex flex-col items-center sm:hidden w-full p-2 rounded-xl shadow_out bg-violet-800/10 text-sm h-[50vh] my-2">
                <div className="m-1 overflow-auto w-[95%] h-full sm-tab dash_tab2">
                  <table id="dash_tab" className="w-full">
                    <thead className="sticky top-0 text-[#5224b5]">
                      <tr>
                        <th className="p-2 w-[50%]">City</th>
                        <th className="p-2 w-[50%]">Count of Chemists</th>
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
              <div className="flex flex-col items-center sm:hidden w-full p-2 rounded-xl shadow_out bg-violet-800/10 text-sm h-[50vh] my-2">
                <div className="m-1 overflow-auto w-[95%] h-full sm-tab dash_tab2">
                  <table id="dash_tab" className="w-full">
                    <thead className="sticky top-0 text-[#5224b5]">
                      <tr>
                        <th className="p-2 w-[50%]">HCP Speciality</th>
                        <th className="p-2 w-[50%]">Count of Chemists</th>
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
