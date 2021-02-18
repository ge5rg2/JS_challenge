const display = document.getElementById('display');
let numberClicked = false;

let beforeNumber = [];
let beforeOp = [];

function add(char) {
    if(numberClicked == false) {
        if(isNaN(char) == true) {
            if(display.value == none) {
                document.getElementById('result').value = 0;
            } else {
                
            }
        }
         else { 
            beforeNumber.push(char);
            display.value = display.value + char; 
            console.log(beforeNumber);
            document.getElementById('result').value = char;
        }
    }  
    else {
        if(isNaN(char) == true){
            beforeOp.push(char);
                if(beforeOp.length > 1) {
                    const result = eval(display.value);
                    document.getElementById('result').value = result;
                    beforeOp = [];
                    beforeOp.push(char);
                } else {}
            display.value = display.value + char;
            console.log(beforeOp);
        }
        else {
            beforeNumber.push(char);
            display.value = display.value + char; 
            console.log(beforeNumber);
            document.getElementById('result').value = document.getElementById('result').value + char;
        }
    }
    if(isNaN(char) == true) {
        numberClicked = false;
    } else {
        numberClicked = true;
    }
}

function calculate() {
    const result = eval(display.value);
    document.getElementById('result').value = result;
}

function reset() {
    document.getElementById('display').value = "";
    document.getElementById('result').value = 0;
    beforeNumber = [];
    beforeOp = [];
    numberClicked = false;
}