let breakLength = 5;
let sessionLength = 25;
let timeLeft = sessionLength * 60;
let timerRunning = false;
let timer;
let onBreak = false;

const breakLengthElem = document.getElementById("break-length");
const sessionLengthElem = document.getElementById("session-length");
const timeLeftElem = document.getElementById("time-left");
const timerLabel = document.getElementById("timer-label");
const beep = document.getElementById("beep");

document.getElementById("break-decrement").addEventListener("click", () => updateBreakLength(-1));
document.getElementById("break-increment").addEventListener("click", () => updateBreakLength(1));
document.getElementById("session-decrement").addEventListener("click", () => updateSessionLength(-1));
document.getElementById("session-increment").addEventListener("click", () => updateSessionLength(1));
document.getElementById("start_stop").addEventListener("click", toggleTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

function updateBreakLength(change) {
    if (breakLength + change >= 1 && breakLength + change <= 60) {
        breakLength += change;
        breakLengthElem.textContent = breakLength;
    }
}

function updateSessionLength(change) {
    if (sessionLength + change >= 1 && sessionLength + change <= 60) {
        sessionLength += change;
        sessionLengthElem.textContent = sessionLength;
        if (!timerRunning) {
            timeLeft = sessionLength * 60;
            updateTimeDisplay();
        }
    }
}

function updateTimeDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timeLeftElem.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function toggleTimer() {
    if (timerRunning) {
        clearInterval(timer);
    } else {
        timer = setInterval(runTimer, 1000);
    }
    timerRunning = !timerRunning;
}

function runTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        updateTimeDisplay();
    } else {
        // Ensure the beep sound plays properly
        beep.pause();  // Stop any previous play
        beep.currentTime = 0;  // Reset to the start
        beep.play().catch(error => console.log("Audio play failed:", error));  // Attempt to play

        // Toggle between break and session
        onBreak = !onBreak;
        timerLabel.textContent = onBreak ? "Break" : "Session";
        timeLeft = (onBreak ? breakLength : sessionLength) * 60;
        updateTimeDisplay();
    }
}

function resetTimer() {
    clearInterval(timer);
    timerRunning = false;
    breakLength = 5;
    sessionLength = 25;
    timeLeft = sessionLength * 60;
    onBreak = false;

    breakLengthElem.textContent = breakLength;
    sessionLengthElem.textContent = sessionLength;
    timerLabel.textContent = "Session";
    updateTimeDisplay();

    // Stop and reset the beep sound
    beep.pause();
    beep.currentTime = 0;
}


// Initialize display
updateTimeDisplay();
