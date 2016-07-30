//BODY ON LOAD

$(document).ready(function () {
    $("body").fadeIn(1000);
});

//ANCHOR

$(document).ready(function () {
    $("nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
			top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
    });
});

//ON SCREEN

function addClass(element, className) {
    var classes = element.getAttribute('class') || '';
    element.setAttribute('class', classes + ' ' + className);
}
function removeClass(element, className) {
    var classes = element.getAttribute('class') || '';
    element.setAttribute('class', classes.replace(' ' + className, ''));
}

// onScreen class instance
var osVertical = new OnScreen({
    tolerance: 50
});

//in
osVertical.on('enter', '.vertical', function (element) {
    addClass(element, 'onScreen');
});
//out
osVertical.on('leave', '.vertical', function (element) {
    removeClass(element, 'onScreen');
});

//FORM VALID

$(document).ready(function() {
    $("#loginform").validate({
        rules:{
            userName:{
                required:true
            },
            userEmail:{
                required:true,
                email:true
            },
        },
        messages: {
            userName: {
                required: "Plese enter name",
            },
            userEmail: {
                required: "Please enter email",
                email: "Please enter correct email adress"
            }
        },
    })
})

var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var adultCount = document.getElementById('adult_count');
var childCount = document.getElementById('child_count');
var submit = document.getElementById('submit');

var nameValid = /^[A-z ]+$/;
var emailValid = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;


function formValidate(event) {
    if (childCount.value >= 0) {
        childCount.style.outline = "none";
    }
    if (adultCount.value >= 0) {
        adultCount.style.outline = "none";
    }
    if (userEmail.value.search(emailValid) == 0) {
        userEmail.style.outline = "none";
    }
    if (userName.value.search(nameValid) == 0) {
        userName.style.outline = "none";
    }
    if (userName.value.search(nameValid) || userName.value == "") {
        userName.style.outline = "2px solid red";
        event.preventDefault();
        return false;
    }
    if (userEmail.value.search(emailValid) || userEmail.value == "") {
        userEmail.style.outline = "2px solid red";
        event.preventDefault();
        return false;
    }
    if (adultCount.value < 0 || adultCount.value == "") {
        adultCount.style.outline = "2px solid red";
        event.preventDefault();
        return false;
    }
    if (childCount.value < 0 || childCount.value == "") {
        childCount.style.outline = "2px solid red";
        event.preventDefault();
        return false;
    }
}

submit.addEventListener('click', formValidate);

//REORDERING IMAGES 

var pic_1 = document.getElementById('pic_1');
var pic_2 = document.getElementById('pic_2');
var pic_3 = document.getElementById('pic_3');
var pic_4 = document.getElementById('pic_4');
var pic_5 = document.getElementById('pic_5');
var pic_6 = document.getElementById('pic_6');

var images = new Array(
    'img/section-world/elephant.png',
    'img/section-world/bird.png',
    'img/section-world/lion.png',
    'img/section-world/flamingo.png',
    'img/section-world/deer.png',
    'img/section-world/panda.png',
    'img/section-world/monkey.jpg',
    'img/section-world/rhino.jpg');
var currentImage = 0;
var i = 0;
var j = 1;
var k = 2;
var h = 3;
var g = 4;
var f = 5;
var opacity = 100;

function pazzlePic_1() {
    pic_1.style.transition = "0s";
    pic_1.style.opacity = 0;
    pic_1.innerHTML = '<img src="' + images[i] + '">';
    i++;
    if (i > 7) {
        i = 0;
    }
    setTimeout(function opacityThis() {
        pic_1.style.transition = "1s";
        pic_1.style.opacity = 1;
    }, 10);
    setTimeout("pazzlePic_1()", 5000);
}
function pazzlePic_2() {
    pic_2.style.transition = "0s";
    pic_2.style.opacity = 0;
    pic_2.innerHTML = '<img src="' + images[j] + '">';
    j++;
    if (j > 7) {
        j = 0;
    }
    setTimeout(function opacityThis() {
        pic_2.style.transition = "1s";
        pic_2.style.opacity = 1;
    }, 10);
    setTimeout("pazzlePic_2()", 5000);
}
function pazzlePic_3() {
    pic_3.style.transition = "0s";
    pic_3.style.opacity = 0;
    pic_3.innerHTML = '<img src="' + images[k] + '">';
    k++;
    if (k > 7) {
        k = 0;
    }
    setTimeout(function opacityThis() {
        pic_3.style.transition = "1s";
        pic_3.style.opacity = 1;
    }, 10);
    setTimeout("pazzlePic_3()", 5000);
}
function pazzlePic_4() {
    pic_4.style.transition = "0s";
    pic_4.style.opacity = 0;
    pic_4.innerHTML = '<img src="' + images[h] + '">';
    h++;
    if (h > 7) {
        h = 0;
    }
    setTimeout(function opacityThis() {
        pic_4.style.transition = "1s";
        pic_4.style.opacity = 1;
    }, 10);
    setTimeout("pazzlePic_4()", 5000);
}
function pazzlePic_5() {
    pic_5.style.transition = "0s";
    pic_5.style.opacity = 0;
    pic_5.innerHTML = '<img src="' + images[g] + '">';
    g++;
    if (g > 7) {
        g = 0;
    }
    setTimeout(function opacityThis() {
        pic_5.style.transition = "1s";
        pic_5.style.opacity = 1;
    }, 10);
    setTimeout("pazzlePic_5()", 5000);
}
function pazzlePic_6() {
    pic_6.style.transition = "0s";
    pic_6.style.opacity = 0;
    pic_6.innerHTML = '<img src="' + images[f] + '">';
    f++;
    if (f > 7) {
        f = 0;
    }
    setTimeout(function opacityThis() {
        pic_6.style.transition = "1s";
        pic_6.style.opacity = 1;
    }, 10);
    setTimeout("pazzlePic_6()", 5000);
}

var goPazzle_1 = pazzlePic_1();
var goPazzle_2 = pazzlePic_2();
var goPazzle_3 = pazzlePic_3();
var goPazzle_4 = pazzlePic_4();
var goPazzle_5 = pazzlePic_5();
var goPazzle_6 = pazzlePic_6();