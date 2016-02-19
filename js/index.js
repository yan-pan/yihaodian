window.onload=function(){
	/*var movel=$(".movel")[0];
	var moveimg=$("img",movel);
  for(var i=0;i<moveimg.length;i++){
  	moveimg[i].index=i;
  	moveimg[i].onmouseover=function(){
  		moveimg[this.index].style.cssText="position:relative;left:-5px;"
  	}
  	moveimg[i].onmouseout=function(){
  		moveimg[this.index].style.cssText="position:relative;left:0px;"
  	}
  }*/


  /*var movel2=$(".movel2")[0];
  var moveimg2=$("img",movel2);
  for(var i=0;i<moveimg.length;i++){
    moveimg2[i].index=i;
    moveimg2[i].onmouseover=function(){
      moveimg2[this.index].style.cssText="position:relative;left:-5px;"
    }
    moveimg2[i].onmouseout=function(){
      moveimg2[this.index].style.cssText="position:relative;left:0px;"
    }
  }*/


  /*var movel3=$(".movel3")[0];
  var moveimg3=$("img",movel3);
  for(var i=0;i<moveimg.length;i++){
    moveimg3[i].index=i;
    moveimg3[i].onmouseover=function(){
      moveimg3[this.index].style.cssText="position:relative;left:-5px;"
    }
    moveimg3[i].onmouseout=function(){
      moveimg3[this.index].style.cssText="position:relative;left:0px;"
    }
  }*/

var yidong=$(".yidong");
for(var i=0;i<yidong.length;i++){
  yidong[i].index=i;
  hover(yidong[i],function(){
    yidong[this.index].style.cssText="position:relative;left:-5px;"
  },function(){
    yidong[this.index].style.cssText="position:relative;left:0px;"
  })
  /*yidong[i].onmouseover=function(){
     yidong[this.index].style.cssText="position:relative;left:-5px;"

  }
  yidong[i].onmouseout=function(){
      yidong[this.index].style.cssText="position:relative;left:0px;"
    }*/
}


  var sstext=$("#sstext");
  sstext.onfocus=function(){
    if(sstext.value=="店铺圣诞节跨年幸福购 5折抢福袋"){
      sstext.value="";
    }
  }
  sstext.onblur=function(){
    if(sstext.value){

    }else{
      sstext.value="店铺圣诞节跨年幸福购 5折抢福袋";
    }
  }

  var flagdown=true;
  var flagup=true;
  var btn=$(".btn");
  var floor=$(".floor");
  var fdtu=$(".fdtu")[0];
  var xianshi=$(".xianshi");
  var btnfanhui=$(".btnfanhui")[0];
  var ch=document.documentElement.clientHeight;




  btnfanhui.onclick=function(){
    var obj=document.documentElement.scrollTop?document.documentElement:document.body;
      animate(obj,{scrollTop:0},600,Tween.Linear)
  }

  window.onscroll=function(){
    var scrollT=getScrollT();
  if(scrollT>=580){
      fdtu.style.display="block";
    }else{
      fdtu.style.display="none";
    }
  for(var i=0;i<btn.length;i++){
    btn[i].index=i;
    btn[i].onclick=function(){
      var obj=document.documentElement.scrollTop?document.documentElement:document.body;
      animate(obj,{scrollTop:floor[this.index].offsetTop})
    }
  }

    for(var i=0;i<floor.length;i++){
    if(floor[i].offsetTop<scrollT+400){
      for(var j=0;j<btn.length;j++){
        xianshi[j].style.display="none";
    }
    xianshi[i].style.display="block";
   }

 }

 /*var tpbox=document.getElementById("#tpbox");
  var tupiancon=$("img",tpbox);
  for(var i=0;i<tupiancon.length;i++){
    tupiancon[i].index=i;
    tupiancon[i].onmouseover=function(){
      animate(tupiancon[this.index],{opacity:0.8},60,function(){
        animate(tupiancon[this.index],{opacity:1},60);
      })
    }
    tupiancon[i].onmouseout=function(){
      animate(tupiancon[i],{opacity:0},60);
      
    }
  }*/

  var shan=$(".shan");
for(var i=0;i<shan.length;i++){
  shan[i].index=i;
  shan[i].onmouseover=function(){
    animate(shan[this.index],{opacity:0.85},50,function(){
      animate(shan[this.index],{opacity:1},50)
    })
  }
}



    for(var i=0;i<floor.length;i++){
    if(floor[i].offsetTop<scrollT+ch){
      var imgs=$("img",floor[i]);
      for(var j=0;j<imgs.length;j++){
        imgs[j].src=imgs[j].getAttribute("aa");
    }
   }

 }
  }

   for(var i=0;i<btn.length;i++){
      btn[i].index=i;
      hover(btn[i],function(){
          xianshi[this.index].style.display="block";
        },function(){
        xianshi[this.index].style.display="none";
      })
   
    }
  
var dlzc=$(".dlzc")[0];
var dlzcxl=$(".dlzcxl")[0];
dlzc.onmouseover=function(){
  dlzcxl.style.display="block";
}
dlzc.onmouseout=function(){
  dlzcxl.style.display="none";
}

var songhuo=$(".songhuo")[0];
var shxl=$(".shxl")[0];
songhuo.onmouseover=function(){
  shxl.style.display="block";
}
songhuo.onmouseout=function(){
  shxl.style.display="none";
}

var xialak=$(".xialak");
var erji=$(".erji");
for(var i=0;i<xialak.length;i++){
  xialak[i].index=i;
  hover(xialak[i],function(){
     /*for(var j=0;j<erji.length;j++){
      erji[j].style.display="none";
     }*/
     erji[this.index].style.display="block";
  },function(){
      erji[this.index].style.display="none";
    
  })
}




 var bannerbox=$(".bannerbox")[0];
 var bigbox=$(".bcenter")[0];
 var imgs=$(".img");
 var anniu=$(".anniu");
 var btn1=$(".btn1")[0];
 var btn2=$(".btn2")[0];
 var arr=["#66014d","#e6ad3a","#29ced0","#f13d1c","#c32323","#eb3132","#132f90","#1575e6"];
 var num=0;
 for(var i=0;i<imgs.length;i++){
  imgs.index=i;
 }
 //自动轮播
 function move(type){
  if(type=="r"){
    num++;
    if(num>=imgs.length){
      num=0
   }
  }
  if(type=="l"){
    num--;
    if(num<=-1){
      num=imgs.length-1;
    }
  }

   for(var i=0;i<imgs.length;i++){
      imgs[i].style.zIndex=2;
      anniu[i].style.background="#ccc";
   }
   imgs[num].style.zIndex=3;
   anniu[num].style.background="#ff3c3c";
   bannerbox.style.background=arr[num];
   
 } 
 var t=setInterval(function(){move("r")},2000);
  //按钮控制1
  //alert(anniu.length)
  for(var i=0;i<anniu.length;i++){
   anniu[i].index=i;
   anniu[i].onmouseover=function(){
      clearInterval(t);
      for(var j=0;j<imgs.length;j++){
         imgs[j].style.zIndex=2;
         bannerbox.style.background=arr[this.index];
         anniu[j].style.background="#ccc";
      }
      imgs[this.index].style.zIndex=3;
      anniu[this.index].style.background="#ff3c3c";
   }
   anniu[i].onmouseout=function(){
    
      t=setInterval(function(){move("r")},2000);
      num=this.index;
   }
  }

  //按钮控制2
  bigbox.onmouseover=function(){
      clearInterval(t);
      btn1.style.display="block";
      btn2.style.display="block";
    }
    bigbox.onmouseout=function(){
      clearInterval(t);
      t=setInterval(function(){move("r")},2000);
      btn1.style.display="none";
      btn2.style.display="none";
    }
    btn1.onclick=function(){
      move("l")
    }
    btn2.onclick=function(){
      move("r")
    }




   function luobo1(lou){
    var center=$(".center")[lou];
  var tupian=$(".tupian")[lou];
  var gundong=$(".gundong")[lou];
  var lis=$("li",gundong);
      var num1=1;
    function move1(){
      if(num1==3){
        animate(tupian,{left:-330*num1},600,Tween.Linear,function(){
          animate(tupian,{left:0},0);
      })
      num1=0;
       } 
       else{
        animate(tupian,{left:-330*num1},600,Tween.Linear);
        
      } 
      for(var i1=0;i1<lis.length;i1++){
        lis[i1].style.background="#dddddd";
      }
      lis[num1].style.background="#ff3c3c";
        num1++;
      } 
    var t1=setInterval(move1,2000);

    for(var i1=0;i1<lis.length;i1++){
      lis[i1].index=i1;
      lis[i1].onmouseover=function(){
        clearInterval(t1);
        for(var j1=0;j1<lis.length;j1++){
          lis[j1].style.background="#dddddd";

        }
        animate(tupian,{left:-330*this.index},600,Tween.Linear);
        num1=this.index+1;
        this.style.background="#ff3c3c";
      }

      lis[i1].onmouseout=function(){
        t1=setInterval(move1,2000);
      }
    }
 }
  
 for(var i=0;i<8;i++){
    luobo1(i);
 }  


var bleftcon=$(".bleftcon");
var chukuang=$(".chukuang");
  for(var i=0;i<bleftcon.length;i++){
    bleftcon[i].index=i;
    bleftcon[i].onmouseover=function(){
    for(var j=0;j<chukuang.length;j++){
      chukuang[j].style.display="none";
    }
    chukuang[this.index].style.display="block";
  }
  bleftcon[i].onmouseout=function(){
    for(var j=0;j<chukuang.length;j++){
      chukuang[j].style.display="none";
    }
 
}

}


var teword=$(".teword");//字
var tebcon=$(".tebcon");//图片
for(var i=0;i<teword.length;i++){
  teword[i].index=i;
  teword[i].onmouseover=function(){
    for(var j=0;j<tebcon.length;j++){
    tebcon[j].style.display="none";
    teword[j].style.color="#666";

}
    tebcon[this.index].style.display="block";
    teword[this.index].style.color="#FF4500";
      }
}



}