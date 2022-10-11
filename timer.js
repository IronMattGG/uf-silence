// uf-silence 0.1
// https://github.com/IronMattGG
// @ironmattgg on socials

var isStopped = true;

function Time() {
    let pastDate = new Date(2022, 9, 9, 10, 49);
    let today = new Date();
    let t = (today - pastDate);

    let = days = Math.floor(t / (1000 * 60 * 60 * 24));
    let = hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let = minutes = Math.floor((t / 1000 / 60) % 60);
    let = seconds = Math.floor((t / 1000) % 60);

    return {
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
        'pastDate': pastDate
    };
}

function TimerStopped() {
    var stoppedDate = new Date(2022, 9, 11, 17, 26);
    var startDate = Time().pastDate;
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
            timeTitle.innerHTML = 'Il tempo del silenzio di UF';
        } else {
            var t = TimerStopped();
            timeTitle.innerHTML = 'Il tempo del silenzio di UF è durato:';
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