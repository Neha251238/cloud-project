// Select elements
const searchInput = document.querySelector(".hero input");
const searchBtn = document.querySelector(".hero button");
const serviceCards = document.querySelectorAll(".service-card");
const categories = document.querySelectorAll(".card");

// 🔍 Search Function
searchBtn.addEventListener("click", () => {
    const searchText = searchInput.value.toLowerCase();

    serviceCards.forEach(card => {
        const name = card.querySelector("h3").innerText.toLowerCase();

        if (name.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// 🎯 Category Filter
categories.forEach(category => {
    category.addEventListener("click", () => {
        const selected = category.innerText.toLowerCase();

        serviceCards.forEach(card => {
            const name = card.querySelector("h3").innerText.toLowerCase();

            if (name.includes(selected)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// 🛒 Book Now Button
const buttons = document.querySelectorAll(".service-card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const serviceName = button.parentElement.querySelector("h3").innerText;
        alert(`You have booked ${serviceName}`);
    });
});

// 🔄 Reset when input is cleared
searchInput.addEventListener("input", () => {
    if (searchInput.value === "") {
        serviceCards.forEach(card => {
            card.style.display = "block";
        });
    }
});
