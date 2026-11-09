
const calendarDays = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");
const hearingDetails = document.getElementById("hearingDetails");

const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentDate = new Date();
let selectedDate = "";

const hearings = [
    {
        date: "2026-11-10",
        caseId: "CS-101",
        title: "State vs. Sharma",
        time: "10:30 AM",
        courtroom: "Room 02",
        status: "upcoming"
    },
    {
        date: "2026-11-08",
        caseId: "CS-102",
        title: "Singh vs. State",
        time: "11:00 AM",
        courtroom: "Room 04",
        status: "completed"
    },
    {
        date: "2026-11-12",
        caseId: "CS-103",
        title: "Verma vs. Verma",
        time: "02:00 PM",
        courtroom: "Room 01",
        status: "postponed"
    },
    {
        date: "2026-11-14",
        caseId: "CS-104",
        title: "State vs. Kumar",
        time: "12:30 PM",
        courtroom: "Room 03",
        status: "upcoming"
    }
];

function renderCalendar() {

    calendarDays.innerHTML = "";

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYear.textContent = currentDate.toLocaleString("en-US", {
        month: "long",
        year: "numeric"
    });

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    // Empty spaces before the first day
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("calendar-day", "empty");
        calendarDays.appendChild(emptyCell);
    }

    // Create the actual dates
    for (let day = 1; day <= totalDays; day++) {

        const dayCell = document.createElement("div");
        dayCell.classList.add("calendar-day");

        const dateString =
            year + "-" +
            String(month + 1).padStart(2, "0") + "-" +
            String(day).padStart(2, "0");

        const dayNumber = document.createElement("div");
        dayNumber.classList.add("day-number");
        dayNumber.textContent = day;

        dayCell.appendChild(dayNumber);

        // Highlight today's date
        const today = new Date();

        if (
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            dayCell.classList.add("today");
        }

        // Highlight selected date
        if (dateString === selectedDate) {
            dayCell.classList.add("selected");
        }

        // Display hearings on this date
        const dayHearings = hearings.filter(function(hearing) {
            return hearing.date === dateString;
        });

        dayHearings.forEach(function(hearing) {
            const event = document.createElement("div");
            event.classList.add("calendar-event", hearing.status + "-event");
            event.textContent = hearing.caseId;
            dayCell.appendChild(event);
        });

        // Select a date
        dayCell.addEventListener("click", function() {
            selectedDate = dateString;
            renderCalendar();
            showHearings(dateString);
        });

        calendarDays.appendChild(dayCell);
    }
}

function showHearings(dateString) {

    const selectedHearings = hearings.filter(function(hearing) {
        return hearing.date === dateString;
    });

    if (selectedHearings.length === 0) {
        hearingDetails.innerHTML = "<p>No hearings scheduled for this date.</p>";
        return;
    }

    hearingDetails.innerHTML = "";

    selectedHearings.forEach(function(hearing) {

        const hearingItem = document.createElement("div");
        hearingItem.classList.add("selected-hearing");

        hearingItem.innerHTML =
            "<strong>" + hearing.caseId + " | " + hearing.title + "</strong>" +
            "<span>" + hearing.time + " | " +
            hearing.courtroom + " | " +
            hearing.status + "</span>";

        hearingDetails.appendChild(hearingItem);
    });
}

// Previous month
prevMonth.addEventListener("click", function() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    selectedDate = "";
    hearingDetails.innerHTML = "<p>Select a date to view its hearings.</p>";
    renderCalendar();
});

// Next month
nextMonth.addEventListener("click", function() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    selectedDate = "";
    hearingDetails.innerHTML = "<p>Select a date to view its hearings.</p>";
    renderCalendar();
});

// Initial calendar
renderCalendar();
