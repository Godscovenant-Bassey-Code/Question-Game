let makehrs = document.getElementById('make-hours');
let hrs = document.getElementById('hours');
let sec = document.getElementById('seconds');
let min = document.getElementById('minutes');
let hr = document.getElementById('hour');
let seTime = document.getElementById('settime');
let realTime = document.getElementById('realtime');
let errorTitle = document.getElementById('error-title');
const gameCover = document.querySelector('.game-cover');




setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}, 1000)

function setit() {
    document.querySelector(".set").style.background = 'green'
    setInterval(() => {
    
    hr.innerHTML = (makehrs.value<10?"0":"") + makehrs.value;
    if (makehrs.value == '') {
        hr.innerHTML = '00'
    }

    
    // Configure Time
    if (makehrs.value > 24) {
        hr.innerHTML = '00';
        makehrs.style.color = '#f00'
    }else {
        makehrs.style.color = '#000'
    }
    if (makehrs.value < 0) {
        hr.innerHTML = '00';
        makehrs.style.color = '#f00'
    } else {
        makehrs.style.color = '#000'
    }
    if (makehrs.value == '01') {hr.innerHTML = '01'};if (makehrs.value == '02') {hr.innerHTML = '02'};if (makehrs.value == '03') {hr.innerHTML = '03'};if (makehrs.value == '04') {hr.innerHTML = '04'};if (makehrs.value == '05') {hr.innerHTML = '05'};if (makehrs.value == '06') {hr.innerHTML = '06'};if (makehrs.value == '07') {hr.innerHTML = '07'};if (makehrs.value == '08') {hr.innerHTML = '08'};if (makehrs.value == '09') {hr.innerHTML = '09'};
    
    // Making red color alarm

    if (hrs.innerHTML == hr.innerHTML) {
        hrs.style.color = '#f00';
        document.querySelector(".realtime").style.color = 'red'
        gameCover.classList.add('open');
        errorTitle.style.display = 'none'
    } else {
        hrs.style.color = '#fff';
        document.querySelector(".realtime").style.color = '#fff';
        gameCover.classList.remove('open');
        errorTitle.style.display = 'block'
        errorTitle.innerHTML = `Wait till ${hr.innerHTML} O clock`;
    };
    }, 700);
}
errorTitle.innerHTML = `Wait till ${hr.innerHTML} O clock`;