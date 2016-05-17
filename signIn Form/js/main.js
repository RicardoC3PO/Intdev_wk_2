$(document).ready(function(){

	var modal = $(".modal");

	//Open Modal
	var bt = $(".signin");
	bt.click(function(){
		modal.css('display','block');
		//Activate Pointer events
		modal.removeClass('noClick');
	});

	//Close Modal
	var btClose = $(".close");
	btClose.click(function(){
		modal.css('display','none');
		//Deactivate Pointer events
		modal.addClass('noClick');
		error.html("");
	});

	//Form Validation
	var name = $("#userName");
	var password = $("#password");
	var error = $(".error");
	var submitBt = $(".submit");

	submitBt.click(function(){
		if(name.val() == ""){
			error.append("Please insert your name<br>");
		}else{
			error.html("");
		}

		if(password.val() == ""){
			error.append("Please insert your password<br>");
		}else{
			error.html("");
		}
	});

	//Hidding error messages on Focus
	name.focus(function(){
		error.html("");
	});

	password.focus(function(){
		error.html("");
	});
});