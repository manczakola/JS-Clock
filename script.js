const moveHand = () => {
    const date = new Date();

    //seconds
    const secondsTime = date.getSeconds();
    const secondsHand = document.querySelector('.seconds');
    const secondsMove = (360 / 60 * secondsTime) + 90
    secondsHand.style.transform = `rotate(${secondsMove}deg)`;

    //minutes
    const minutesTime = date.getMinutes();
    const minutesHand = document.querySelector('.minutes');
    const minutesMove = (360 / 60 * minutesTime) + 90
    minutesHand.style.transform = `rotate(${minutesMove}deg)`;

    //hours
    const hoursTime = date.getHours();
    const hoursHand = document.querySelector('.hours');
    const hoursMove = (360 / 12 * hoursTime) + 90
    hoursHand.style.transform = `rotate(${hoursMove}deg)`;

    console.log(secondsMove, hoursTime, minutesTime, secondsTime)
}
setInterval(moveHand, 1000)