// ================================
// Dropdown Menu
// ================================
function toggleDropdown(event) {
  event.preventDefault();
  const dropdown = event.target.closest(".dropdown");
  dropdown.classList.toggle("open");
}

// Close dropdown when clicking outside
document.addEventListener("click", function (e) {
  const isDropdown = e.target.closest(".dropdown");
  document.querySelectorAll(".dropdown").forEach((drop) => {
    if (drop !== isDropdown) {
      drop.classList.remove("open");
    }
  });
});

// ================================
// Navbar Toggle (Mobile Menu)
// ================================
const navbar = document.getElementById("navbar");

function hideMenu() {
  navbar.style.left = "-389px";
}

function showmenu() {
  navbar.style.left = "0";
}

// ================================
// Scroll to Top Button
// ================================
const scrollTopBtn = document.querySelector(".scroll-top");

function toggleScrollTop() {
  if (!scrollTopBtn) return;
  if (window.scrollY > 100) {
    scrollTopBtn.classList.add("active");
  } else {
    scrollTopBtn.classList.remove("active");
  }
}

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);
}

// ================================
// Initialize Swiper
// ================================
function initSwiper() {
  document.querySelectorAll(".init-swiper").forEach((swiperElement) => {
    const configEl = swiperElement.querySelector(".swiper-config");
    if (!configEl) return;
    const config = JSON.parse(configEl.innerHTML.trim());
    new Swiper(swiperElement, config);
  });
}
window.addEventListener("load", initSwiper);

// ================================
// Counter + Slick Carousel
// ================================
$(document).ready(function () {
  // Counter
  $(".counter-stat span").counterUp({
    delay: 10,
    time: 1000,
  });

  // Slick Carousel
  $(".clients-logo").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5, slidesToScroll: 5 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 4, slidesToScroll: 4 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
    ],
  });
});
$(document).ready(function () {
  // Make Slick work even inside Bootstrap .row and .col
  $('.clients-logo').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});




  