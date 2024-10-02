// app.js

// Importing classes from the smartHome module
import { Device, SmartHome, SmartDevice, SmartLight, SmartThermostat, User } from './smartHome.js';

// Create instances of SmartHome and Users
const mySmartHome = new SmartHome('John Doe');

// Create some devices
const light1 = new SmartLight('Living Room Light', 'Smart Light', true, 'Philips', 'WiFi', 75, 'Warm White');
const thermostat = new SmartThermostat('Home Thermostat', 'Smart Thermostat', true, 'Nest', 'WiFi', 22, 'Cooling');

// Add devices to SmartHome
mySmartHome.addDevice(light1);
mySmartHome.addDevice(thermostat);

// Display all devices
console.log('Devices in Smart Home:', mySmartHome.listDevices());

// Create a User
const user = new User('john_doe', 'password123');

// Simulate user authentication
async function authenticateUser() {
    const isAuthenticated = await user.authenticate();
    if (isAuthenticated) {
        console.log('User authenticated successfully!');
        
        // Control devices
        console.log('Turning on the light...');
        light1.turnOn();
        
        console.log('Setting the thermostat...');
        thermostat.setTemperature(21);
        
        // Check device statuses
        console.log('Light Status:', light1.checkStatus());
        console.log('Thermostat Status:', thermostat.checkStatus());
        
        // Update firmware for the smart light
        await light1.updateFirmware();
    } else {
        console.log('Authentication failed. Please check your credentials.');
    }
}

// Call the authentication function
authenticateUser();
