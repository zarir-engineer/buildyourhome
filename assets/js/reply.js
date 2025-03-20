function showReplyForm(commentId) {
  // Hide all other reply forms
  document.querySelectorAll(".reply-form").forEach(form => form.classList.add("hidden"));

  // Show the selected reply form
  const replyForm = document.getElementById(`reply-form-${commentId}`);
  if (replyForm) {
    replyForm.classList.remove("hidden");
  }
}
