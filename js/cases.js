
const caseSearch = document.getElementById("caseSearch");
const caseStatusFilter = document.getElementById("caseStatusFilter");

const caseRows = document.querySelectorAll(
    ".hearing-section tbody tr"
);

function filterCases() {

    const searchText = caseSearch.value.toLowerCase();
    const selectedStatus = caseStatusFilter.value;

    caseRows.forEach(function(row) {

        const rowText = row.textContent.toLowerCase();

        const statusElement = row.querySelector(".case-status");
        const rowStatus = statusElement.textContent.toLowerCase();

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

caseSearch.addEventListener("input", filterCases);
caseStatusFilter.addEventListener("change", filterCases);
