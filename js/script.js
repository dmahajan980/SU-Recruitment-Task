$(document).ready(function () {
    // Set new width
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
        // document.querySelectorAll(".in").style.width = "0";
        // document.getElementsByClassName(".pro span").style.width = "0";
        // document.querySelector(".pro span").style.width = "0";
        $(".in").css("width", "0");
        // $('.ddp').hide("slide", {direction: "right"}, "fast");
        $('.ddp').html(dd_array[i]);
        // $('.ddp').show("slide", {direction: "right"}, "fast");
    })

    let t = 550
    $("p:contains('betches')").mouseover(function () {
        setTimeout(function() {
            $(".flexb img[src='./images/1.jpg']").css({"opacity": "0.7", "transform": "scale(1.1, 1.1)"});
        }, t);
        t = 0;
    })

    $("p:contains('allpro')").delay(400).mouseover(function () {
        setTimeout(function() {
            $(".flexb img[src='./images/2.jpg']").css({"opacity": "0.7", "transform": "scale(1.1, 1.1)"});
        }, t);
        t = 0;
    })
    
    $("p:contains('cornerstone')").delay(400).mouseover(function () {
        setTimeout(function() {
            $(".flexb img[src='./images/3.jpg']").css({"opacity": "0.7", "transform": "scale(1.1, 1.1)"});
        }, t);
        t = 0;
    })
    
    $("p:contains('taylor')").delay(400).mouseover(function () {
        setTimeout(function() {
            $(".flexb img[src='./images/4.jpg']").css({"opacity": "0.7", "transform": "scale(1.1, 1.1)"});
        }, t);
        t = 0;
    })
    
    $("p:contains('modernmd')").delay(400).mouseover(function () {
        setTimeout(function() {
            $(".flexb img[src='./images/5.jpg']").css({"opacity": "0.7", "transform": "scale(1.1, 1.1)"});
        }, t);
        t = 0;
    })
    
    $("p:contains('storyverse')").delay(400).mouseover(function () {
        setTimeout(function() {
            $(".flexb img[src='./images/6.jpg']").css({"opacity": "0.7", "transform": "scale(1.1, 1.1)"});
        }, t);
        t = 0;
    })
    
    $("p:contains('gtscareers')").delay(400).mouseover(function () {
        setTimeout(function() {
            $(".flexb img[src='./images/7.jpg']").css({"opacity": "0.7", "transform": "scale(1.1, 1.1)"});
        }, t);
        t = 0;
    })
    
    $("p:contains('hennessey')").delay(400).mouseover(function () {
        setTimeout(function() {
            $(".flexb img[src='./images/8.jpg']").css({"opacity": "0.7", "transform": "scale(1.1, 1.1)"});
        }, t);
        t = 0;
    })

    $(".pro").mouseleave(function () {
        $(".flexb img").css({"opacity": "0", "transform": "scale(1, 1)"});
    })
});
