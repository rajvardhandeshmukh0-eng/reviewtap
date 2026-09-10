const suggestionsBox = document.getElementById("suggestions");
const reviewBox = document.getElementById("review");
const copyButton = document.getElementById("copyBtn");
const googleButton = document.getElementById("googleBtn");
const message = document.getElementById("message");


// Create review suggestion buttons
config.suggestions.forEach(function(text) {

    const button = document.createElement("button");

    button.className = "suggestion";

    button.textContent = text;

    button.addEventListener("click", function() {

        reviewBox.value = text;

        message.textContent =
            "Suggestion added. You can edit it before posting.";

    });

    suggestionsBox.appendChild(button);

});


// Copy review
copyButton.addEventListener("click", function() {

    if (reviewBox.value.trim() === "") {

        message.textContent =
            "Please select a review suggestion first.";

        return;
    }

    navigator.clipboard.writeText(reviewBox.value);

    message.textContent =
        "Review copied! Now tap Post on Google.";

});


// Open Google Review page
googleButton.addEventListener("click", function() {

    if (reviewBox.value.trim() === "") {

        message.textContent =
            "Please select or write a review first.";

        return;
    }

    navigator.clipboard.writeText(reviewBox.value);

    if (
        config.googleReviewUrl ===
        "PASTE_GOOGLE_REVIEW_LINK_HERE"
    ) {

        message.textContent =
            "Google Review link is not configured yet.";

        return;
    }

    window.open(
        config.googleReviewUrl,
        "_blank"
    );

    message.textContent =
        "Review copied. Paste it into Google and post.";

});
