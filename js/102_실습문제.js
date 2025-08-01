$(function () {
  $("#btn1").click(fa);
  $("#btn2").click(epl);
});

function fa() {
  $.get(
    "https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=Arsenal_vs_Chelsea&s=2016-2017"
  ).done(function (data) {});
}
