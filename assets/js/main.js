document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    startEvent: "load",
  });

  //Nút mở menu
  var btnMenu = document.querySelector("#btn-menu");
  var menu = document.querySelector(".menu");
  var body = document.getElementsByTagName("body");

  btnMenu.onclick = function () {
    //toggle class active cho cái menu. Khi active sẽ hiện menu
    menu.classList.toggle("active");
    console.log(body[0]);

    body[0].classList.toggle("can-not-scroll");
    //Lấy tất cả lines (là nút mở menu)
    var lines = document.querySelectorAll(".header__line");

    // Lặp qua từng cái thành phần xong đổi màu
    lines.forEach((line) => {
      line.classList.toggle("line-active");
    });

    //Add class cho các link trong menu
    var linksItem = document.querySelectorAll(".menu__item");
    linksItem.forEach((link) => {
      link.classList.toggle("fade");
    });
  };

  var listItemMenu = document.querySelectorAll(".menu__item-link");

  listItemMenu.forEach((item) => {
    item.onclick = function () {
      menu.classList.toggle("active");

      body[0].classList.toggle("can-not-scroll");

      var lines = document.querySelectorAll(".header__line");
      lines.forEach((line) => {
        line.classList.toggle("line-active");
      });

      var linksItem = document.querySelectorAll(".menu__item");
      linksItem.forEach((link) => {
        link.classList.toggle("fade");
      });
    };
  });
});

//Khung ảnh bự
var divLarge = document.querySelector("#large-content");

//Khi click thì lấy src của ảnh
function getImg(src) {
  var largeImg = document.querySelector("#large-img");
  let groupImg = document.querySelectorAll(".img-group");

  let imgArr = Array.from(groupImg);

  imgArr.forEach((img) => {
    img.style.opacity = "0";
  });

  // Truyền cái src ảnh cho ảnh trong cái khung ảnh bự
  largeImg.src = `${src}`;

  // Hiện cái ảnh đó lên
  divLarge.style.visibility = "visible";
  divLarge.style.opacity = 1;
}

function closeImg() {
  // Ấn vô hình bự thì ẩn nó đi
  divLarge.style.visibility = "hidden";
  divLarge.style.opacity = 0;

  let groupImg = document.querySelectorAll(".img-group");

  let imgArr = Array.from(groupImg);

  imgArr.forEach((img) => {
    img.style.opacity = "1";
  });
}

function goToTop() {
  $("html").animate({ scrollTop: 0 });
}
