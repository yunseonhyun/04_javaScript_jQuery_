$(function () {
  // 1. 확인 버튼 클릭 시 중복 체크
  $("#check").click(function () {
    const email = $("#childEmail").val();

    let userList = JSON.parse(localStorage.getItem("users") || "[]");

    // TODO:
    // - localStorage에서 users 가져오기
    // - 중복 확인
    const isDup = userList.filter((u) => u.email === email);

    // filter는 배열로 데이터를 가져오기 때문에 .length로 값이 한개라도 존재하는가
    if (isDup.length > 0) {
      $("#result").html(`
        <span style="color : red;">이미 사용중인 이메일입니다.</span>`);
      $("#send").prop("disabled", true);  
    } else {
      $("#result").html(
        `<span style="color : green;">사용가능한 이메일 입니다.</span>`
      );
      $("#send").prop("disabled", false);
    }
    // - 결과 메시지 표시
    // - 중복되지 않으면 "사용하기" 버튼 활성화
    let users = JSON.parse(localStorage.getItem("users") || "[]");
  });

  // 2. 사용하기 버튼 클릭
  $("#send").click(function () {
    // 순수자바스크립트와 jquery랑 언제든지 혼용해서 사용 가능 하다.
    // 순수자바스크립트조합                                  = jquery조합
    // opener.document.getElementById("inputEmail").value = $("#childEmail").val();

    // jquery 조합                                          = jquery 조합
    const email = $("#childEmail").val();
    opener.$("#inputEmail").val($("#childEmail").val());
    window.close();
    // TODO:
    // - 부모창의 이메일 입력란에 값 전달
    // - 팝업창 닫기
  });
});
