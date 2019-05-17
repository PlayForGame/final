var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
}
//* form //*
function calculate() {
    let doc = document;
    let option = doc.getElementById("option");
    let time = doc.getElementById("time");
    let result = doc.getElementById("result");
    let old = doc.getElementById("old");

    result.value = "$" + Number(parseFloat(option.value) * parseInt(time.value) - (parseFloat(option.value) *
            parseInt(time.value) * (parseInt(old.value) * 0.01)))
        .toPrecision(5);
}