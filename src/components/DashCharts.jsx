import { color } from "echarts";
import ReactECharts from "echarts-for-react";

function Zone() {
  return (
    <ReactECharts option={option1} style={{ height: "100%", width: "100%" }} />
  );
}
function State() {
  return (
    <ReactECharts option={option2} style={{ height: "100%", width: "100%" }} />
  );
}
function City() {
  return (
    <ReactECharts option={option3} style={{ height: "100%", width: "100%" }} />
  );
}
function TypeOfCity() {
  return (
    <ReactECharts option={option4} style={{ height: "100%", width: "100%" }} />
  );
}
function CoreSupercore() {
  return (
    <ReactECharts option={option5} style={{ height: "100%", width: "100%" }} />
  );
}
function HCPSpeciality() {
  return (
    <ReactECharts option={option6} style={{ height: "100%", width: "100%" }} />
  );
}
function HQOfClient() {
  return (
    <ReactECharts option={option7} style={{ height: "100%", width: "100%" }} />
  );
}
function DistanceDistribution() {
  return (
    <ReactECharts option={option8} style={{ height: "100%", width: "100%" }} />
  );
}
function BrandAdoptionL() {
  return (
    <ReactECharts option={option9} style={{ height: "100%", width: "100%" }} />
  );
}
function BrandAdoption({ data }) {
  const chartOption = {
    ...option10,
    series: [
      {
        ...option10.series[0],
        data: data || option10.series[0].data,
      },
    ],
  };
  return (
    <ReactECharts
      option={chartOption}
      style={{ height: "100%", width: "100%" }}
    />
  );
}
function BrandDispersionL() {
  return (
    <ReactECharts option={option11} style={{ height: "100%", width: "100%" }} />
  );
}
function BrandDispersion({ data }) {
  const chartOption = {
    ...option12,
    series: [
      {
        ...option12.series[0],
        data: data || option12.series[0].data,
      },
    ],
  };
  return (
    <ReactECharts
      option={chartOption}
      style={{ height: "100%", width: "100%" }}
    />
  );
}

function BrandDispersionL2() {
  return (
    <ReactECharts option={option13} style={{ height: "100%", width: "100%" }} />
  );
}
function BrandDispersion2({ data }) {
  const chartOption = {
    ...option14,
    series: [
      {
        ...option12.series[0],
        data: data || option12.series[0].data,
      },
    ],
  };
  return (
    <ReactECharts
      option={chartOption}
      style={{ height: "100%", width: "100%" }}
    />
  );
}
function Skus() {
  return (
    <ReactECharts option={option15} style={{ height: "100%", width: "100%" }} />
  );
}

const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

const option1 = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    {
      type: "pie",
      center: ["50%", "55%"],
      radius: ["25%", "50%"],
      avoidLabelOverlap: false,
      padAngle: 5,
      itemStyle: {
        borderRadius: 10,
      },
      label: {
        show: true,
        formatter: "{c}%", // Show value
        position: "outside", // or "inside" if you want values inside slices
        color: "#656565",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 12,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: true,
      },
      data: [
        { value: 28, name: "North" },
        { value: 38, name: "East 1" },
        { value: 32, name: "East 2" },
        { value: 26, name: "South 1" },
        { value: 22, name: "South 2" },
        { value: 18, name: "South 3" },
        { value: 30, name: "West" },
      ],
    },
  ],
};

const option2 = {
  xAxis: {
    type: "category",
    data: [
      "Tripura",
      "Gujarat",
      "Maharashtra",
      "Tamil Nadu",
      "Karnataka",
      "West",
      "Bengal",
      "Odisha",
      "Kerala",
      "Uttarakhand",
      "Delhi",
      "Assam",
      "Andhra Pradesh",
      "Haryana",
      "Telangana",
      "Jharkhand",
      "Uttar Pradesh",
      "Bihar",
      "Pondicherry",
    ],
    axisLabel: {
      rotate: 45, // Rotates labels to prevent overlap
      interval: 0, // Show all labels
    },
  },
  yAxis: {
    type: "value",
  },
  grid: {
    top: "8%",
    left: "3%",
    right: "4%",
    bottom: "15%",
    containLabel: true,
  },
  series: [
    {
      name: "State Data",
      data: [
        120, 200, 150, 80, 110, 130, 120, 200, 150, 80, 70, 110, 130, 120, 200,
        150, 80, 90, 130,
      ],
      label: {
        show: true,
        position: "top",
        formatter: "{c}",
        color: "#656565",
      },
      type: "bar",
      itemStyle: {
        color: "#dc4674",
      },
    },
  ],
};

const option3 = {
  xAxis: {
    type: "category",
    data: [
      "Agartala",
      "Ahmedabad",
      "Akola",
      "Aurangabad",
      "Avanashi",
      "Bangalore",
      "Bangalore North",
      "Bangalore South",
      "Bardhman",
      "Bhubaneswar",
      "Calicut",
      "Chennai",
      "Cochin",
      "Coimbatore",
      "Coimbatore South",
      "Dehradun",
      "Delhi",
      "Dibrugarh",
      "Eluru",
      "Erode",
      "Faridabad",
      "Guntur",
      "Gurugram",
      "Guwahati",
    ],
    axisLabel: {
      rotate: 45,
      interval: 0,
    },
  },
  yAxis: {
    type: "value",
  },
  grid: {
    top: "6%",
    left: "3%",
    right: "4%",
    bottom: "2%",
    containLabel: true,
  },
  series: [
    {
      data: [
        180,
        150,
        80,
        {
          value: 200,
          itemStyle: {
            color: "#357380", // Custom color for this bar
          },
        },
        170,
        110,
        130,
        150,
        80,
        70,
        110,
        130,
        150,
        80,
        70,
        110,
        130,
        170,
        110,
        130,
        150,
        80,
        70,
        110,
      ],

      label: {
        show: true,
        position: "top",
        formatter: "{c}",
        color: "#656565",
      },
      type: "bar",
      itemStyle: {
        color: "#6bb3c2", // Default color for all other bars
      },
    },
  ],
};

const option4 = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    {
      type: "pie",
      radius: ["40%", "70%"],
      center: ["50%", "75%"],
      // adjust the start and end angle
      startAngle: 180,
      endAngle: 360,
      label: {
        formatter: "{c}", // This shows the raw value
        color: "#656565", // Optional: label text color
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
  ],
};

const option5 = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      center: ["50%", "50%"],
      radius: ["25%", "50%"],
      avoidLabelOverlap: false,
      padAngle: 5,
      itemStyle: {
        borderRadius: 10,
      },
      label: {
        show: true,
        formatter: "{c}%", // Show value
        position: "outside", // or "inside" if you want values inside slices
        color: "#656565",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 12,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: true,
      },
      data: [
        { value: 40, name: "Core" },
        { value: 60, name: "Supercore" },
      ],
    },
  ],
};

const option6 = {
  xAxis: {
    type: "category",
    data: [
      "Dietician",
      "Consultant",
      "Physician",
      "Diabetologist",
      "Endocrinologist",
      "General",
      "Practitioner",
      "Gynaecologist",
      "Cardiologist",
      "Chest/",
      "Pulmonologist",
      "Neuro",
      "Surgeon",
      "Intensivist",
      "General",
      "Surgeon",
      "Nephrologist",
    ],
    axisLabel: {
      rotate: 45, // Rotates labels to prevent overlap
      interval: 0, // Show all labels
    },
  },
  yAxis: {
    type: "value",
  },
  grid: {
    top: "6%",
    left: "3%",
    right: "4%",
    bottom: "0%",
    containLabel: true,
  },
  series: [
    {
      name: "State Data",
      data: [
        120, 200, 150, 80, 110, 130, 120, 200, 150, 80, 70, 110, 130, 120, 200,
        150, 80,
      ],
      type: "bar",
      itemStyle: {
        color: "#dc4674",
      },
    },
  ],
};

