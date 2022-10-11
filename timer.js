// uf-silence 0.1
// https://github.com/IronMattGG
// @ironmattgg on socials

function Time() {
    let past = new Date(2022, 9, 9, 10, 49);
    let today = new Date();
    let t = (today - past);

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

function startClock() {
    var clock = document.getElementById('clockdiv');
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = Time();
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    }
    updateClock();
}

setInterval(startClock, 1000);