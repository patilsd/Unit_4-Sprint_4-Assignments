// Problem 1: Factory function iPhone1
function iPhone1(ASIN, color, display, camera) {
    return {
        ASIN: ASIN,
        color: color,
        display: display,
        camera: camera,
        dial: function() {
            return "tring.. tring...";
        },
        sendMessage: function() {
            return "Sending message...";
        },
        cameraClick: function() {
            return "Camera clicked";
        }
    };
}


let phone1 = iPhone1(1, "B09X6738QV", 7.8, "2.8 MP");
console.log(phone1.ASIN); // 1
console.log(phone1.color); // "B09X6738QV"
console.log(phone1.display); // 7.8
console.log(phone1.camera); // "2.8 MP"
console.log(phone1.dial()); // "tring.. tring..."
console.log(phone1.sendMessage()); // "Sending message..."
console.log(phone1.cameraClick()); // "Camera clicked"

// Problem 2: Factory function iPhone2
function iPhone2(ASIN, color, display, camera, bluetooth) {
    return {
        ASIN: ASIN,
        color: color,
        display: display,
        camera: camera,
        bluetooth: bluetooth,
        dial: function() {
            return "tring.. tring...";
        },
        sendMessage: function() {
            return "Sending message...";
        },
        cameraClick: function() {
            return "Camera clicked";
        },
        connectBluetooth: function() {
            return "Bluetooth connected successfully...";
        }
    };
}


let phone2 = iPhone2(1, "B09X6736QV", 7.8, "2.0 MP", "5.1");
console.log(phone2.ASIN); // 1
console.log(phone2.color); // "B09X6736QV"
console.log(phone2.display); // 7.8
console.log(phone2.camera); // "2.0 MP"
console.log(phone2.bluetooth); // "5.1"
console.log(phone2.dial()); // "tring.. tring..."
console.log(phone2.sendMessage()); // "Sending message..."
console.log(phone2.cameraClick()); // "Camera clicked"
console.log(phone2.connectBluetooth()); // "Bluetooth connected successfully..."
