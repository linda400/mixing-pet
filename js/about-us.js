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
// -----------------------------------------
$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });