// Gallery JavaScript Functionality

// Gallery Images Object - Add new images here
const galleryImages = [
    // Training Images
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'training',
        title: 'Artistik Cimnastik Dersi',
        description: 'Öğrencilerimizin temel hareketler eğitimi',
        alt: 'Artistik Cimnastik Antreman'
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1594736797933-d0e501ba2fe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'training',
        title: 'Grupsal Antrenman',
        description: 'Takım çalışması ve koordinasyon',
        alt: 'Grupsal Antrenman'
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        category: 'training',
        title: 'Esneklik Çalışması',
        description: 'Temel esneklik geliştirme antrenmanları',
        alt: 'Esneklik Çalışması'
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'training',
        title: 'Bireysel Çalışma',
        description: 'Kişisel gelişim odaklı özel antrenmanlar',
        alt: 'Bireysel Çalışma'
    },

    // Competition Images
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'competitions',
        title: 'Yarışma Performansı',
        description: 'Öğrencimizin başarılı performansı',
        alt: 'Yarışma Performansı'
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        category: 'competitions',
        title: 'Madalya Töreni',
        description: 'Gurur verici başarı anları',
        alt: 'Madalya Töreni'
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1594736797933-d0e501ba2fe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
        category: 'competitions',
        title: 'Bölge Şampiyonası',
        description: 'Bölge şampiyonasında gösterilen performans',
        alt: 'Bölge Şampiyonası'
    },

    // Event Images
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
        category: 'events',
        title: 'Gösteri Etkinliği',
        description: 'Yıl sonu gösteri performansı',
        alt: 'Gösteri Etkinliği'
    },
    {
        id: 9,
        src: 'https://images.unsplash.com/photo-1594736797933-d0e501ba2fe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        category: 'events',
        title: 'Özel Etkinlik',
        description: 'Ailelerin katıldığı özel etkinlik',
        alt: 'Özel Etkinlik'
    },
    {
        id: 10,
        src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        category: 'events',
        title: 'Yaz Kampı Etkinliği',
        description: 'Eğlenceli yaz kampı aktivitelerimiz',
        alt: 'Yaz Kampı Etkinliği'
    },

    // Facilities Images
    {
        id: 11,
        src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
        category: 'facilities',
        title: 'Antrenman Salonu',
        description: 'Modern ve güvenli antrenman alanımız',
        alt: 'Antrenman Salonu'
    },
    {
        id: 12,
        src: 'https://images.unsplash.com/photo-1594736797933-d0e501ba2fe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
        category: 'facilities',
        title: 'Cimnastik Aletleri',
        description: 'Profesyonel cimnastik ekipmanlarımız',
        alt: 'Cimnastik Aletleri'
    },
    {
        id: 13,
        src: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
        category: 'facilities',
        title: 'Güvenlik Ekipmanları',
        description: 'Çocuklarımızın güvenliği için özel ekipmanlar',
        alt: 'Güvenlik Ekipmanları'
    }
];

document.addEventListener('DOMContentLoaded', function () {
    // Initialize gallery
    renderGallery(galleryImages);

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Initialize filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Get filter value
            const filterValue = button.getAttribute('data-filter');

            // Filter gallery items
            filterGallery(filterValue);
        });
    });

    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// Render gallery function
