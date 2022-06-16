// javascript:picture change easySoftDrawer
function easySoftContact(i) {

	  var imgHeight, imgWidth, PosX, PosY;
	  var imgWQuo, imgHQuo;
          var device = sessionStorage.device;

	imgWQuo = parent.frameMiddle.innerWidth / 1280;
	imgHQuo = parent.frameMiddle.innerHeight / 796;

        imgWidth = 100 * imgWQuo;
	imgHeight = 104 * imgHQuo;


	  parent.frameTop2.document.images[0] = new Image(imgWidth, imgHeight);
	  parent.frameTop2.document.images[0].src = "../img/" + device + "/frameTop2.png";

	if(i == 1)
	   easySoftProjector(); 

}
