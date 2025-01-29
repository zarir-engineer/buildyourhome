// Open modal functionality
document.querySelectorAll('.open-modal').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
  });
});

// Close modal functionality
document.querySelectorAll('.close').forEach((button) => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
  });
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
  document.querySelectorAll('.modal').forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

//        function openModal() {
//            let modal = document.getElementById('myModal');
//            modal.classList.add('custom-modal', 'show'); // Apply custom styles
//            modal.style.display = "block"; // Ensure it's visible
//            document.body.classList.add('modal-open'); // Prevent scrolling
//        }
//
//        function closeModal() {
//            let modal = document.getElementById('myModal');
//            modal.classList.remove('custom-modal', 'show');
//            modal.style.display = "none"; // Hide modal
//            document.body.classList.remove('modal-open'); // Restore scrolling
//        }