
function openModal(event, modalId) {
    event.preventDefault(); // Prevents page jump
    document.getElementById(modalId).classList.add("active");
}

function closeModal() {
    document.querySelector(".modal-overlay").classList.remove("active");
}