let 현재페이지 = 1;
// 어디서든 현재페이지를 확인할 수 있도록 전역변수 설정
$(function () {
  // 강아지 사진이 무조건 랜덤으로 1장 출력
  randomDog();
  // 강아지 사진 이미지를 클릭할 경우 강아지 사진을 랜덤으로 1장 변경
  $("#dogResult").click(randomDog);
  getCats();
  // 페이지네이션 버튼 이벤트
  $("#prevBtn").click(function () {
    if (현재페이지 > 1) {
      현재페이지--;
      $("#pageInfo").html(`페이지 ${현재페이지}`);
      getCats();
    } else {
      alert("첫 번째 페이지 입니다.");
    }
  });
  $("#nextBtn").click(function () {
    현재페이지++;
    $("#pageInfo").html(`페이지 ${현재페이지}`);
    getCats();
  });
});

function getCats() {
  // https://api.thecatapi.com/v1/images/search?limit=10
  $.get("https://api.thecatapi.com/v1/images/search?limit=10").done(function (
    data
  ) {
    const catImages = data
      .map(
        (cat) => `
            <div class="cat-card">
                <img src="${cat.url}" class="cat-detail" onclick="showFullImg('${cat.url}')"/>
            </div>
                `
      )
      .join("");
    $("#catResult").html(
      `
        ${catImages}
        `
    );
  });
}
// 1. 강아지사진 클릭하지 않아도 랜덤으로 1장 보이게 설정
// https://dog.ceo/api/breeds/image/random
// <img src="">

// 이미지 클릭시 큰 이미지로 보여주기
function showFullImg(imageUrl) {
  $("#catResult").prepend(
    `
        <div id="abc" class="cat-modal" onclick="closeFullImgs()">
            <img src="${imageUrl}" class="cat-detail-show"/>
        </div>
        `
  );
}

// 크게 보이는 이미지 없애기 이미지를 한 번 더 클릭하면
// close() open() 과 같이 이미 만든 예약어 메서드나 함수 명칭은
// 사용 지양
// 각 회사 개발자가 만든듯한 명칭으로 함수 메서드 변수이름을 만드는 것이 좋음
function closeFullImgs  () {
  $("#abc").remove();
}

function randomDog() {
  $.get("https://dog.ceo/api/breeds/image/random").done(function (data) {
    $("#dogResult").html(
      `
        <img src="${data.message}">
        `
    );
  });
}
