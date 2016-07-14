var BE_URL = document.location.hostname == "localhost" ? "http://54.85.162.94:9090/fid-TQLKQU766UXAAAKYHYPSYXQKPJS" : "http://greenhouse.atomiton.com:9090/fid-TQLKQU766UXAAAKYHYPSYXQKPJS";
var BE_URL_WS = document.location.hostname == "localhost" ? "ws://54.85.162.94:9090/fid-TQLKQU766UXAAAKYHYPSYXQKPJSWS" : "ws://greenhouse.atomiton.com:9090/fid-TQLKQU766UXAAAKYHYPSYXQKPJSWS";
var atomiton_studio_key = "MWFlMWE3OGEtMTBiYS00ZWI3LWEzMzUtZjg3NmQ4ZjQ0NDk0";
var BE_TQL_URL = document.location.hostname == "localhost" ?
  "http://tqlr1.atomiton.com:8080/fid-TQLEngineManager?x-atomiton-studio-key=MWFlMWE3OGEtMTBiYS00ZWI3LWEzMzUtZjg3NmQ4ZjQ0NDk0&x-atomiton-session-key=" :
  "http://tql.atomiton.com/fid-TQLEngineManager?x-atomiton-studio-key=MWFlMWE3OGEtMTBiYS00ZWI3LWEzMzUtZjg3NmQ4ZjQ0NDk0&x-atomiton-session-key=";
