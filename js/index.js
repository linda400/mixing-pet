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
// -----------------------------------------cat
let  young_btn_c = document.getElementById('young_btn_c');
let  middle_btn_c = document.getElementById('middle_btn_c');
let  old_btn_c = document.getElementById('old_btn_c');

young_btn_c.addEventListener('click', function(e) {
    document.getElementById("big_pic_c_2").classList.add("remove");
    document.getElementById("big_pic_c_3").classList.add("remove");
    document.getElementById("big_pic_c_1").classList.remove("remove");
    document.getElementById('pol_crl_c').style.border = '5px solid #e7bf3a'
});
middle_btn_c.addEventListener('click', function(e) {
    document.getElementById("big_pic_c_1").classList.add("remove");
    document.getElementById("big_pic_c_3").classList.add("remove");
    document.getElementById("big_pic_c_2").classList.remove("remove");
    document.getElementById('pol_crl_c').style.border = '5px solid #A9C394'
});
old_btn_c.addEventListener('click', function(e) {
    document.getElementById("big_pic_c_1").classList.add("remove");
    document.getElementById("big_pic_c_2").classList.add("remove");
    document.getElementById("big_pic_c_3").classList.remove("remove");
    document.getElementById('pol_crl_c').style.border = '5px solid #8CCAD9'
});
// -----------------------------------------dog
let  young_btn_d = document.getElementById('young_btn_d');
let  middle_btn_d = document.getElementById('middle_btn_d');
let  old_btn_d = document.getElementById('old_btn_d');

young_btn_d.addEventListener('click', function(e) {
    document.getElementById("big_pic_d_2").classList.add("remove");
    document.getElementById("big_pic_d_3").classList.add("remove");
    document.getElementById("big_pic_d_1").classList.remove("remove");
    document.getElementById('pol_crl_d').style.border = '5px solid #e7bf3a'
});
middle_btn_d.addEventListener('click', function(e) {
    document.getElementById("big_pic_d_1").classList.add("remove");
    document.getElementById("big_pic_d_3").classList.add("remove");
    document.getElementById("big_pic_d_2").classList.remove("remove");
    document.getElementById('pol_crl_d').style.border = '5px solid #A9C394'
});
old_btn_d.addEventListener('click', function(e) {
    document.getElementById("big_pic_d_1").classList.add("remove");
    document.getElementById("big_pic_d_2").classList.add("remove");
    document.getElementById("big_pic_d_3").classList.remove("remove");
    document.getElementById('pol_crl_d').style.border = '5px solid #8CCAD9'
});
// ------------------------
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("change-pg");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  

}
// ------------------------
let slideDot = 1;
showSlide(slideDot);

function plusSlide(a) {
  showSlide(slideDot += a);
}

function currentSlide(a) {
  showSlide(slideDot = a);
}

function showSlide(a) {
 let b;
 let slide = document.getElementsByClassName("health-item");
 let dot = document.getElementsByClassName("choose-pic");
  if (a > slide.length) {
    console.log(slideDot);
    slideDot = 1
  }
  if (a < 1) {
    slideDot = slide.length
  }
  for (b = 0; b < slide.length; b++) {
    slide[b].style.display = "none";
  }
  for (b = 0; b < dot.length; b++) {
    dot[b].className = dot[b].className.replace(" active", "");
  }
  slide[slideDot - 1].style.display = "block";
 
}
// -----------------------------
let  young_btn_c_rwd = document.getElementById('young_btn_c_rwd');
let  middle_btn_c_rwd = document.getElementById('middle_btn_c_rwd');
let  old_btn_c_rwd = document.getElementById('old_btn_c_rwd');
let  young_btn_d_rwd = document.getElementById('young_btn_d_rwd');
let  middle_btn_d_rwd = document.getElementById('middle_btn_d_rwd');
let  old_btn_d_rwd = document.getElementById('old_btn_d_rwd');

young_btn_c_rwd.addEventListener('click', function(e) {
    document.getElementById("big_pic_c_2_rwd").classList.add("remove");
    document.getElementById("big_pic_c_3_rwd").classList.add("remove");
    document.getElementById("big_pic_d_1_rwd").classList.add("remove");
    document.getElementById("big_pic_d_2_rwd").classList.add("remove");
    document.getElementById("big_pic_d_3_rwd").classList.add("remove");
    document.getElementById("big_pic_c_1_rwd").classList.remove("remove");
    document.getElementById('pol-crl-rwd').style.border = '8px solid #e7bf3a'
});

middle_btn_c_rwd.addEventListener('click', function(e) {
  document.getElementById("big_pic_c_1_rwd").classList.add("remove");
  document.getElementById("big_pic_c_3_rwd").classList.add("remove");
  document.getElementById("big_pic_d_1_rwd").classList.add("remove");
  document.getElementById("big_pic_d_2_rwd").classList.add("remove");
  document.getElementById("big_pic_d_3_rwd").classList.add("remove");
  document.getElementById("big_pic_c_2_rwd").classList.remove("remove");
  document.getElementById('pol-crl-rwd').style.border = '8px solid #A9C394'
});

old_btn_c_rwd.addEventListener('click', function(e) {
  document.getElementById("big_pic_c_1_rwd").classList.add("remove");
  document.getElementById("big_pic_c_2_rwd").classList.add("remove");
  document.getElementById("big_pic_d_1_rwd").classList.add("remove");
  document.getElementById("big_pic_d_2_rwd").classList.add("remove");
  document.getElementById("big_pic_d_3_rwd").classList.add("remove");
  document.getElementById("big_pic_c_3_rwd").classList.remove("remove");
  document.getElementById('pol-crl-rwd').style.border = '8px solid #8CCAD9'
});

young_btn_d_rwd.addEventListener('click', function(e) {
  document.getElementById("big_pic_c_1_rwd").classList.add("remove");
  document.getElementById("big_pic_c_2_rwd").classList.add("remove");
  document.getElementById("big_pic_c_3_rwd").classList.add("remove");
  document.getElementById("big_pic_d_2_rwd").classList.add("remove");
  document.getElementById("big_pic_d_3_rwd").classList.add("remove");
  document.getElementById("big_pic_d_1_rwd").classList.remove("remove");
  document.getElementById('pol-crl-rwd').style.border = '8px solid #e7bf3a'
});

middle_btn_d_rwd.addEventListener('click', function(e) {
document.getElementById("big_pic_c_1_rwd").classList.add("remove");
document.getElementById("big_pic_c_2_rwd").classList.add("remove");
document.getElementById("big_pic_c_3_rwd").classList.add("remove");
document.getElementById("big_pic_d_1_rwd").classList.add("remove");
document.getElementById("big_pic_d_3_rwd").classList.add("remove");
document.getElementById("big_pic_d_2_rwd").classList.remove("remove");
document.getElementById('pol-crl-rwd').style.border = '8px solid #A9C394'
});

old_btn_d_rwd.addEventListener('click', function(e) {
document.getElementById("big_pic_c_1_rwd").classList.add("remove");
document.getElementById("big_pic_c_2_rwd").classList.add("remove");
document.getElementById("big_pic_c_3_rwd").classList.add("remove");
document.getElementById("big_pic_d_1_rwd").classList.add("remove");
document.getElementById("big_pic_d_2_rwd").classList.add("remove");
document.getElementById("big_pic_d_3_rwd").classList.remove("remove");
document.getElementById('pol-crl-rwd').style.border = '8px solid #8CCAD9'
});