const option7 = {
  xAxis: {
    type: "category",
    data: [
      "Guwahati",
      "Ahmedabad",
      "Nagpur",
      "Aurangabad",
      "Coimbatore",
      "Bangalore",
      "Mangalore",
      "Bardhaman",
      "Bhubaneswar",
      "Calicut",
      "Chennai",
      "Cochin",
      "Dehradun",
      "Delhi",
      "Dibrugarh",
      "Vijayawada",
    ],
    axisLabel: {
      rotate: 45,
      interval: 0,
    },
  },
  yAxis: {
    type: "value",
  },
  grid: {
    top: "8%",
    left: "3%",
    right: "4%",
    bottom: "15%",
    containLabel: true,
  },
  series: [
    {
      data: [
        180,
        150,
        80,
        {
          value: 200,
          itemStyle: {
            color: "#357380", // Custom color for this bar
          },
        },
        170,
        110,
        130,
        150,
        80,
        70,
        110,
        130,
        150,
        80,
        70,
        110,
        130,
      ],
      label: {
        show: true,
        position: "top",
        formatter: "{c}",
        color: "#656565",
      },
      type: "bar",
      itemStyle: {
        color: "#6bb3c2", // Default color for all other bars
      },
    },
  ],
};

const option8 = {
  legend: {
    top: "bottom",
    textStyle: {
      fontSize: 10, // 👈 Smaller legend text
    },
  },
  toolbox: {
    show: true,
    // feature: {
    //   mark: { show: true },
    //   dataView: { show: true, readOnly: false },
    //   restore: { show: true },
    //   saveAsImage: { show: true },
    // },
  },
  series: [
    {
      name: "Nightingale Chart",
      type: "pie",
      radius: "60%",
      center: ["50%", "40%"],
      label: {
        show: true,
        position: "outside", // Place label outside the slices
        formatter: "{b}: {d}%", // Show name and percentage
        color: "#000000", // Use black or a visible color
        fontSize: 12,
      },
      labelLine: {
        show: true, // Show connecting lines
        length: 15,
        length2: 10,
      },
      data: [
        { value: 35, name: "Front" },
        { value: 30, name: "Distant" },
        { value: 25, name: "Adjacent" },
        { value: 20, name: "Within Campus" },
      ],
    },
  ],
};

// Table chart only label

const option9 = {
  xAxis: {
    type: "value",
    show: false,
    max: 80,
  },
  yAxis: {
    type: "category",
    data: [
      "Ensure Diabetes Care (Abbott)",
      "Prohance D (Sun Pharma)",
      "Protinex Diabetes Care (Danone-Nutricia)",
      "D-Protin (British Biologicals)",
      "Horlicks Diabetes Plus (HUL)",
      "Celevida (Dr. Reddy's Laboratories)",
      "Resource Diabetes (Nestlé India)",
      "Fresubin DM (Fresenius Kabi India)",
      "Pentasure DM (Hexagon Nutrition)",
    ],
    inverse: true,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: "#000",
      interval: 0,
      align: "left",
      fontWeight: "600",
    },
  },
  grid: {
    top: "2%",
    left: "-65%",
    right: "0%",
    bottom: "0%",
    containLabel: true,
  },
  series: [
    {
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      type: "bar",
      color: "#DC4674",
    },
  ],
};

// Table chart with only chart

const option10 = {
  xAxis: {
    type: "value",
    show: false,
    max: 80,
  },
  yAxis: {
    type: "category",
    show: false,
    data: [
      "Ensure Diabetes Care (Abbott)",
      "Prohance D (Sun Pharma)",
      "Protinex Diabetes Care (Danone-Nutricia)",
      "D-Protin (British Biologicals)",
      "Horlicks Diabetes Plus (HUL)",
      "Celevida (Dr. Reddy's Laboratories)",
      "Resource Diabetes (Nestlé India)",
      "Fresubin DM (Fresenius Kabi India)",
      "Pentasure DM (Hexagon Nutrition)",
    ],
    inverse: true,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  grid: {
    top: "2%",
    left: "-110%",
    right: "20%",
    bottom: "0%",
    containLabel: true,
  },
  series: [
    {
      data: [72, 47, 40, 34, 32, 30, 27, 20, 20],
      type: "bar",
      label: {
        show: true,
        position: "right",
        formatter: "{c}%",
        color: "#000",
      },
      color: "#DC4674",
    },
  ],
};

// Table chart only label

const option11 = {
  xAxis: {
    type: "value",
    show: false,
    max: 80,
  },
  yAxis: {
    type: "category",
    data: [
      "Ensure (Abbott) - 200GM-Chocolate-Box",
      "Ensure (Abbott) - 375GM-Chocolate-Box",
      "Prohance D (Sun Pharma) - 200GM-Vanilla-Powder Tin",
      "Protinex Diabetes Care (Danone -Nutricia) - 400GM-Creamy Vanilla-Jar",
      "Celevida (Dr. Reddy’s Laboratories) - 400GM-Kesar Elaichi-Powder Tin",
      "Resource Diabetes (Nestlé India) - 400GM-Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Creamy Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Chocolate-Tin",
    ],
    inverse: true,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: "#000",
      interval: 0,
      align: "left",
      fontWeight: "600",
    },
  },
  grid: {
    top: "2%",
    left: isMobile ? "-83%" : "-70%",
    right: "0%",
    bottom: "0%",
    containLabel: true,
  },
  series: [
    {
      data: [0, 0, 0, 0, 0, 0, 0, 0],
      type: "bar",
      color: "#DC4674",
    },
  ],
};