var BE_API = {
  SIMPLE_RESULT: 'Find.Result',
  SIMULATION: {
    START: '<StartSimulation><GreenhouseID>{0}</GreenhouseID></StartSimulation>',
    STOP: '<StopSimulation><GreenhouseID>{0}</GreenhouseID></StopSimulation>'
  },
  GREEN_HOUSE: {
    OBJECT: 'Greenhouse',
    FIND_ALL: '<Query><Find><Greenhouse><GreenhouseID ne="" /></Greenhouse></Find></Query>',
    FIND_ALL_RESULT: 'Find.Result',
    FIND_HEATER: '<Query><GetHeaterList><GreenhouseID>{0}</GreenhouseID></GetHeaterList></Query>',
    FIND_HEATER_RESULT: 'HeaterList',
    FIND_HEATER_OBJECT: 'Heater',
    FIND_IRRIGATION: '<Query><GetIrrigationMotorList><GreenhouseID>{0}</GreenhouseID></GetIrrigationMotorList></Query>',
    FIND_IRRIGATION_RESULT: 'IrrigationMotorList',
    FIND_IRRIGATION_OBJECT: 'IrrigationMotor',
  },
  LANE: {
    OBJECT: 'Lane',
    FIND_BY_GREENHOUSE: '<Query><Find><Lane><GreenhouseID eq="{0}" /></Lane></Find></Query>',
    FIND_BY_GREENHOUSE_RESULT: 'Find.Result',
    FIND_ALL: '<Query><Find><Lane><LaneId ne="" /></Lane></Find></Query>',
    FIND_ALL_RESULT: 'Find.Result',
  },
  ZONE: {
    OBJECT: 'Zone',
    FIND: '<Query><Find><Zone><ZoneId eq="{0}" /></Zone></Find></Query>',
    FIND_RESULT: 'Find.Result',
    FIND_ALL: '<Query><Find><Zone><ZoneId ne="" /></Zone></Find></Query>',
    FIND_ALL_RESULT: 'Find.Result',
    FIND_BY_LANE: '<Query><Find><Zone><LaneID eq="{0}" /></Zone></Find></Query>',
    FIND_BY_LANE_RESULT: 'Find.Result',
    FIND_BY_GREEN_HOUSE: '<GetZoneList><GreenhouseID>{0}</GreenhouseID></GetZoneList>',
    FIND_BY_GREEN_HOUSE_RESULT: 'ZoneList.Zone',
    FIND_LIGHT_BY_ALL_GRID: '<Query><Find><LightModel><GridID>{0}</GridID></LightModel>' +
    '<LightModel><GridID>{1}</GridID></LightModel>' +
    '<LightModel><GridID>{2}</GridID></LightModel>' +
    '<LightModel><GridID>{3}</GridID></LightModel>' +
    '<LightModel><GridID>{4}</GridID></LightModel>' +
    '<LightModel><GridID>{5}</GridID></LightModel>' +
    '<LightModel><GridID>{6}</GridID></LightModel>' +
    '<LightModel><GridID>{7}</GridID></LightModel>' +
    '<LightModel><GridID>{8}</GridID></LightModel></Find></Query>',
    FIND_LIGHT_BY_ALL_GRID_RESULT: 'Find.Result',
    FIND_LIGHT_BY_ALL_GRID_OBJECT: 'LightModel',
    FIND_HEATER: '<Find><Heater><ZoneID>{0}</ZoneID></Heater></Find>',
    FIND_HEATER_OBJECT: 'Heater',
    FIND_HEATER_RESULT: 'Find.Result.Heater',
    CONTROL_HEATER: '<Query><UpdateHeaterState><ZoneID>{0}</ZoneID><OnOffState>{1}</OnOffState><HeatingLevel>{2}</HeatingLevel></UpdateHeaterState></Query>',
    FIND_IRRIGATION_BY_ZONE: '<Query><Find format="All"><IrrigationMotor><ZoneID>{0}</ZoneID></IrrigationMotor></Find></Query>',
    FIND_IRRIGATION_OBJECT: 'IrrigationMotor',
    FIND_IRRIGATION_BY_ZONE_RESULT: 'Find.Result.IrrigationMotor',
    CONTROL_IRRIGATION: '<Query><UpdateIrrigationMotorState><ZoneID>{0}</ZoneID><OnOffState>{1}</OnOffState></UpdateIrrigationMotorState></Query>'
  },
  GRID: {
    OBJECT: 'Grid',
    FIND_BY_ZONE: '<Query><Find><Grid><ZoneID eq="{0}" /></Grid></Find></Query>',
    FIND_BY_ZONE_RESULT: 'Find.Result',
    FIND_ALL: '<Query><Find><Grid><GreenhouseID ne="" /></Grid></Find></Query>',
  },
  SENSOR: {
    EXT_TEMPERATURE: '<Query><Find format="Version"><ExtTempSensor><sensorId ne="" /></ExtTempSensor></Find></Query>',
    EXT_TEMPERATURE_RESULT: 'Find.Result.ExtTempSensor',
    EXT_HUMIDITY: '<Query><Find><ExtHumiditySensor><SensorId ne="" /></ExtHumiditySensor></Find></Query>',
    EXT_HUMIDITY_RESULT: 'Find.Result.ExtHumiditySensor.HumidityValue',
    EXT_LIGHT: '',
    EXT_SOIL_MOISTURE: '',
    FIND_ALL_IN_ZONE: '<Query><Find><TempSensor><ZoneID eq="{0}" /></TempSensor><HumiditySensor><ZoneID eq="{0}" /></HumiditySensor><Camera><ZoneID eq="{0}" /></Camera><IrrigationMotor><ZoneID eq="{0}" /></IrrigationMotor><Heater><ZoneID eq="{0}" /></Heater></Find></Query>',
    FIND_ALL_IN_ZONE_RESULT: 'Find.Result',
    FIND_AMBIENT_LIGHT_BY_GRID: '<Query><Find><AmbientLightSensor><GridID eq="{0}" /></AmbientLightSensor></Find></Query>',
    OBJECT_AMBIENT_LIGHT_BY_GRID: 'AmbientLightSensor',
    FIND_SOIL_BY_GRID: '<Query><Find><SoilSensor><GridID eq="{0}" /></SoilSensor></Find></Query>',
    OBJECT_SOIL_BY_GRID: 'SoilSensor',
    FIND_LIGHT_BY_GRID: '<Query><Find><Light><GridID eq="{0}" /></Light></Find></Query>',
    OBJECT_LIGHT_BY_GRID: 'Light',
    FIND_SENSOR_BY_GRID: '<Query><Find><SoilSensorModel><GridID eq="{0}" /></SoilSensorModel><LightModel><GridID eq="{0}" /></LightModel><AmbientLightSensorModel><GridID eq="{0}" /></AmbientLightSensorModel></Find></Query>'
  },
  USER: {
    PROFILE: "<GetUserProfileByToken><SessionKey>{0}</SessionKey></GetUserProfileByToken>",
    PROFILE_RESULT: "User"
  },
  REPORT: {
    AVG_TEMPERATURE: '<Query><Find format="All"><GHTempSensorCurrentTemp><GreenhouseID>{0}</GreenhouseID></GHTempSensorCurrentTemp></Find></Query>',
    AVG_TEMPERATURE_OBJECT: 'GHTempSensorCurrentTemp',
    AVG_TEMPERATURE_JSON: {"Query": {"Find": {"GHTempSensorCurrentTemp": {"GreenhouseID": "{0}"}, "format": "All"}}},
    AVG_HUMIDITY: '<Query><Find format="All"><GHHumiditySensorCurrentHumidity><GreenhouseID>{0}</GreenhouseID></GHHumiditySensorCurrentHumidity></Find></Query>',
    AVG_HUMIDITY_OBJECT: 'GHHumiditySensorCurrentHumidity',
    AVG_HUMIDITY_JSON: {
      "Query": {
        "Find": {
          "GHHumiditySensorCurrentHumidity": {"GreenhouseID": "{0}"},
          "format": "All"
        }
      }
    }
  },
  WS: {
    SUBSCRIPTION: '<Query Storage="TqlSubscription"><Save><TqlSubscription Label="Greenhouse" sid="11"><Topic>*</Topic></TqlSubscription></Save></Query>',
    SUBSCRIPTION_RESULT: 'TqlNotification.Update',
    SUBSCRIPTION_JSON: {
      Query: {
        Storage: "TqlSubscription",
        Save: {
          TqlSubscription: {
            Label: "Greenhouse",
            sid: 11,
            Topic: "*",
          }
        }
      }
    }
  }

};
