var CONFIG_CONSTANT = {
  DEFAULT_PLANT_IMAGE: "",
  FLICKR: {
    key: "5991cdd9d75fcea436e3cc38958af518",
    secret: "eeac9c46cb4f6787"
  },
  ADMIN_USER: ["support@atomiton.com", "naph47@gmail.com"],
  SENSOR_VECTOR: {
    //for internal meter degree
    min: -165,
    max: 90
  },
  HEAT_MAP_SCALE: {
    "VPD": {
      unit: "",
      data: [800, 750, 700, 650, 600, 550, 450, 400, 0],
      min: 0,
      max: 800
    },
    "Temperature": {
      unit: "°C",
      reportTitle: ['Time', 'Temperature'],
      data: [0, 5, 10, 15, 20, 25, 30, 35, 40],
      min: 0,
      max: 40
    },
    "Humidity": {
      unit: "%",
      reportTitle: ['Time', 'Humidity'],
      data: [100, 90, 80, 70, 60, 50, 40, 30, 0],
      min: 0,
      max: 100
    },
    "Average soil moisture": {
      unit: "cb",
      reportTitle: ['Zone', 'Soil Moisture'],
      data: [100, 90, 80, 70, 60, 50, 40, 30, 0],
      min: 0,
      max: 100
    },
    "Average ambient light": {
      unit: "lux",
      reportTitle: ['Zone', 'Ambient Light'],
      data: [80000, 70000, 60000, 50000, 40000, 30000, 20000, 10000, 0],
      min: 0,
      max: 80000
    }
  },
  COLOR: {
    GREEN: "#ffedc2",
    ORANGE: "#FF7E27",
    BLUE: "#9575cd",
    GRAY: "#c4c9cc",
    BLUE_LIGHT: "#e6e6fa"
  }
};
