function chooseVocabulary() {
    let vocabulary = document.getElementById("vocabulary").value;
    localStorage.setItem("vocabulary", vocabulary);
    window.location.href = "routine.html";
}