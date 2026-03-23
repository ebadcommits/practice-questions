let clock = document.querySelector('#clock')

function updateclock(){
    let now = new Date()

    let hours = now.getHours();
    let mins = now.getMinutes();
    let sec = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    mins = mins < 10 ? '0' + mins : mins;
    sec = sec < 10 ? '0' + sec: sec;

    clock.textContent = `${hours}:${mins}:${sec}`;

    
}
updateclock();

setInterval(updateclock, 1000);