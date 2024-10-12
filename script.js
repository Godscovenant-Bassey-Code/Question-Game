const settingsPane = document.querySelector('.settings-pane');
const settings = document.querySelector('.settings');
const setTime = document.querySelector('.settime');
const colors = document.querySelector('.colors');
const setTimePane = document.querySelector('.settime-pane');
const colorPane = document.querySelector('.color-pane');
const activatePane = document.querySelector('.activate-pane');
const activate = document.querySelector('.activate');
const wrongCode = document.querySelector('.activate-pane .comment .wrong');
const correctCode = document.querySelector('.activate-pane .comment .correct');
const notActivated = document.querySelector('.game-cover .not-activated');
let activateKey = document.getElementById('active-word');
let activatebody = document.getElementById('active-body');
const questions = document.querySelector('.questions');
const container = document.querySelector('.container');
const titleBanner = document.querySelector('.title-banner');
const mirror = document.querySelector('.mirror-off');


if (window.ytcsi) {window.ytcsi.tick('nc_pj', null, '');}

// Making the javascript 0045
settings.addEventListener('click',()=>{
    settingsPane.classList.toggle('open');
    setTimePane.classList.remove('open');
    colorPane.classList.remove('open');
    activatePane.classList.remove('open');
});
addEventListener(`keyup`, function (e) {
    if (e.code === "KeyS") {
        settingsPane.classList.toggle('open');
        setTimePane.classList.remove('open');
        colorPane.classList.remove('open');
        activatePane.classList.remove('open');
    }});

    // Set time place
setTime.addEventListener('click',()=>{
    setTimePane.classList.toggle('open');
    colorPane.classList.remove('open');
    activatePane.classList.remove('open');
});
addEventListener(`keyup`, function (e) {
    if (e.code === "KeyT") {
        setTimePane.classList.toggle('open');
    colorPane.classList.remove('open');
    activatePane.classList.remove('open');
    }});

// Set colors place
colors.addEventListener('click',()=>{
    setTimePane.classList.remove('open');
    colorPane.classList.toggle('open');
    activatePane.classList.remove('open');
});
addEventListener(`keyup`, function (e) {
    if (e.code === "KeyC") {
        setTimePane.classList.remove('open');
    colorPane.classList.toggle('open');
    activatePane.classList.remove('open');
    }});

// Set activate Place
activate.addEventListener('click',()=>{
    setTimePane.classList.remove('open');
    settingsPane.classList.remove('open');
    colorPane.classList.remove('open');
    activatePane.classList.toggle('open');
    // activateKey.value = ''
});
addEventListener(`keyup`, function (e) {
    if (e.code === "KeyA") {
    setTimePane.classList.remove('open');
    settingsPane.classList.remove('open');
    colorPane.classList.remove('open');
    activatePane.classList.toggle('open');
    // activateKey.value = ''
    }});

    setInterval(() => {
        if (activateKey.value == '95350197818') {
            activatebody.style.background = "Green";
            correctCode.classList.add('open');
            wrongCode.classList.remove('open');
            notActivated.classList.add('close');
            questions.classList.add('open');

        }else {
            activatebody.style.background = "red";
            correctCode.classList.remove('open');
            wrongCode.classList.add('open');
            notActivated.classList.remove('close');
            questions.classList.remove('open');
        }
        if (activateKey.value.length > 11) {
            activatebody.style.background = "rgb(2, 58, 2)";
            correctCode.classList.remove('open');
            wrongCode.classList.remove('open')
        }
        if (activateKey.value.length < 11) {
            activatebody.style.background = "rgb(2, 58, 2)"
            correctCode.classList.remove('open');
            wrongCode.classList.remove('open')
        }
    }, 10);
    

    addEventListener(`keyup`, function (e) {
        if (e.code === "KeyQ") {
            titleBanner.classList.add('close');
            setTimeout(() => {
                container.classList.add('main')
            }, 1000);
        }});

        // Making the body closing pane for easy closing of document
        mirror.addEventListener('click',()=>{
            // 1. For settings pane
            settingsPane.classList.remove('open');
            setTimePane.classList.remove('open');
            colorPane.classList.remove('open');
            activatePane.classList.remove('open');
        });
        gameCover.addEventListener('click',()=>{
            settingsPane.classList.remove('open');
            setTimePane.classList.remove('open');
            colorPane.classList.remove('open');
            activatePane.classList.remove('open');
        });
        questions.addEventListener('click',()=>{
            settingsPane.classList.remove('open');
            setTimePane.classList.remove('open');
            colorPane.classList.remove('open');
            activatePane.classList.remove('open');
        });