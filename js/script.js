// Using JQuery and standard JavaScript
$(document).ready(function () {
    // Initial loading screen
    $('.load').css("opacity", "1");
    setTimeout(function() {
        $('.load').css("opacity", "0");
        setTimeout(function() {
            $('.load').css("display", "none");
            $(".small").removeClass("big");
        }, 1500);
    }, 5000);
    
    // Set new width
    let i = 0;

    // Stores side-bar labels
    let dd_array = ['Brand, Design & Development', 'Design & Development', 'Design & Development', 'Brand & Design', 'Design & Development', 'Design & Development', 'Design & Development', 'Brand & Design'];

    // Function for handling hover on any main labels
    $('.pro').mouseover(function () { 
        // Handles top headline animation/color
        document.querySelector('.headline').style.backgroundImage = "-webkit-linear-gradient(left, white 50%, white 50%)";
        
        // Change the side-nav
        $(".ddp").css("top","20px");
        setTimeout(function() {
            i++;
            i %= 7;
            $('.ddp').html(dd_array[i]);
            $(".ddp").css("top","0");
        }, 450);

        // Change purple background's width
        document.styleSheets[0].cssRules[5].style.width = "100%";

        // Handles side label
        document.querySelector('.ddp').style.color = "white";
        $(".in").css("width", "0");
    })

    // Time delay for first hovered label
    let t = 550

    // Hover on labels functions
    // First Label
    $("p:contains('betches')").mouseover(function () {
        // Change background
        setTimeout(function() {
            $(".flexb img[src='./images/1.jpg']").css({"opacity": "0.7", "transform": "scale(1.3, 1.3)"});
        }, t);
        t = 0;
    })

    // Second Label
    $("p:contains('allpro')").delay(400).mouseover(function () {
        // Change background
        setTimeout(function() {
            $(".flexb img[src='./images/2.jpg']").css({"opacity": "0.7", "transform": "scale(1.3, 1.3)"});
        }, t);
        t = 0;
    })
    
    // Third Label
    $("p:contains('cornerstone')").delay(400).mouseover(function () {
        // Change background
        setTimeout(function() {
            $(".flexb img[src='./images/3.jpg']").css({"opacity": "0.7", "transform": "scale(1.3, 1.3)"});
        }, t);
        t = 0;
    })
    
    // Fourth Label
    $("p:contains('taylor')").delay(400).mouseover(function () {
        // Change background
        setTimeout(function() {
            $(".flexb img[src='./images/4.jpg']").css({"opacity": "0.7", "transform": "scale(1.3, 1.3)"});
        }, t);
        t = 0;
    })
    
    // Fifth Label
    $("p:contains('modernmd')").delay(400).mouseover(function () {
        // Change background
        setTimeout(function() {
            $(".flexb img[src='./images/5.jpg']").css({"opacity": "0.7", "transform": "scale(1.3, 1.3)"});
        }, t);
        t = 0;
    })
    
    // Sixth Label
    $("p:contains('storyverse')").delay(400).mouseover(function () {
        // Change background
        setTimeout(function() {
            $(".flexb img[src='./images/6.jpg']").css({"opacity": "0.7", "transform": "scale(1.3, 1.3)"});
        }, t);
        t = 0;
    })
    
    // Seventh Label
    $("p:contains('gtscareers')").delay(400).mouseover(function () {
        // Change background
        setTimeout(function() {
            $(".flexb img[src='./images/7.jpg']").css({"opacity": "0.7", "transform": "scale(1.3, 1.3)"});
        }, t);
        t = 0;
    })
    
    // Eighth Label
    $("p:contains('hennessey')").delay(400).mouseover(function () {
        // Change background
        setTimeout(function() {
            $(".flexb img[src='./images/8.jpg']").css({"opacity": "0.7", "transform": "scale(1.3, 1.3)"});
        }, t);
        t = 0;
    })

    $(".pro").mouseleave(function () {
        // Restore to initial background
        $(".flexb img").css({"opacity": "0", "transform": "scale(1.15, 1.15)"});
        
        // Change the side-bar label text
        $(".ddp").css("top","20px");
        setTimeout(function() {
            i++;
            i %= 7;
            $('.ddp').html("buzzworthy studio &#169; 2019");
            $(".ddp").css("top","0");
        }, 450);
    })
});
