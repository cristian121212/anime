document.addEventListener('DOMContentLoaded', function() {
  const formElement = document.getElementById('myForm');
  const savedInputsElement = document.getElementById('savedInputs');
  const averageElement = document.getElementById('averagePage19');

  // Load the saved inputs on page load
  const savedInputs = JSON.parse(localStorage.getItem('savedInputsPage19')) || [];
  savedInputs.forEach(function(input, index) {
    createInputItem(input, index);
  });

  // Save the input to local storage on form submission
  formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputElement = document.getElementById('input');
    const inputValue = inputElement.value;
  
    const savedInputs = JSON.parse(localStorage.getItem('savedInputsPage19')) || [];
    if (savedInputs.length >= 4) {
      alert('You have reached the maximum limit of 4 ratings!');
      return; // Ieși din funcție pentru a nu salva evaluarea
    }
  
    if (inputValue.trim() !== '') {
      savedInputs.push(parseFloat(inputValue));
      localStorage.setItem('savedInputsPage19', JSON.stringify(savedInputs));
  
      createInputItem(inputValue, savedInputs.length - 1);
  
      inputElement.value = '';
      calculateAverage(savedInputs);
    }
  });

  // Create an input item element
  function createInputItem(input, index) {
    const liElement = document.createElement('li');
    const spanElement = document.createElement('span');
    const editButton = document.createElement('button');

    spanElement.textContent = input;
    editButton.textContent = 'Edit';

    editButton.addEventListener('click', function() {
      editInput(index);
    });

    liElement.appendChild(spanElement);
    liElement.appendChild(editButton);

    savedInputsElement.appendChild(liElement);

    calculateAverage(savedInputs);
  }

  // Edit the input at the given index
  function editInput(index) {
    const savedInputs = JSON.parse(localStorage.getItem('savedInputsPage19')) || [];

    if (index >= 0 && index < savedInputs.length) {
      const newInput = prompt('Edit the rating:', savedInputs[index]);

      if (newInput !== null) {
        savedInputs[index] = parseFloat(newInput);
        localStorage.setItem('savedInputsPage19', JSON.stringify(savedInputs));

        refreshSavedInputs();

        calculateAverage(savedInputs);
      }
    }
  }

  // Refresh the display of saved inputs
  function refreshSavedInputs() {
    savedInputsElement.innerHTML = '';
  
    const savedInputs = JSON.parse(localStorage.getItem('savedInputsPage19')) || [];
    const limitedInputs = savedInputs.slice(0, 4); // Se selectează primele 4 evaluări
    limitedInputs.forEach(function(input, index) {
      createInputItem(input, index);
    });
  }

  // Calculate and display the average of saved inputs
  function calculateAverage(inputs) {
    const sum = inputs.reduce(function(total, input) {
      return total + input;
    }, 0);
    const average = sum / inputs.length;
    averageElement.textContent = '' + average.toFixed(2);
  }

  const reviewInputElement = document.getElementById('reviewInput');
  const saveReviewButton = document.getElementById('saveReviewButton');
  const savedReviewsElement = document.getElementById('savedReviews');
  
  // Load the saved review on page load
  const savedReview = localStorage.getItem('savedReviewPage19');
  if (savedReview) {
    createReviewItem(savedReview);
    reviewInputElement.style.display = 'none';
    saveReviewButton.style.display = 'none';
  }

  // Save the review to local storage on button click
  saveReviewButton.addEventListener('click', function(event) {
    const review = reviewInputElement.value.trim();
    if (review !== '') {
      localStorage.setItem('savedReviewPage19', review);

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
      localStorage.removeItem('savedReviewPage19');
    }
  });
});