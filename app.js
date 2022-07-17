let progressCircle = document.querySelector('.progress-circle .circle ');
let value = document.querySelector('.value');
let input = document.querySelector('input');
let button = document.querySelector('button');
let start = 0;

button.addEventListener('click', bar );

function bar(){
    
let progress= setInterval(()=>{

    if(start<input.value){
        start++;
        progressEnd()
    }
    else{
        start--;
        progressEnd()
    }
    function progressEnd(){
    
        value.textContent= `${start}%`;
        progressCircle.style.background = ` conic-gradient(  #0bec7bb3 ${ start * 3.6 }deg, #fff  0deg )`;
    
        if(start == input.value){
            clearInterval(progress);
            input.value=" ";
        }
    }
    }, 25)
}
