
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("buyModal");
  var closeBtn = document.querySelector(".close");

  // Function to open the modal
  function openModal() {
    modal.style.display = "block";
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Event listener for close button
  closeBtn.addEventListener("click", closeModal);

  // Close modal if user clicks outside the content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Open modal after 1 second for demo purposes
  setTimeout(openModal, 1000);
});



document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("sellModal");
  var closeBtn = document.querySelector(".close");

  // Function to open the modal
  function openModal() {
    modal.style.display = "block";
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Event listener for close button
  closeBtn.addEventListener("click", closeModal);

  // Close modal if user clicks outside the content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Open modal after 1 second for demo purposes
  setTimeout(openModal, 1000);
});
