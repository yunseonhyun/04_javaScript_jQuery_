$(function () {
  $("#goToSignup").click(goToSignup);
  $("#login").click();
});

function goToSignup() {
  opener.window.location.href = "register.html";
  window.close(); // 현재 로그인 페이지 닫기
}
