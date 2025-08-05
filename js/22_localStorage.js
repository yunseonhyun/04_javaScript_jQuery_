$(function () {
  $("#saveData").click(saveDataFn);
  $("#getBtn").click(getDataFn);
  $("#showAllBtn").click(showAllDataFn);
  $("#clearAllBtn").click(clearAllDataFn);
});

// 크롬이나 엣지 등 브라우저에서 F12 클릭
// F12 -> 애플리케이션 -> 로컬 스토리지 내부 확인
// 해당하는 URL 주소를 클릭하여 내부에 저장된 키 값 확인
// 키 값은 문자열로 무조건 되어있음
// ""가 없다하여 문자열이 아닌 것이 아니라 생략상태!!!

// 인터넷 창에서 크롬일경우 chrome://version 입력
// 프로필 경로	C:\Users\tj\AppData\Local\Google\Chrome\User Data\Default
// 프로필 경로를 따라서 폴더 내부로 들어가면 local Storage 폴더가 존재할 것
// 폴더 내부에 db나 dbl로 저장된 내부에 컴퓨터가 읽을 수 있는 글씨로 존재.
// localStorage 내부에서는 문자열만 저장 = 인터넷 주소 즐겨찾기나 간단한 읽는 정도의 데이터를 저장하므로
// 소비자가 인터넷을 사용함에 있어 불편을 느끼지 않을 최소한의 저장 자료형을 사용!
// 악성 코드 방지 문자열만 가능하고 배열또한 문자열로 저장 ""
function saveDataFn(e) {
  // button type = submit 이거나 a태그로 클릭할 경우 제출방지사용
  // a 태그 속성 기본값 href로 들어가는 것을 방지 (예 : 마이페이지, 임직원페이지 접근 가능한 유저인가?)
  e.preventDefault(); // 제출 방지기능 type="button"일 경우 사용 안해도 됨

  // 소비자가 작성한 키와 값으로 저장할 예정
  const inputKey = $("#key").val(); // 기본 자바스크립트에서는 value로 사용
  const inputValue = $("#value").val(); // 기본 자바스크립트에서는 value로 사용

  // 실제 localStorage에 저장!
  // .setItem() : 기능 내부에는 키와 값을 저장한다 -> 그롬에서 기본적으로 제공하는 저장할 위치에
  // 소비자가 작서한 데이터의 키와 값을 저장해놓는 경로까지 작성
  localStorage.setItem(inputKey, inputValue); // 기본적으로 문자열
}

function getDataFn(e) {
  e.preventDefault();
  const inputKey = $("#getKey").val();

  // 저장된 데이터를 가져올 때는
  // 가져오는 키의 명칭만 작성
  // 가져온 데이터를 소비자의 눈으로 확인할 수 있도록
  // JS 변수이름에 담아서 html에 넘겨줄 것

  // .getItem() : 기능 내부에 키를 활용해서 값을 가져온다. 값을 가져오는 위치는 크롬에서 기본적으로 저장하는 위치
  const getValue = localStorage.getItem(inputKey);

  // 가져온 결과를 표시하자!

  $("#getResult").html(
    `
    <strong>가져오기 성공!</strong>
    저장된 키의 명칭 : ${inputKey}<br>
    저장된 키 내부에 존재하는 값 : ${getValue}
    `
  );
}

// 키의 이름을 가져올 때는 index 번호를 활용해서 0번째에 존재하는 key 명칭을 가져온다
// 가지고 온 키의 명칭을 활용해서 값을 가져올 수 있다.
// getkey = index 번호
// getvalue = key의 명칭

// set 저장할 때는 순차적으로 0번부터 저장

// for문 보다 로컬스토리지에 리스트목록을 저장하는 것이 메모리 활용적
// 로컬스토리지에 데이터를 저장할 때 배열, 리스트 형태로 저장
function showAllDataFn(e) {
  e.preventDefault();
  let html = `<h3>크롬 브라우저에 저장된 데이터들 확인</h3><ul>`;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    html += `
    <li>
        <strong>${key}</strong>:
        ${localStorage.getItem(key)}
    </li>`;
  }

  html += "</ul>";

  $("#allData").html(html);
}

function clearAllDataFn(e) {
  e.preventDefault();

  if (confirm("정말로 모든 데이터를 삭제하시겠습니까?")) {
    localStorage.clear();
  }
  showAllDataFn();
}
