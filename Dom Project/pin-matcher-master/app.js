const generateBtn = document.getElementById("generate-btn");
const submitMatch = document.getElementById("submit-match");
const calcBtn = document.getElementById("calc-btn");
const allClear = document.getElementById("all-clear");
const singleClear = document.getElementById("single-clear");

const randomPin = document.getElementById("random-pin");
const matchRandomPin = document.getElementById("match-random-pin");
const actionLeft = document.getElementById("action-left");
const fail = document.getElementById("fail");
const success = document.getElementById("success");

//Generating random 4digit pin number
generateBtn.addEventListener("click", function () {
    let randomPinNumber = Math.ceil(Math.random() * 8999 + 1000);
    randomPin.value = randomPinNumber;
});


//Typing Matching input value 
calcBtn.addEventListener("click", function (event) {
    let number = event.target.innerText;
    
    if (isNaN(number)) {
        if (number == "C") {
            matchRandomPin.value = "";
        } else if (number == "<") {
            if (matchRandomPin.value.length > 0) {
                let inputValue = matchRandomPin.value;
                let deleteValue = inputValue.slice(0, inputValue.length - 1);
                matchRandomPin.value = deleteValue;
            }
        }
    } else {
        let previousNumber = matchRandomPin.value;
        let newNumber = previousNumber + number;
        matchRandomPin.value = newNumber;
    }
});


//Submit Matching and Trail Count
submitMatch.addEventListener('click',function(){

    
    if(actionLeft.innerText >0){
        actionLeft.innerText = Number(actionLeft.innerText) - 1;
        if((randomPin.value.length>3) && randomPin.value===matchRandomPin.value){
            success.classList.add('d-block');
            fail.classList.remove('d-block');
        }else if((randomPin.value.length>3)){
            fail.classList.add('d-block');
            success.classList.remove('d-block');
        }
    }else{
        alert('Your Trail Limit is over');
    }

})