function addUser() {
    if (document.getElementById("Player1Username").value != "" || document.getElementById("Player2Username").value != "") {
        localStorage.setItem("Player1Username", document.getElementById("Player1Username").value);
        localStorage.setItem("Player2Username", document.getElementById("Player2Username").value);
        window.location = "quiz.html"
    } else {
        window.alert("Please enter username(s)")
    }
}