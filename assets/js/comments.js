document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("commentForm").addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const commentData = {
            slug: formData.get("options[slug]"),
            name: formData.get("fields[name]"),
            email: formData.get("fields[email]"),
            comment: formData.get("fields[comment]"),
            date: new Date().toISOString()
        };

        const response = await fetch("https://jekyll-comments-backend-production.up.railway.app/comments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(commentData)
        });

        const result = await response.json();
        document.getElementById("commentMessage").innerText = result.success
            ? "Comment submitted successfully!"
            : "Error submitting comment.";
    });
});
