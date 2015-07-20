$(document).ready(function(){
    $("#nav").autoHidingNavbar();
    $('#index').animate({'opacity': 'show', 'marginTop': -20}, 500);    
    $("#home-button").click(function(){
        $("#index").stop(true, true);
        $("#about").stop(true, true);
        $("#projects").stop(true, true);
        $("#contact").stop(true, true);
        $("#footer").stop(true, true);
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $("#home-button").addClass('active');
        $("#about-button").removeClass('active')
        $("#projects-button").removeClass('active');
        $("#contact-button").removeClass('active');
        $("#index").hide();
        $("#about").fadeOut(150);
        $("#projects").fadeOut(150);
        $("#contact").fadeOut(150);
        $("#footer").fadeOut(150);
        setTimeout(function(){ $("#index").animate({'opacity': 'show', 'marginTop': -20}, 500); 
            $("#footer").fadeIn(500);
        }, 250);
        document.title = 'Vincent Xie - Developer';
        setTimeout(function(){ 
            $("#index").css("margin-top", "25px");
            $("#about").css("margin-top", "25px");
            $("#projects").css("margin-top", "25px");
            $("#contact").css("margin-top", "25px");  
        }, 160);
    });

    $("#about-button").click(function(){
        $("#index").stop(true, true);
        $("#about").stop(true, true);
        $("#projects").stop(true, true);
        $("#contact").stop(true, true);
        $("#footer").stop(true, true);
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $("#home-button").removeClass('active');
        $("#about-button").addClass('active')
        $("#projects-button").removeClass('active');
        $("#contact-button").removeClass('active');
        $("#index").fadeOut(150);
        $("#about").hide();
        $("#projects").fadeOut(150);
        $("#contact").fadeOut(150);
        $("#footer").fadeOut(150);
        setTimeout(function(){ $("#about").animate({'opacity': 'show', 'marginTop': -20}, 500); 
            $("#footer").fadeIn(500);
        }, 250);
        setTimeout(function(){ $("#me").animate({'opacity': '1', 'marginLeft': '2vw', 'marginRight': '2vw'}, 750); }, 400);
        document.title = 'About me';
        $('#me').stop(true, true);
        $("#me").css('opacity', '0');
        $("#me").css('margin-left', '-2vw');
        $("#me").css('margin-right', '6vw');
        $("#about section:nth-of-type(2)").stop(true, true);
        $("#about section:nth-of-type(2)").hide();
        $("#about section:nth-of-type(2)").css("top", "150px")
        setTimeout(function(){ 
            $("#index").css("margin-top", "25px");
            $("#about").css("margin-top", "25px");
            $("#projects").css("margin-top", "25px");
            $("#contact").css("margin-top", "25px");  
        }, 160);
    });

    $("#projects-button").click(function(){
        $("#index").stop(true, true);
        $("#about").stop(true, true);
        $("#projects").stop(true, true);
        $("#contact").stop(true, true);
        $("#footer").stop(true, true);
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $("#home-button").removeClass('active');
        $("#about-button").removeClass('active')
        $("#projects-button").addClass('active');
        $("#contact-button").removeClass('active');
        $("#index").fadeOut(150);
        $("#about").fadeOut(150);
        $("#projects").hide();
        $("#contact").fadeOut(150);
        $("#footer").fadeOut(150);
        setTimeout(function(){ $("#projects").animate({'opacity': 'show', 'marginTop': -20}, 500); 
            $("#footer").fadeIn(500);
        }, 250);
        document.title = 'Projects';
        setTimeout(function(){ 
            $("#index").css("margin-top", "25px");
            $("#about").css("margin-top", "25px");
            $("#projects").css("margin-top", "25px");
            $("#contact").css("margin-top", "25px");  
        }, 160);
    });

    $("#contact-button").click(function(){
        $("#index").stop(true, true);
        $("#about").stop(true, true);
        $("#projects").stop(true, true);
        $("#contact").stop(true, true);
        $("#footer").stop(true, true);
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $("#home-button").removeClass('active');
        $("#about-button").removeClass('active')
        $("#projects-button").removeClass('active');
        $("#contact-button").addClass('active');
        $("#index").fadeOut(150);
        $("#about").fadeOut(150);
        $("#projects").fadeOut(150);
        $("#contact").hide();
        $("#footer").fadeOut(150);
        setTimeout(function(){ $("#contact").animate({'opacity': 'show', 'marginTop': -20}, 500); 
            $("#footer").fadeIn(500);
        }, 250);
        document.title = 'Contact me';
        setTimeout(function(){ 
            $("#index").css("margin-top", "25px");
            $("#about").css("margin-top", "25px");
            $("#projects").css("margin-top", "25px");
            $("#contact").css("margin-top", "25px");  
        }, 160);

        if($.browser.mozilla){
            $(".mozilla-form").show();
        }
        else{
            $(".form").show();
        }
    });
});

$(document).scroll(function() {
    if($(document).scrollTop() > 120){
        console.log($(document).scrollTop());
        $("#about section:nth-of-type(2)").animate({'opacity': 'show', 'top': 50}, 1000);
    }
});


