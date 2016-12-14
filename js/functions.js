$(document).ready(function() {

   var percentage = [85, 80, 70, 70, 65, 65, 64, 70, 50, 80, 55], circles = [];

   createCircle();

   $(window).scroll(function() {

      onScrollTop();

      var wScroll = $(this).scrollTop();

      //console.log(wScroll);
      //console.log($('#skills').offset().top - ($(window).height() / 1.2));

      if(wScroll > $('#my_work').offset().top - $(window).height()){

         var offset = (Math.min(0, wScroll - $('#my_work').offset().top +$(window).height() - 550)).toFixed();

         $('#work_one').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

         $('#work_three').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

      }
      
   }); // End of function...

   $('body').scrollspy({ target: '.navbar' });


   $(function() {

      $('a.page-scroll').bind('click', function(event) {

         var $anchor = $(this);

         $('html, body').stop().animate({

            scrollTop: $($anchor.attr('href')).offset().top

         }, 1500, 'easeInOutExpo');

         event.preventDefault();

      });

   });

   function createCircle() {
      for (var i = 1; i <= 11; i++) {
         var child = document.getElementById('circles-' + i),
            circle = Circles.create({
               id:         child.id,
               value:      percentage[i - 1],
               radius:     60,
               width:      10,
               number:     7.13,
               text:       percentage[i - 1] + '%',
               colors:     ['#D3B6C6', '#4B253A'],
               duration:   400
            });
      }
   }

   onScrollTop();

   function onScrollTop() {

      if ($(document).scrollTop() > 50) {

         $('#navigation_bar').addClass('shrink');
         $('#navigation_list').removeClass('navigation_list_padding');
         $('#navigation_list > li > a').removeClass('hover_a');

      } else {

         $('#navigation_bar').removeClass('shrink');
         $('#navigation_list').addClass('navigation_list_padding');
         $('#navigation_list > li > a').addClass('hover_a');
         
      } // End of if statement...

   } // End of function...




}); // End of function...
