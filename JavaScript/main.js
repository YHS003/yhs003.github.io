/* Start Header Section */
let links = document.querySelectorAll('nav ul li a');
let logo = document.querySelector('header .container > a');

links.forEach(function (link) {
    link.addEventListener("click", function () {
        links.forEach(function (link) {
            link.classList.remove("active");
        });
        this.classList.add("active");
    });
});

logo.addEventListener("click", function () {
    links.forEach(function (link) {
        link.classList.remove("active");
    });
    links[0].classList.add("active");
});

let btnNav = document.querySelector('.menu-toggle');
let nav = document.querySelector('nav');

btnNav.addEventListener(('click'), function () {
    nav.classList.toggle("show");
});

let sections = document.querySelectorAll('div[id]');
let observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            links.forEach(function(link) {
                link.classList.remove("active");
            });
            let activeLink = document.querySelector(
                `nav ul li a[href="#${entry.target.id}"]`
            );
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
}, {
    threshold: 0.3
});

sections.forEach(function(section) {
    observer.observe(section);
});
/* End Header Section */

/* Start Skills Section */
let skillButtons = document.querySelectorAll('.skills-filter button');
let skillCards = document.querySelectorAll('.skill-card');
let skillsGrid = document.querySelector('.skills-grid');

skillButtons.forEach(function(button) {

    button.addEventListener('click', function() {
        skillButtons.forEach(function(button) {
            button.classList.remove('active');
        });
        this.classList.add('active');

        let category = this.dataset.category;

        skillsGrid.classList.add('filtering');
        setTimeout(function() {
            skillCards.forEach(function(card) {
                if (card.dataset.category === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
            skillsGrid.classList.remove('filtering');
        }, 300);
    });
});
skillCards.forEach(function(card) {
    if (card.dataset.category === "frontend") {
        card.style.display = "flex";
    } else {
        card.style.display = "none";
    }
});
/* End Skills Section */

/* Start Projects Section */
let flipButtons = document.querySelectorAll('.flip-btn');

flipButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.stopPropagation();

        let card = button.closest('.project-card');

        card.classList.toggle('flipped');
    });
});

let projectFilterButtons = document.querySelectorAll('.projects-filter button');
let projectCards = document.querySelectorAll('.project-card');
let projectsGrid = document.querySelector('.projects-grid');

projectFilterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        projectFilterButtons.forEach(function(button) {
            button.classList.remove('active');
        });

        this.classList.add('active');

        projectsGrid.classList.add('filtering');

        let category = this.dataset.category;

        setTimeout(function() {
            projectCards.forEach(function(card) {
                if (card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            projectsGrid.classList.remove('filtering');
        }, 300);
    });
});

projectCards.forEach(function(card) {
    if (card.dataset.category === 'frontend') {
        card.style.display = 'block';
    } else {
        card.style.display = 'none';
    }
});
/* End Projects Section */

/* Start Contact Section */

let contactForm = document.querySelector('.contact-form');

let firstName = contactForm.querySelector('[name="first-name"]');
let lastName = contactForm.querySelector('[name="last-name"]');
let phone = contactForm.querySelector('[name="phone"]');
let subject = contactForm.querySelector('[name="subject"]');
let email = contactForm.querySelector('[name="email"]');
let message = contactForm.querySelector('[name="message"]');

function showError(input, messageText) {

    let error = input.parentElement.querySelector('.error-message');

    input.classList.add('invalid');
    input.classList.remove('valid');

    error.textContent = messageText;

}

function showSuccess(input) {

    let error = input.parentElement.querySelector('.error-message');

    input.classList.remove('invalid');
    input.classList.add('valid');

    error.textContent = '';

}

function validateName(input) {

    let value = input.value.trim();

    if (value === '') {

        showError(input, 'This field is required.');

        return false;

    }

    if (value.length < 2) {

        showError(input, 'Please enter at least 2 characters.');

        return false;

    }

    if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(value)) {

        showError(input, 'Please enter a valid name.');

        return false;

    }

    showSuccess(input);

    return true;

}

function validatePhone(input) {

    let value = input.value.trim();

    if (value === '') {

        showError(input, 'Phone number is required.');

        return false;

    }

    if (!/^\+?[0-9\s()-]{7,20}$/.test(value)) {

        showError(input, 'Please enter a valid phone number.');

        return false;

    }

    showSuccess(input);

    return true;

}

function validateSubject(input) {

    let value = input.value.trim();

    if (value === '') {

        showError(input, 'Subject is required.');

        return false;

    }

    if (value.length < 3) {

        showError(input, 'Subject is too short.');

        return false;

    }

    showSuccess(input);

    return true;

}

function validateEmail(input) {

    let value = input.value.trim();

    if (value === '') {

        showError(input, 'Email is required.');

        return false;

    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {

        showError(input, 'Please enter a valid email address.');

        return false;

    }

    showSuccess(input);

    return true;

}

function validateMessage(input) {

    let value = input.value.trim();

    if (value === '') {

        showError(input, 'Message is required.');

        return false;

    }

    if (value.length < 10) {

        showError(input, 'Message is too short.');

        return false;

    }

    showSuccess(input);

    return true;

}

contactForm.addEventListener('submit', function(event) {

    let firstNameValid = validateName(firstName);
    let lastNameValid = validateName(lastName);
    let phoneValid = validatePhone(phone);
    let subjectValid = validateSubject(subject);
    let emailValid = validateEmail(email);
    let messageValid = validateMessage(message);

    if (
        !firstNameValid ||
        !lastNameValid ||
        !phoneValid ||
        !subjectValid ||
        !emailValid ||
        !messageValid
    ) {

        event.preventDefault();

    }

});

/* End Contact Section */