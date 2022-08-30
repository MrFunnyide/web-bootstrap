var myButton = document.getElementById("BtnTop");

window.onscroll = function () {
  goToTop();
};
// ketika dari page atas di scroll kebawah sejauh jarak di bawah, maka button muncul
function goToTop() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
