$( document ).ready(function() { 
    //initialize the functionality of the side menu
    var slideInMenu = function (){
        $("#slideMenuButton").on("click", function(){
        console.log("im here");
        $(".slide-in-menu").toggleClass("slide-in-visible");
        return  false;
        });

        $(".slide-in-menu").on("click", function(event){
            if(this == event.target){
                $(".slide-in-menu").removeClass("slide-in-visible");    
            }
        });

        $(".close-menu").on("click", function(event){
            $(".slide-in-menu").removeClass("slide-in-visible");    
        });

    }();

    var myBarGraph = {
        initial : function (){
            $('.skill-html').css("height","5%");
            $('.skill-css').css("height","5%");
            $('.skill-javascript').css("height","5%");
            $('.skill-csharp').css("height","5%");
            $('.skill-sql').css("height","5%");
        },
        grow : function(){
            $('.skill-html').css("height","70%");
            $('.skill-css').css("height","67%");
            $('.skill-javascript').css("height","65%");
            $('.skill-csharp').css("height","66%");
            $('.skill-sql').css("height","72%");
        }
    };

    myBarGraph.initial();
    //mySections is intended to control the events that take place on scroll function
    var mySections = {
        showAbout : function (){
            $('.thumbnail').addClass('show-me');
            $('.my-info').addClass('show-me');
        },
        showNavItems : function (){
            $('.back-to-top').addClass('show-me');
            $('.menu-bar').css('background-color','grey');
        },
        hideNavItems : function (){
            $('.menu-bar').css('background-color','white')
            $('.back-to-top').removeClass('show-me');
        }

    };

    $(window).scroll(function(){
        //control the column graph's bars to make them gro on scroll
        var wScroll = $(this).scrollTop();
        if(wScroll > $('.skills-section').offset().top - ($(window).height() / 1.8)) {
            myBarGraph.grow();
        }
        if(wScroll > $('.about-section').offset().top - ($(window).height() / 1.4)) {
            mySections.showAbout();
        }

        if(wScroll > $('#github').offset().top -70) {
            mySections.showNavItems();
        } else {
            mySections.hideNavItems();
        }

    });

    $(document).mousemove(function(e){
        var newvalueY;
        var newvalueX;
        //add just a little bit of a delay
        setTimeout(function(){
            //substract the 40px we have set on the transform css property as an offset
            //-15 just to make sure that when it's scrolled back to top by clickin on the button - it will still display correctly on mobile
            if((e.pageY / 80)-40<-15){
                newvalueY =  (e.pageY / 80)-40;
            }
            newvalueX = (e.pageX / 80)-40;
            //using the translate3d will force hardware acceleration (in some devices) so it will run smoothly
            document.getElementById("headerImg").style.transform = "translate3d("+newvalueX+"px," + newvalueY +"px,0px)";
        }, 100);
    });

    //great code snippet to smoothly scroll to Tags using Anchors and their href. while updating the URL so the user can go back
    //http://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
    (function(){
        var $root = $('html, body');
        $('a').click(function() {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
        });
    }());
    
});