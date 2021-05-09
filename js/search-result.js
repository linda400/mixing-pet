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
// ----------------------------------------
let cancelled_bt = document.getElementById('cancelled_bt');
cancelled_bt.addEventListener('click', function (e) {

    document.getElementById("light_box").classList.remove("enlarge");
    document.getElementById("light_box").classList.add("cancelled");

});