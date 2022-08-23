// console.log('hello')

let seconds = 00
let tens = 00
let appendTens = document.querySelector('#tens')
let appendSeconds = document.querySelector('#seconds')
let btnStart = document.querySelector('#startBtn')
let btnStop = document.querySelector('#stopBtn')
let btnReset = document.querySelector('#resetBtn')
let Interval

function startTimer() {
  tens++
  if (tens <= 9) {
    appendTens.innerHTML = '0' + tens
  }
  if (tens > 9) {
    appendTens.innerHTML = tens
  }
  //
  if (tens > 99) {
    seconds++
    appendSeconds.innerHTML = '0' + seconds
    tens = 0
    appendTens.innerHTML = '0' + 0
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds
  }
}

btnStart.onclick = function () {
  clearInterval(Interval)
  Interval = setInterval(startTimer, 10)
}

btnStop.onclick = function () {
  clearInterval(Interval)
}
btnReset.onclick = function () {
  clearInterval(Interval)
  tens = '00'
  seconds = '00'
  appendTens.innerHTML = tens
  appendSeconds.innerHTML = seconds
}
