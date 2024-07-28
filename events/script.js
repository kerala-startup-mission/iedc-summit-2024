
const appendData = (container, data, emptyMessage, type = "event") => {
    if (data.length) {
        data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');


            if (type == "event") {
                card.innerHTML = `
                <div class="poster">
                    <img src="${item.posterImage}" alt="">
                </div>
                <div class="details">
                    <h1>${item.eventName}</h1>
                    <div class="time">Price: ${item.price} &nbsp; <span>|</span> &nbsp; Venue: ${item.venue}</div>
                    <div class="buttons">
                        <button> 
                            <a target="_blank" href="${item.linkToReg}"> Register </a>
                        </button>
                        <button>
                            <a target="_blank" href="${item.linkToGuidelines}"> View Guidelines </a>
                        </button>
                    </div>
                </div>
                `;
            }
            else if (type == "lecture") {
                card.innerHTML = `
                <div class="poster">
                    <img src="${item.posterImage}" alt="">
                </div>
                <div class="details">
                    <h1>${item.eventName}</h1>
                    <p> Speaker: ${item.speakerName} </p>
                    <div class="time">Price: ${item.price} &nbsp; <span>|</span> &nbsp; Venue: ${item.venue}</div>
                    <div class="buttons">
                        <button> 
                            <a target="_blank" href="${item.linkToReg}"> Register </a>
                        </button>
                    </div>
                </div>
                `;
            }
            else {
                card.innerHTML = `
                <div class="poster">
                    <img src="${item.posterImage}" alt="">
                </div>
                <div class="details">
                    <h1>${item.eventName}</h1>
                    <p> Conducted By: ${item.speakerName} </p>
                    <div class="time">Price: ${item.price} &nbsp; <span>|</span> &nbsp; Venue: ${item.venue}</div>
                    <div class="buttons">
                        <button> 
                            <a target="_blank" href="${item.linkToReg}"> Register </a>
                        </button>
                        <button>
                            <a target="_blank" href="${item.linkToGuidelines}"> View Guidelines </a>
                        </button
                    </div>
                </div>
                `
            }

            container.appendChild(card);
        });
    }
    else {
        container.appendChild(document.createTextNode(emptyMessage || 'No data available'));
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const eventCardsContainer = document.querySelector('#card-container .event-cards');
    const lectureCardsContainer = document.querySelector('#card-container .lecture-cards');
    const workshopsCardsContainer = document.querySelector('#card-container .workshop-cards');

    fetch("https://iedc-summit-backend.vercel.app/api/get-data")
        .then(res => res.json())
        .then(({ events, lectures, workshops }) => {
            console.log(events, lectures, workshops);
            appendData(eventCardsContainer, events, "No events available", "event")
            appendData(lectureCardsContainer, lectures, "No Lecutres available", "lecture");
            appendData(workshopsCardsContainer, workshops, "No Workshops available", "workshop");
        });

    const data = [
        {
            title: "Drone Technology",
            speaker: "Tony Stark",
            date: "24th Aug",
            time: "1pm",
            imageUrl: "images/workshop2.jpg"
        },
        {
            title: "Robotics",
            speaker: "Bruce Wayne",
            date: "27.07",
            time: "2pm",
            imageUrl: "images/workshop3.jpg"
        }, {
            title: "Industry 4.0",
            speaker: "Tony Stark",
            date: "26.07",
            time: "1pm",
            imageUrl: "images/workshop2.jpg"
        }, {
            title: "Al & Machine Learning",
            speaker: "Tony Stark",
            date: "26.07",
            time: "1pm",
            imageUrl: "images/workshop2.jpg"
        },
        // Add more items as needed
    ];


    // appendData(eventCardsContainer, data);
    // appendData(lectureCardsContainer, []);
    // appendData(workshopsCardsContainer, []);

});