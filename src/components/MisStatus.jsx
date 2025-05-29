import ReactECharts from "echarts-for-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import downloadCity from "../assets/city_download.png";
import downloadRaw from "../assets/raw_download.png";
export default function MisStatus() {
  return (
    <>
      <div className="w-full sm:w-[90%] p-1 rounded-md sm-tab">
        <div className="h-full w-full flex justify-center items-stretch text-[#5224b5]">
          <div className="w-[98%] rounded-lg shadow_out px-5 pb-2">
            <div className="h-[45%]">
              <div className="relative flex sm:flex-row flex-col items-center justify-center">
                <div className="flex justify-center text-xl font-bold mb-2 text-[#5224b5] w-full sm:w-auto">
                  Survey Completion per Day
                </div>
                <div className="text-[#132F62] font-semibold sm:absolute right-0 w-full sm:w-auto text-right">
                  n=12
                </div>
              </div>
              <div className="sm:h-full h-[90%]">
                <ReactECharts
                  option={option}
                  className="sm:block hidden"
                  style={{ height: "100%", width: "100%" }}
                />
                <div className="w-full overflow-x-auto sm-tab">
                  <ReactECharts
                    option={option2}
                    className="sm:hidden block"
                    style={{ height: "220%", width: "400%" }}
                  />
                </div>
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
      <div className="absolute bottom-1 right-2 flex sm:flex-row flex-col gap-2">
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
    formatter: function (params) {
      return `${params[0].axisValue}<br/>
              ${params[0].seriesName}: ${params[0].value} surveys<br/>
              ${params[1].seriesName}: ${params[1].value} surveys`;
    },
  },
  legend: {
    data: ["Chemists", "Doctors"],
    top: 0,
    textStyle: {
      color: "#5224b5",
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: true,
    data: [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
    ],
    axisPointer: {
      type: "shadow",
    },
    axisLabel: {
      color: "#5224b5",
      fontSize: 12,
    },
    axisLine: {
      show: true, // Keep x-axis line visible
      lineStyle: {
        color: "#9AA5BA", // Changed to match x-axis
        width: 1, // Optional: make line thinner
      },
    },
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    type: "value",
    nameTextStyle: {
      color: "#5224b5",
      padding: [0, 0, 0, 30], // Adjust position
    },
    axisLabel: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "#bbbbbb",
        type: "dashed",
      },
    },
  },
  grid: {
    top: "15%", // Increased to accommodate legend
    left: "3%",
    right: "4%",
    bottom: "10%",
    containLabel: true,
  },
  series: [
    {
      name: "Chemists",
      data: [42, 38, 55, 47, 63, 58, 45, 52],
      type: "line",
      color: "#5224b5", // Purple color
      label: {
        show: true,
        position: "top",
        color: "#5224b5",
        fontSize: 10,
        formatter: "{c}",
      },
      itemStyle: {
        color: "#5224b5",
      },
      lineStyle: {
        width: 3,
      },
      symbolSize: 8,
    },
    {
      name: "Doctors",
      data: [15, 22, 18, 25, 12, 20, 28, 17],
      type: "line",
      color: "#6bb3c2", // Teal color
      label: {
        show: true,
        position: "top",
        color: "#6bb3c2",
        fontSize: 10,
        formatter: "{c}",
      },
      itemStyle: {
        color: "#6bb3c2",
      },
      lineStyle: {
        width: 3,
      },
      symbolSize: 8,
    },
  ],
};

const option2 = {
  tooltip: {
    trigger: "axis",
    formatter: function (params) {
      return `${params[0].axisValue}<br/>
              ${params[0].seriesName}: ${params[0].value} surveys<br/>
              ${params[1].seriesName}: ${params[1].value} surveys`;
    },
  },
  legend: {
    data: ["Chemists", "Doctors"],
    top: 0,
    textStyle: {
      color: "#5224b5",
    },
  },
  xAxis: {
    type: "category",
    data: [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
    ],
    axisLabel: {
      rotate: 45,
      interval: 0,
      color: "#5224b5",
      fontSize: 12,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "#9AA5BA",
        width: 1,
      },
    },
    axisTick: {
      alignWithLabel: true,
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "#9AA5BA",
        type: "dashed",
        width: 0.5,
      },
    },
  },
  grid: {
    top: "15%",
    left: "2%",
    right: "4%",
    bottom: "15%",
    containLabel: true,
  },
  series: [
    {
      name: "Doctors",
      data: [42, 38, 55, 47, 63, 58, 45, 52],
      type: "bar",
      barWidth: "40%", // Adjust width for side-by-side bars
      label: {
        show: true,
        position: "top",
        formatter: "{c}",
        color: "#5224b5",
        fontSize: 10,
      },
      itemStyle: {
        color: "#5224b590", // Purple with 90% opacity
      },
    },
    {
      name: "Chemists",
      data: [15, 22, 18, 25, 12, 20, 28, 17],
      type: "bar",
      barWidth: "40%", // Adjust width for side-by-side bars
      label: {
        show: true,
        position: "top",
        formatter: "{c}",
        color: "#6bb3c2",
        fontSize: 10,
      },
      itemStyle: {
        color: "#6bb3c290", // Teal with 90% opacity
      },
    },
  ],
};
