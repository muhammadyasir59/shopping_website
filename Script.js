    $(document).ready(function(){

        $('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
});

// java contact

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting

    // Get field values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Email validation pattern
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Validate fields
    if (firstName === '' || lastName === '' || email === '' || message === '') {
        alert('Please fill in all the fields.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If validation passes
    alert('Form submitted successfully!');
    // Optional: Reset the form
    document.getElementById('contactForm').reset();
});
