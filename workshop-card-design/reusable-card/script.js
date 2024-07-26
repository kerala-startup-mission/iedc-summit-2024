document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-container');

    const data = [
        {
            title: "Drone Technology",
            speaker: "Tony Stark",
            date: "24th Aug",
            time: "1pm",
            imageUrl: "../images/workshop2.jpg"
        },
        {
            title: "Robotics",
            speaker: "Bruce Wayne",
            date: "27.07",
            time: "2pm",
            imageUrl: "../images/workshop3.jpg"
        },{
            title: "Industry 4.0",
            speaker: "Tony Stark",
            date: "26.07",
            time: "1pm",
            imageUrl: "../images/workshop2.jpg"
        },{
            title: "Al & Machine Learning",
            speaker: "Tony Stark",
            date: "26.07",
            time: "1pm",
            imageUrl: "../images/workshop2.jpg"
        },
        // Add more items as needed
    ];

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <div class="poster">
                <img src="${item.imageUrl}" alt="${item.title}">
            </div>
            <div class="details">
                <h1>${item.title}</h1>
                <p>${item.speaker}</p>
                <div class="time">${item.date} &nbsp; <span>|</span> &nbsp; ${item.time}</div>
                <button>Register</button>
                <img src="../images/barcode.png" class="barcode" alt="Barcode">
            </div>
        `;

        cardContainer.appendChild(card);
    });
});