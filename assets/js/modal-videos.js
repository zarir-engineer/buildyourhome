function showModal() {
    document.getElementById('popup-content').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function hideModal() {
    document.getElementById('popup-content').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Example: Show modal when a button is clicked
document.getElementById('openModalBtn').addEventListener('click', showModal);
document.getElementById('overlay').addEventListener('click', hideModal);


//// Open modal functionality
//document.querySelectorAll('.open-modal').forEach((button) => {
//  button.addEventListener('click', (event) => {
//    event.preventDefault(); // Prevent default link behavior
//    const modalId = button.getAttribute('data-modal');
//    const modal = document.getElementById(modalId);
//    modal.style.display = 'block';
//    document.body.classList.add('no-scroll');  // Disable scrolling
//  });
//});

//document.querySelectorAll(".open-modal").forEach(item => {
//    item.addEventListener("click", function(event) {
//        event.preventDefault();
//        let modalId = this.getAttribute("data-modal");
//        document.getElementById(modalId).style.display = "block";
//    });
//});

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
