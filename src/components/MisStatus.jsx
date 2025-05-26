import ReactECharts from "echarts-for-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import downloadCity from "../assets/city_download.png";
import downloadRaw from "../assets/raw_download.png";
export default function MisStatus() {
  return (
    <>
      <div className="w-full sm:w-[90%] p-1 rounded-md overflow-auto sm-tab">
        <div className="h-full w-full flex justify-center items-stretch text-[#5224b5]">
          <div className="w-[98%] rounded-lg shadow_out px-5 py-2">
            <div className="h-[55%]">
              <div className="relative flex sm:flex-row flex-col items-center justify-center">
                <div className="flex justify-center text-xl font-bold text-[#5224b5] w-full sm:w-auto">
                  Survey Completion per Day
                </div>
                <div className="text-[#132F62] font-semibold sm:absolute right-0 w-full sm:w-auto text-right">
                  n=12
                </div>
              </div>
              <div className="sm:h-full h-[90%]">
                <ReactECharts
                  option={option}
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>
            <hr className="border-[#5224b5] my-6" />
            <div className="h-[50%] flex sm:flex-row flex-col justify-between items-center">
              <div className="flex flex-col items-center sm:w-[30%] w-full p-2 rounded-lg shadow_out m-1 bg-[#5224b538] text-sm h-[90%]">
                <div className="m-1">Q1. State</div>
                <div className="m-1 overflow-auto w-[95%] h-[24vh] sm-tab mis_tab">
                  <table id="mis_tab" className="w-full">
                    <thead className="sticky top-0 text-white">
                      <tr className="border-b-2 border-[#5224b5]">
                        <th>Value</th>
                        <th className="min-w-[10vw]">Label</th>
                        <th>Count</th>
                      </tr>
                    </thead>
                    <tbody className="text-black text-center">
                      <tr>
                        <td>1</td>
                        <td>Male</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Female</td>
                        <td>1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col items-center sm:w-[30%] w-full p-2 rounded-lg shadow_out m-1 bg-[#5224b538] text-sm h-[90%]">
                <div className="m-1">Q2. City</div>
                <div className="m-1 overflow-auto w-[95%] h-[24vh] sm-tab mis_tab">
                  <table id="mis_tab" className="w-full">
                    <thead className="sticky top-0 text-white ">
                      <tr>
                        <th>Value</th>
                        <th className="min-w-[10vw]">Label</th>
                        <th>Count</th>
                      </tr>
                    </thead>
                    <tbody className="text-black text-center">
                      <tr>
                        <td>1</td>
                        <td>By Visiting TVS Dealership</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>By calling TVS dealership by phone</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Visited TVS Website and registered there</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Participated in near by Mela</td>
                        <td>1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex flex-col items-center sm:w-[30%] w-full p-2 rounded-lg shadow_out m-1 bg-[#5224b538] text-sm h-[90%]">
                <div className="m-1">Q3. HCP Speciality</div>
                <div className="m-1 overflow-auto w-[95%] h-[24vh] sm-tab mis_tab">
                  <table id="mis_tab" className="w-full">
                    <thead className="sticky top-0 text-white">
                      <tr className="border-b-2 border-[#5224b5]">
                        <th>Value</th>
                        <th className="min-w-[10vw]">Label</th>
                        <th>Count</th>
                      </tr>
                    </thead>
                    <tbody className="text-black text-center">
                      <tr>
                        <td>1</td>
                        <td>Within One week</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Within 2-3 week</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Within 1-2 Months</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Within 3-6 Months</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Within 6-12 Months</td>
                        <td>2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
          style={{
            top: "50%",
            right: "-20px",
            transform: "translate(-50%,0%)",
          }}
          title="Next"
        >
          <ChevronRight />
        </div>
      </div>
      <div className="absolute bottom-1 right-2 flex gap-2">
        <button
          className="cursor-pointer w-7"
          title="Doctorwise City Data Download"
        >
          <img src={downloadCity} alt="Download City Data" />
        </button>
        <button className="cursor-pointer w-7" title="RAW Data Download">
          <img src={downloadRaw} alt="Download RAW Data" />
        </button>
      </div>
    </>
  );
}

const option = {
  tooltip: {
    trigger: "axis",
    formatter: "{b}: {c} surveys",
  },
  xAxis: {
    type: "category",
    boundaryGap: true,
    data: [
      "2025-01-06",
      "2025-01-08",
      "2025-01-10",
      "2025-01-20",
      "2025-01-25",
      "2025-01-14",
    ],
    axisPointer: {
      type: "shadow",
    },
    axisLabel: {
      color: "#5224b5", // Font color (white in this case)
      fontSize: 12, // Font size (optional)
    },
    splitLine: {
      show: false, // Disable gridlines on the x-axis
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      color: "#5224b5",
      fontSize: 9,
    },
    splitLine: {
      show: true, // Enable gridlines on the y-axis
      lineStyle: {
        color: "#9AA5BA", // Lighter gridline color
        type: "line", // Dashed gridlines for subtle appearance
      },
    },
  },
  grid: {
    top: "6%",
    left: "3%",
    right: "4%",
    bottom: "15%",
    containLabel: true,
  },
  series: [
    {
      data: [6, 32, 25, 15, 13, 1],
      type: "line",
      color: "#132f62",
      label: {
        show: true,
        position: "top", // Show labels on top of data points
        color: "#5224b5", // Label font color
        fontSize: 10, // Font size of the labels
        formatter: "{c}", // Show the value of the point
      },
      itemStyle: {
        color: "#5224b590", // Point color (optional)
      },
      lineStyle: {
        width: 2, // Line width (optional)
      },
      areaStyle: {},
    },
  ],
};
