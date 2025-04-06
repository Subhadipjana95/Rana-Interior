document.addEventListener('DOMContentLoaded', function() {
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
});

// Quote button functionality
document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the quote button
    const quoteBtn = document.getElementById("quoteBtn");
    if (quoteBtn) {
        quoteBtn.addEventListener("click", function() {
            // Create an overlay for the quote form
            const overlay = document.createElement("div");
            overlay.className = "quote-overlay";
            
            // Create a container for the form and close button
            const formContainer = document.createElement("div");
            formContainer.className = "quote-form-container";
            
            // Create an iframe to load the quote form
            const iframe = document.createElement("iframe");
            iframe.src = "quote-form.html";
            iframe.className = "quote-iframe";
            
            // Create a close button
            const closeBtn = document.createElement("button");
            closeBtn.className = "close-quote-form";
            closeBtn.innerHTML = "&times;";
            closeBtn.addEventListener("click", function() {
                document.body.removeChild(overlay);
            });
            
            // Append elements to the DOM
            formContainer.appendChild(iframe);
            formContainer.appendChild(closeBtn);
            overlay.appendChild(formContainer);
            document.body.appendChild(overlay);
        });
    }
    
    // Add styles for the quote form overlay
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        .quote-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 1000;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .quote-form-container {
            position: relative;
            width: 90%;
            max-width: 500px;
            height: 80%;
        }
        
        .quote-iframe {
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 20px;
            background-color: white;
        }
        
        .close-quote-form {
            position: absolute;
            top: 10px;
            right: 10px;
            background:rgb(185, 186, 203);
            border: none;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            font-size: 20px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1001;
            transition: all 0.3s ease;
        }
        .close-quote-form:hover {
            scale: 1.1;
            background-color: rgb(211, 205, 205);
        }
    `;
    document.head.appendChild(styleElement);
});
