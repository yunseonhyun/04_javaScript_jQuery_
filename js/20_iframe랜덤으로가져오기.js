$(function () {
  loadWatch();
  $("#btn").click(loadWatch);
});

function loadWatch() {
  $.get("https://www.themealdb.com/api/json/v1/1/random.php").done(function (
    data
  ) {
    const meal = data.meals[0].strYoutube;

    if (meal) {
      const youtubeUrl = meal.strYoutube; // 유튜브 링크가 들어있는 문자열 가져오기
      // replace() : 특정 문자열을 특정문자열로 변환
      // replace("변경될 문자열", "삽입할 문자열")

      let videoHTML = "";

      if (youtubeUrl) {
        const embedURL = youtubeUrl.replace("watch?v=", "embed/");
        console.log("embedURL : ", embedURL);
        $("#result").html(
          `
        <div class="video-container">
        <iframe
        src="${embedURL}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; 
        allowfullscreen
        ></iframe>
        </div>
        `
        );
      }
    } else {
      $("#result").html("영상이 존재하지 않습니다");
    }
  });
}
