// Slide show 1

var slides = document.querySelector('.slides');
var slide = Array.from(document.querySelectorAll('.sanPham1'));
var slideGroup = document.querySelector('.slideGroup');
var numPage

function makeslide(numberonetime) {
    var percentWidthSlide = 100/numberonetime;
    numPage = Math.ceil(slide.length/numberonetime);
    slide.forEach((el, index)=>{
        el.style.width = (slideGroup.offsetWidth/100*percentWidthSlide) + 'px';
    })
    slides.style.width = (slideGroup.offsetWidth/100*percentWidthSlide)*slide.length + 'px';
}
makeslide(1);

var curpage = 1;

function showslide(pagenumber) {
    slides.style.marginLeft =-(slideGroup.offsetWidth*(pagenumber - 1)) + 'px';
}
showslide(1);

function changeslide(n) {
    curpage = curpage + n;
    if(curpage < 1)curpage = numPage;
    if(curpage > numPage)curpage = 1;
    showslide(curpage);
}



// Slide show 2


var slides2 = document.querySelector('.slides2');
var slide2 = Array.from(document.querySelectorAll('.slide2'));
var slideGroup2 = document.querySelector('.slideGroup2');
var numPage2

function makeslide2(numberonetime) {
    var percentHeightSlide2 = 100/numberonetime;
    numPage2 = Math.ceil(slide2.length/numberonetime);
    slide2.forEach((el, index)=>{
        el.style.height = (slideGroup2.offsetHeight/100*percentHeightSlide2) + 'px';
    })
    slides2.style.height = (slideGroup2.offsetHeight/100*percentHeightSlide2)*slide2.length + 'px';
}
makeslide2(2);

var curpage2 = 1;

function showslide2(pagenumber) {
    slides2.style.marginTop = -(slideGroup2.offsetHeight*(pagenumber - 1)) + 'px';
}
showslide2(1);

function changeslide2(n) {
    curpage2 = curpage2 + n;
    if(curpage2 < 1)curpage2 = numPage2;
    if(curpage2 > numPage2)curpage2 = 1;
    showslide2(curpage2);
}