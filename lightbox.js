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
                    <div class="lightbox-nav">
                        <button class="lightbox-prev">❮</button>
                        <button class="lightbox-next">❯</button>
                    </div>
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
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    
    // Get all portfolio items (both from main page and gallery page)
    const portfolioItems = document.querySelectorAll('.portfolio-item, .gallery-item a');
    let currentIndex = 0;
    let allImages = [];
    
    // Collect all image data
    portfolioItems.forEach((item, index) => {
        let imgSrc, imgAlt, title, desc;
        
        if (item.classList.contains('portfolio-item')) {
            // Main page portfolio items
            imgSrc = item.querySelector('img').src;
            imgAlt = item.querySelector('img').alt;
            title = item.querySelector('.item-content h3').textContent;
            desc = item.querySelector('.item-content p').textContent;
        } else {
            // Gallery page items
            imgSrc = item.href || item.querySelector('img').src;
            imgAlt = item.querySelector('img').alt;
            title = item.querySelector('.gallery-info h3').textContent;
            desc = item.querySelector('.gallery-info p').textContent;
        }
        
        allImages.push({ src: imgSrc, alt: imgAlt, title: title, desc: desc });
    });
    
    // Function to show image at specific index
    function showImage(index) {
        if (allImages[index]) {
            lightboxImg.src = allImages[index].src;
            lightboxImg.alt = allImages[index].alt;
            lightboxTitle.textContent = allImages[index].title;
            lightboxDesc.textContent = allImages[index].desc;
            currentIndex = index;
        }
    }
    
    // Add click event to each portfolio item
    portfolioItems.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            // Prevent default behavior
            e.preventDefault();
            
            // Show lightbox with clicked image
            showImage(index);
            lightbox.classList.add('show');
            
            // Prevent body scrolling when lightbox is open
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Previous image
    prevBtn.addEventListener('click', function() {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : allImages.length - 1;
        showImage(currentIndex);
    });
    
    // Next image
    nextBtn.addEventListener('click', function() {
        currentIndex = currentIndex < allImages.length - 1 ? currentIndex + 1 : 0;
        showImage(currentIndex);
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
    
    // Close lightbox with Escape key, navigate with arrow keys
    document.addEventListener('keydown', function(event) {
        if (lightbox.classList.contains('show')) {
            if (event.key === 'Escape') {
                lightbox.classList.remove('show');
                document.body.style.overflow = '';
            } else if (event.key === 'ArrowLeft') {
                currentIndex = currentIndex > 0 ? currentIndex - 1 : allImages.length - 1;
                showImage(currentIndex);
            } else if (event.key === 'ArrowRight') {
                currentIndex = currentIndex < allImages.length - 1 ? currentIndex + 1 : 0;
                showImage(currentIndex);
            }
        }
    });
});