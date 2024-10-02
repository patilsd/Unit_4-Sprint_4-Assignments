function createCounter(initialValue) {
    // Private variable to store the counter's value
    let count = initialValue;

    return {
        // Method to increment the counter
        increment: function() {
            count += 1; // Increase count by 1
            updateCounterDisplay(); // Update the UI
        },
        // Method to decrement the counter
        decrement: function() {
            count -= 1; // Decrease count by 1
            updateCounterDisplay(); // Update the UI
        },
        // Getter to retrieve the current value
        getValue: function() {
            return count;
        }
    };
}

// Initialize the counter with an initial value of 0
const counter = createCounter(0);

// Function to update the counter display in the UI
function updateCounterDisplay() {
    document.getElementById('counterValue').innerText = counter.getValue();
}

// Attach event listeners to the buttons
document.getElementById('incrementBtn').addEventListener('click', function() {
    counter.increment(); // Call increment method
});

document.getElementById('decrementBtn').addEventListener('click', function() {
    counter.decrement(); // Call decrement method
});
