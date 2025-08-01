$(function () {
  $("#btn1").click(fa);
  $("#btn2").click(epl);
});

function fa() {
  $.get(
    "https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=Arsenal_vs_Chelsea&s=2016-2017"
  ).done(function (data) {
    const 데이터 = data.event[0].strVideo;

    if (데이터) {
      // replace() : 특정 문자열을 특정문자열로 변환
      // replace("변경될 문자열", "삽입할 문자열")
      const embedURL = 데이터.replace("watch?v=", "embed/");

      $("#result1").html(
        `
      <p>경기 날짜 : ${data.event[0].dateEvent}</p>
      <p> 점수 <br> 아스날 ${data.event[0].intHomeScore} : ${data.event[0].intAwayScore} 첼시</p> 
      <p> 시즌 ${data.event[0].strSeason}</p>
      <p> 리그배지 : <br><img src="${data.event[0].strLeagueBadge}"></p>
      <p>영상 다시보기 <iframe width="560" height="315" src="${embedURL}" frameborder="0" allowfullscreen></iframe></p>

      
      `
      );
    }
  });
}

function epl() {
  $.get(
    "https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=Arsenal_vs_Chelsea&s=2016-2017"
  ).done(function (data) {
    $("#result1").html(
      `
      <p>경기 날짜 : ${data.event[1].dateEvent}</p>
      <p> 점수 <br> 아스날 ${data.event[1].intHomeScore} : ${data.event[1].intAwayScore} 첼시</p> 
      <p> 시즌 ${data.event[1].strSeason}</p>
      <p> 리그배지 : <br><img src="${data.event[1].strLeagueBadge}"></p>
      
      
      `
    );
  });
}
