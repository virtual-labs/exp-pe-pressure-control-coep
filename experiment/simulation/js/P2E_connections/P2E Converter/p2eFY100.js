

ConnFor_P2E_FY100 = function(appId, type,jsonarray){
/* var reader = new draw2d.io.json.Reader();
 reader.unmarshal(canvas1, json); */
 

 // app  = new example.Application(appId, type);
	ptToP2e_FY100 = 0;
	P2EToAnalogInPlus_FY100 = 0;
	P2EToAnalogInMinus_FY100 = 0;


p2eWrongConnection_FY100 = 0;

 
 
 var temp = JSON.parse(jsonarray);
 
// console.log(temp);
 
 var temp1 = 0;
	 

	 
$.each(temp , function (key, value) {
  if(value.type == "draw2d.Connection"){
	  
	temp1 = 1; 
   
 }
 
});
	 
	 

	 if(temp1 != 0){
		 
		   for(i= 0; i < temp.length; i++){
		 
		if(temp[i].type == "draw2d.Connection"){
		 
		 
		 if((temp[i].source.port == "FT100_PT" &&  temp[i].target.port) == "FY100_p2e" || ( temp[i].source.port == "FY100_p2e"  &&  temp[i].target.port == "FT100_PT" )){
			
			 ptToP2e_FY100 = 1;
			
	 
		} else if(( temp[i].source.port == "FY100_p2ePlus" &&  temp[i].target.port == "sgnlplus" ) || ( temp[i].source.port == "sgnlplus" && temp[i].target.port == "FY100_p2ePlus")){
			
			P2EToAnalogInPlus_FY100 = 1;
			
		} else if(( temp[i].source.port == "FY100_p2eMinus" &&  temp[i].target.port == "sgnlMinus" ) || ( temp[i].source.port == "sgnlMinus" && temp[i].target.port == "FY100_p2eMinus")){
			
			P2EToAnalogInMinus_FY100 = 1;
			
		}else{
			
			p2eWrongConnection_FY100 = 1;
			CheckWrongConnectionP2E_FY100();
			break;
			
		}
		 
		 
	 }
		
 }

		CheckRightConnectionP2E_FY100();
		 
	 }else{
		 
		 alertify.alert("Do Some Connection");
		 
	 }
	
 

 
}

CheckRightConnectionP2E_FY100 = function(){
	
	if(ptToP2e_FY100 == 1 && P2EToAnalogInPlus_FY100 == 1 &&  P2EToAnalogInMinus_FY100 == 1 && p2eWrongConnection_FY100 == 0){
		
		alertify.alert("Correct Connection. Please click next level");
		app.toolbar.characterisation_Button.show();
//		app.toolbar.characterisation_Button.hide();
	    rightConn = 1;
		
	}else{
		
		if(p2eWrongConnection_FY100 == 0){

		
					if(ConnFlagCnt == 3){
							app.toolbar.hintButton.show();							
							alertify.alert("Wrong Connection");	
							rightConn = 0;		
						}else{
							
							alertify.alert("Wrong Connection");
							ConnFlagCnt++
							rightConn = 0;
						}
		
			
			
		}
		
		
	}
	
}

CheckWrongConnectionP2E_FY100 = function(){
	
	
	                    if(ConnFlagCnt == 3){
							 app.toolbar.hintButton.show();
							 
							 alertify.alert("Wrong Connection");
							 rightConn = 0;
							 
													
						}else{
			
							if(p2eWrongConnection_FY100 == 1){
		
							alertify.alert("Wrong Connection");
							ConnFlagCnt++;
							rightConn = 0;
		
							}
						}
	
	
	
	
	
	
	
}
	
	
	
	
