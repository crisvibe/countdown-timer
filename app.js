function cl(value, showType = false){
    showType ? console.log(value, typeof value) : console.log(value) ;
}

//----------------
// Countdown Timer
//----------------

const minCounter = document.getElementById('minCounter');
const secCounter = document.getElementById('secCounter');
const completedParagraph = document.getElementById('completedParagraph');
const completedMessage = document.getElementById('finalMessage');

const secondsInput = document.getElementById('secondsInput');
const minutesInput = document.getElementById('minutesInput');

document.getElementById('timeSubmit').addEventListener('click', () => {
    let minInput = 0;
    let secInput = 0;
    
    if (minutesInput.value > 0 ) {
        minInput = parseInt(minutesInput.value);
    }

    if (secondsInput.value > 0 ) {
        secInput = parseInt(secondsInput.value);
    }
    
    countdownTimer(secInput, minInput);
});

function countdownTimer(seconds = 0, minutes = 0) {
    let sum = 0;

    if (minutes !== 0) {
        sum += minutes * 60;
    }
    if (seconds !== 0) {
        sum += seconds;
    }

    cl(`Will run for ${sum} seconds.`);

    let i = 1;
    let s = 1;
    let m = 0;
    let myInterval = setInterval(function() {
        if (s < 60) {
            cl(s);
            s++;

            secCounter.innerHTML = s;
        } else {
            cl(s);
            s = 1;
            m++;

            cl('Minute: ' + m);
            minCounter.innerHTML = m;
        }

        i++;
        if(i >= sum) {
            cl(s);
            cl(`Time ran for ${m} Minutes and ${s} Seconds. A total of ${i} Seconds.`)
            
            completedMessage.innerHTML = 'Timer is Completed'
            completedParagraph.innerHTML = `Time ran for ${m} Minutes and ${s} Seconds. A total of ${i} Seconds.`;

            setTimeout(() => {
                alert('Timer is Completed');
            }, 10)
            clearInterval(myInterval);
        }
    }, 1000);
};
// countdownTimer(3, 30);