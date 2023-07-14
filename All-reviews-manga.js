const savedReviewPage25 = localStorage.getItem('savedReviewPage25');
const savedReviewPage26 = localStorage.getItem('savedReviewPage26');

if (!savedReviewPage25 && !savedReviewPage26){
  const noReviewsElement = document.createElement('p');
  noReviewsElement.textContent = 'În momentul de față nu ai salvat niciun comentariu.';
  noReviewsElement.classList.add('no-reviews');
  document.getElementById('allReviews').appendChild(noReviewsElement);
} else {
  if (savedReviewPage25) {
    createReviewItem(savedReviewPage25, 'The Beginning After the End');
  }

  if (savedReviewPage26) {
    createReviewItem(savedReviewPage26, 'SOLO LEVELING');
  }
  
}

function createReviewItem(review, page) {
  const divElement = document.createElement('div');
  const pElement = document.createElement('p');
  const pageElement = document.createElement('span');

  pElement.textContent = review;
  pageElement.textContent = `From: ${page}`;
  divElement.appendChild(pElement);
  divElement.appendChild(pageElement);
  document.getElementById('allReviews').appendChild(divElement);

  // Adăugăm clasa "review" la elementul de revizuire
  pElement.classList.add('review');
}