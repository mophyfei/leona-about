document.addEventListener("DOMContentLoaded", function() {
  const galleries = [
    "gallery-esg",
    "gallery-energy",
    "gallery-soap",
    "gallery-events",
    "gallery-daily" // ★ 新增日常修行區
  ];

  galleries.forEach(id => {
    new Swiper(`#${id}`, {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      breakpoints: {
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
      },
      pagination: { el: ".swiper-pagination", clickable: true }
    });
  });

  GLightbox({ selector: ".glightbox" });
});
