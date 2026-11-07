
const searchInput = document.getElementById("hearingSearch");
const statusFilter = document.getElementById("statusFilter");

const tableRows = document.querySelectorAll(
    ".hearing-section tbody tr"
);

function filterHearings() {

    const searchText = searchInput.value.toLowerCase();
    const selectedStatus = statusFilter.value;

    tableRows.forEach(function(row) {

        const rowText = row.textContent.toLowerCase();
        const rowStatus = row.querySelector(".status").textContent.toLowerCase();

        const matchesSearch = rowText.includes(searchText);
        const matchesStatus =
            selectedStatus === "all" || rowStatus === selectedStatus;

        if (matchesSearch && matchesStatus) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

}

searchInput.addEventListener("input", filterHearings);
statusFilter.addEventListener("change", filterHearings);
