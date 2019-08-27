$(document).ready(function () {
    let background = document.querySelector(".background");
    let currentWidth = document.styleSheets[0].cssRules[0].style.width;
    
    // Set new width
    // function widen() {
    //     document.styleSheets[0].cssRules[0].style.width = "100%";
    // }

    let i = 0;
    let dd_array = ['Brand, Design & Development', 'Design & Development', 'Design & Development', 'Brand & Design', 'Design & Development', 'Design & Development', 'Design & Development', 'Brand & Design'];

    $('.pro').mouseover(function () { 
        // document.styleSheets[0].cssRules[15].style.backgroundColor = "blue";
        document.querySelector('.headline').style.backgroundImage = "-webkit-linear-gradient(left, white 50%, white 50%)";
        if (i == 7) {
            i = 0;
        }
        else {
            i++;
        }
        document.styleSheets[0].cssRules[5].style.width = "100%";
        document.querySelector('.ddp').style.color = "white";
        // $('.ddp').hide("slide", {direction: "right"}, "fast");
        $('.ddp').html(dd_array[i]);
        // $('.ddp').show("slide", {direction: "right"}, "fast");
    })

    // $('.pro').mouseleave(function () { 
    //     document.styleSheets[0].cssRules[15].style.width = "10%";
    // });
});