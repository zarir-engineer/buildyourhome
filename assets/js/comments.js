document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("commentForm");
    const messageBox = document.getElementById("commentMessage");
    const popup = document.getElementById("commentPopup");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevents page reload

        const formData = new FormData(form);
        const commentData = {
            slug: formData.get("options[slug]"),
            name: formData.get("fields[name]"),
            email: formData.get("fields[email]"),
            comment: formData.get("fields[comment]"),
            date: new Date().toISOString()
        };

        try {
            const response = await fetch("https://jekyll-comments-backend.onrender.com/comments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(commentData)
            });

            const result = await response.json();

            if (result.success) {
                messageBox.innerText = "Comment submitted successfully!";

                // Clear the form fields
                form.reset();

                // Show popup
                popup.style.display = "block";

                // Optionally, reload comments (without page refresh)
                loadComments(commentData.slug);
            } else {
                messageBox.innerText = "Error submitting comment.";
                popup.style.display = "block";
            }

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

// (Optional) Function to reload comments without refreshing
async function loadComments(slug) {
    console.log("Loading comments for slug:", slug); // Debugging log

    try {
        const response = await fetch(`https://jekyll-comments-backend.onrender.com/comments/${slug}?t=${Date.now()}`);
        const comments = await response.json();

        console.log("Fetched comments:", comments); // Debugging log

        const commentsContainer = document.querySelector(".comments");
        if (!commentsContainer) {
            console.error("Comments container not found!");
            return;
        }

        commentsContainer.innerHTML = ""; // Clear old comments

        comments.forEach(comment => {
            commentsContainer.innerHTML += `
                <li class="comment comment-item">
                    <div class="comment-box">
                        <img src="/assets/images/avatar.png" class="avatar" alt="">
                        <div class="comment-box__body">
                            <h5 class="comment-box__details">${comment.name} <span>${comment.date}</span></h5>
                            <p>${comment.comment}</p>
                        </div>
                    </div>
                </li>
            `;
        });

        console.log("Comments updated successfully"); // Debugging log

    } catch (error) {
        console.error("Error loading comments:", error);
    }
}
