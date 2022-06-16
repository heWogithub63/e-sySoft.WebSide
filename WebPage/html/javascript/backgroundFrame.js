// javascript:Browser find browser window size and create background picture
function backgroundFrame(i) {

   var background;	
   var innerHeight, innerWight;
   var framePic = new Array();
   var video = false;
   var device = sessionStorage.device;	

     if(sessionStorage.count == 0 && i == 4) {
       sessionStorage.count = "1";
       document.location.href="../html/Video0.html";
       return;
     }
     	
     if(i == 5) {
        easySoftProjectorContact("Video", "");	
	video = true;
     i=4;
     }	


    innerHeight = document.getElementById(i).innerHeight;
    innerWidth  = document.getElementById(i).innerWidth;


	framePic[0] = new Image(innerWidth, innerHeight);
	framePic[0].src = "../img/" + device + "/frameMiddle.png";
	framePic[1] = new Image(innerWidth, innerHeight);
	framePic[1].src = "../img/" + device + "/frameTop1.png";
	framePic[2] = new Image(innerWidth, innerHeight);
	framePic[2].src = "../img/" + device + "/frameTop2.png";
	framePic[3] = new Image(innerWidth, innerHeight);
	framePic[3].src = "../img/" + device + "/frameTop3.gif";
	framePic[4] = new Image(innerWidth, innerHeight);
	framePic[4].src = "../img/" + device + "/frameMiddleRight.png";



	document.getElementById(i).background = framePic[i].src;
        

	if(i == 0 && !video) 	
	   easySoftDrawer(0);
	else if(video)
	   easySoftDrawer(4);   

	if(i == 2)
	   easySoftContact(0);	
}
