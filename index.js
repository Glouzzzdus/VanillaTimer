let input = document.getElementById("minutes");
let btnStart = document.getElementById("start");
let btnReset = document.getElementById("reset");
let result = document.getElementById("result");

let minutes = 0;
let seconds = 0;
let time =0;
let timeInterval;

function startTimer() {
    console.log(444)
  if (time === 0 || time === undefined) {
    console.log("begin");
    beginTimer();
  } else {
    console.log("resume");
    resumeTimer();
  }
}

function beginTimer() {
  let timeCount = input.value;
  time = timeCount * 60;
  console.log(timeCount);
  console.log(time);
  input.disabled = true;
  btnStart.disabled = true;
  btnReset.innerText = "Stop";
  btnReset.disabled = false;
  minutes = timeCount;
  timeInterval = setInterval(timingFunction, 1000);
  setResultText(minutes, seconds);
}

function resumeTimer() {
  let timeCount = time;
  console.log(timeCount);
  input.disabled = true;
  btnStart.disabled = true;
  btnReset.innerText = "Stop";
  btnReset.disabled = false;
  minutes = timeCount / 60;
  seconds = timeCount % 60;
  timeInterval = setInterval(timingFunction, 1000);
  setResultText(minutes, seconds);
}

function timingFunction() {
  if (time <= 0) {
    clearInterval(timeInterval);
  }
  if (time % 60 === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }
  setResultText(minutes, seconds);
  time--;
}

function stopTimer() {
  console.log("stop");
  input.value = "";
  btnStart.disabled = false;
  btnReset.innerText = "Reset";
  btnReset.disabled = false;
  clearInterval(timeInterval);
  setResultText(minutes, seconds);
}

function rresetTimer() {
    console.log("reset");
    input.value = "";
    clearInterval(timeInterval);
    minutes = 0;
    seconds = 0;
    time = 0;
    setResultText(minutes, seconds);
    input.disabled = false;
    btnReset.disabled = true;
    setResultText(minutes, seconds);
}

function resetTimer() {
  console.log(time);
  if (btnReset.innerText === "Stop") {
    stopTimer();
  }
  else if (btnReset.innerText === "Reset") {
      rresetTimer();
  }
}

function setResultText(min, sec) {
  let m = min < 10 ? `0${min}` : min;
  let s = sec < 10 ? `0${sec}` : sec;
  result.innerText = `${m} : ${s}`;
}

function timeInput() {
  btnStart.disabled = false;
}

btnStart.addEventListener("click", startTimer);
btnReset.addEventListener("click", resetTimer);
input.addEventListener("input", timeInput);
