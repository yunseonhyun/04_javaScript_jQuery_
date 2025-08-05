$(function () {
  $("#addBtn").click(addData);
  $("#searchBtn").click(searchData);
  $("#showAllBtn").click(showAllData);
  $("#clearAllBtn").click(clearAllData);
});

function addData(e) {
  e.preventDefault();
  const name = $("#name").val().trim();
  const age = $("#age").val().trim();
  const email = $("#email").val().trim();

  // 기존에 저장된 데이터가 존재하는지 확인 없으면 빈배열데이터 가져오기
  let userList = JSON.parse(localStorage.getItem("userList") || "[]");
  /*
Data.now() = ms 초로 변환
new Date().toLocalString("ko-KR");한국 현재 시간 기준 문자열로 저장
*/
  const newUser = {
    name: name,
    age: age,
    email: email,
    createAt: new Date().toLocaleString("ko-KR"), // 현재 시간 저장 가입한 날짜는 소비자가 선택할 권한 없으므로 html에 존재하지 않음
  };
  // newUser 변수이름은 소비자가 작성한 데이터를 가지고 있는 변수이름

  // userList 로컬스토리지에 유저 정보들을 보유하고 추후 새로운 데이터를 저장할 변수이름

  userList.push(newUser); // 기존 userList에 새로운 유저 추가한 상태!
  // 로컬스토리지가 아닌 javaScript 내에서만 저장하겠다 되어있는 상태

  // javaScript 내에 추가된 데이터를 로컬스토리지에 저장
  // 로컬스토리지에 저장할 때 배열 -> 문자열 형태로 저장
  // 사람들의 개별 컴퓨터에 데이터를 저장하거나 특정 작업을 진행하는 것을
  // 브라우저가 못하도록 방지하지만 즐겨찾기와 같이 글자 데이터를 최소한 저장할 수 있도록
  // 문자열은 ok 했기 때문에 문자열만 가능!
  // JSON.stringify를 이용해서 배열을 문자열로 변환
  localStorage.setItem("userList", JSON.stringify(userList));
  alert("로컬스토리지에 저장되었습니다. ^^ ");
}

function searchData(e) {
  e.preventDefault();
}

function showAllData(e) {
  e.preventDefault();
}

function clearAllData(e) {
  e.preventDefault();
}
