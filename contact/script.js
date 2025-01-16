function submitContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! We have received your message and will get back to you at ${email}.`);

    
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}