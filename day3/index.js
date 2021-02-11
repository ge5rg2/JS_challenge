const title = document.querySelector("h1");

function Resize(){
    title.innerText = `I have been resized`;
    title.style.color = "blue";
}

function MouseEnter(){
    title.innerText = `Mouse Enter`;
    title.style.color = "green";
}

function MouseLeave(){
    title.innerText = `Mouse leave`;
    title.style.color = "tomato";
}

function Click(){
    if(title.style.color === "tomato"){
        title.innerText = `Hello!`
        title.style.color = "black"
    }
    else {    
        title.innerText = `I was clicked!`;
        title.style.color = "tomato";
    }
}

function context(){
    title.innerText = `right btn`;
    title.style.color = "brown";
}

function init(){
    window.addEventListener("resize", Resize);
    title.addEventListener("mouseenter", MouseEnter);
    title.addEventListener("mouseleave", MouseLeave);
    title.addEventListener("click", Click);
    title.addEventListener("contextmenu", context);
}

init();