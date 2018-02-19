 
  /*Адаптивное миню*/
  $(document).ready(function(){
    $(".minu").click(function(){
        $(".open_minu").slideToggle("slow");
        $(".icon-menu").slideToggle("hide");
        $(".icon-menu2").slideToggle("slow");
        $(this).toggleClass("active"); return false;
    });
	
	    $("#open").click(function(){
        $(".block_punkt").slideToggle("slow");
        $(this).toggleClass("active"); return false;
    });
	
	    $("#open").click(function(){
        $(".img_menu2").slideToggle("slow");
        $(this).toggleClass("active"); return false;
    });
	
		$("#open").click(function(){
		$(".img_menu").slideToggle("hide");
        $(this).toggleClass("active"); return false;
    });
	
	/*Кнопка наверх*/
	$(function() {
	  $(window).scroll(function() {
	  if($(this).scrollTop() != 0) {
	  $('.top_button').fadeIn();
	  } else {
	  $('.top_button').fadeOut();
	  }
	  });
	  $('.top_button').click(function() {
	  $('body,html').animate({scrollTop:0},700);
	  });
	});
	
});
  /*Конец*/