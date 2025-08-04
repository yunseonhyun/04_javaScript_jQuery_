$(function () {
  showUsers();
});

function showUsers() {
  // localStorage에서 모든 데이터를 담을 수 있는 리스트 변수이름 생성

  // 기존 회원 목록 가져오기 (없으면 빈 배열 형태) 가져온 값을 userList 변수 이름에 담아두기
  let userList = JSON.parse(localStorage.getItem("userList") || "[]");

  // 사용자 총 회원수표시 users.length

  // 사용자가 없으면 users.length === 0 no~users 볼 수 있음!

  // map 사용해서 HTML로 소비자가 유저 리스트 목록을 확인할 수 있도록 설정

  const userHTML = userList.map(
    (u) =>
      `
        <div class="user-item">
            <div class="user-id">아이디 : ${u.username}</div>
            <div class="user-pw">비밀번호 : ${u.password}</div>
        </div>
        `
  );

  $("#user-list").html(userHTML);
}
