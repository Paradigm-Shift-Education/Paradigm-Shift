$(function() {
    "use strict";

/* ==========================================================================
       CTA Form   
       ========================================================================== */


    // $('#cta-signup-form').ajaxChimp({
    //     callback: callbackFunctionCta,
    //     url: 'paradigmshiftcs.us14.list-manage.com/subscribe/post?u=da707e34e9497116e53ee2624&amp;id=b4513d7a2d'
    //         // http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
    // });

    // function callbackFunctionCta(resp) {
    //     if (resp.result === 'success') {
    //         $('#mc-error-cta').slideUp();
    //         $('#mc-success-cta').slideDown();
    //     } else if (resp.result === 'error') {
    //         $('#mc-success-cta').slideUp();
    //         $('#mc-error-cta').slideDown();
    //     }
    // }

     /* ==========================================================================
       Google Analytics
       ========================================================================= */

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-92988177-1', 'auto');
  ga('send', 'pageview');



    /* ==========================================================================
       Sub Form   
       ========================================================================== */


    $('#mc-form').ajaxChimp({
        callback: callbackFunction,
        url: 'http://paradigmshiftcs.us14.list-manage.com/subscribe/post?u=da707e34e9497116e53ee2624&amp;id=3b89f7faeb'
            // http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
    });

    function callbackFunction(resp) {
        if (resp.result === 'success') {
            $('#mc-error').slideUp();
            $('#mc-success').slideDown();
        } else if (resp.result === 'error') {
            $('#mc-success').slideUp();
            $('#mc-error').slideDown();
        }
    }



    /* ==========================================================================
   Tweet
   ========================================================================== */


    $('.tweet').twittie({
        username: 'envatomarket', // change username here
        dateFormat: '%b. %d, %Y',
        template: '{{tweet}} {{user_name}}',
        count: 10
    }, function() {
        var item = $('.tweet ul');

        item.children('li').first().show().siblings().hide();
        setInterval(function() {
            item.find('li:visible').fadeOut(500, function() {
                $(this).appendTo(item);
                item.children('li').first().fadeIn(500);
            });
        }, 8000);
    });




    /* ==========================================================================
   Product statistics counter
   ========================================================================== */


    $('.product-statistics').waypoint(function() {



        $('.counter-1').animateNumber({
            number: 1100, //change value here

        }, 2000);

        $('.counter-2').animateNumber({
            number: 6, //change value here

        }, 2000);

        $('.counter-3').animateNumber({
            number: 9, //change value here

        }, 2000);

        $('.counter-4').animateNumber({
            number: 42, //change value here

        }, 2000);

        $('.counter-5').animateNumber({
            number: 92, //change value here

        }, 2000);

        $('.counter-6').animateNumber({
            number: 99, //change value here

        }, 2000);

        $('.counter-7').animateNumber({
            number: 94, //change value here

        }, 2000);

        $('.counter-8').animateNumber({
            number: 98, //change value here

        }, 2000);

        

        this.destroy();

    }, {
        offset: '80%'

    });


    /* ==========================================================================
       Navbar button animation
       ========================================================================== */




    var btnCon = $('.navbar-nav #toggle, .mobile-nav a');

    $(btnCon).on("click", function() {




        if ($(btnCon).hasClass('active')) {
            $(btnCon).removeClass('active');
        } else {

            $(btnCon).addClass('active');
        }


        $('#mobile-nav-overlay').toggleClass('open');
    });




    /* ==========================================================================
   litebox
   ========================================================================== */

    $('.hero-section .play-btn, .video-intro .play-btn, .video-tour .play-btn').magnificPopup({
        type: 'iframe'
    });




    /* ==========================================================================
   Reviews slider
   ========================================================================== */




    $('.reviews-slider').owlCarousel({

        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        transitionStyle: "fade",
        // autoPlay: 7000


    });



    /* ==========================================================================
   Tooltip 
   ========================================================================== */

    $("[data-toggle=tooltip]").tooltip();
		


	 /* ==========================================================================
		 Popover
	 ========================================================================== */
	
	 $('[data-toggle="popover"]').popover({
			 placement: 'auto',
			 trigger: 'hover focus'
	
	 });


    /* ==========================================================================
   Play btn animation
   ========================================================================== */



    $('.video-intro .play-btn i, .video-tour .play-btn i').waypoint(function() {
        $(this.element).addClass('play-btn-animation');


        this.destroy();

    }, {
        offset: '60%'
    });



    /* ==========================================================================
   Team slider
   ========================================================================== */


    var owlTeam = $('.team-slider');

    owlTeam.owlCarousel({

        itemsCustom: [
            [0, 1],
            [450, 1],
            [600, 1],
            [700, 2],
            [1000, 3],
            [1200, 3],
            [1400, 3],
            [1600, 3]
        ],
        navigation: true,
        pagination: false,
        navigationText: [
            "<i class='fa fa-angle-left fa-2x'></i>",
            "<i class='fa fa-angle-right fa-2x'></i>"
        ],
        autoPlay:5000

    });




    /* ==========================================================================
   twitter reviews slider
   ========================================================================== */

    var owl = $('.twitter-reviews-slider');

    owl.owlCarousel({

        itemsCustom: [
            [0, 1],
            [450, 1],
            [600, 1],
            [700, 2],
            [1000, 3],
            [1200, 3],
            [1400, 3],
            [1600, 3]
        ],
        navigation: false

    });






    /* ==========================================================================
   Contact form
   ========================================================================== */


    // var formFields = $('.contact-form form input, .contact-form form textarea');



    // $(formFields).on('focus', function() {
    //     $(this).removeClass('input-error');
    // });
    // $('.contact-form form').submit(function(e) {
    //     e.preventDefault();
    //     $(formFields).removeClass('input-error');
    //     var postdata = $('.contact-form form').serialize();
    //     $.ajax({
    //         type: 'POST',
    //         url: 'php/contact.php',
    //         data: postdata,
    //         dataType: 'json',
    //         success: function(json) {

    //             if (json.nameMessage !== '') {
    //                 $('.contact-form form .contact-name').addClass('input-error');
    //             }
    //             if (json.emailMessage !== '') {
    //                 $('.contact-form form .contact-email').addClass('input-error');
    //             }
    //             if (json.messageMessage !== '') {
    //                 $('.contact-form form textarea').addClass('input-error');
    //             }
    //             if (json.antispamMessage !== '') {
    //                 $('.contact-form form .contact-antispam').addClass('input-error');
    //             }
    //             if (json.nameMessage === '' && json.emailMessage === '' && json.messageMessage === '' && json.antispamMessage === '') {
    //                 $('.contact-form').fadeOut('3000', "linear", function() {
    //                     $('.contact-form-success').slideToggle();

    //                 });
    //             }
    //         }
    //     });
    // });




    /* ==========================================================================
   Smooth scroll
   ========================================================================== */


    $('.navbar a, .mobile-nav a, .cta a, .site-footer a').on('click', function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({

                    scrollTop: (target.offset().top - 80)
                }, 1000);
                return false;
            }
        }
    });

/* ==========================================================================
   Chat button
   ========================================================================== */


    // $('.site-footer').waypoint(function() {
    //     $('.chat-btn').addClass('fixed');

    // }, {
    //     offset: '80%'

    // });

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#chat-btn').fadeIn(200);    // Fade in the arrow
            $('.chat-btn').addClass('fixed');
        } else {
            $('.chat-btn').removeClass('fixed');
            $('#chat-btn').fadeOut(200);   // Else fade out the arrow
        }
    });

/* ==========================================================================
   Scroll to Top
   ========================================================================== */
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });

    /* Stop Video when Modal closes */
    $(function(){
      $("body").on('hidden.bs.modal', function (e) {
        var $iframes = $(e.target).find("iframe");
        $iframes.each(function(index, iframe){
          $(iframe).attr("src", $(iframe).attr("src"));
        });
      });
    });

});