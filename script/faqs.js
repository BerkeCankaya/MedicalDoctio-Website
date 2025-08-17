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
function Faqs2Comments(index) {
  var content = document.getElementById("faqs2-faq-" + index);
  var icon = document.querySelector(`#faqs2-btn-${index} i`);

  if (content.style.display === "block") {
    content.style.display = "none";
    icon.classList.remove("fa-angle-up");
    icon.classList.add("fa-angle-down");
    return;
  }

  var allContents = document.querySelectorAll(".faqs2-faq-content");
  var allIcons = document.querySelectorAll(".faqs2-faq-btn i");

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
function Faqs2Comments2(index) {
  var content = document.getElementById("faqs3-faq-" + index);
  var icon = document.querySelector(`#faqs3-btn-${index} i`);

  if (content.style.display === "block") {
    content.style.display = "none";
    icon.classList.remove("fa-angle-up");
    icon.classList.add("fa-angle-down");
    return;
  }

  var allContents = document.querySelectorAll(".faqs3-faq-content");
  var allIcons = document.querySelectorAll(".faqs3-faq-btn i");

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