// Put this once, at the top level (not inside any function)
emailjs.init("uogRpDzNnRRcuazrF");   // ← your actual public key

// Form submit handler
document.getElementById("contact-form").addEventListener("submit", function(event) {
    
    event.preventDefault();

    const submitBtn = this.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    emailjs.sendForm('service_dhea8ol', 'template_4j1c34p', this)
        .then((response) => {
            console.log('Email sent successfully!', response);
            alert("Thank you! Your message has been sent.");
            this.reset();
        })
        .catch((error) => {
            console.error('Send failed:', error);
            alert("Sorry, something went wrong. Please try again later.");
        })
        .finally(() => {
            if (submitBtn) submitBtn.disabled = false;
        });
});
