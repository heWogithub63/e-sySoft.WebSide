// javascript:Browser find browser window size and create background picture
function backgroundPicturename(name, typ) {

   var background;	
   var innerHeight, innerWight;
   var device = sessionStorage.device;
   
      for(var i=1; i<6; i++) 
         if(document.getElementById(name+i) != null) 
	    document.getElementById(name+i).src="../img/" + device + "/" + name +"0"+ i + typ;

	if(device == "PersonalComputer")  {
  	      	   document.getElementById(name +"1").width="150";
	           document.getElementById(name +"1").height="45";
		   
                for(var i=2; i<6; i++) 
		 if(document.getElementById(name+i) != null) {
  	           document.getElementById(name+i).width="120";
	           document.getElementById(name+i).height="40";
	         }
		
	  }

          else if(device == "Laptop") {
  	           document.getElementById(name +"1").width="140";
	           document.getElementById(name +"1").height="35";
		   
                for(var i=2; i<6; i++) 
		 if(document.getElementById(name+i) != null) {
  	           document.getElementById(name+i).width="110";
	           document.getElementById(name+i).height="30";
	         }
		document.getElementById("0").height="46";
	  }

	  else if(device == "Tablet") {
  	     document.getElementById(name +"1").width="90";
	     document.getElementById(name +"1").height="30";

	     for(var i=2; i<6; i++) 
		 if(document.getElementById(name+i) != null) {
  	           document.getElementById(name+i).width="75";
	           document.getElementById(name+i).height="25";
	         }
	     document.getElementById("0").height="36";
	  }

	  else if(device == "Smartphone") {
  	           document.getElementById(name +"1").width="80";
	           document.getElementById(name +"1").height="28";
		   
                for(var i=2; i<6; i++) 
		 if(document.getElementById(name+i) != null) {
  	           document.getElementById(name+i).width="65";
	           document.getElementById(name+i).height="20";
	         }
		document.getElementById("0").height="10";
	  }
	
}
