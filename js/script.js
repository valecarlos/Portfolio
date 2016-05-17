//using jquery for this
$( document ).ready(function() {  
 /*
    var imgArr = ['img/HeaderImg.jpg','img/Grid.jpg','img/GifChallenge.JPG'];
    var currentImg = 0;

    setInterval(function(){
        currentImg = currentImg == imgArr.length -1 ? 0 : currentImg+1;
        $('#headerImg').fadeTo(1000,0.40, function(){
            $('#headerImg').attr("src",imgArr[currentImg]);
        }).fadeTo(1000,1);;
        
        console.log(imgArr[currentImg]);
    },3000);

*/
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

    /*
    $(".options-menu li a").on("click", function(event){
        $(".slide-in-menu").removeClass("slide-in-visible");    
    });*/

    //initialize the li's height at 5%, i don't initialize them from the css in case JavaScript is not Active
    $('.skill-html').css("height","5%");
    $('.skill-css').css("height","5%");
    $('.skill-javascript').css("height","5%");
    $('.skill-csharp').css("height","5%");
    $('.skill-sql').css("height","5%");



    $(window).scroll(function(){
        //control the column graph's bars to make them gro on scroll
        var wScroll = $(this).scrollTop();
        if(wScroll > $('.skills-section').offset().top - ($(window).height() / 1.8)) {
          $('.skill-html').css("height","70%");
          $('.skill-css').css("height","67%");
          $('.skill-javascript').css("height","65%");
          $('.skill-csharp').css("height","66%");
          $('.skill-sql').css("height","72%");
        }
        if(wScroll > $('.about-section').offset().top - ($(window).height() / 1.4)) {
                $('.thumbnail').addClass('show-me');
                $('.my-info').addClass('show-me');
            }
            //Control the back to top button, hide/show
        if(wScroll > $('#github').offset().top -20) {
            $('.back-to-top').addClass('show-me');
        } else
        {
            $('.back-to-top').removeClass('show-me');
        }
    });

    //***************************IMAGE MOVE SECTION *******************************
    $(document).mousemove(function(e){
        var newvalueY;
        var newvalueX;
        //add just a little bit of a delay
        setTimeout(function(){
        	//just to keep track of the coordenates
        	//$("span").text(e.pageX + ", " + e.pageY);
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
    var $root = $('html, body');
    $('a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });
});

