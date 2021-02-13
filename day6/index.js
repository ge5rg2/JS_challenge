const countrySelector = document.querySelector("#countrySelector");
countrySelector.onchange = loadStorage; //countrySelector 변화된 사항을 loadStorage에게 전달

function loadStorage() {
    localStorage.setItem('country', countrySelector.value);
    setCountry();
}

function setCountry() {
    const currentColor = localStorage.getItem('country');
    countrySelector.value = currentColor;
}

function reset(){
    if (localStorage.getItem('country')) { 
        setCountry();
    } else {
        loadStorage(); 
    }
}

function init(){
    reset();
}
init();