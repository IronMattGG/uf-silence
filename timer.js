// uf-silence 0.4
// https://github.com/IronMattGG
// @ironmattgg on socials

const isStopped = false;
const isSavage = true;

const silenceElapsed = 'Il tempo del silenzio di UF è durato:';
const silenceActive = 'Il tempo del silenzio di UF';
const silenceSavage = 'Colui che sentenzia non proferisce parola da:';

var pastDate = new Date(2022, 9, 9, 10, 49);
var stoppedDate = new Date(2022, 9, 11, 17, 26);
var savageDate = new Date(2022, 9, 13, 17, 03);

function Time() {
    let today = new Date();

    if (isSavage) {
        var t = (today - savageDate);
    } else {
        var t = (today - pastDate);
    }

    let = days = Math.floor(t / (1000 * 60 * 60 * 24));
    let = hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let = minutes = Math.floor((t / 1000 / 60) % 60);
    let = seconds = Math.floor((t / 1000) % 60);

    return {
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function TimerStopped() {
    var startDate = pastDate;
    var eT = stoppedDate - startDate;

    let = days = Math.floor(eT / (1000 * 60 * 60 * 24));
    let = hours = Math.floor((eT / (1000 * 60 * 60)) % 24);
    let = minutes = Math.floor((eT / 1000 / 60) % 60);
    let = seconds = Math.floor((eT / 1000) % 60);

    return {
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    };
}

function startClock() {
    var clock = document.getElementById('divtimer');
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    var timeTitle = document.getElementById('timeTitle');

    function updateClock() {

        if (!isStopped) {
            var t = Time();
            if (isSavage) {
                timeTitle.innerHTML = silenceSavage;
            } else {
                timeTitle.innerHTML = silenceActive;
            }
        } else {
            var t = TimerStopped();
            timeTitle.innerHTML = silenceElapsed;
        }

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    }
    updateClock();
}

if (!isStopped) {
    setInterval(startClock, 1000);
} else {
    startClock();
}