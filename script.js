// Set the date when your website will be launched
const launchDate = new Date("2023-12-31 00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    const currentDate = new Date().getTime();
    const timeLeft = launchDate - currentDate;

    const days = Math.floor(timeLeft / (230 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    if (timeLeft < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown").innerHTML = "We're here!";
    }
}, 1000);
