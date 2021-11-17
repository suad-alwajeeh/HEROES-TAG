    /*-----------------------------------

     * navbar color 

     *-----------------------------------*/


      $(window).on("scroll", function() {

          if($(window).scrollTop() >= 80) {

           // $('.header').addClass('header1')
            $('.header').addClass('fixed-top')
            $(".general-info").addClass("general-info-h");

          } else {

              //remove the background property so it comes transparent again (defined in your css)

       

              $('.header').removeClass('fixed-top')
              $(".general-info").removeClass("general-info-h");

          }

      });
      wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();
