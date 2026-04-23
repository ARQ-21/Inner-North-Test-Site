// Make sure this line runs only once (put it outside the submit handler)
emailjs.init("DZsKNZGsH6sDcTERs");

document.getElementById("contact-form").addEventListener("submit", function(event) {
    
    event.preventDefault();        // ← Very important

    // Optional: disable the submit button while sending
    const submitBtn = this.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    emailjs.sendForm('service_u3qqntf', 'template_6bbzgc7', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Thank you! Your message has been sent.");
            this.reset();                    // Clear the form
        })
        .catch(function(error) {
            console.error('FAILED...', error);
            alert("Sorry, something went wrong. Please try again later.");
        })
        .finally(() => {
            // Re-enable the button
            if (submitBtn) submitBtn.disabled = false;
        });
});