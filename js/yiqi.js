// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("希望你不要不识好歹！");
	   }else if(Dianji==2){
		   		alert("你是我见过的最漂亮善良、可爱的女孩子");
		   		
	   }else if(Dianji==3){
		   		alert("一生一世爱你");
		   		
	   }else if(Dianji==4){
		   		alert("家务我全干");
		   		
	  }else if(Dianji==5){
		   		alert("不藏私房钱");
	  }else if(Dianji==6){
		   		alert("房子写你名");
	  }else if(Dianji==7){
		   		alert("工资全上交");
		  		
	  }else if(Dianji==8){
		   		alert("保大");
		  		
	  }else if(Dianji==9){
		   		alert("我妈会游泳！");
		  		Dianji=0;
	  }

	}
	hao.onclick=function(){
		alert("哈哈哈哈，你不配！");
	}
}
