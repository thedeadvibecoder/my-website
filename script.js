function changeMessage() {

    document.getElementById("message").innerHTML =
        "The content has been changed dynamically using JavaScript!";
}


function showDate() {

    let currentDate = new Date();

    document.getElementById("date").innerHTML =
        "Current Date and Time: " + currentDate;
}