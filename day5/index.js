const clock = document.getElementById("count");

function gettime() {
  const xmasDay = new Date("2021-12-24:00:00:00+0900").getTime();
  const today = new Date().getTime();
  const gap = xmasDay - today;
  const day = Math.ceil(gap / (1000 * 60 * 60 * 24));
  const hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.ceil((gap % (1000 * 60)) / 1000);
  clock.innerText = `${day}d ${hour < 10 ? `0${hour}`:hour}h ${min < 10 ? `0${min}`:min}m ${sec < 10 ? `0${sec}`:sec}s`;
}

function init(){
    gettime();
    setInterval(gettime, 1000);
}
init();