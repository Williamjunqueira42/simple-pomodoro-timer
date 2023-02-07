// pomodoro app
// William dos Santos Junqueira
// 2023

let timer_type = 'pomodoro'
let seconds = 0
let minutes = 30
let timex

const startbt = document.getElementById('start-button')
const pausebt = document.getElementById('pause-button')

const pomodorobt = document.getElementById('pomodoro-button')
const shortbreakbt = document.getElementById('shortbreak-button')
const longbreakbt = document.getElementById('longbreak-button')

startbt.addEventListener('click', start)
pausebt.addEventListener('click', pause)

pomodorobt.addEventListener('click', pomodoro)
shortbreakbt.addEventListener('click', shortbreak)
longbreakbt.addEventListener('click', longbreak)



//Pomodoro function
function pomodoro() {
    timer_type = 'pomodoro'
    seconds = 0
    minutes = 30
    update()
    pause()
}

//shortbreak function
function shortbreak() {
    timer_type = 'shortbreak'
    seconds = 0
    minutes = 5
    update()
    pause()
}

//longbreak function
function longbreak() {
    timer_type = 'longbreak'
    seconds = 0
    minutes = 15
    update()
    pause()
}

// make the timer run
function timer() {
    
    timex = setTimeout(function() {
        if (seconds == 0 && minutes == 0) {
            endtimer()
            return
        } 

        if (seconds == 0) {
            seconds = 60
            minutes--
        }
        seconds --     
        update()
        timer()
    }, 1000)  // make all of this after 1000 ms (1s)
}

// control funcitions
function start() {
    startbt.disabled = true
    timer()
}

function pause() {
    clearTimeout(timex);
    startbt.disabled = false
}


// show an alert when the timer reaches the end
function endtimer() {
    if (timer_type == 'pomodoro') {
        alert('pomodoro ends')
        shortbreak()
    }

    else if (timer_type == 'shortbreak') {
        alert('short break end')
        pomodoro()
    }

    else {
        alert('long break end')
        pomodoro()
    }
}

//update elements on screen
function update() {
  
    timer_seconds = document.getElementById('timer-seconds')
    timer_minutes = document.getElementById('timer-minutes')
    timer_seconds.innerText = seconds > 9 ? seconds : '0'+ seconds
    timer_minutes.innerText = minutes > 9 ? minutes : '0' + minutes

    
}
