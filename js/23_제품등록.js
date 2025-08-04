$(function () {
  $(".register-btn ").click(addProduct);
});

function addProduct(e) {
  e.preventDefault(); // 제품등록 일시정지

  const productName = $("#productName").val();
  const productPrice = $("#productPrice").val();
  const productImg = $("#productImage").val();

  // 기존 배열 목록 가져오기
  // localStorage 문자열만 취급하므로, [] 또한 ""로 감싸서 문자열 처리
  let productList = JSON.parse(localStorage.getItem("productList") || "[]");

  const newProduct = {
    name: productName,
    price: productPrice,
    image: productImg,
  };
  productList.push(newProduct);

  localStorage.setItem("productList", JSON.stringify(productList));

  window.location.href = "23_제품목록.html";
}