const option12 = {
  xAxis: {
    type: "value",
    show: false,
    max: 80,
  },
  yAxis: {
    type: "category",
    show: false,
    data: [
      "Ensure (Abbott) - 200GM-Chocolate-Box",
      "Ensure (Abbott) - 375GM-Chocolate-Box",
      "Prohance D (Sun Pharma) - 200GM-Vanilla-Powder Tin",
      "Protinex Diabetes Care (Danone -Nutricia) - 400GM-Creamy Vanilla-Jar",
      "Celevida (Dr. Reddy’s Laboratories) - 400GM-Kesar Elaichi-Powder Tin",
      "Resource Diabetes (Nestlé India) - 400GM-Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Creamy Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Chocolate-Tin",
    ],
    inverse: true,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  grid: {
    top: "2%",
    left: "-180%",
    right: "20%",
    bottom: "0%",
    containLabel: true,
  },
  series: [
    {
      data: [49, 47, 40, 32, 32, 30, 24, 20],
      type: "bar",
      label: {
        show: true,
        position: "right",
        formatter: "{c}%",
        color: "#000",
      },
      color: "#DC4674",
    },
  ],
};

// Table chart only label

const option13 = {
  xAxis: {
    type: "value",
    show: false,
    max: 80,
  },
  yAxis: {
    type: "category",
    data: [
      "Ensure (Abbott) - 200GM-Chocolate-Box",
      "Ensure (Abbott) - 375GM-Chocolate-Box",
      "Prohance D (Sun Pharma) - 200GM-Vanilla-Powder Tin",
      "Protinex Diabetes Care (Danone -Nutricia) - 400GM-Creamy Vanilla-Jar",
      "Celevida (Dr. Reddy's Laboratories) - 400GM-Kesar Elaichi-Powder Tin",
      "Resource Diabetes (Nestlé India) - 400GM-Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Creamy Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Chocolate-Tin",
      "Ensure (Abbott) - 200GM-Chocolate-Box",
      "Ensure (Abbott) - 375GM-Chocolate-Box",
      "Prohance D (Sun Pharma) - 200GM-Vanilla-Powder Tin",
      "Protinex Diabetes Care (Danone -Nutricia) - 400GM-Creamy Vanilla-Jar",
      "Celevida (Dr. Reddy's Laboratories) - 400GM-Kesar Elaichi-Powder Tin",
      "Resource Diabetes (Nestlé India) - 400GM-Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Creamy Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Chocolate-Tin",
      "Ensure (Abbott) - 200GM-Chocolate-Box",
      "Ensure (Abbott) - 375GM-Chocolate-Box",
      "Prohance D (Sun Pharma) - 200GM-Vanilla-Powder Tin",
      "Protinex Diabetes Care (Danone -Nutricia) - 400GM-Creamy Vanilla-Jar",
      "Celevida (Dr. Reddy's Laboratories) - 400GM-Kesar Elaichi-Powder Tin",
      "Resource Diabetes (Nestlé India) - 400GM-Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Creamy Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Chocolate-Tin",
      "Ensure (Abbott) - 200GM-Chocolate-Box",
      "Ensure (Abbott) - 375GM-Chocolate-Box",
      "Prohance D (Sun Pharma) - 200GM-Vanilla-Powder Tin",
      "Protinex Diabetes Care (Danone -Nutricia) - 400GM-Creamy Vanilla-Jar",
      "Celevida (Dr. Reddy's Laboratories) - 400GM-Kesar Elaichi-Powder Tin",
      "Resource Diabetes (Nestlé India) - 400GM-Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Creamy Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Chocolate-Tin",
      "Ensure (Abbott) - 200GM-Chocolate-Box",
      "Ensure (Abbott) - 375GM-Chocolate-Box",
      "Prohance D (Sun Pharma) - 200GM-Vanilla-Powder Tin",
      "Protinex Diabetes Care (Danone -Nutricia) - 400GM-Creamy Vanilla-Jar",
      "Celevida (Dr. Reddy's Laboratories) - 400GM-Kesar Elaichi-Powder Tin",
      "Resource Diabetes (Nestlé India) - 400GM-Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Creamy Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Chocolate-Tin",
    ],
    inverse: true,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: "#000",
      interval: 0,
      align: "left",
      fontWeight: "600",
    },
  },
  grid: {
    top: "2%",
    left: isMobile ? "-83%" : "-70%",
    right: "0%",
    bottom: "0%",
    containLabel: true,
  },
  series: [
    {
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      type: "bar",
      color: "#DC4674",
    },
  ],
};

