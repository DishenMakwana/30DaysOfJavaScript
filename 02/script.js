const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    // console.log("Seconds : "+seconds);

    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    // console.log("Minutes : "+mins);

    const hours = now.getHours();
    const hourDegrees = (hours / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    // console.log("Hour : "+hours);

    console.log(hours + ":" + mins + ":" + seconds);
};

setInterval(setDate, 1000);