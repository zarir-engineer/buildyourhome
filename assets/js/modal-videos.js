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


//
//// Close modal functionality
//document.querySelectorAll('.close').forEach((button) => {
//  button.addEventListener('click', () => {
//    const modalId = button.getAttribute('data-modal');
//    const modal = document.getElementById(modalId);
//    modal.style.display = 'none';
//    document.body.classList.remove('no-scroll');  // Enable scrolling
//
//  });
//});
//
//// Close modal when clicking outside of it
//window.addEventListener('click', (event) => {
//  document.querySelectorAll('.modal').forEach((modal) => {
//    if (event.target === modal) {
//      modal.style.display = 'none';
//    }
//  document.body.classList.remove('no-scroll');  // Enable scrolling
//
//  });
//});
