const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // You can handle the form submission here, like sending the data to a server or displaying a success message.
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    alert('Thank you for your message!');
    contactForm.reset();
});
