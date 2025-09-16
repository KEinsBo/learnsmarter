timer = document.getElementById("countdown");
state_text = document.getElementById("state");
startButton = document.getElementById("startButton");
resetButton = document.getElementById("resetButton");
let countdown;
let timeLeft = 25 * 60;

startButton.onclick = function() {
    if (state=="stopped"){
        countdown = setInterval(updateTimer, 1000);
        state="work";
        state_text.textContent="Arbeitsphase";
    }
}
state="stopped";

setInterval()

function tick() {
    if (state=="stopped"){
        state_text.textContent="Gestoppt"; 
    }
    if (state=="work"){
        state_text.textContent="Arbeitsphase";
    }
    updateTimer();
}

function updateTimer() {
    timer.textContent=`${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`;
    if (timeLeft <= 0) {
        clearInterval(countdown);
        if (state=="work"){
            alert("Nimm dir eine Pause!");
            state="break";
        }
        else { if (state=="break") {
            alert("Zurück an die Arbeit!");
            state="work";
        }}
        timeLeft = 5;
        return;
    }
    timeLeft--;
}
