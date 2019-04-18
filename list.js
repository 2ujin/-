document.write("<script type='text/javascript' src='start.js'><"+"/script>");  

var month;
var arr = new Array();
var b = 60;
var c = 100;
var message = '';    

// var image = document.getElementById("img");   
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var optionVal;
var count1 = 0;

var audio = new Audio('Eighty_Miles.mp3');
audio.play();

var imagg = new Image();
var imagg1 = new Image();
var imagg2 = new Image();
var imagg3 = new Image();
var imagg4 = new Image();
var imagg5 = new Image();
var imagg6 = new Image();
var imagg7 = new Image();
var imagg8 = new Image();


imagg.src = "bar.png";
imagg1.src="1.png";
imagg2.src="2.png";
imagg3.src="3.png";
imagg4.src="4.png";
imagg5.src="5.png";
imagg6.src="6.png";
imagg7.src="7.png";
imagg8.src="8.png";

function init(){ 
    b+=50;
    c+=50;
    count1 =  ++count1;
    // console.log(count1);
    var aa = document.getElementsByName("arr");
 
    var month = document.getElementById("pmonth").value;
    var day = document.getElementById("pday").value;
    var title = document.getElementById("ptitle").value;
    var content = document.getElementById("pcontent").value;
    var type = document.getElementById("ptype");
    var pimport = document.getElementById("pimport");
    var chbox = document.getElementById("chbox");

    var now = new Date();
    var then = new Date(month, day, 2018);
    var gap = then.getDate() - now.getDate();
    gap = Math.floor(gap / (1000 * 60 * 60 * 24));
    // String[] arr = request.getParameterValues("arr");

    // alert(gap);

    var value = type.options[type.selectedIndex].text;
    var ivalue = pimport.options[pimport.selectedIndex].text;
   
    //   image.src = "box.png";
  
//   image.addEventListener("click", change, false);
//    for(var i=0;i<aa.length;i++){
//     // alert(aa[i].value);
    // ctx.fillText(aa[].value + "                  " , 360, b);
    // }
   
    ctx.font = "18px 배달의민족 도현";
    ctx.fillText(aa[0].value + "월",  320, b);
    ctx.fillText(aa[1].value + "일", 355, b);
    ctx.fillText(aa[2].value, 400, b);
    ctx.fillText(value + " ",  475, b);
    ctx.fillText(ivalue, 560, b);     
  
    // alert(document.cookie); /* 결과: name=Ethan; favoriteColor=Blue; */
      var myform = document.getElementById("myForm").reset();
      ctx.fillText("성취도", 337, 550);
      ctx.drawImage(imagg, 400, 530); 
}

function selectChkBox(frm) {
    var sum = 0;
    var count = frm.checkbox.length;
      for(var i=0; i < count; i++ ){
           if( frm.checkbox[i].checked == true ){
            sum += 1;
            }
      }   
   // alert(sum);   
 //   alert(count1);
    result = sum / count1 * 100;
    // alert(result);

   if(result >0 && result<=15){
    ctx.drawImage(imagg1, 400, 530); 
   }
   else if(result >= 15 && result<=30){
    ctx.drawImage(imagg2, 400, 530); 
    }
    else if(result >= 30 && result<=45){
        ctx.drawImage(imagg3, 400, 530); 
    }
    else if(result >= 45 && result<=60){
        ctx.drawImage(imagg4, 400, 530); 
    }
    else if(result >= 60 && result <= 75){ 
        ctx.drawImage(imagg5, 400, 530); 
    }
    else if(result >= 75 && result <= 85){ 
        ctx.drawImage(imagg6, 400, 530); 
    }
    else if(result >= 85 && result <= 99){ 
        ctx.drawImage(imagg7, 400, 530); 
    }
    else if(result == 100){
        ctx.drawImage(imagg8, 400, 530); 
    }
    // alert(result);
    }