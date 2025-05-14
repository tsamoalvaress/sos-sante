// Script principal pour SOS Santé
document.addEventListener('DOMContentLoaded', function() {
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des données du formulaire
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            // Validation simple
            if (!name || !phone || !email || !message) {
                alert('Veuillez remplir tous les champs obligatoires.');
                return;
            }
            
            // Simulation d'envoi (à remplacer par un vrai système d'envoi)
            alert('Merci pour votre message. Nous vous contacterons dans les plus brefs délais.');
            contactForm.reset();
            
            // Dans une version finale, on enverrait les données à un serveur
            console.log('Formulaire soumis:', { name, phone, email, service, message });
        });
    }
    
    // Navigation fluide
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajustement pour la hauteur du header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Ajout de la classe active au menu lors du défilement
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
});
