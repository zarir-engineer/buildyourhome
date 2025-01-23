<script>
  // Get modal elements
  const modal = document.getElementById("buyingModalLink");
  const openModal = document.querySelector(".open-modal");
  const closeModal = document.querySelector(".close");

  // Open modal on click
  openModal.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    modal.style.display = "block";
  });

  // Close modal on click
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
</script>
