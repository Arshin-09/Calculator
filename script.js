let display = document.getElementById('inputBox');
let button = document.querySelectorAll('button');

let buttons= Array.from(button);

console.log(buttons);

let string='';

buttons.forEach(btn=>{

    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML == 'DEL'){
            string= string.substring(0,string.length-1);
            display.value= string;
        } 
        else if(e.target.innerHTML=='AC'){
            string='';
            display.value=string;
        }
        else if(e.target.innerHTML=='='){
            string=eval(string);
            display.value=string;
        }
        else{
            string+=e.target.innerHTML;
            display.value=string;
        }
    })
})