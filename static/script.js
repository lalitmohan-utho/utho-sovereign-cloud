// Static site JavaScript for Utho IaaS landing page

document.addEventListener('DOMContentLoaded', function() {
    // Load data from JSON
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            loadFeatures(data.features);
            loadLocations(data.locations);
            loadCustomers(data.customers);
            loadTestimonials(data.testimonials);
            loadFAQs(data.faqs);
        })
        .catch(error => console.error('Error loading data:', error));

    // Initialize accordion functionality
    initAccordion();
});

// Load features into the features grid
function loadFeatures(features) {
    const featuresGrid = document.getElementById('featuresGrid');
    if (!featuresGrid) return;

    featuresGrid.innerHTML = features.map(feature => `
        <div class="feature-card">
            <div class="feature-card-icon">
                ${getIconSVG(feature.icon)}
            </div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>
    `).join('');
}

// Load datacenter locations
function loadLocations(locations) {
    const locationList = document.getElementById('locationList');
    if (!locationList) return;

    locationList.innerHTML = locations.map(location => `
        <div class="location-item">
            <div class="location-icon">
                ${getIconSVG('server')}
            </div>
            <div class="location-content">
                <h3>${location.city}</h3>
                <p>${location.tier} Datacenter</p>
            </div>
        </div>
    `).join('');
}

// Load customer logos
function loadCustomers(customers) {
    const customersGrid = document.getElementById('customersGrid');
    if (!customersGrid) return;

    customersGrid.innerHTML = customers.map(customer => `
        <div class="customer-logo">
            <div class="customer-logo-inner">
                <span class="customer-logo-text">${customer.logo}</span>
            </div>
        </div>
    `).join('');
}

// Load testimonials
function loadTestimonials(testimonials) {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    if (!testimonialsGrid) return;

    testimonialsGrid.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="stars">
                ${Array(testimonial.rating).fill('').map(() => `
                    <svg class="star" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                `).join('')}
            </div>
            
            <div class="quote-container">
                <svg class="quote-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3l-2 4z"/>
                </svg>
                <p class="quote-text">"${testimonial.quote}"</p>
            </div>
            
            <div class="author">
                <div class="author-avatar">
                    <span class="author-initials">${getInitials(testimonial.name)}</span>
                </div>
                <div>
                    <p class="author-name">${testimonial.name}</p>
                    <p class="author-role">${testimonial.role}, ${testimonial.company}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Load FAQs
function loadFAQs(faqs) {
    const faqAccordion = document.getElementById('faqAccordion');
    if (!faqAccordion) return;

    faqAccordion.innerHTML = faqs.map((faq, index) => `
        <div class="accordion-item">
            <button class="accordion-trigger" aria-expanded="false" data-target="faq-${index}">
                <span>${faq.question}</span>
                <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div class="accordion-content" id="faq-${index}">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');
}

// Initialize accordion functionality
function initAccordion() {
    document.addEventListener('click', function(e) {
        if (e.target.closest('.accordion-trigger')) {
            const trigger = e.target.closest('.accordion-trigger');
            const targetId = trigger.dataset.target;
            const content = document.getElementById(targetId);
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

            // Close all other accordion items
            document.querySelectorAll('.accordion-trigger').forEach(t => {
                if (t !== trigger) {
                    t.setAttribute('aria-expanded', 'false');
                    const otherContent = document.getElementById(t.dataset.target);
                    otherContent.classList.remove('show');
                }
            });

            // Toggle current item
            trigger.setAttribute('aria-expanded', !isExpanded);
            content.classList.toggle('show', !isExpanded);
        }
    });
}

// Get initials from name
function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('');
}

// Get SVG icon based on icon name
function getIconSVG(iconName) {
    const icons = {
        'dollar-sign': '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path></svg>',
        'zap': '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>',
        'shield': '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>',
        'headphones': '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>',
        'unlock': '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path></svg>',
        'server': '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>'
    };
    
    return icons[iconName] || icons['server'];
}

// Smooth scrolling for internal links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});