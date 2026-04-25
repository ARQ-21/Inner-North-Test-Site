// Put this once, at the top level (not inside any function)
emailjs.init("iK6sMdX2tyexsvGhA");   // ← your actual public key

// Form submit handler
document.getElementById("contact-form").addEventListener("submit", function(event) {
    
    event.preventDefault();

    const submitBtn = this.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    emailjs.sendForm('service_bjmhx1n', 'template_d77fwpr', this)
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
