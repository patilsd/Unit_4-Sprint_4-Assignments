

// app.js

import { Device, SmartHome, SmartDevice, SmartLight, SmartThermostat, User } from './smartHome.js'; 




// Create a user
const user = new User("Alice", "password123");

// Authenticate the user
await user.authenticate();

// Create a Smart Home for the user
const userSmartHome = new SmartHome(user.username);

// Create smart devices
const smartLight = new SmartLight("Living Room Light", "Philips", true, 80, "warm white");
const smartThermostat = new SmartThermostat("Home Thermostat", "Nest", true, 22, "auto");

// Add devices to the user's smart home
user.addDevice(userSmartHome, smartLight);
user.addDevice(userSmartHome, smartThermostat);

// List devices in the user's smart home
userSmartHome.listDevices();

// Demonstrate device functionality
smartLight.turnOn();
smartLight.adjustBrightness(90);
smartLight.changeColor("blue");
smartLight.checkConnectivity();
await smartLight.updateFirmware(); // Simulate firmware update

smartThermostat.turnOn();
smartThermostat.setTemperature(24);
smartThermostat.changeMode("cool");
smartThermostat.checkConnectivity();
await smartThermostat.updateFirmware(); // Simulate firmware update

// Remove a device from the user's smart home
user.removeDevice(userSmartHome, "Living Room Light");

// List devices again to show the changes
userSmartHome.listDevices();
