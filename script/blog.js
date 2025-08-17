const swiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 1500, 
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

    const cardsPerPage = 4;
  const cards = Array.from(document.querySelectorAll('.blog-card'));
  const blogContent = document.getElementById('blog-content');
  const pagination = document.getElementById('pagination');

  let currentPage = 1;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

 function showPage(page) {
  blogContent.innerHTML = '';
  const start = (page - 1) * cardsPerPage;
  const end = start + cardsPerPage;
  const paginatedCards = cards.slice(start, end);

  paginatedCards.forEach(card => {
    blogContent.appendChild(card);
  });

 window.scrollTo({
  top: 0,
  behavior: 'smooth' 
});
  updatePagination();
}
function updatePagination() {
  pagination.innerHTML = '';

  if (currentPage > 1) {
    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '<i class="fa-solid fa-arrow-left-long"></i>'; 
    prevBtn.classList.add('pagination-btn');
    prevBtn.addEventListener('click', () => {
      currentPage--;
      showPage(currentPage);
    });
    pagination.appendChild(prevBtn);
  }

  // Sayfa numaraları
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.classList.add('pagination-btn');
    if (i === currentPage) btn.classList.add('active');
    btn.addEventListener('click', () => {
      currentPage = i;
      showPage(currentPage);
    });
    pagination.appendChild(btn);
  }

  if (currentPage < totalPages) {
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '<i class="fa-solid fa-arrow-right-long"></i>'; 
    nextBtn.classList.add('pagination-btn');
    nextBtn.addEventListener('click', () => {
      currentPage++;
      showPage(currentPage);
    });
    pagination.appendChild(nextBtn);
  }
}

  showPage(currentPage);

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