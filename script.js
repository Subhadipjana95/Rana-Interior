// Modal functionality for quote form
document.addEventListener('DOMContentLoaded', function() {
    
    // Get quote button element
    const btn = document.getElementById('quoteBtn');
    let modal, closeBtn, quoteForm;
    let modalLoaded = false;
    
    // Function to load the quote form
    function loadQuoteForm() {
        if (!modalLoaded) {
            // Create a container for the modal if it doesn't exist
            if (!document.getElementById('quoteModalContainer')) {
                const container = document.createElement('div');
                container.id = 'quoteModalContainer';
                document.body.appendChild(container);
            }
            
            // Fetch the quote form HTML
            fetch('quote-form.html')
                .then(response => response.text())
                .then(html => {
                    // Extract just the modal div from the HTML
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const modalContent = doc.getElementById('quoteModal');
                    
                    // Add the modal to the page
                    document.getElementById('quoteModalContainer').innerHTML = modalContent.outerHTML;
                    
                    // Now get the elements from the newly added modal
                    modal = document.getElementById('quoteModal');
                    closeBtn = document.querySelector('.close-modal');
                    quoteForm = document.getElementById('quoteForm');
                    
                    // Set up event listeners for the modal
                    setupModalListeners();
                    
                    // Show the modal
                    modal.classList.add('show');
                    modalLoaded = true;
                })
                .catch(error => {
                    console.error('Error loading quote form:', error);
                });
        } else {
            // If already loaded, just show the modal
            modal.classList.add('show');
        }
    }
    
    // Function to set up modal event listeners
    function setupModalListeners() {
        // Close modal when X is clicked
        closeBtn.addEventListener('click', function() {
            modal.classList.remove('show');
        });
        
        // Close modal when clicking outside the modal content
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.classList.remove('show');
            }
        });
        
        // Handle form submission
        quoteForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            const phoneNumber = quoteForm.querySelector('input[type="tel"]').value;
            const email = quoteForm.querySelector('input[type="email"]').value;
            const address = quoteForm.querySelector('input[type="text"]').value;
            
            // Here you would typically send this data to a server
            console.log('Quote request submitted:', { phoneNumber, email, address });
            
            // Show success message
            alert('Thank you for your quote request! We will contact you soon.');
            
            // Reset form and close modal
            quoteForm.reset();
            modal.classList.remove('show');
        });
    }
    
    // Open modal when any quote button is clicked
    btn.addEventListener('click', function() {
        loadQuoteForm();
    });

    // Add event listener for the consultation button
    const consultationBtn = document.querySelector('.cta-button');
    if (consultationBtn) {
        consultationBtn.addEventListener('click', function(e) {
            e.preventDefault();
            loadQuoteForm();
        });
    }

    // Scroll-based navigation highlight feature
    function highlightNavOnScroll() {
        // Get all sections that we want to track
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.bottom-navbar li a');
        
        // Use Intersection Observer to detect which section is in view
        const observerOptions = {
            root: null, // viewport is used as the root
            rootMargin: '0px', // no margin
            threshold: 0.3 // trigger when 30% of the section is visible
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                // If the section is in view
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    // Remove active class from all nav items
                    document.querySelectorAll('.bottom-navbar li').forEach(item => {
                        item.classList.remove('active');
                    });
                    
                    // Add active class to the corresponding nav item
                    const correspondingNavItem = document.querySelector(`.bottom-navbar li a[href="#${id}"]`).parentElement;
                    correspondingNavItem.classList.add('active');
                }
            });
        }, observerOptions);
        
        // Observe all sections
        sections.forEach(section => {
            observer.observe(section);
        });
        
        // Also handle click events on nav links to add active class
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Remove active class from all nav items
                document.querySelectorAll('.bottom-navbar li').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Add active class to the clicked nav item
                this.parentElement.classList.add('active');
            });
        });
    }
    
    // Initialize the scroll highlight feature
    highlightNavOnScroll();
    
    // Portfolio Swiper functionality
    function initPortfolioSwiper() {
        const swiperContainer = document.querySelector('.swiper-container');
        const swiperWrapper = document.querySelector('.swiper-wrapper');
        const slides = document.querySelectorAll('.swiper-slide');
        const prevButton = document.querySelector('.swiper-button-prev');
        const nextButton = document.querySelector('.swiper-button-next');
        const pagination = document.querySelector('.swiper-pagination');
        
        // Create pagination bullets
        slides.forEach((_, index) => {
            // Skip creating bullets for the last 2 slides
            if (index < slides.length - 2) {
                const bullet = document.createElement('span');
                bullet.classList.add('swiper-pagination-bullet');
                if (index === 0) bullet.classList.add('swiper-pagination-bullet-active');
                bullet.addEventListener('click', () => goToSlide(index));
                pagination.appendChild(bullet);
            }
        });
        
        let currentIndex = 0;
        let slideWidth;
        
        // Calculate slide width based on container width and visible slides
        function calculateSlideWidth() {
            const containerWidth = swiperContainer.offsetWidth;
            let slidesPerView = 3; // Default for desktop
            
            if (window.innerWidth <= 1200) slidesPerView = 2;
            if (window.innerWidth <= 768) slidesPerView = 1;
            
            slideWidth = containerWidth / slidesPerView;
            
            // Update slide widths
            slides.forEach(slide => {
                slide.style.width = `${slideWidth - 20}px`; // Account for margins
            });
            
            // Update wrapper position to current slide
            updateSlidePosition();
        }
        
        function updateSlidePosition() {
            const offset = -currentIndex * slideWidth;
            swiperWrapper.style.transform = `translateX(${offset}px)`;
            
            // Update active pagination bullet
            document.querySelectorAll('.swiper-pagination-bullet').forEach((bullet, index) => {
                if (index === currentIndex) {
                    bullet.classList.add('swiper-pagination-bullet-active');
                } else {
                    bullet.classList.remove('swiper-pagination-bullet-active');
                }
            });
        }
        
        function goToSlide(index) {
            currentIndex = index;
            updateSlidePosition();
        }
        
        function goToNextSlide() {
            // Calculate the maximum index based on slides per view
            let slidesPerView = 3;
            if (window.innerWidth <= 1200) slidesPerView = 2;
            if (window.innerWidth <= 768) slidesPerView = 1;
            
            // Calculate the maximum valid index (total slides - visible slides)
            const maxIndex = Math.max(0, slides.length - slidesPerView);
            
            // Only increment if we haven't reached the maximum index
            if (currentIndex < maxIndex) {
                currentIndex++;
            }
            updateSlidePosition();
        }
        
        function goToPrevSlide() {
            // Only decrement if we haven't reached the minimum index
            if (currentIndex > 0) {
                currentIndex--;
            }
            updateSlidePosition();
        }
        
        // Event listeners for navigation buttons
        nextButton.addEventListener('click', goToNextSlide);
        prevButton.addEventListener('click', goToPrevSlide);
        
        // Initialize swiper dimensions
        calculateSlideWidth();
        
        // Update on window resize
        window.addEventListener('resize', calculateSlideWidth);
    }
    
    // Initialize portfolio swiper
    if (document.querySelector('.portfolio-swiper')) {
        initPortfolioSwiper();
    }
});