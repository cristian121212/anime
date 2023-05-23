document.addEventListener('DOMContentLoaded', function() {
  const formElement = document.getElementById('myForm');
  const savedInputsElements = [
    document.getElementById('savedInputs1'),
    document.getElementById('savedInputs2'),
    document.getElementById('savedInputs3'),
    document.getElementById('savedInputs4')
  ];

  // Load the saved inputs on page load
  const savedInputs = JSON.parse(localStorage.getItem('savedInputs')) || [];
  savedInputs.forEach(function(input, index) {
    createInputItem(input, index);
  });

  // Save the input to local storage on form submission
  formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputElement = document.getElementById('input');
    const inputValue = inputElement.value;

    if (inputValue.trim() !== '') {
      const savedInputs = JSON.parse(localStorage.getItem('savedInputs')) || [];
      savedInputs.push(parseFloat(inputValue));
      localStorage.setItem('savedInputs', JSON.stringify(savedInputs));

      createInputItem(inputValue, savedInputs.length - 1);

      inputElement.value = '';
      alert('Input saved successfully!');
      calculateAverage(savedInputs);
    }
  });

  // Create an input item element with remove and edit buttons
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

    // Determine the target saved inputs element based on index
    const targetIndex = index % savedInputsElements.length;
    savedInputsElements[targetIndex].appendChild(liElement);

    calculateAverage(savedInputs);
  }

  // Edit the input at the given index
  function editInput(index) {
    const savedInputs = JSON.parse(localStorage.getItem('savedInputs')) || [];

    if (index >= 0 && index < savedInputs.length) {
      const newInput = prompt('Edit the input:', savedInputs[index]);

      if (newInput !== null) {
        savedInputs[index] = parseFloat(newInput);
        localStorage.setItem('savedInputs', JSON.stringify(savedInputs));

        refreshSavedInputs();

        alert('Input edited successfully!');
        calculateAverage(savedInputs);
      }
    }
  }

  // Refresh the display of saved inputs in all target elements
  function refreshSavedInputs() {
    savedInputsElements.forEach(function(element) {
      element.innerHTML = '';
    });

    const savedInputs = JSON.parse(localStorage.getItem('savedInputs')) || [];
    savedInputs.forEach(function(input, index) {
      createInputItem(input, index);
    });
  }

  // Calculate and display the average of saved inputs
  function calculateAverage(inputs) {
    const averageElement = document.getElementById('average');
    const sum = inputs.reduce(function(total, input) {
      return total + input;
    }, 0);
    const average = sum / inputs.length;
    averageElement.textContent = 'Average: ' + average.toFixed(2);
  }
});