// smartHome.js

// Device constructor function
function Device(name, type, status = false) {
    this.name = name;
    this.type = type;
    this.status = status; // false indicates off, true indicates on
  }
  
  // Device prototype methods
  Device.prototype.turnOn = function() {
    this.status = true;
    console.log(`${this.name} is now ON.`);
  };
  
  Device.prototype.turnOff = function() {
    this.status = false;
    console.log(`${this.name} is now OFF.`);
  };
  
  Device.prototype.checkStatus = function() {
    console.log(`${this.name} is currently ${this.status ? 'ON' : 'OFF'}.`);
  };
  
  // SmartHome constructor function
  function SmartHome(owner) {
    this.owner = owner;
    this.devices = [];
  }
  
  // SmartHome prototype methods
  SmartHome.prototype.addDevice = function(device) {
    this.devices.push(device);
    console.log(`${device.name} added to ${this.owner}'s smart home.`);
  };
  
  SmartHome.prototype.removeDevice = function(deviceName) {
    const index = this.devices.findIndex(device => device.name === deviceName);
    if (index !== -1) {
      this.devices.splice(index, 1);
      console.log(`${deviceName} removed from ${this.owner}'s smart home.`);
    } else {
      console.log(`${deviceName} not found in ${this.owner}'s smart home.`);
    }
  };
  
  SmartHome.prototype.listDevices = function() {
    console.log(`${this.owner}'s Smart Home Devices:`);
    this.devices.forEach(device => {
      console.log(`- ${device.name} (${device.type}): ${device.status ? 'ON' : 'OFF'}`);
    });
  };
  
  // SmartDevice constructor function
  function SmartDevice(name, type, brand, connectivity, status = false) {
    Device.call(this, name, type, status); // Call the Device constructor
    this.brand = brand;
    this.connectivity = connectivity;
  }
  
  // Inherit from Device
  SmartDevice.prototype = Object.create(Device.prototype);
  SmartDevice.prototype.constructor = SmartDevice;
  
  // Asynchronous firmware update method
  SmartDevice.prototype.updateFirmware = async function() {
    console.log(`Updating firmware for ${this.name}...`);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Simulating a fetch request
    if (response.ok) {
      const data = await response.json();
      console.log(`Firmware updated successfully for ${this.name}: ${JSON.stringify(data)}`);
    } else {
      console.log(`Failed to update firmware for ${this.name}.`);
    }
  };
  
  // Connectivity check method
  SmartDevice.prototype.checkConnectivity = function() {
    console.log(`${this.name} connectivity status: ${this.connectivity ? 'Connected' : 'Disconnected'}.`);
  };
  
  // SmartLight constructor function
  function SmartLight(name, brand, connectivity, brightness = 100, color = 'white') {
    SmartDevice.call(this, name, 'Smart Light', brand, connectivity); // Call SmartDevice constructor
    this.brightness = brightness;
    this.color = color;
  }
  
  // Inherit from SmartDevice
  SmartLight.prototype = Object.create(SmartDevice.prototype);
  SmartLight.prototype.constructor = SmartLight;
  
  // SmartLight prototype methods
  SmartLight.prototype.adjustBrightness = function(newBrightness) {
    this.brightness = newBrightness;
    console.log(`${this.name} brightness adjusted to ${this.brightness}.`);
  };
  
  SmartLight.prototype.changeColor = function(newColor) {
    this.color = newColor;
    console.log(`${this.name} color changed to ${this.color}.`);
  };
  
  // SmartThermostat constructor function
  function SmartThermostat(name, brand, connectivity, temperature = 22, mode = 'auto') {
    SmartDevice.call(this, name, 'Smart Thermostat', brand, connectivity); // Call SmartDevice constructor
    this.temperature = temperature;
    this.mode = mode;
  }
  
  // Inherit from SmartDevice
  SmartThermostat.prototype = Object.create(SmartDevice.prototype);
  SmartThermostat.prototype.constructor = SmartThermostat;
  
  // SmartThermostat prototype methods
  SmartThermostat.prototype.setTemperature = function(newTemperature) {
    this.temperature = newTemperature;
    console.log(`${this.name} temperature set to ${this.temperature}°C.`);
  };
  
  SmartThermostat.prototype.changeMode = function(newMode) {
    this.mode = newMode;
    console.log(`${this.name} mode changed to ${this.mode}.`);
  };
  
  // User constructor function
  function User(username, password) {
    this.username = username;
    this.password = password;
  }
  
  // User prototype methods
  User.prototype.authenticate = async function() {
    console.log(`Authenticating user ${this.username}...`);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Simulating a fetch request
    if (response.ok) {
      const data = await response.json();
      console.log(`User ${this.username} authenticated successfully: ${JSON.stringify(data[0])}`);
    } else {
      console.log(`Failed to authenticate user ${this.username}.`);
    }
  };
  
  User.prototype.addDevice = function(smartHome, device) {
    smartHome.addDevice(device);
  };
  
  User.prototype.removeDevice = function(smartHome, deviceName) {
    smartHome.removeDevice(deviceName);
  };
  
  // Export the constructors
  export { Device, SmartHome, SmartDevice, SmartLight, SmartThermostat, User };
  