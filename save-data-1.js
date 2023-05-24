document.addEventListener('DOMContentLoaded', function() {
  const formElement = document.getElementById('myForm');
  const savedInputsElement = document.getElementById('savedInputs');
  const averageElement = document.getElementById('average');

  // Load the saved inputs on page load
  const savedInputs = JSON.parse(localStorage.getItem('savedInputsPage2')) || [];
  savedInputs.forEach(function(input, index) {
    createInputItem(input, index);
  });

  // Save the input to local storage on form submission
  formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputElement = document.getElementById('input');
    const inputValue = inputElement.value;

    if (inputValue.trim() !== '') {
      const savedInputs = JSON.parse(localStorage.getItem('savedInputsPage2')) || [];
      savedInputs.push(parseFloat(inputValue));
      localStorage.setItem('savedInputsPage2', JSON.stringify(savedInputs));

      createInputItem(inputValue, savedInputs.length - 1);

      inputElement.value = '';
      alert('Input salvat cu succes!');
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
    const savedInputs = JSON.parse(localStorage.getItem('savedInputsPage2')) || [];

    if (index >= 0 && index < savedInputs.length) {
      const newInput = prompt('Edit the input:', savedInputs[index]);

      if (newInput !== null) {
        savedInputs[index] = parseFloat(newInput);
        localStorage.setItem('savedInputsPage2', JSON.stringify(savedInputs));

        refreshSavedInputs();

        alert('Input edited successfully!');
        calculateAverage(savedInputs);
      }
    }
  }

  // Refresh the display of saved inputs
  function refreshSavedInputs() {
    savedInputsElement.innerHTML = '';

    const savedInputs = JSON.parse(localStorage.getItem('savedInputsPage2')) || [];
    savedInputs.forEach(function(input, index) {
      createInputItem(input, index);
    });
  }

  // Calculate and display the average of saved inputs
  function calculateAverage(inputs) {
    const sum = inputs.reduce(function(total, input) {
      return total + input;
    }, 0);
    const average = sum / inputs.length;
    averageElement.textContent = 'Average: ' + average.toFixed(2);
  }
});
