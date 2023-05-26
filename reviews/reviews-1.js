document.addEventListener('DOMContentLoaded', function() {
  const reviewInputElement = document.getElementById('reviewInput');
  const saveReviewButton = document.getElementById('saveReviewButton');
  const savedReviewsElement = document.getElementById('savedReviews');
  
  // Load the saved review on page load
  const savedReview = localStorage.getItem('savedReviewPage2');
  if (savedReview) {
    createReviewItem(savedReview);
    reviewInputElement.style.display = 'none';
    saveReviewButton.style.display = 'none';
  }

  // Save the review to local storage on button click
  saveReviewButton.addEventListener('click', function(event) {
    const review = reviewInputElement.value.trim();
    if (review !== '') {
      localStorage.setItem('savedReviewPage2', review);

      createReviewItem(review);
      reviewInputElement.style.display = 'none';
      saveReviewButton.style.display = 'none';
    }
  });

  // Create a review item element
  function createReviewItem(review) {
    const pElement = document.createElement('p');
    pElement.textContent = review;
    savedReviewsElement.appendChild(pElement);
  }
  
  // Enable editing the review
  savedReviewsElement.addEventListener('click', function(event) {
    const reviewElement = event.target;
    if (reviewElement.tagName === 'P') {
      reviewInputElement.style.display = 'block';
      saveReviewButton.style.display = 'block';
      reviewInputElement.value = reviewElement.textContent;
      reviewElement.remove();
      localStorage.removeItem('savedReviewPage2');
    }
  });
});
