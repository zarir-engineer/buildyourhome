console.log("comments.js loaded!");

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("commentForm");
    const messageBox = document.getElementById("commentMessage");
    const popup = document.getElementById("commentPopup");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const commentData = {
            slug: formData.get("options[slug]"),
            name: formData.get("fields[name]"),
            email: formData.get("fields[email]"),
            comment: formData.get("fields[comment]"),
            date: new Date().toISOString()
        };

        try {
            const response = await fetch("https://jekyll-comments-backend-production.up.railway.app/comments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(commentData)
            });

            const result = await response.json();
            messageBox.innerText = result.success
                ? "Comment submitted successfully!"
                : "Error submitting comment.";

            // Show the popup
            popup.style.display = "block";

        } catch (error) {
            messageBox.innerText = "An error occurred. Please try again.";
            popup.style.display = "block";
        }
    });
});

// Function to close the popup
function closePopup() {
    document.getElementById("commentPopup").style.display = "none";
}
