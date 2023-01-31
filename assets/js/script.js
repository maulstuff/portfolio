/*

  name : candra dwi cahyo
  age : 16 year
  email address : candradwicahyo18@gmail.com 

*/

$(document).ready(() => {
  
  // library animate on scroll
  AOS.init({
    duration: 1500
  })
  
  // navbar event
  $('.nav-toggle').on('click', function() {
    $(this).toggleClass('active')
    
    if ($('.nav-list-box').addClass('active')) {
      $('.nav-close').on('click', function() {
        $('.nav-list-box').removeClass('active')
      })
    }
    
  })
  
})

$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});
