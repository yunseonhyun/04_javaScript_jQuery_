$(function () {
  // 1. 중복확인 버튼 클릭 시 팝업 열기
  $("#emailCheck").click(function () {
    // 팝업 설정
    const popupWidth = 450;
    const popupHeight = 200;
    // TODO: 화면 중앙에 팝업 띄우기

    const left = (window.screen.width - popupWidth) / 2;
    const top = (window.screen.height - popupHeight) / 2;

    const options = `
  width=${popupWidth},
  height=${popupHeight},
  left=${left},
  top=${top},
  `;

    window.open("24_emailCheck.html", "_blank", options.toString());
  });

  // 2. 회원가입 폼 제출
  $("#signupForm").submit(function (e) {
    e.preventDefault();

    // TODO:
    // - 입력값 가져오기
    // - localStorage에 저장
    // - 성공 메시지 표시
    let saveUsers = JSON.parse(localStorage.getItem("userList") || "[]");
    const inputEmail = $("#inputEmail").val();
    const phone = $("#phone").val();

    // 기존 배열 목록 가져오기
    // localStorage 문자열만 취급하므로, [] 또한 ""로 감싸서 문자열 처리

    const newUser = {
      email: inputEmail,
      phone: phone,
    };
    saveUsers.push(newUser);

    localStorage.setItem("userList", JSON.stringify(newUser));
  });
});
