//select all white buttons
const display = document.querySelector('#display');
const btns = document.querySelectorAll('.btn-outline-dark');


//loop through the node list array and add event listener
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
       if ( btn.innerText =='.') {
            display.innerText += btn.innerText
       }else if(display.innerText == '0'){
        display.innerText = btn.innerText;
       }
       else{
        display.innerText += btn.innerText
       }
    })
});

const clear = document.querySelector('#clear');

clear.addEventListener('click',()=>{
    display.innerText = "0"
})

const backspace = document.querySelector('#backspace');

backspace.addEventListener('click',()=>{
    display.innerText = display.innerText.slice(0,-1);
    if (display.innerText =="") {
        display.innerText ='0'
    }
})

const equal =document.querySelector('#equal');

equal.addEventListener('click',()=>{
    try {
        display.innerText = eval(display.innerText)
    } catch (error) {
        display.innerText ='Error'
    }
})

const p2 =document.querySelector('#p2');

p2.addEventListener('click',()=>{
    try {
        let num = Number(display.innerText);
        display.innerText =Math.pow(num,2)
    } catch (error) {
        display.innerText = 'Error'
    }
})

const sqrt=document.querySelector('#sqrt');

sqrt.addEventListener('click',()=>{
    try {
        let num = Number(display.innerText);
        display.innerText =Math.sqrt(num)
    } catch (error) {
        display.innerText = 'Error'
    }
})

const allowedKeys = ["0","1","2","3","4","5","6","7","8","9","-","+","*","/","(",")","."];

const body = document.querySelector('body');
body.addEventListener('keyup',(e)=>{
    // console.log(e.key);
    if (allowedKeys.includes(e.key)) {
        if(e.key == "."){
            display.innerText += e.key
        }
        else if (display.innerText  == "0") {
            display.innerText = e.key;
        } else{
            display.innerText += e.key;
        }
    }
    else if (e.key == "Enter") {
        try {
            display.innerText = eval(display.innerText)
        } catch (error) {
          display.innerText = "Error";
        }
    }
    else if (e.key == "Backspace"){
        display.innerText = display.innerText.slice(0,-1);
        if (display.innerText == "") {
            display.innerText = "0";
        }
    }

})





