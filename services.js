const services = [
    { name: "Plumber", price: "₹300", desc: "Fix leaks, pipes, and taps" },
    { name: "Electrician", price: "₹400", desc: "Wiring, fan, switch repair" },
    { name: "Cleaner", price: "₹250", desc: "Home and office cleaning" },
    { name: "Tutor", price: "₹500", desc: "Home tuition for students" },
    { name: "Mechanic", price: "₹350", desc: "Bike and car repair" },
    { name: "Painter", price: "₹600", desc: "House painting services" },
    {name: "Gardener", price: "₹200", desc: "Lawn mowing and gardening" },
    {name: "Carpenter", price: "₹450", desc: "Furniture repair and making" },
    {name: "Babysitter", price: "₹300", desc: "Child care services"},
    {name: "Laundry", price: "₹150", desc: "Clothes washing and ironing"},
    {name: "IT Support", price: "₹500", desc: "Computer and software help"},
    {name: "Pet Care", price: "₹250", desc: "Pet sitting and walking"},
    {name: "Home Decorator", price: "₹700", desc: "Interior decoration services"},
    {name: "Fitness Trainer", price: "₹400", desc: "Personal fitness training"},
    {name: "Event Planner", price: "₹1000", desc: "Party and event planning"},
    {name: "Massage Therapist", price: "₹600", desc: "Relaxing massage services"},
    {name: "Car Wash", price: "₹300", desc: "Home car washing and detailing"},
    {name: "Dentist", price: "₹500", desc: "Teeth cleaning and checkup"},
    {name: "Tailor", price: "₹350", desc: "Clothing alteration and stitching"},
    {name: "Photographer", price: "₹800", desc: "Event and portrait photography"},
    {name: "Yoga Instructor", price: "₹400", desc: "Personal yoga sessions"},
    {name: "Life Coach", price: "₹500", desc: "Personal development and coaching"},
    {name: "Chef", price: "₹400", desc: "Home cooking and meal preparation"},
    {name: "Translator", price: "₹300", desc: "Language translation services"},
    {name:"Maid", price: "₹250", desc: "House cleaning"}
];

const serviceList = document.getElementById("serviceList");
const modal = document.getElementById("bookingModal");
const closeBtn = document.querySelector(".close");

let selectedService = "";

// Display services
function displayServices() {
    services.forEach(service => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.desc}</p>
            <p><strong>${service.price}</strong></p>
            <button onclick="openModal('${service.name}')">Book Now</button>
        `;

        serviceList.appendChild(card);
    });
}

displayServices();

// Open modal
function openModal(serviceName) {
    selectedService = serviceName;
    modal.style.display = "block";
}

// Close modal
closeBtn.onclick = () => modal.style.display = "none";

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
};

// Confirm booking
function confirmBooking() {
    const name = document.getElementById("userName").value;
    const date = document.getElementById("date").value;

    if (!name || !date) {
        alert("Please fill all details");
        return;
    }

    alert(`Booking Confirmed!
Service: ${selectedService}
Name: ${name}
Date: ${date}`);

    modal.style.display = "none";
}