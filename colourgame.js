var colours          = colourpallet(6),
    pickedColour     = colours[Math.floor(Math.random()*colours.length)],
    squares          = document.querySelectorAll(".square"),
    colourDisplay    = document.getElementById("colourDisplay"),
    msg              = document.getElementById("msg"),
    h1               = document.querySelector("h1"),
    reset            = document.querySelector("#reset");


colourDisplay.textContent = pickedColour;

reset.addEventListener("click", function(){
	colours = colourpallet(6); 
	for (var i = 0; i < squares.length; i++){
	    squares[i].style.background = colours[i];
	    squares[i].addEventListener("click", play);
	}
	pickedColour = colours[Math.floor(Math.random()*colours.length)];
	colourDisplay.textContent = pickedColour;
	h1.style.background = "#232323";
	reset.textContent = "New Colours";
	msg.textContent = "";
});

for (var i = 0; i < squares.length; i++){
	squares[i].style.background = colours[i];
	squares[i].addEventListener("click", play);
}


function colourpallet(num){
	var col = [];
	for (var i = 0; i < num; i++) {
		col.push(getcolour());
	}
	return col;
}

function getcolour(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}


function play(){
	var clickedColour = this.style.background;
	if(clickedColour === pickedColour){
		msg.textContent = "Correct!";
		h1.style.background = clickedColour;
		changeColours(clickedColour);
		reset.textContent = "Try Again?";
	}
	else{
		this.style.background = "#232323";
		msg.textContent = "Try Again!";
	}
}

function changeColours(colour){
	for (var i = 0; i < squares.length; i++){
	    squares[i].style.background = colour;
    }
}