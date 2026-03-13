const stars = document.querySelectorAll('.star');
const message = document.getElementById('rating-message');
let currentRating = 0; // Stores the clicked rating

stars.forEach(star => {
    // 1. Handle clicking to set the rating
    star.addEventListener('click', () => {
        currentRating = star.getAttribute('data-value');
        message.innerText = `You rated us ${currentRating} out of 5 stars. Thank you!`;
    });

    // 2. Handle hovering over the stars
    star.addEventListener('mouseover', () => {
        const hoverValue = star.getAttribute('data-value');
        highlightStars(hoverValue);
    });

    // 3. Handle moving the mouse away
    star.addEventListener('mouseout', () => {
        highlightStars(currentRating); // Revert to the clicked rating
    });
});

// Function to color the stars gold up to a certain point
function highlightStars(ratingValue) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= ratingValue) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}