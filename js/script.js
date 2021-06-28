var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

var video = $('.moldura').children('.moldura__video');
var videoElement = video.get(0);

if (videoElement.paused) {
  console.log("teste");
} 