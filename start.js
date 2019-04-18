var today = new Date(); //오늘 날짜
var date = new Date(); //오늘 날짜의 date를 세어쥼
var day;
canvas = document.getElementById("canvas");
 ctx = canvas.getContext("2d");


function buttonadd(){
    //팝업창에 출력될 페이지 URL
  var form = document.getElementById('myForm');
  // var name = document.getElementById('d_name').value;
  // window.location.replace("test1.html");

  ctx.fillText(name, 600, 200);

  location.href = "test1.html";
  return false;
//  var popOption = "width=370, height=360, resizable=no, scrollbars=no, status=no;";    //팝업창 옵션(optoin)
//  window.open(popUrl,"",popOption);
}
