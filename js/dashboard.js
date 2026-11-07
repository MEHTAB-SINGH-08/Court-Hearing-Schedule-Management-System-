
const searchInput = document.getElementById("searchInput");

const tableRows = document.querySelectorAll(
    ".hearing-section table tr"
);

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    tableRows.forEach(function (row, index) {

        if (index === 0) return;

        const rowText = row.textContent.toLowerCase();

        if (rowText.includes(searchText)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

});
