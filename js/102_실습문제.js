$(function () {
  $("#btn1").click(fa);
  $("#btn2").click(epl);
});

function fa() {
  $.get(
    "https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=Arsenal_vs_Chelsea&s=2016-2017"
  ).done(function (data) {
    $("#result1").html(
      `
      <p>경기 날짜 : ${data.event[0].dateEvent}</p>
      <p> 점수 <br> 아스날 ${data.event[0].intHomeScore} : ${data.event[0].intAwayScore} 첼시</p> 
      <p> 시즌 ${data.event[0].strSeason}</p>
      <p> 리그배지 : <br><img src="${data.event[0].strLeagueBadge}"></p>
      
      
      `
    );
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
