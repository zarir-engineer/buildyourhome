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
    // Get the data attributes from the clicked element
    const title = element.getAttribute('data-keyword');
    const description = element.getAttribute('data-description');
    const image = element.getAttribute('data-image');

    // Update modal content
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-description').textContent = description;
    document.getElementById('popup-image').src = image;

    // Show the modal and overlay
    document.getElementById('popup-content').style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup-content').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Close modal on button click
document.getElementById('closeModalBtn').addEventListener('click', closePopup);

// Close modal when clicking outside of it (on the overlay)
document.getElementById('overlay').addEventListener('click', closePopup);
