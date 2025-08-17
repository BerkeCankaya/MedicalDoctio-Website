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
            messageElement.style.display = "flex"; // Mesajı görünür yap
            messageElement.style.border = "2px solid white"; // Border ekle
            messageElement.style.color = "white";
        } else {
            messageElement.textContent = "Form başarıyla gönderildi!";
            messageElement.style.display = "flex"; // Mesajı görünür yap
            messageElement.style.border = "2px solid white"; // Border ekle
            messageElement.style.color = "white";
        }
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