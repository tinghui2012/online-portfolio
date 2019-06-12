/*eslint-env browser*/

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 240){
            $('#navigationBar').addClass('navigationBar-fixed');
        } 
        if($(window).scrollTop() < 240){
            $('#navigationBar').removeClass('navigationBar-fixed');
        }
        
    })
})


/*
window.onscroll = function(){
    fixedNavBar();
}

function fixedNavBar(){
    if(document.body.scrollTop < 100 || document.documentElement.scrollTop < 100){
        document.getElementById("navigationBar").style.top="50";
    } else {
        document.getElementById("navigationBar").style.top="0";
    }
}
*/
/*
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigationBar”).style.top = "0";
} else {
    document.getElementById("navigationBar”).style.top = “100”;
}
    prevScrollpos = currentScrollPos;
}
*/