const option14 = {
  xAxis: {
    type: "value",
    show: false,
    max: 80,
  },
  yAxis: {
    type: "category",
    show: false,
    data: [
      "Ensure (Abbott) - 200GM-Chocolate-Box",
      "Ensure (Abbott) - 375GM-Chocolate-Box",
      "Prohance D (Sun Pharma) - 200GM-Vanilla-Powder Tin",
      "Protinex Diabetes Care (Danone -Nutricia) - 400GM-Creamy Vanilla-Jar",
      "Celevida (Dr. Reddy's Laboratories) - 400GM-Kesar Elaichi-Powder Tin",
      "Resource Diabetes (Nestlé India) - 400GM-Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Creamy Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Chocolate-Tin",
      "Ensure (Abbott) - 200GM-Chocolate-Box",
      "Ensure (Abbott) - 375GM-Chocolate-Box",
      "Prohance D (Sun Pharma) - 200GM-Vanilla-Powder Tin",
      "Protinex Diabetes Care (Danone -Nutricia) - 400GM-Creamy Vanilla-Jar",
      "Celevida (Dr. Reddy's Laboratories) - 400GM-Kesar Elaichi-Powder Tin",
      "Resource Diabetes (Nestlé India) - 400GM-Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Creamy Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Chocolate-Tin",
      "Ensure (Abbott) - 200GM-Chocolate-Box",
      "Ensure (Abbott) - 375GM-Chocolate-Box",
      "Prohance D (Sun Pharma) - 200GM-Vanilla-Powder Tin",
      "Protinex Diabetes Care (Danone -Nutricia) - 400GM-Creamy Vanilla-Jar",
      "Celevida (Dr. Reddy's Laboratories) - 400GM-Kesar Elaichi-Powder Tin",
      "Resource Diabetes (Nestlé India) - 400GM-Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Creamy Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Chocolate-Tin",
      "Ensure (Abbott) - 200GM-Chocolate-Box",
      "Ensure (Abbott) - 375GM-Chocolate-Box",
      "Prohance D (Sun Pharma) - 200GM-Vanilla-Powder Tin",
      "Protinex Diabetes Care (Danone -Nutricia) - 400GM-Creamy Vanilla-Jar",
      "Celevida (Dr. Reddy's Laboratories) - 400GM-Kesar Elaichi-Powder Tin",
      "Resource Diabetes (Nestlé India) - 400GM-Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Creamy Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Chocolate-Tin",
      "Ensure (Abbott) - 200GM-Chocolate-Box",
      "Ensure (Abbott) - 375GM-Chocolate-Box",
      "Prohance D (Sun Pharma) - 200GM-Vanilla-Powder Tin",
      "Protinex Diabetes Care (Danone -Nutricia) - 400GM-Creamy Vanilla-Jar",
      "Celevida (Dr. Reddy's Laboratories) - 400GM-Kesar Elaichi-Powder Tin",
      "Resource Diabetes (Nestlé India) - 400GM-Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Creamy Vanilla-Tin",
      "Pentasure DM (Hexagon Nutrition) - 400GM-Chocolate-Tin",
    ],
    inverse: true,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  grid: {
    top: "2%",
    left: "-180%",
    right: "20%",
    bottom: "0%",
    containLabel: true,
  },
  series: [
    {
      data: [
        49, 47, 40, 32, 32, 30, 24, 20, 49, 47, 40, 32, 32, 30, 24, 20, 49, 47,
        40, 32, 32, 30, 24, 20, 49, 47, 40, 32, 32, 30, 24, 20, 49, 47, 40, 32,
        32, 30, 24, 20,
      ],
      type: "bar",
      label: {
        show: true,
        position: "right",
        formatter: "{c}%",
        color: "#000",
      },
      color: "#DC4674",
    },
  ],
};

const option15 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    formatter: (params) => {
      const total = params[0].value + params[1].value;
      return `
        ${params[0].seriesName}: ${
        Math.round((params[0].value / total) * 1000) / 10
      }%<br/>
        ${params[1].seriesName}: ${
        Math.round((params[1].value / total) * 1000) / 10
      }%<br/>
        Total: ${total}
      `;
    },
  },
  legend: {
    selectedMode: false,
    data: ["Rx", "Rc"],
  },
  yAxis: {
    type: "value",
    show: false,
    axisLabel: {
      formatter: "{value}%",
    },
  },
  xAxis: {
    type: "category",
    data: [
      "200GM-Chocolate-Box",
      "375GM-Chocolate-Box",
      "400GM-Chocolate-Jar",
      "950GM-Chocolate-Box",
      "1KG-Chocolate-Refill Powder",
      "1.9KG-Chocolate-Box",
      "200GM-Vanilla-Box",
      "375GM-Vanilla-Box",
      "400GM-Vanilla-Jar",
      "950GM-Vanilla-Box",
      "1KG-Vanilla-Refill Powder",
      "1.9KG-Vanilla-Box",
    ],
    axisLabel: {
      rotate: 45,
    },
  },
  grid: {
    top: "10%",
    left: "3%",
    right: "4%",
    bottom: "2%",
    containLabel: true,
  },
  series: [
    {
      name: "Rx",
      type: "bar",
      stack: "total",
      barWidth: "60%",
      itemStyle: {
        color: "#6BB3C2",
      },
      label: {
        show: true,
        fontSize: 10,
        position: "inside",
        formatter: (params) => {
          const total =
            params.value +
            (params.dataIndex !== undefined
              ? option15.series[1].data[params.dataIndex]
              : 0);
          return total > 0
            ? `${Math.round((params.value / total) * 1000) / 10}%`
            : "";
        },
        color: "#000",
      },
      data: [100, 302, 301, 334, 390, 330, 320, 132, 101, 134, 90, 230],
    },
    {
      name: "Rc",
      type: "bar",
      stack: "total",
      barWidth: "60%",
      itemStyle: {
        color: "#DC4674",
      },
      label: {
        show: true,
        fontSize: 10,
        position: "inside",
        formatter: (params) => {
          const total =
            params.value +
            (params.dataIndex !== undefined
              ? option15.series[0].data[params.dataIndex]
              : 0);
          return total > 0
            ? `${Math.round((params.value / total) * 1000) / 10}%`
            : "";
        },
        color: "#fff",
      },
      data: [320, 132, 101, 134, 90, 230, 210, 302, 301, 334, 390, 330],
    },
  ],
};

export {
  Zone,
  State,
  City,
  TypeOfCity,
  CoreSupercore,
  HCPSpeciality,
  HQOfClient,
  DistanceDistribution,
  BrandAdoptionL,
  BrandAdoption,
  BrandDispersionL,
  BrandDispersion,
  BrandDispersionL2,
  BrandDispersion2,
  Skus,
};
