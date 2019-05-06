$(function() {
      $('#slides').superslides({
        hashchange: true
  });
});
	
$(document).ready(function() {
	   $(document).on('init.slides', function() {
	   $('.loading-container').fadeOut(function() {
	   $(this).remove();
	 });
  });
});