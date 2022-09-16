function showHide(id) {
    let elem = document.getElementById("parish_" + id);
    if (elem.style.display === "none") {
	elem.style.display = "flex";
    } else {
	elem.style.display = "none";
    }
}
