onload  = start;

function start(){	
var i = 1;
function Move(){ 	
	i = (i%3)+1; // 4 is the Number of image in slider
	document.getElementById('i'+i).checked = true;
}
setInterval(Move,2000); //change img in 2 sec
}