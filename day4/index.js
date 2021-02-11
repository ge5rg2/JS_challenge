const bodycolor = document.querySelector("body");

function handleResize() { 
    const widthSize = window.innerWidth;
    if(widthSize <= 500) {
        bodycolor.style.backgroundColor = "#f1c40f";
      }
    else if(widthSize > 500 && widthSize <= 800) {
        bodycolor.style.backgroundColor = "#3498db";
      }
    else {
        bodycolor.style.backgroundColor = "#9b59b6";
    }
}

function init(){
    bodycolor.style.color = "#ecf0f1";
    bodycolor.style.backgroundColor = "#95a5a6";
    window.addEventListener("resize", handleResize);
}
init();