const endTime = new Date('April 29 2021 10:00:00');

const interval = setInterval (function () {
    const startTime = new Date();
    const diff = endTime - startTime;

    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
	const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    minutes < 10? document.getElementById('minutes').innerHTML = `0${minutes}` : document.getElementById('minutes').innerHTML = `${minutes}`;
    seconds < 10? document.getElementById('seconds').innerHTML = `0${seconds}` : document.getElementById('seconds').innerHTML = `${seconds}`;
}, 1000);