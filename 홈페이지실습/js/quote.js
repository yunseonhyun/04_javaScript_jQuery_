$(function () {
  $("#getQuote").click(getQuote);
});

function getQuote() {
  // https://api.quotable.io/random
  // 안전하지 않음에서 고급 클릭 후 사이트 이동 선택

  // .get()
  // .done()

  /* 
    <div class="success">
        <div class="quote-box">
            <h3>content</h3>
            <p> author </p>
        </div>
    </div> */
  $.get("https://api.quotable.io/random").done(function (data) {
    $("#quoteResult").html(
      `
                <div class="success">
                    <div class="quote-box">
                        <h3>content : ${data.content}</h3>
                        <p> author : ${data.author}</p>
                    </div>
                </div>
                
                `
    );
  });
}
