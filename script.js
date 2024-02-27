let startCounter = document.getElementById("counterStart");
let lowerBtn = document.getElementById("lowerCount");
let resetBtn = document.getElementById("resetBtn");
let addBtn = document.getElementById("addCount");

let counter = 0;
lowerBtn.addEventListener("click" , function(){
    counter--;
    startCounter.textContent = counter;
    if(counter < 0){
        startCounter.style.color = "red";
    }  
})

resetBtn.addEventListener("click" , function(){
    counter = 0;
    startCounter.innerText = counter;
    startCounter.style.color = "white";
})

addBtn.addEventListener("click" , function(){
    counter++;
    startCounter.textContent = counter;
    if(counter > 0){
        startCounter.style.color = "black";
    }  
})