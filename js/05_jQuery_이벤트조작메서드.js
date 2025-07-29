$(function () {
  // #add 버튼을 클릭했을 때
  // #boxArea .append("<div class=box>박스</div>")
  // #del 버튼을 클릭 했을 때
  // $(".box:last").remove()
  $("#add").click(() => {
    $("#boxArea").append("<div class='box'>박스</div>");
  });
  $("#del").click(() => {
    $(".box:last").remove();
  });
});
