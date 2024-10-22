document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        alert(`Thank you ${name}, your message has been sent!`);
        // Add your code to handle the form submission, like sending an email or storing the message.
    } else {
        alert('Please fill out all fields.');
    }
});
