//function togglePopup() {
//    let popup = document.getElementById("popup-content");
//    let overlay = document.getElementById("overlay");
//    let body = document.body;
//
//    if (popup.style.display === "none" || popup.style.display === "") {
//        popup.style.display = "block";
//        overlay.style.display = "block";
//        body.style.overflow = "hidden";
//    } else {
//        popup.style.display = "none";
//        overlay.style.display = "none";
//        body.style.overflow = "auto";
//    }
//}

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


// Open modal functionality
document.querySelectorAll('.open-modal').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    document.body.classList.add('no-scroll');  // Disable scrolling
  });
});

//document.querySelectorAll(".open-modal").forEach(item => {
//    item.addEventListener("click", function(event) {
//        event.preventDefault();
//        let modalId = this.getAttribute("data-modal");
//        document.getElementById(modalId).style.display = "block";
//    });
//});

// Close modal functionality
document.querySelectorAll('.close').forEach((button) => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    document.body.classList.remove('no-scroll');  // Enable scrolling

  });
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
  document.querySelectorAll('.modal').forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  document.body.classList.remove('no-scroll');  // Enable scrolling

  });
});
