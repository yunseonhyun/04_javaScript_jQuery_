// ready가 아닌 현대 방식의 웹문서 기능 설정 환경

// toggleBtn 클릭했을때 화살표 익명함수로
// toggleClass 활용해서 dark-mode로 변경하기
$(() => {
  // 2번 : id가 btn인 요소를 클릭했을 때 실행될 함수 정의
  // $("#btn").click(function () { // 익명함수 this 사용 가능한 함수
  $("#toggleBtn").click(() => {
    // 3번 : 텍스트를 변경 : id가 title인 요소의 텍스트를 변경
    $("body").toggleClass("dark-mode");
  });
});
