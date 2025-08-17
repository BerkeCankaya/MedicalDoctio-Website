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
/*Products Page and Products Count Paragraph*/
document.addEventListener("DOMContentLoaded", () => {
    let itemsPerPage = 9;
    let currentPage = 1;

    const getProducts = () => document.querySelectorAll(".products-card");

   const showPage = (page) => {
    const products = getProducts();
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    products.forEach((product, index) => {
        product.style.display = index >= start && index < end ? "flex" : "none";
    });

    const topListText = document.getElementById("topListText");
    if (topListText) {
        const totalItems = products.length;
        const startIndex = start + 1;
        const endIndex = Math.min(end, totalItems);
        topListText.textContent = `Showing ${startIndex}–${endIndex} of ${totalItems} results`;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
};


    const createPagination = () => {
        const products = getProducts();
        const totalPages = Math.ceil(products.length / itemsPerPage);
        const paginationContainer = document.getElementById("pagination");
        paginationContainer.innerHTML = "";

        const createButton = (innerHTML, onClick, classes = []) => {
            const button = document.createElement("button");
            button.innerHTML = innerHTML;
            button.classList.add(...classes);
            button.addEventListener("click", onClick);
            return button;
        };

        if (currentPage > 1) {
            paginationContainer.appendChild(
                createButton(`<i class="fa-solid fa-arrow-left-long"></i>`, () => changePage(currentPage - 1), ["nav-btn"])
            );
        }

        for (let i = Math.max(1, currentPage); i <= Math.min(totalPages, currentPage + 2); i++) {
            paginationContainer.appendChild(
                createButton(i, () => changePage(i), i === currentPage ? ["active"] : [])
            );
        }

        if (currentPage < totalPages) {
            paginationContainer.appendChild(
                createButton(`<i class="fa-solid fa-arrow-right-long"></i>`, () => changePage(currentPage + 1), ["nav-btn"])
            );
        }
    };

    const triggerLoadingScreen = () => {
        const loadingScreen = document.getElementById("loading-screen");
        loadingScreen.style.display = "flex";
        loadingScreen.style.opacity = "1";
        
    };

    const changePage = (page) => {
    triggerLoadingScreen();
    currentPage = page;
    setTimeout(() => {
        showPage(currentPage);
        createPagination();
        window.scrollTo({ top: 0, behavior: "smooth" });

    }, 500);
};


    showPage(currentPage);
    createPagination();
});
/*Products Sorting*/
document.addEventListener("DOMContentLoaded", () => {
    let itemsPerPage = 9;
    let currentPage = 1;
   let originalOrder = []; 

const getProducts = () => Array.from(document.querySelectorAll(".products-card"));

const sortProducts = (criteria) => {
    let products = getProducts();

    if (criteria === "default") {
        return [...originalOrder];
    } else if (criteria === "priceLowHigh") {
        return products.slice().sort((a, b) => 
            parseFloat(a.querySelector("#main-price").innerText.replace("$", "").trim()) - 
            parseFloat(b.querySelector("#main-price").innerText.replace("$", "").trim())
        );
    } else if (criteria === "priceHighLow") {
        return products.slice().sort((a, b) => 
            parseFloat(b.querySelector("#main-price").innerText.replace("$", "").trim()) - 
            parseFloat(a.querySelector("#main-price").innerText.replace("$", "").trim())
        );
    } else if (criteria === "popularity") {
        return products.slice().sort((a, b) => 
            parseInt(b.getAttribute("data-popularity")) - parseInt(a.getAttribute("data-popularity"))
        );
    } else if (criteria === "average") { 
        return products.slice().sort((a, b) => 
            parseFloat(b.getAttribute("data-rating")) - parseFloat(a.getAttribute("data-rating"))
        );
    }

    return products;
};

document.addEventListener("DOMContentLoaded", () => {
    originalOrder = getProducts(); 
});


    const createPagination = () => {
        const products = getProducts();
        const totalPages = Math.ceil(products.length / itemsPerPage);
        const paginationContainer = document.getElementById("pagination");
        paginationContainer.innerHTML = "";

        const createButton = (innerHTML, onClick, classes = []) => {
            const button = document.createElement("button");
            button.innerHTML = innerHTML;
            button.classList.add(...classes);
            button.addEventListener("click", onClick);
            return button;
        };

        if (currentPage > 1) {
            paginationContainer.appendChild(createButton(`<i class="fa-solid fa-arrow-left-long"></i>`, () => changePage(currentPage - 1), ["nav-btn"]));
        }

        for (let i = 1; i <= totalPages; i++) {
            paginationContainer.appendChild(createButton(i, () => changePage(i), i === currentPage ? ["active"] : []));
        }

        if (currentPage < totalPages) {
            paginationContainer.appendChild(createButton(`<i class="fa-solid fa-arrow-right-long"></i>`, () => changePage(currentPage + 1), ["nav-btn"]));
        }
    };
    document.getElementById("productsOptionSelect").addEventListener("change", (event) => {
    currentPage = 1; 
    const sortedProducts = sortProducts(event.target.value);
    const container = document.getElementById("productsList");

    const savedViewMode = localStorage.getItem("viewMode") || "grid";
    container.style.display = savedViewMode;

    container.innerHTML = ""; 

    sortedProducts.forEach(product => container.appendChild(product));
    createPagination(); 
    showPage(currentPage); 
    setTimeout(() => createPagination(), 100); 
});


   const showPage = (page) => {
    const products = getProducts();
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    products.forEach((product, index) => {
        product.style.display = index >= start && index < end ? "flex" : "none";
    });

    const topListText = document.getElementById("topListText");
    if (topListText) {
        const totalItems = products.length;
        const startIndex = start + 1;
        const endIndex = Math.min(end, totalItems);
        topListText.textContent = `Showing ${startIndex}–${endIndex} of ${totalItems} results`;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
};

    const changePage = (page) => {
        currentPage = page;
        showPage(currentPage);
        createPagination();
    };
    originalOrder = getProducts().slice();

    showPage(currentPage);
    createPagination();
});
document.addEventListener("DOMContentLoaded", () => {
    const savedViewMode = localStorage.getItem("viewMode") || "grid";
    const savedPage = parseInt(localStorage.getItem("currentPage")) || 1;
    applyViewMode(savedViewMode, savedPage);
});

document.getElementById("listView").addEventListener("click", function () {
    const currentPage = parseInt(localStorage.getItem("currentPage")) || 1;
    applyViewMode("list", currentPage);
});

document.getElementById("gridView").addEventListener("click", function () {
    const currentPage = parseInt(localStorage.getItem("currentPage")) || 1;
    applyViewMode("grid", currentPage);
});

function applyViewMode(mode, currentPage) {
    const productsList = document.querySelector(".products-list");
    const productsCards = document.querySelectorAll(".products-card");
    const cardImages = document.querySelectorAll(".card-image");
    const cardContent = document.querySelectorAll(".card-content");
    const productsText = document.querySelectorAll(".card-content p");
    const currentPageFixed = currentPage || parseInt(localStorage.getItem("currentPage")) || 1;
    const filteredProducts = Array.from(document.querySelectorAll(".products-card"))
    
        .filter(product => product.style.display !== "none");


    const itemsPerPage = 9;
    const start = (currentPageFixed - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    if (mode === "list") {
        productsList.style.display = "grid";
        productsList.style.gridTemplateColumns = "1fr";

        filteredProducts.forEach((card, index) => {
            card.style.display = index >= start && index < end ? "flex" : "none";
            card.style.flexDirection = "row";
        });

        cardImages.forEach(image => {
            image.style.width = "31%";
            image.style.height = "auto";
        });

        cardContent.forEach(content => {
            content.style.width = "69%";
            content.style.height = "auto";
        });

        productsText.forEach(text => {
            text.style.display = "flex";
        });

    } else { 
        productsList.style.display = "grid";
        productsList.style.gridTemplateColumns = "repeat(3, 1fr)";

        filteredProducts.forEach((card, index) => {
            card.style.display = index >= start && index < end ? "flex" : "none";
            card.style.flexDirection = "column";
        });

        cardImages.forEach(image => {
            image.style.width = "100%";
            image.style.height = "auto";
        });

        productsText.forEach(text => {
            text.style.display = "none";
        });
    }

    localStorage.setItem("viewMode", mode);
    localStorage.setItem("currentPage", currentPageFixed);
}

/*Filter*/
document.addEventListener("DOMContentLoaded", () => {
    let min = 0;
    let max = 200;
    let values = [30, 90];
    let isDragging = null;
    
    const sliderTrack = document.getElementById("sliderTrack");
    const sliderRange = document.getElementById("sliderRange");
    const leftHandle = document.getElementById("leftHandle");
    const rightHandle = document.getElementById("rightHandle");
    const priceDisplay = document.getElementById("priceDisplay");
    const filterButton = document.getElementById("filterButton");
    const products = document.querySelectorAll(".products-card");

    function getProductPrices() {
        let prices = [];
        products.forEach(product => {
            const priceText = product.querySelector("#main-price").innerText;
            let extractedPrices = priceText.match(/\d+/g).map(Number); 
            prices = prices.concat(extractedPrices);
        });

        min = Math.min(...prices);
        max = Math.max(...prices);
        values = [min, max];

        document.querySelector(".from").textContent = `$${min}`;
        document.querySelector(".to").textContent = `$${max}`;
    }

    function getPercentage(value) {
        return ((value - min) / (max - min)) * 100;
    }

    function getValue(percentage) {
        const value = (percentage / 100) * (max - min) + min;
        return Math.round(Math.max(min, Math.min(max, value)));
    }

    function updateDisplay() {
        const leftPercentage = getPercentage(values[0]);
        const rightPercentage = getPercentage(values[1]);

        sliderRange.style.left = leftPercentage + "%";
        sliderRange.style.width = (rightPercentage - leftPercentage) + "%";

        leftHandle.style.left = leftPercentage + "%";
        rightHandle.style.left = rightPercentage + "%";

        priceDisplay.textContent = `Price: $${values[0]} — $${values[1]}`;
    }

    function startDragging(event, handleType) {
        isDragging = handleType;
    }

    function stopDragging() {
        isDragging = null;
    }

    function handleDrag(event) {
        if (isDragging === null) return;

        const rect = sliderTrack.getBoundingClientRect();
        const percentage = ((event.clientX - rect.left) / rect.width) * 100;
        let newValue = getValue(percentage);

        newValue = Math.round(newValue / 10) * 10;

        if (isDragging === 0) {
            values[0] = Math.min(newValue, values[1] - 10);
        } else {
            values[1] = Math.max(newValue, values[0] + 10);
        }

        updateDisplay();
    }
    function filterProducts() {
    filterButton.disabled = true;

    setTimeout(() => {
        const filteredProducts = [];

        products.forEach(product => {
            const priceText = product.querySelector("#main-price").innerText;
            let extractedPrices = priceText.match(/\d+(\.\d{1,2})?/g)?.map(Number) || [];

            if (extractedPrices.length === 0) return; 

            let productPrice = extractedPrices.length === 1 ? extractedPrices[0] : Math.min(...extractedPrices);

            if (productPrice >= values[0] && productPrice <= values[1]) {
                product.style.display = "block"; 
                filteredProducts.push(product); 
            } else {
                product.style.display = "none";
            }
        });

        const itemsPerPage = 9;
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        const paginationContainer = document.getElementById("pagination");

        paginationContainer.innerHTML = ""; 

        if (filteredProducts.length > itemsPerPage) {
            for (let i = 1; i <= totalPages; i++) {
                const button = document.createElement("button");
                button.textContent = i;
                button.addEventListener("click", () => changePage(i, filteredProducts, itemsPerPage));
                paginationContainer.appendChild(button);
            }
            paginationContainer.style.display = "flex"; 
        } else {
            paginationContainer.style.display = "none"; 
        }

        changePage(1, filteredProducts, itemsPerPage);

        filterButton.disabled = false;
        filterButton.textContent = "Filter";

        console.log(`Filtering products with price range: $${values[0]} - $${values[1]} | Showing ${filteredProducts.length} results`);
    }, 1000);
}
function changePage(page, filteredProducts, itemsPerPage) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    filteredProducts.forEach((product, index) => {
        product.style.display = index >= start && index < end ? "flex" : "none";
        product.style.flexDirection = "column";
    });

    window.scrollTo({ top: 0, behavior: "smooth" });

    const paginationButtons = document.querySelectorAll("#pagination button");
    paginationButtons.forEach(button => button.classList.remove("active")); 

    const activeButton = paginationButtons[page - 1]; 
    if (activeButton) {
        activeButton.classList.add("active");
    }
}
    leftHandle.addEventListener("mousedown", (e) => startDragging(e, 0));
    rightHandle.addEventListener("mousedown", (e) => startDragging(e, 1));
    document.addEventListener("mouseup", stopDragging);
    document.addEventListener("mousemove", handleDrag);
    filterButton.addEventListener("click", filterProducts);

    getProductPrices();
    updateDisplay();
});

