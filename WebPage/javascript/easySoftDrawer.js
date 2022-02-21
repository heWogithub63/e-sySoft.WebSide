
// javascript:picture change easySoftDrawer
function easySoftDrawer(i) {
          
	  var bild = new Array();
	  var imgHeight, imgWidth, PosX, PosY;
	  var imgWQuo, imgHQuo, factor;
          var b = 0;
          var device = sessionStorage.device;

	imgWQuo = parent.frameMiddle.innerWidth / 1600;
	imgHQuo = parent.frameMiddle.innerHeight / 900;

	if(device == "PersonalComputer")
           factor = 1.32;
        else if(device == "Laptop")
           factor = 1.0;
        else if(device == "Tablet")
           factor = 0.631;
        else if(device == "Smartphone")
            factor = 0.332;


        imgWidth = 400 * imgWQuo;
	imgHeight = 45 * imgHQuo;
	
	   PosX = 530 * factor;
	
     	PosY = 34 * factor;

	if(parent.frameMiddleRight.document.getElementById("video1") != null && i !=4) {
	        b = 1;
		parent.frameMiddleRight.location.href="../html/backgroundFrameMiddleRight.html";
		}
	
	
	  bild[i] = new Image(imgWidth, imgHeight);
	  bild[i].src = "../img/" + device + "/programDrawer" + i + ".png";

	  parent.frameMiddle.document.images[0] = bild[i];
	  parent.frameMiddle.document.images[0].src = bild[i].src;
	  parent.frameMiddle.document.images[0].hspace = PosX;
	  parent.frameMiddle.document.images[0].vspace = PosY;

	  
	if(i == 0 && parent.frameMiddleRight.document.images[0] != null)  {
	   parent.frameMiddleRight.document.images[0].src = "../img/" + device + "/projectionWallApp01.png";
	   }

}
