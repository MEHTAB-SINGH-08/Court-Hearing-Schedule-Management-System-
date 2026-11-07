
const hearingForm = document.getElementById("hearingForm");

hearingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const caseId = document.getElementById("caseId").value;
    const caseTitle = document.getElementById("caseTitle").value;

    alert(
        "Hearing Added Successfully!\n\n" +
        "Case ID: " + caseId +
        "\nCase Title: " + caseTitle
    );

    hearingForm.reset();

});
