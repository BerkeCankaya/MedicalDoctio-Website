const buttons = document.querySelectorAll('.details-btns a');
const contents = document.querySelectorAll('#doctor-details-panel > div');
buttons.forEach(button => {
  button.addEventListener('click', e => {
    e.preventDefault();

    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const tab = button.getAttribute('data-tab');

    contents.forEach(content => {
      if (content.getAttribute('data-content') === tab) {
        content.style.display = content.getAttribute('data-display'); 
      } else {
        content.style.display = 'none';
      }
    });
  });
});
flatpickr("#dateInput", {
    dateFormat: "d.m.Y",
    allowInput: true
  }); 

  function validateForm() {
        const name = document.getElementById("name").value;
        const mail = document.getElementById("mail").value;
        const service = document.getElementById("serviceSelect").value;
        const doctor = document.getElementById("doctorsSelect").value;
        const date = document.getElementById("dateInput").value;
        const messageElement = document.getElementById("error-message");

        if (!service || !doctor || !date || !name || !mail) {
            messageElement.textContent = "One or more fields have an error. Please check and try again.";
            messageElement.style.display = "flex"; 
            messageElement.style.border = "2px solid green"; 
            messageElement.style.color = "green";
        } else {
            messageElement.textContent = "Form başarıyla gönderildi!";
            messageElement.style.display = "flex"; 
            messageElement.style.border = "2px solid green"; 
            messageElement.style.color = "green";
        }
    }
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