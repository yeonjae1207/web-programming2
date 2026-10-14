// 가장 먼저 하는일: console에 log로 해당 파일이 연결 되었는지 찍어보기
console.log("complete");
console.log($(window).width());
console.log($(window).height());

let wWidth = $(window).width();
let wHeight = $(window).height();

console.log(wWidth);
console.log(wHeight);

// 고양이랑 풀숲배경 조정해보기
$(document).mousemove(function (event) {
  let mouseX = event.pageX;
  let mouseY = event.pageY;

  //1. 마우스 이동에 따라 배경 이미지의 위치 움직이게 하기
  $(".bg-img").css("object-position", `${mouseX / 10}% ${mouseY / 10}% `);

  //2. 마우스 커서에 고양이 이미지 따라다니게 하기
  // 고양이 이미지의 가로세로 너비를 각각 변수에 할당함.

  let imgWidth = $(".cat-img").width() / 2;
  let imgHeight = $(".cat-img").height() / 2;
  //2-1.번수에 값을 할당할때ㅡ 이미지 너비를 미리 2로 나눠서 적용하거나
  //이미지의 left, top 값의 변화를 위에서 선언한 xy의 좌표값을 가져와서
  //가져와서 적용함
  //2-2.이미지에 포지션 값을 적용할때, 고양이 이미지의 절반을 계산해서 넣거나
  //상황에 따라 선택할수 있다
  // 이미지의 레프트, 탑 값을 가로세로 절반 만큼 빼면, 우리가 가지고 있는 커서의 위치에서
  //이미지 가로세로의 절발씩 좌표가 수정되어 커서 위치에 이미지가
  $(".cat-img").css("left", mouseX - imgWidth + "px");
  $(".cat-img").css("top", mouseY - imgHeight + "px");
});

// 마우스 부브 이벤트가 일어날때마다 마우스 커서의 xy 값을 구해서 적용 할 수 있습니다.
console.log(event);

//mousemove가 일어날대마다 마우스의 xy 값을 구해서 function을 구하세요

$(document).mousemove(function (e) {
  $("#status").html(e.pageX + "," + e.pageY);
  $(".box").css("width", e.pageX);
  $(".box").css("height", e.pageY);
});
