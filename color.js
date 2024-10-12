let body = document.getElementById('body');
let color = document.getElementById('color');


color.value = ''
setInterval(() => {
    body.style.background = color.value;
}, 1000);

