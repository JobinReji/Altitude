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
function BrandAdoption() {
  return (
    <ReactECharts option={option10} style={{ height: "100%", width: "100%" }} />
  );
}

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
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
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
    top: "6%",
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
      "Hyderabad",
      "Jamshedpur",
      "Kakinada",
      "Kolkata",
      "Kovilpatti",
      "Kozhikode",
      "Kundapur",
      "Lucknow",
      "Madurai",
      "Madurai North",
      "Malda",
      "Mangalagiri",
      "Mangalore",
      "Melur",
      "Mumbai",
      "Nagpur",
      "Narasaraopet",
      "Nellore",
      "Noida",
      "Ongole",
      "Patna",
      "Pondicherry",
      "Pune",
      "Rajahmundry",
      "Ranchi",
      "Salem",
      "Surat",
      "Tenali",
      "Tezpur",
      "Tirunelveli",
      "Tirupathi",
      "Tiruppur",
      "TM HQ - Ahmedabad",
      "TM HQ - Aurangabad",
      "Varanasi",
      "Vijayawada",
      "Vizag",
      "Vuyyuru",
      "Yawatmal",
      "Yerragondapalem",
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
      ],
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
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      center: ["50%", "75%"],
      // adjust the start and end angle
      startAngle: 180,
      endAngle: 360,
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
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
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
      "Internal Medicine\n -Emergency Medicine",
      "Medical",
      "Oncologist",
      "Neuro",
      "Physician",
      "Surgical",
      "Oncologist",
      "Plastic",
      "Surgery",
      "Oncologist",
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
    bottom: "15%",
    containLabel: true,
  },
  series: [
    {
      name: "State Data",
      data: [
        120, 200, 150, 80, 110, 130, 120, 200, 150, 80, 70, 110, 130, 120, 200,
        150, 80, 90, 130, 120, 200, 150, 80, 90, 150, 80, 90,
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
    top: "6%",
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
    left: "-50%",
    right: "0%",
    bottom: "2%",
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
    left: "-100%",
    right: "20%",
    bottom: "2%",
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
};
