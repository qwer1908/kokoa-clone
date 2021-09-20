const clock = document.querySelector(".status-bar__column:nth-child(2) > span")

function getClock() {
    const date = new Date();
    clock.innerText = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
    
}
setInterval(getClock, 1000)