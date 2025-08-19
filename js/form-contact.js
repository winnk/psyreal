// JavaScript Document

// contact form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Remove previous errors
            const errors = form.querySelectorAll('.error');
            errors.forEach(error => error.remove());
            
            let hasError = false;
            const requiredFields = form.querySelectorAll('.requiredField');
            
            requiredFields.forEach(function(field) {
                const value = field.value.trim();
                
                if (value === '') {
                    const labelText = field.previousElementSibling ? field.previousElementSibling.textContent : field.name;
                    const errorSpan = document.createElement('span');
                    errorSpan.className = 'error';
                    errorSpan.textContent = 'You forgot to enter your ' + labelText;
                    field.parentNode.appendChild(errorSpan);
                    field.classList.add('inputError');
                    hasError = true;
                } else if (field.classList.contains('email')) {
                    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailReg.test(value)) {
                        const labelText = field.previousElementSibling ? field.previousElementSibling.textContent : 'email';
                        const errorSpan = document.createElement('span');
                        errorSpan.className = 'error';
                        errorSpan.textContent = 'You entered an invalid ' + labelText;
                        field.parentNode.appendChild(errorSpan);
                        field.classList.add('inputError');
                        hasError = true;
                    }
                }
            });
            
            if (!hasError) {
                // Simulate form submission success
                const successDiv = document.createElement('div');
                successDiv.className = 'success';
                successDiv.innerHTML = '<p style="color: #fff; font-size: 1.2em; margin-top: 20px;">Thank you! Your message has been received.</p>';
                form.style.display = 'none';
                form.parentNode.insertBefore(successDiv, form);
            }
        });
    }
});