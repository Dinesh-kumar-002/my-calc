let output = document.getElementById("display");
function disp(num){
	output.value += num;
}
function calculator()
{
try{
	output.value = eval(output.value);
}
catch{
	disp("invalid");
}
}
function del(){
	output.value = output.value.slice(0,-1);
}
function clr(){
	output.value = "";
}

