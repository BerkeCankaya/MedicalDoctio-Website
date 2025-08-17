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
var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect:'fade',
    speed: 1000, 
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
    },
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiperDoctor = new Swiper(".bottom-doctors", {
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1, 
    speed: 1500,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
/*Statistic*/
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

/*Testimonials*/
var swiperTesti = new Swiper(".bottom-testimonials", {
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 1, 
    speed: 1500,
    navigation: {
        nextEl: ".testi-next", 
        prevEl: ".testi-prev"  
    },
    pagination: {
        el: ".testi-pagination",
        clickable: true
    }
});
var swiperBrands = new Swiper(".brands", {
    loop: true,
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween:50, 
    speed: 1500,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false 
    }
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
