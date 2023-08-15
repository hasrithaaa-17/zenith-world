document.addEventListener('DOMContentLoaded', () => {
    initReviewActions();
});

function initReviewActions() {
    // Handle star rating
    const starElements = document.querySelectorAll('.star-rating i');
    starElements.forEach(star => {
        star.addEventListener('mouseover', handleStarMouseOver);
        star.addEventListener('mouseout', handleStarMouseOut);
        star.addEventListener('click', handleStarClick);
    });

    // Handle review submission
    const reviewForm = document.querySelector('#review-form');
    reviewForm.addEventListener('submit', handleReviewSubmit);
}

function handleStarMouseOver(event) {
    const hoveredStar = event.target;
    highlightStarsUpTo(hoveredStar);
}

function handleStarMouseOut() {
    const currentlySelectedStar = document.querySelector('.star-rating i.selected');
    if (currentlySelectedStar) {
        highlightStarsUpTo(currentlySelectedStar);
    } else {
        removeAllStarHighlights();
    }
}

function handleStarClick(event) {
    const clickedStar = event.target;
    removeAllStarSelections();
    clickedStar.classList.add('selected');
    // Set the rating value in a hidden form field (assuming you have one)
    const ratingInput = document.querySelector('#rating-value');
    ratingInput.value = clickedStar.dataset.value;
}

function handleReviewSubmit(event) {
    event.preventDefault();
    // Grab review data
    const rating = document.querySelector('#rating-value').value;
    const reviewText = document.querySelector('#review-text').value;

    // Send the review data to server using AJAX (pseudo-code)
    // submitReviewToServer(rating, reviewText)

    // For this example, just show an alert
    alert(`Submitted review with rating: ${rating} and text: "${reviewText}"`);
}

function highlightStarsUpTo(star) {
    removeAllStarHighlights();
    let currentStar = star;
    while (currentStar) {
        currentStar.classList.add('highlighted');
        currentStar = currentStar.previousElementSibling;
    }
}

function removeAllStarHighlights() {
    document.querySelectorAll('.star-rating i').forEach(star => {
        star.classList.remove('highlighted');
    });
}

function removeAllStarSelections() {
    document.querySelectorAll('.star-rating i').forEach(star => {
        star.classList.remove('selected');
    });
}
