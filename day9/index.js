
const inputRange = document.querySelector(".range");
const rangeCount = document.querySelector(".range_generate");
const setNumber = document.querySelector("form");

inputRange.value = rangeCount.innerHTML;

function setAndPlay(event){
    const typeNumber = document.querySelector("#typingNumber");
    const CNValue = typeNumber.value;
    const insertNumber = document.querySelector(".chose_number");
    const putRandom = document.querySelector(".random_number");
    const randomRange = inputRange.value;
    const randomValue = Math.random();
    const randomResult = `${Math.floor(randomValue * randomRange + 1)}`;
    event.preventDefault();
    putRandom.innerText = `, the machine chose: ${randomResult}.`;
    insertNumber.innerText = `You chose: ${CNValue}`;
    if(randomResult === CNValue) {
        document.getElementById("result").innerHTML = `You win!`;
    } else {
        document.getElementById("result").innerHTML = `You lost!`;
    }
}

function counting(event){
    const number = inputRange.value;
    rangeCount.innerText = ` ${number}`;
}

function init(){
    inputRange.addEventListener('input',counting);
    setNumber.addEventListener("submit", setAndPlay);
}
init();