document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Form submission handling
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;

        // Here you would typically send this data to a server
        console.log('Form submitted:', { name, email, message });

        // Clear the form
        form.reset();

        // Show a success message (you can replace this with a more sophisticated notification)
        alert('Thank you for your message. We will get back to you soon!');
    });

    // FAQ section interactivity
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('p');
        answer.style.display = 'none'; // Initially hide all answers

        question.addEventListener('click', () => {
            const isOpen = answer.style.display === 'block';
            
            // Close all other open FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('p').style.display = 'none';
                    otherItem.querySelector('h3').classList.remove('active');
                }
            });

            // Toggle the clicked FAQ item
            answer.style.display = isOpen ? 'none' : 'block';
            question.classList.toggle('active', !isOpen);
        });
    });
});
