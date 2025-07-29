// 1번 : HTML 문서가 모두 준비되면, 중괄호 안에 코드를 실행
$(function () {
  // 2번 : id가 btn인 요소를 클릭했을 때 실행될 함수 정의
  // $("#btn").click(function () { // 익명함수 this 사용 가능한 함수
  $("#btn").click(() => {
    // 3번 : 텍스트를 변경 : id가 title인 요소의 텍스트를 변경
    $("#title").text("버튼이 클릭되었습니다.");
    // 4번 : id가 description인 요소를 0.5초 숨겼다가
    // 다시 0.5초간 나타나는 메서드 사용
    $("#description").fadeOut(500).fadeIn(500);
    // 5번 : id가 box인 요소에 highlight 클래스를 추가하거나 제거
    $("#box").toggleClass("highlight");
  });
});
