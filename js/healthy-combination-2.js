let hamburger_bt = document.getElementById('hamburger_bt');
let isShowSlide = false;
hamburger_bt.addEventListener('click', function (e) {
    isShowSlide =! isShowSlide
    if (isShowSlide) {
        console.log(true);
        document.getElementById("hamburger_menu").classList.remove("goBack");
        document.getElementById("hamburger_menu").classList.add("active");
        // document.querySelector(".")
      
    } else {
        console.log(false);
        document.getElementById("hamburger_menu").classList.add("goBack");     
    }
}, false);
// -------------------------------------

let btn = document.getElementById("btn-choose");
let btn2 = document.getElementById("btn-choose2");
let btn3 = document.getElementById("btn-choose3");
let btn4 = document.getElementById("btn-choose4");
let choose = false;

btn.addEventListener('click',function (){
    choose =! choose
    if (choose) {
        console.log(true);
        document.getElementById("btn-choose").classList.add("clink-change");
        // document.querySelector(".")
      
    } else {
        console.log(false);
        document.getElementById("btn-choose").classList.remove("clink-change");     
    }
} , false);

btn2.addEventListener('click',function (){
    choose =! choose
    if (choose) {
        console.log(true);
        document.getElementById("btn-choose2").classList.add("clink-change");
        // document.querySelector(".")
      
    } else {
        console.log(false);
        document.getElementById("btn-choose2").classList.remove("clink-change");     
    }
} , false);

btn3.addEventListener('click',function (){
    choose =! choose
    if (choose) {
        console.log(true);
        document.getElementById("btn-choose3").classList.add("clink-change");
        // document.querySelector(".")
      
    } else {
        console.log(false);
        document.getElementById("btn-choose3").classList.remove("clink-change");     
    }
} , false);



btn4.addEventListener('click',function (){
    choose =! choose
    if (choose) {
        console.log(true);
        document.getElementById("btn-choose4").classList.add("clink-change");
        // document.querySelector(".")
      
    } else {
        console.log(false);
        document.getElementById("btn-choose4").classList.remove("clink-change");     
    }
} , false);




