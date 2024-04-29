// Get form element
const loginForm = document.getElementById('loginForm');

// Add event listener to form submit
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  // Get input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform login request (you can use fetch or any AJAX library)
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.text())
  .then(data => {
    // Handle response from the server
    console.log(data);
    // You can redirect to another page or show a success message
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle error
  });
});
