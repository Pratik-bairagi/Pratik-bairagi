$(document).ready(function() {
    // Navbar load karna
    $("#navbar").load("assets/html/navigation.html", function(response, status, xhr) {
        if (status == "success") {
            console.log("Navbar loaded!");
            // Dynamic content load hone ke baad AOS ko batana zaruri hai
            AOS.init({
                duration: 800,
                once: true
            });
        } else {
            console.error("Error loading navbar: " + xhr.status + " " + xhr.statusText);
        }
    });
});

// Purana stop/continue scrolling code
var lastTop;
function stopScrolling() {
    lastTop = $(window).scrollTop();      
    $('body').addClass('noscroll').css({ top: -lastTop });            
}

function continueScrolling() {                    
    $('body').removeClass('noscroll');      
    $(window).scrollTop(lastTop);       
}
