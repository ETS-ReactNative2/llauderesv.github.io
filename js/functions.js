$(document).ready(function() {

   var percentage = [60, 85, 85, 60], circles = [];

   //createCircle();
   var wScroll = $(this).scrollTop();

   console.log($('#about_row').height());

   console.log("Window height: " + $(window).height())

   console.log("Dynamic position in window: " + Math.round(($(window).height() - $('#about_row').position().top)))

   $(window).scroll(function() {

      onScrollTop();

      var wScroll = $(this).scrollTop();




      if (wScroll > $('#div_name').offset().top - ($(window).height() / 1.2)) 
      {
         $('#scroll_down').css({'background-color' : '#2196F3', 'left': '90%'});
         $('#my_pic').removeClass('my_pic_hover');
      } 

      if (wScroll > $('#skills_row').offset().top - ($(window).height() * 1.2))
      {
         $('#my_pic').addClass('my_pic_hover');
      }

      //console.log(wScroll);
      //console.log($('#skills').offset().top - ($(window).height() / 1.2));

      // if(wScroll > $('#my_work').offset().top - $(window).height()){

      //    var offset = (Math.min(0, wScroll - $('#my_work').offset().top +$(window).height() - 550)).toFixed();

      //    $('#work_one').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

      //    $('#work_three').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

      // }

   }); // End of function...


   $('body').scrollspy({ target: '.navbar' });

   $('.animate_row').each(function(i){
      var thiss = $(this)
      setTimeout(function() {
         //thiss.show()
         thiss.addClass('animate_row_class');

      }, 200 * i)
   })


   $(function() {

      $('a.page-scroll').bind('click', function(event) {

         var $anchor = $(this);

         $('html, body').stop().animate({

            scrollTop: $($anchor.attr('href')).offset().top

         }, 1500, 'easeInOutExpo');

         event.preventDefault();

      });

   });

   // function createCircle() {
   //    for (var i = 1; i <= 4; i++) {
   //       var child = document.getElementById('circles-' + i),
   //          circle = Circles.create({
   //             id:         child.id,
   //             value:      percentage[i - 1],
   //             radius:     60,
   //             width:      10,
   //             number:     7.13,
   //             text:       percentage[i - 1] + '%',
   //             colors:     ['#0D47A1', '#2196F3'],
   //             duration:   400
   //          });
   //    }
   // }

   onScrollTop();

   function onScrollTop() {

      if ($(document).scrollTop() > 50) {

         $('#navigation_bar').addClass('shrink');
         $('#navigation_list').removeClass('navigation_list_padding');
         $('#navigation_list > li > a').removeClass('hover_a');
         $('#navigation_list > li > a').addClass('hover_b');

      } else {

         $('#navigation_bar').removeClass('shrink');
         $('#navigation_list').addClass('navigation_list_padding');
         $('#navigation_list > li > a').addClass('hover_a');
         $('#navigation_list > li > a').removeClass('hover_b');
         $('#my_pic').removeClass('my_pic_hover');
         $('#scroll_down').css({'background-color' : 'transparent', 'left': '50%'});

      } // End of if statement...

   } // End of function...


   var i = 0
   var davids_images = ['slide_2.png', 'slide_1.png'];
   var flag = false
   var myInterval

   $('#img_davids_cut').hover(function() {
      $('#mask').slideUp()
      flag = true
      myInterval = 
      setInterval(function() {
         if (flag) {
            if (i === davids_images.length) {
               i = 0
            }
            $('#davids_cut').attr('src', 'images/'+davids_images[i])
            i++
         }
      }, 1000)
   }, function() {
      i = 0
      flag = false
      clearInterval(myInterval)
      $('#mask').slideDown()
   })

   $('#navigation_list a').click(function() {

      $('#my_pic').removeClass('my_pic_hover')

      var link = $(this).attr('href');


      setTimeout(function() {
         if (link === '#about_row') 
         {
            $('#my_pic').addClass('my_pic_hover');
         } 
         else if (link === '#skills_row') 
         {
            //createCircle();
         }
         // $('#my_pic').css({
         //    '-webkit-filter' : 'grayscale(0%)',
         //    'transition' : 'all 0.4s ease-in-out'
         // })
      }, 1200)
   })

   // setInterval(function(){

   //    var text = $('#heading_pro').text()
   //    //$('#heading_pro').fadeOut()

   //    if (text === 'A Programmer') 
   //    {
   //       $('#heading_pro').animate({'opacity': 0}, 0, function () {
   //           $(this).text('A Designer');
   //       }).animate({'opacity': 1}, 0);

   //    } 
   //    else
   //    {
   //       $('#heading_pro').animate({'opacity': 0}, 0, function () {
   //           $(this).text('A Programmer');
   //       }).animate({'opacity': 1}, 0);

   //    } 
   //   //setTimeout(imSlide(), 10000)

   // }, 1000)

   // imSlide()

   // function imNext()
   // {
   //    $('#heading_pro').css('opacity', '1');
   //    $('#heading_pro').text('A Designer');
   //   // setTimeout(imSlide(), 3000)
   //    imSlide()
   //   // alert('true')
   // }

   // function imSlide()
   // {
   //    $('#heading_pro').text('A Programmer');
   //    setTimeout(imNext(), 3000)
   // }


   /* Fade in Fade out the the skills */
   var im_i = 0;
   var im_array = ["A Developer", "A Programmer"];

   setInterval(function() {
      im_i++
      if (im_i > (im_array.length - 1)) {
         im_i = 0
      }

      $('#heading_pro_2').animate({opacity:'toggle'}, 200, function() {
         $('#heading_pro_2').html('<h1 id="heading_pro">'+im_array[im_i]+'</h1>').fadeIn(2000)
      })

   }, 3000)


   $('#about_row').scroll(function(){
      alert('true')
      console.log('scroll event detected')
   })

}); // End of function...
