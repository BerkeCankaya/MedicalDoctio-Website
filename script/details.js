/*Header Effect*/
window.addEventListener("scroll", function () {
    let fixedHeader = document.querySelector(".fixed-header");
    if (window.scrollY > 300) {
        if (!fixedHeader.classList.contains("visible")) {
            fixedHeader.classList.add("visible");
            gsap.to(fixedHeader, { 
                duration: 0.7, 
                y: "100px", 
                opacity: 1, 
                ease: "power4.out" 
            });
            fixedHeader.style.display = "block"; 
        }
    } else {
        if (fixedHeader.classList.contains("visible")) {
            fixedHeader.classList.remove("visible");

            gsap.to(fixedHeader, { 
                y: "-100px", 
                opacity: 0,
                duration: 0.5,
                ease: "power4.in"
            });
            setTimeout(() => {
                fixedHeader.style.display = "none"; 
            }, 500);
        }
    }
});

const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3, 
    slidesPerGroup: 1,  
    centeredSlides: true, 
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false
    },
    pagination: false,
    navigation: false,
    slideToClickedSlide: true, 
    on: {
        slideChange: function () {
            setTimeout(() => {
                updateMainImage();
                updateOpacity();
            }, 100); 
        }
    }
});

function updateMainImage() {
    const slides = document.querySelectorAll('.swiper-slide');
    const mainImg = document.getElementById('details-main-img');

    const centerSlideIndex = Math.floor(slides.length / 2);
    const centerSlide = slides[centerSlideIndex]?.querySelector('img');

    if (centerSlide) {

        gsap.to(mainImg, { opacity: 0, duration: 0.3, onComplete: () => {
            mainImg.src = centerSlide.src;
            gsap.to(mainImg, { opacity: 1, duration: 0.3 });
        }});
    }
}
function updateOpacity() {
    document.querySelectorAll('.swiper-slide img').forEach(img => {
        img.style.opacity = "0.6"; 
    });

    const slides = document.querySelectorAll('.swiper-slide');
    const centerSlideIndex = Math.floor(slides.length / 2);
    const centerSlide = slides[centerSlideIndex]?.querySelector('img');

    if (centerSlide) {
        centerSlide.style.opacity = "1"; 
    }
}

   function FaqComments(index) {
  var content = document.getElementById("faq-" + index);
  var icon = document.querySelector(`#btn-${index} i`);

  if (content.style.display === "block") {
    content.style.display = "none";
    icon.classList.remove("fa-angle-up");
    icon.classList.add("fa-angle-down");
    return;
  }

  var allContents = document.querySelectorAll(".faq-content");
  var allIcons = document.querySelectorAll(".faq-btn i");
  allContents.forEach(function (c) {
    c.style.display = "none";
  });
  allIcons.forEach(function (i) {
    i.classList.remove("fa-angle-up");
    i.classList.add("fa-angle-down");
  });
  content.style.display = "block";
  icon.classList.remove("fa-angle-down");
  icon.classList.add("fa-angle-up");
}
/*Form*/
 flatpickr("#dateInput", {
    dateFormat: "d.m.Y",
    allowInput: true
  }); 

  function validateForm() {
        const service = document.getElementById("serviceSelect").value;
        const doctor = document.getElementById("doctorSelect").value;
        const date = document.getElementById("dateInput").value;
        const messageElement = document.getElementById("error-message");

        if (!service || !doctor || !date) {
            messageElement.textContent = "One or more fields have an error. Please check and try again.";
            messageElement.style.display = "flex";
            messageElement.style.border = "2px solid white"; 
            messageElement.style.color = "white";
        } else {
            messageElement.textContent = "Form başarıyla gönderildi!";
            messageElement.style.display = "flex"; 
            messageElement.style.border = "2px solid white"; 
            messageElement.style.color = "white";
        }
    }
  /*Photo Gallery*/
    const images = document.querySelectorAll('.photos img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    let currentIndex = 0;
function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = 'flex';
    lightboxImg.src = images[currentIndex].src;
}
function closeLightbox() {
    lightbox.style.display = 'none';
}
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
}
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

/*Navbar Changing Page */
document.querySelectorAll(".aside-nav a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const newTitle = link.getAttribute("data-subtitle");
        const newSubtitle = link.getAttribute("data-title");
        const newPageTitle = link.getAttribute("data-pageTitle");
         const newPageSubtitle = link.getAttribute("data-pageSubtitle");

        const titleElement = document.getElementById("details-second-title");
        const subtitleElement = document.getElementById("details-title");
        const pageTitle = document.getElementById("page-title");
        const pageSubtitle = document.getElementById("page-subtitle");
        if (titleElement) {
            titleElement.textContent = newTitle;
        }
        if (pageTitle) {
            pageTitle.textContent = newPageTitle;
        }
        if (pageSubtitle) {
            pageSubtitle.textContent = newPageSubtitle;
        }
        if (subtitleElement) {
            subtitleElement.textContent = newSubtitle;
        }
        document.querySelectorAll(".aside-nav a").forEach(nav => {
            nav.classList.remove("depart-active"); 
        });
        link.classList.add("depart-active"); 
    });
});
/*Loading Screen*/
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("loading-screen").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none";
        }, 500);
    }, 1500);
});

window.addEventListener("beforeunload", function () {
    document.getElementById("loading-screen").style.display = "flex";
    document.getElementById("loading-screen").style.opacity = "1";
});