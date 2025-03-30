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
        const swiperContainer = document.querySelector('.portfolio-swiper .swiper-container');
        const swiperWrapper = document.querySelector('.portfolio-swiper .swiper-wrapper');
        const slides = document.querySelectorAll('.portfolio-swiper .swiper-slide');
        const prevButton = document.querySelector('.portfolio-swiper .swiper-button-prev');
        const nextButton = document.querySelector('.portfolio-swiper .swiper-button-next');
        
        let currentIndex = 0;
        let slideWidth;
        
        // Calculate slide width based on container width and visible slides
        function calculateSlideWidth() {
            const containerWidth = swiperContainer.offsetWidth;
            let slidesPerView = 3; // Default for desktop
            
            if (window.innerWidth <= 992) slidesPerView = 2;
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
    
    // Hero section navigation buttons
    const heroNavPrev = document.querySelector('.hero .swiper-button-prev');
    const heroNavNext = document.querySelector('.hero .swiper-button-next');
    
    if (heroNavPrev && heroNavNext) {
        let currentVideoIndex = 0;
        const videos = ['./Assets/b3.mp4', './Assets/b2.mp4'];
        const heroVideo = document.querySelector('.hero-background');
        
        heroNavPrev.addEventListener('click', function() {
            currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
            heroVideo.querySelector('source').src = videos[currentVideoIndex];
            heroVideo.load();
            heroVideo.play();
        });
        
        heroNavNext.addEventListener('click', function() {
            currentVideoIndex = (currentVideoIndex + 1) % videos.length;
            heroVideo.querySelector('source').src = videos[currentVideoIndex];
            heroVideo.load();
            heroVideo.play();
        });
    }
    
    // Skills section navigation buttons
    const skillsNavPrev = document.querySelector('.skills .swiper-button-prev');
    const skillsNavNext = document.querySelector('.skills .swiper-button-next');
    
    if (skillsNavPrev && skillsNavNext) {
        const skillItems = document.querySelectorAll('.skill-item');
        let currentSkillIndex = 0;
        let itemsPerView = window.innerWidth <= 768 ? 1 : window.innerWidth <= 992 ? 2 : 3;
        
        function updateSkillsView() {
            const maxIndex = Math.max(0, skillItems.length - itemsPerView);
            // Ensure currentSkillIndex is within valid range
            if (currentSkillIndex > maxIndex) {
                currentSkillIndex = maxIndex;
            }
            
            skillItems.forEach((item, index) => {
                if (index >= currentSkillIndex && index < currentSkillIndex + itemsPerView) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        }
        
        // Initialize view
        updateSkillsView();
        
        skillsNavPrev.addEventListener('click', function() {
            if (currentSkillIndex > 0) {
                currentSkillIndex--;
                updateSkillsView();
            }
        });
        
        skillsNavNext.addEventListener('click', function() {
            const maxIndex = Math.max(0, skillItems.length - itemsPerView);
            if (currentSkillIndex < maxIndex) {
                currentSkillIndex++;
                updateSkillsView();
            }
        });
        
        window.addEventListener('resize', function() {
            const newItemsPerView = window.innerWidth <= 768 ? 1 : window.innerWidth <= 992 ? 2 : 3;
            if (newItemsPerView !== itemsPerView) {
                itemsPerView = newItemsPerView;
                currentSkillIndex = 0;
                updateSkillsView();
            }
        });
    }
    }
);