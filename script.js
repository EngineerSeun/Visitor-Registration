document.getElementById("confirmation-button").onclick = function () {
    document.getElementById("validation-message").style.display = "block";

    if (document.getElementById("input-name").value == "") {
        document.getElementById("validation-message").style.color = "red";
        document.getElementById("validation-message").innerHTML = "Please enter your name.";
    } else {
        if (document.getElementById("input-license").value == "") {
            document.getElementById("validation-message").style.color = "red";
            document.getElementById("validation-message").innerHTML = "Please enter your Vehicle license.";
        } else {
            document.getElementById("validation-message").innerHTML = "Your registration has been submitted.";
            document.getElementById("validation-box").classList.add("success-box");
        }
    }
}