const reviewModal = document.getElementById('reviewModal');
const reviewsContainer = document.getElementById('reviews-container');

// Fake default reviews
const reviews = [
    { name: "Ananya", rating: 5, comment: "The lip gloss is super glossy and lasts long! 💄" },
    { name: "Rhea", rating: 4, comment: "Loved the fragrance in your perfumes. Very classy!" },
    { name: "Tanya", rating: 5, comment: "The best skin serum I’ve ever used. Highly recommend!" },
    { name: "Simran", rating: 3, comment: "Lipstick was okay, could be better in texture." }
];

function displayReviews() {
    reviewsContainer.innerHTML = '';
    reviews.forEach(r => {
        const stars = '⭐'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
        reviewsContainer.innerHTML += `
            <div style="margin-bottom: 2vh; background: white; padding: 15px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                <p><strong>${r.name}</strong> — <span style="color: gold;">${stars}</span></p>
                <p style="color: #555;">${r.comment}</p>
            </div>
        `;
    });
}

function openReviewForm() {
    reviewModal.style.display = 'block';
}

function closeReviewForm() {
    reviewModal.style.display = 'none';
}

function submitReview() {
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    const rating = parseInt(document.getElementById("userRating").value);
    const comment = document.getElementById("userComment").value;

    if (!name || !email || !comment) {
        alert("Please fill in all fields.");
        return;
    }

    reviews.unshift({ name, rating, comment });
    displayReviews();
    closeReviewForm();
    alert("Thanks for your review!");
}

// Close on click outside modal
window.onclick = function(event) {
    if (event.target == reviewModal) {
        closeReviewForm();
    }
}

// On page load
displayReviews();
