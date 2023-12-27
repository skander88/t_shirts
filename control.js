document.addEventListener("DOMContentLoaded", function () {
  var btnMinus = document.querySelectorAll(".btn-minus");
  var btnPlus = document.querySelectorAll(".btn-plus");
  var btnLike = document.querySelectorAll(".btn-like");
  var btnDelete = document.querySelectorAll(".btn-delete");
  var totalPriceElement = document.getElementById("totalPrice");

  for (let i = 0; i < btnMinus.length; i++) {
    btnMinus[i].addEventListener("click", function () {
      updateQuantity(i, -1);
    });
  }

  for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener("click", function () {
      updateQuantity(i, 1);
    });
  }

  for (let i = 0; i < btnLike.length; i++) {
    btnLike[i].addEventListener("click", function () {
      toggleLike(i);
    });
  }

  for (let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener("click", function () {
      deleteItem(i);
    });
  }

  function updateQuantity(index, change) {
    var quantityElement = document.querySelectorAll(".quantity")[index];
    var currentQuantity = parseInt(quantityElement.innerText);
    var newQuantity = currentQuantity + change;

    if (newQuantity >= 0) {
      quantityElement.innerText = newQuantity;
      updateTotalPrice();
    }
  }

  function toggleLike(index) {
    var likeButton = btnLike[index];
    likeButton.classList.toggle("liked");
    updateTotalPrice(); // Like action may affect the total price
  }

  function deleteItem(index) {
    var item = document.querySelectorAll(".item")[index];
    item.remove();
    updateTotalPrice();
  }

  function updateTotalPrice() {
    var prices = document.querySelectorAll(".price");
    var quantities = document.querySelectorAll(".quantity");
    var total = 0;

    for (let i = 0; i < prices.length; i++) {
      var price = parseFloat(prices[i].innerText.slice(0, -2)); // remove 'dt' and convert to float
      var quantity = parseInt(quantities[i].innerText);
      total += price * quantity;
    }

    totalPriceElement.innerText = total.toFixed(2);
  }
});
