$(document).ready(function() {

    $('.scrollToTop').hide();

    $(window).scroll(function(){
        if ($(this).scrollTop() > 230) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    $('.preTopBarList ul li').hover(function(){
    	$(".spn",this).toggleClass('iconBG');
    	$('.spnico',this).toggleClass('iconCOLOR');
    });// pre top bar icon hover effect

    $('.threeDotsBtn').click(function(){
    	$('.s3dots').fadeIn();
    });

    $(document).mouseup(function (e){
		var container = $(".s3dots");
		if (!container.is(e.target) && container.has(e.target).length === 0) { container.fadeOut(); }
	});//prc322

    /*---------------------------------change header on scroll---------------------------------*/
    // Create a clone of the main_menu, right next to original.

    $('.main_menu').addClass('original').clone().insertAfter('.main_menu').addClass('cloned').css('position','fixed').css('background','rgba(0,0,0,0.7)').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();
    $(".button-collapse").sideNav();
    scrollIntervalID = setInterval(stickIt, 10);


    function stickIt() {

      var orgElementPos = $('.original').offset();
      orgElementTop = orgElementPos.top;               

      if ($(window).scrollTop() >= (orgElementTop)) {
        // scrolled past the original position; now only show the cloned, sticky element.

        // Cloned element should always have same left position and width as original element.     
        orgElement = $('.original');
        coordsOrgElement = orgElement.offset();
        leftOrgElement = coordsOrgElement.left;  
        widthOrgElement = orgElement.css('width');
        $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
        $('.original').css('visibility','hidden');
      } else {
        // not scrolled past the main_menu; only show the original main_menu.
        $('.cloned').hide();
        $('.original').css('visibility','visible');
      }
    }

/*---------------------------------change header on scroll---------------------------------*/

});// ready