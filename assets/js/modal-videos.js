function togglePopup() {
    let popup = document.getElementById("popup-content");
    let overlay = document.getElementById("overlay");
    let body = document.body;

    if (popup.style.display === "none" || popup.style.display === "") {
        popup.style.display = "block";
        overlay.style.display = "block";
        body.style.overflow = "hidden";
    } else {
        popup.style.display = "none";
        overlay.style.display = "none";
        body.style.overflow = "auto";
    }
}

function openPopup(element) {
    var keyword = element.getAttribute("data-keyword"); // Get the service name
    var description = element.getAttribute("data-description"); // Get description (optional)
    var image = element.getAttribute("data-image"); // Get image URL (optional)

    // Update modal content
    document.getElementById("popup-title").innerText = keyword;
    document.getElementById("popup-description").innerText = description || "More details coming soon...";

    // Update image if provided
    if (image) {
        document.getElementById("popup-image").style.backgroundImage = "url(" + image + ")";
    }

    // Show modal
    document.getElementById("popup-content").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function closePopup() {
    document.getElementById("popup-content").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}