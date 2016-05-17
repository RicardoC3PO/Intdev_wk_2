
  
//var button = $('button').hasClass('on');

$(window).on('click', function(e) {
    
   if($('button').hasClass('on') == true){
   		$("h1").css('color', 'white');
   		$('body').css('background', 'black');
   		$("button" ).removeClass( "on" );
   		$("button" ).addClass( "off" );
   		$(".status").text('Hey, who turn off the lights?');
   		
   }else{
   		$('body').css('background', 'white');
   		$("button" ).removeClass( "off" );
   		$("button" ).addClass( "on" );
   		$(".status").text("It's so bright in here!");
   		$("h1").css('color', 'black');
   }

});




/*
 numberOfClicks++;
	$('.count').text("You Clicked " + numberOfClicks)
   
    var h1Count = $('h1').hasClass('count');
	
	if(numberOfClicks > 5){
		$('body').css('background', 'yellow');
	}else if(numberOfClicks > 3){
		$('body').css('background', 'red');
	};
*/