function renderGallery(images) {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';

    images.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-category', image.category);
        galleryItem.setAttribute('data-image-id', image.id);

        // Set initial styles
        galleryItem.style.opacity = '0';
        galleryItem.style.transform = 'translateY(30px)';
        galleryItem.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

        galleryItem.innerHTML = `
            <div class="gallery-image">
                <img src="${image.src}" alt="${image.alt}" loading="lazy">
                <div class="gallery-overlay">
                    <div class="gallery-content">
                        <h3>${image.title}</h3>
                        <p>${image.description}</p>
                        <button class="gallery-btn" onclick="openLightbox(this)">
                            <i class="fas fa-search-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        galleryGrid.appendChild(galleryItem);

        // Animate in with staggered delay
        setTimeout(() => {
            galleryItem.style.opacity = '1';
            galleryItem.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Add new image function - you can call this to add new images dynamically
function addNewImage(imageData) {
    // Add to the galleryImages array
    galleryImages.push(imageData);

    // Re-render the gallery
    renderGallery(galleryImages);

    // If currently filtered, apply the current filter
    const activeFilter = document.querySelector('.filter-btn.active');
    if (activeFilter) {
        const filterValue = activeFilter.getAttribute('data-filter');
        if (filterValue !== 'all') {
            filterGallery(filterValue);
        }
    }
}

// Filter gallery function
function filterGallery(filter) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    let visibleIndex = 0;

    galleryItems.forEach((item) => {
        const category = item.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
            // Show item
            item.classList.remove('hidden');
            item.style.display = 'block';

            // Reset transform and animate in
            item.style.transform = 'scale(0.8) translateY(20px)';
            item.style.opacity = '0';

            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1) translateY(0)';
            }, visibleIndex * 100);

            visibleIndex++;
        } else {
            // Hide item
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8) translateY(-20px)';

            setTimeout(() => {
                item.classList.add('hidden');
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Lightbox functionality
let currentImageIndex = 0;
let visibleImages = [];

function openLightbox(button) {
    const galleryItem = button.closest('.gallery-item');
    const img = galleryItem.querySelector('img');
    const title = galleryItem.querySelector('.gallery-content h3').textContent;
    const description = galleryItem.querySelector('.gallery-content p').textContent;

    // Get all visible gallery items for navigation
    const visibleItems = document.querySelectorAll('.gallery-item:not(.hidden)');
    visibleImages = Array.from(visibleItems).map(item => ({
        src: item.querySelector('img').src,
        title: item.querySelector('.gallery-content h3').textContent,
        description: item.querySelector('.gallery-content p').textContent
    }));

    // Find current image index
    currentImageIndex = visibleImages.findIndex(image => image.src === img.src);

    // Set lightbox content
    document.getElementById('lightboxImage').src = img.src;
    document.getElementById('lightboxTitle').textContent = title;
    document.getElementById('lightboxDescription').textContent = description;

    // Show lightbox
    const lightbox = document.getElementById('lightboxModal');
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Add keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightboxModal');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';

    // Remove keyboard navigation
    document.removeEventListener('keydown', handleKeyboardNavigation);
}

function nextImage() {
    if (currentImageIndex < visibleImages.length - 1) {
        currentImageIndex++;
        updateLightboxImage();
    }
}

function previousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateLightboxImage();
    }
}

function updateLightboxImage() {
    const currentImage = visibleImages[currentImageIndex];
    document.getElementById('lightboxImage').src = currentImage.src;
    document.getElementById('lightboxTitle').textContent = currentImage.title;
    document.getElementById('lightboxDescription').textContent = currentImage.description;
}

function handleKeyboardNavigation(event) {
    switch (event.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            previousImage();
            break;
        case 'ArrowRight':
            nextImage();
            break;
    }
}

// Example of how to add a new image (you can call this function)
/* 
addNewImage({
    id: 14,
    src: 'path/to/your/image.jpg',
    category: 'training', // 'training', 'competitions', 'events', 'facilities'
    title: 'Image Title',
    description: 'Image description',
    alt: 'Alt text for accessibility'
});
*/

// Smooth scrolling for anchor links
document.addEventListener('click', function (e) {
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

// Image error handling
document.addEventListener('error', function (e) {
    if (e.target.matches('img')) {
        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjhmOWZhIi8+CjxwYXRoIGQ9Ik0xNTAgMTAwbDUwLTUwaDUwdjEwMGgtNTB6IiBmaWxsPSIjZGVlMmU2Ii8+CjxjaXJjbGUgY3g9IjEyNSIgY3k9Ijc1IiByPSIxNSIgZmlsbD0iI2RlZTJlNiIvPgo8L3N2Zz4K';
        e.target.alt = 'Resim yüklenemedi';
    }
}, true);
