// jQuery 이벤트 처리와
// 기능명칭으로 분류하여 기능 호출하기
$(function () {
  $("#btn1").click(문제1번기능); // 클릭했을 때 문제1번기능 함수에 담긴 기능 사용
  $("#btn2").click(userInfo);
  $("#btn3").click(getRandom);
  // id가 btn1인 버튼을 클릭했을 떄 문제1번기능 함수에 담긴 기능 사용
});
// 문제 1 : 기본텍스트 데이터 가져오기
// https://jsonplaceholder.typicode.com/posts/1
function 문제1번기능() {
  $.get(
    "https://jsonplaceholder.typicode.com/posts/1",
    // url 주소를 가져오는데 성공
    function (data) {
      $("#result1").html(
        `
                <div class="sucess">
                    <strong>게시물제목 : </strong>${data.title}
                    <strong>게시물내용 : </strong>${data.body}
                    
                </div>
                `
      );
    }
  );
}

// 문제 2 : 사용자 정보 표시하기
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/users/{userId}
function userInfo() {
  const ui = $("#userId").val(); // 사용자가 작성한 값

  $.get(`https://jsonplaceholder.typicode.com/users/${ui}`)
    // 1. 데이터를 무사히 가져오는 것을 성공했고
    .done(function (data) {
      // 데이터를 가져올 수 있도록 접속하는 데 성공 !

      if (!data.id || !data) {
        $("#result2").html(
          `<div class="error">
            해당 사용자를 찾을 수 없습니다.</div>`
        );
        return; // 데이터가 없으므로 function 아래 기능을 사용하지 못하도록 돌려보내기
      }

      $("#result2").html(
        `
                <div class="success">
                    <strong>이름 : </strong>${data.name}<br>
                    <strong>이메일 : </strong>${data.email}<br>
                    <strong>전화번호 : </strong>${data.phone}<br>
                </div>
                `
      );
    })

    // 2. 아예 주소로 접근 자체가 불가능한 에러 상태일때
    .fail(function () {
      // url 접근 자체가 불가능한 에러 상태일때
      $("#result2").html(
        `<div class="error">
        해당 사용자를 찾을 수 없습니다. (404 error 발생)
        주소 자체 접속이 안되는 상황
        </div>`
      );
    });
}

// 문제 3 : 랜덤 명언 가져오기
function getRandom() {
  // 1. get을 이용해서 데이터 가져올 주소 설정
  // https://api.quotable.io/random
  $.get(`http://api.quotable.io/random`)
    .done(function (data) {
      // 데이터 가져오는 문제가 없을 경우
      $("#result3").html(
        `<div class="success">
            <blockquote>${data.content}</blockquote>
            <strong>${data.author}</strong>
        </div>`
      );
    })
    .fail(
      // 데이터 주소 접속 실패했을 경우
      $("#result3").html(
        `
            <div class="error">
            명언을 가져오는데 실패했습니다.
            </div>
            `
      )
    );
}
