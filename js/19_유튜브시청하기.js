$.get("../json/youtube.json").done(function (data) {
  const search = $("#searchInput").val();

  if (data.result.title == search) {
    $("#results").html(`
        <p>영화제목 ${data.result.title}
        <p>영화설명 ${data.result.description}
        <img src="${data.result.thumbnail}">
        <p>주소 ${data.result.url}</p>
        `);
  } else {
    $("#results").html(``);
  }
});

// 검색버튼 무시 바로 나오는 영화 확인
// $.get()
// https://abhi-api.vercel.app/api/search/yts?text=heat+waves
// .done()
// results 결과에

// <p> 영화제목
// <p> 영화설명
// <img> 썸네일
// <p> 주소
/*
$.get("../json/youtube.json").done(function (data) {
  $("#results").html(
    `
        <p>영화제목 ${data.result.title}
        <p>영화설명 ${data.result.description}
        <p>썸네일 <img src="${data.result.thumbnail}"></p>
        <p>주소 ${data.result.url}</p>
    
        `
  );
});
*/
