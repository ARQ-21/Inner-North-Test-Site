// Initialize EmailJS with your Public Key (do this once)
emailjs.init("DZsKNZGsH6sDcTERs");

// Add this to your form submit handler
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();   // Stop the form from reloading the page

    // Send the form using EmailJS SDK
    emailjs.sendForm('service_u3qqntf', 'template_6bbzgc7', this)
        .then(function(response) {
            console.log('Email sent successfully!', response.status, response.text);
            alert("Thank you! Your message has been sent.");
            // Optionally reset the form
            this.reset();
        })
        .catch(function(error) {
            console.error('Failed to send email:', error);
            alert("Sorry, something went wrong. Please try again later.");
        });
});