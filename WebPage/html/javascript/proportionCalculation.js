//creating a presentation HomeSide of e@sySoft company

var device = new String();

function proportionCalculation(i) {
	var iWidth, iHeight, iFWidth, iFHeight;	

	
	   iWidth = parent.document.body.clientWidth;
	   iHeight = parent.document.body.clientHeight;
        

	if(iWidth >1920) {
	        device="PersonalComputer";
		iFWidth = "2028";
		iFHeight = "1200";
	}

	else if(iWidth >= 1400 && iWidth <= 1920) {
           	device= "Laptop";
                iFWidth = "1568";
		iFHeight = "780";
	}

	else if(iWidth < 1400 && iWidth >= 900) {
		device="Tablet";
		iFWidth = "1009";
		iFHeight = "538";
	}

	else if(iWidth < 900) {
		device="Smartphone";
		iFWidth = "584";
		iFHeight = "281";
	}

	sessionStorage.count = 0;      
	sessionStorage.device = device;
	
	   document.getElementById("mainTabTd").width = iWidth -26;
	   document.getElementById("mainTabTd").height = iHeight -26;
	   document.getElementById("frameSet").width = iFWidth;
	   document.getElementById("frameSet").height = iFHeight;
	   document.getElementById("frameSet").src="html/" + device + "/e@sySoft_StartIndex.html";
	
}
