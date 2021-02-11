const title = document.querySelector("h1");

function Resize(){
    title.innerText = `I have been resized`;
    title.style.color = "blue";
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

function init(){
    window.addEventListener("resize", Resize);
    title.addEventListener("click", Click);
}
init();