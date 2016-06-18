const time =document.getElementById('time');

const setTime = () =>
time.innerHTML = new Date();

setInterval(setTime, 1000)