// javascript:picture change menueText
function menueChange(disciplin, numb) {
	var number = new String(numb);
	var device = sessionStorage.device;

	number = number.substring(1,2);

		if(document.getElementById(disciplin + number) != null) 
			document.getElementById(disciplin + number).src="../img/" + device + "/" + disciplin + numb + ".png";

}
