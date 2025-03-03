// Services

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

// Testimonies

function testimonyOpenPopup(element) {
    // Get data attributes from clicked element
    var imageSrc = element.getAttribute("data-image");
    var videoSrc = element.getAttribute("data-video");
    var title = element.getAttribute("data-keyword");
    var description = element.getAttribute("data-description");

    // Set modal content
    document.getElementById("testimony-popup-image").src = imageSrc;
    document.getElementById("testimony-popup-title").textContent = title;
    document.getElementById("testimony-popup-description").textContent = description;
    document.getElementById("testimony-popup-video").src = videoSrc;

    // Show modal
    document.getElementById("testimony-overlay").style.display = "block";
    document.getElementById("testimony-popup").style.display = "block";
}

function testimonyClosePopup() {
    // Hide modal
    document.getElementById("testimony-overlay").style.display = "none";
    document.getElementById("testimony-popup").style.display = "none";

    // Stop video playback by resetting the iframe source
    document.getElementById("testimony-popup-video").src = "";
}
