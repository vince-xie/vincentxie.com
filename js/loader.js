$(document).ready(function(){
    $("#nav").autoHidingNavbar();
    $("#welcome-video").animate({'opacity': 'show', 'marginTop': 0}, 500); 
    $('#index').animate({'opacity': 'show', 'marginTop': 0}, 500);    
    $("#home-button").click(function(){
        stopAnimations();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        removeAllActive();
        $("#home-button").addClass('active');
        $("#welcome-video").hide();
        $("#index").hide();
        $("#about").fadeOut(150);
        $("#projects").fadeOut(150);
        $("#contact").fadeOut(150);
        $("#footer").hide();
        $("#welcome-video").css("margin-top", "45px");
        $("#index").css("margin-top", "45px");
        setTimeout(function(){ 
            $("#welcome-video").animate({'opacity': 'show', 'marginTop': 0}, 500); 
            $("#index").animate({'opacity': 'show', 'marginTop': 0}, 500); 
            setTimeout(function(){ $("#footer").fadeIn(300); }, 500);
        }, 250);
        document.title = 'Vincent Xie - Developer';
    });

    $("#about-button").click(function(){
        stopAnimations();
        $("#tech-container").stop(true, true);
        $("html, body").animate({ scrollTop: 0 }, "slow");
        removeAllActive();
        resetAbout();
        setTimeout(function(){ 
            $("#about").animate({'opacity': 'show', 'marginTop': -10}, 500); 
            $("#footer").fadeIn(500);
        }, 250);
        setTimeout(function(){ $("#me").animate({'opacity': '1', 'marginLeft': '2vw', 'marginRight': '2vw'}, 750); }, 400);
        document.title = 'About me';
    });

    $("#projects-button").click(function(){
        stopAnimations();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        removeAllActive();
        $("#projects-button").addClass('active');
        $("#welcome-video").fadeOut(150);
        $("#index").fadeOut(150);
        $("#about").fadeOut(150);
        $("#projects").hide();
        $("#contact").fadeOut(150);
        $("#footer").hide();
        $("#projects").css("margin-top", "45px");
        setTimeout(function(){ 
            $("#projects").animate({'opacity': 'show', 'marginTop': -10}, 500); 
            $("#footer").fadeIn(500);
        }, 250);
        document.title = 'Projects';
    });

    $("#contact-button").click(function(){
        stopAnimations();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        removeAllActive();
        $("#contact-button").addClass('active');
        $("#welcome-video").fadeOut(150);
        $("#index").fadeOut(150);
        $("#about").fadeOut(150);
        $("#projects").fadeOut(150);
        $("#contact").hide();
        $("#footer").hide();
        $("#contact").css("margin-top", "45px");  
        setTimeout(function(){ 
            $("#contact").animate({'opacity': 'show', 'marginTop': 0}, 500); 
            $("#footer").fadeIn(500);
        }, 250);
        setContactForm();
        document.title = 'Contact me';
    });
});

$(document).scroll(function() {
    if($(document).scrollTop() > 120){
        $("#scroll").fadeOut(500);
        $("#about section:nth-of-type(2)").animate({'opacity': 'show', 'top': 50}, 1000);
        $("#tech-container").fadeIn(1000);
    }
});

function stopAnimations(){
    $("#welcome-video").stop(true, true);
    $("#index").stop(true, true);
    $("#about").stop(true, true);
    $('#me').stop(true, true);
    $("#about section:nth-of-type(2)").stop(true, true);
    $("#tech-container").stop(true, true);
    $("#projects").stop(true, true);
    $("#contact").stop(true, true);
    $("#footer").stop(true, true);
}

function removeAllActive(){
    $("#home-button").removeClass('active');
    $("#about-button").removeClass('active')
    $("#projects-button").removeClass('active');
    $("#contact-button").removeClass('active');
}

function resetAbout(){
    $("#about-button").addClass('active')
    $("#welcome-video").fadeOut(150);
    $("#index").fadeOut(150);
    $("#about").hide();
    $("#projects").fadeOut(150);
    $("#contact").fadeOut(150);
    $("#footer").hide();
    $("#scroll").show();
    $("#tech-container").hide();
    $("#about").css("margin-top", "45px");
    $("#me").css('opacity', '0');
    $("#me").css('margin-left', '-2vw');
    $("#me").css('margin-right', '6vw');    
    $("#about section:nth-of-type(2)").hide();
    $("#about section:nth-of-type(2)").css("top", "150px");
}

function setContactForm(){
    if($.browser.mozilla){
        $(".mozilla-form").show();
    } else{
        $(".form").show();
    }    
}