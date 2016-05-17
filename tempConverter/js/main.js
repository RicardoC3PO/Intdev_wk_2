
/*
	All Exercises are here, just remove the comment marks.
*/


//--------------------------//
//<-- The Fortune Teller -->//
//--------------------------//
/*
	Why pay a fortune teller when you can just program your fortune yourself? 
	Store the following into variables: job title, geographic location, partner's name, 
	number of children. Output your fortune to the screen like so: "You will be a X in Y, 
	and married to Z with N kids."
*/

/*
var list_jobs = ["Teacher", "Nurse", "Lawyer"];
var list_country = ["Italy", "Norway", "Chile"];
var list_partners_name = ["Julia", "Mary", "Clair"];
var list_children = [1, 2, 3];

var random = (Math.floor(Math.random()*3));
console.log(random);

var job_title           = list_jobs[random];
var geographic_location = list_country[random];
var partners_name       = list_partners_name[random];
var number_of_children  = list_children[random];

var fortune = function(){
	$('.output').html("You will be a " + job_title + " in " + geographic_location + ", and married to " + partners_name + " with " + number_of_children + " children.");	
}

fortune();
*/

//--------------------------//
//<-- The Age Calculator -->//
//--------------------------//

/*
	Forgot how old someone is? Calculate it! Store the current year in a variable. 
	Store their birth year in a variable. Calculate their age based on the stored values. 
	Output them to the screen like so: "They are NN years old.", substituting the values.
*/

/*
var current_year = 2016;
var birth_year   = 1982;

var age = function(){
	var current_age = current_year - birth_year;
	$('.output').html("The person is " + current_age + " years old, don't forget!");
}

age();
*/

//-------------------------------------//
//<-- The Lifetime Supply Calculator --//
//-------------------------------------//

/*
	Ever wonder how much a "lifetime supply" of your 
	favorite snack is? Wonder no more! Store your current 
	age into a variable. Store a maximum age into a variable. 
	Store an estimated amount per day (as a number). 
	
	Calculate how many you would eat total for the rest of your life. 
	Output the result to the screen like so: "You will need NN to last you 
	until the ripe old age of X".
*/

/*
var age            = 24;
var max_age        = 100;
var per_day_amount = 3;

var total = function(){
	var time_left       = (max_age - age) * 365; 
	var lifetime_supply = time_left * per_day_amount; 

	$('.output').html('Your favorite snack is Cheese Bread<br>');
	$('.output').append('You eat ' + per_day_amount + " per day.<br>");
	$('.output').append('You still have ' + (max_age - age) + " years to live.<br>");
	$('.output').append("So, your lifetime supply of snacks is " + lifetime_supply);
};

total();
*/

//----------------------//
//<-- The Geometrizer --//
//----------------------//
/*
	Calculate properties of a circle, using the definitions here. 
	Store a radius into a variable. 

	Calculate the circumference based
	on the radius, and output "The circumference is NN". Calculate the 
	area based on the radius, and output "The area is NN".
*/

/*
var radius        = 40;
var circumference = 3.14;
var area          = Math.floor(circumference * radius)

var find_area = function(){
	$('.output').html('The radius is ' + radius + "<br>");
	$('.output').append('The circumference is ' + circumference + "<br>");
	$('.output').append('The area is ' + area);
}

find_area();
*/

//--------------------------------//
//<-- The Temperature Converter --//
//--------------------------------//
/*
	It's hot out! Let's make a converter based on the steps here.

	Store a celsius temperature into a variable. Convert it to 
	fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit 
	temperature into a variable. Convert it to celsius and 
	output "NN°F is NN°C."
*/

//Celsius to Fahrenheit
//Vars 
$("#c_f").click(function(){
	convert_c_f();
});

var convert_c_f = function(){
	var temp_celsius = $("#field_1").val();
	var to_farenheit = (temp_celsius * 9) / 5 + 32;
	$('.result_1').html(temp_celsius + "°C " + "is " + to_farenheit + "°F <br>");
};

//Fahrenheit to Celsius
//vars
$("#f_c").click(function(){
	convert_f_c();
});

var convert_f_c = function(){
	var temp_farenheit = $("#field_2").val();
	var to_celsius     = Math.round((temp_farenheit - 32) * 5 / 9);
	$('.result_2').append(temp_farenheit + "°F " + "is " + to_celsius + "°C");
}






