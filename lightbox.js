document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox container if it doesn't exist
    if (!document.getElementById('lightboxContainer')) {
        const lightboxContainer = document.createElement('div');
        lightboxContainer.id = 'lightboxContainer';
        document.body.appendChild(lightboxContainer);
        
        // Create lightbox HTML structure
        lightboxContainer.innerHTML = `
            <div id="portfolioLightbox" class="lightbox">
                <div class="lightbox-content">
                    <span class="close-lightbox">&times;</span>
                    <div class="lightbox-details">
                        <h3></h3>
                        <p></p>
                    </div>
                    <img class="lightbox-img" src="" alt="">
                </div>
            </div>
        `;
    }
    
    // Get lightbox elements
    const lightbox = document.getElementById('portfolioLightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxTitle = lightbox.querySelector('.lightbox-details h3');
    const lightboxDesc = lightbox.querySelector('.lightbox-details p');
    const closeBtn = lightbox.querySelector('.close-lightbox');
    
    // Get all portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Add click event to each portfolio item
    portfolioItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Prevent default behavior
            e.preventDefault();
            
            // Get image source, title and description
            const imgSrc = this.querySelector('img').src;
            const imgAlt = this.querySelector('img').alt;
            const title = this.querySelector('.item-content h3').textContent;
            const desc = this.querySelector('.item-content p').textContent;
            
            // Set lightbox content
            lightboxImg.src = imgSrc;
            lightboxImg.alt = imgAlt;
            lightboxTitle.textContent = title;
            lightboxDesc.textContent = desc;
            
            // Show lightbox
            lightbox.classList.add('show');
            
            // Prevent body scrolling when lightbox is open
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox when X is clicked
    closeBtn.addEventListener('click', function() {
        lightbox.classList.remove('show');
        document.body.style.overflow = '';
    });
    
    // Close lightbox when clicking outside the content
    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
    
    // Close lightbox with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && lightbox.classList.contains('show')) {
            lightbox.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
});