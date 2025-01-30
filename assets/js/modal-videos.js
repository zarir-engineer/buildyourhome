//// Open modal functionality
//document.querySelectorAll('.open-modal').forEach((button) => {
//  button.addEventListener('click', (event) => {
//    event.preventDefault(); // Prevent default link behavior
//    const modalId = button.getAttribute('data-modal');
//    const modal = document.getElementById(modalId);
//    modal.style.display = 'block';
//  });
//});

//document.querySelectorAll(".open-modal").forEach(item => {
//    item.addEventListener("click", function(event) {
//        event.preventDefault();
//        let modalId = this.getAttribute("data-modal");
//        document.getElementById(modalId).style.display = "block";
//    });
//});
//
//// Close modal functionality
//document.querySelectorAll('.close').forEach((button) => {
//  button.addEventListener('click', () => {
//    const modalId = button.getAttribute('data-modal');
//    const modal = document.getElementById(modalId);
//    modal.style.display = 'none';
//  });
//});
//
//// Close modal when clicking outside of it
//window.addEventListener('click', (event) => {
//  document.querySelectorAll('.modal').forEach((modal) => {
//    if (event.target === modal) {
//      modal.style.display = 'none';
//    }
//  });
//});
//

// Get the modal
var modal = document.getElementById("buyModal");

// Get the button that opens the modal
var btn = document.getElementById("buymodallink");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}