function add()
{
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	document.getElementById("result").innerHTML =num1+num2;
}

function sub()
{
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	document.getElementById("result").innerHTML =num1-num2;
}

function mul()
{
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	document.getElementById("result").innerHTML =num1*num2;
}

function div()
{
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	document.getElementById("result").innerHTML =num1/num2;
}