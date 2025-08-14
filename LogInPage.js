// Form validation
    const form = document.getElementById('registrationForm');
    const password = form.querySelector('input[name="password"]');
    const confirmPassword = form.querySelector('input[name="confirmPassword"]');

    // Password confirmation validation
    confirmPassword.addEventListener('input', function() {
      if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity('Passwords do not match');
      } else {
        confirmPassword.setCustomValidity('');
      }
    });

    // Form submission handling
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Remove this in production
      
      // Add loading state
      const submitBtn = document.getElementById('submitBtn');
      submitBtn.textContent = 'Submitting...';
      submitBtn.classList.add('loading');
      
      // Simulate form submission (remove in production)
      setTimeout(() => {
        alert('Registration successful! (This is a demo)');
        submitBtn.textContent = 'Submit';
        submitBtn.classList.remove('loading');
      }, 2000);
    });