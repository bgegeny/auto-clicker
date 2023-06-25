const robot = require('robotjs');
const TEN_SECONDS = 10000;
const clickInterval = TEN_SECONDS;

// Function to send a mouse click event
function sendMouseClick() {
    robot.mouseClick();
}

setInterval(sendMouseClick, clickInterval);