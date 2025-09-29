let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Product data constants
const indexProductData = [
  {
    title: "Samsung Galaxy S21",
    price: 32999,
    category: 'electronics',
    desc: "The Samsung Galaxy S21 is a high-end smartphone with a 6.2-inch Dynamic AMOLED 2X display and a versatile triple-camera system. It launched in 2021 as a flagship device, known for its smooth performance and sleek design",
    img: "https://as2.ftcdn.net/jpg/05/42/54/19/1024W_F_542541982_U5EIeldjhtQCix9h4vflS6sxb36FJlm8_NW1.jpg",
    rating: 5,
    reviews: [
      { user: "Alex", rating: 5, comment: "Amazing camera and battery life!" },
      { user: "Jordan", rating: 5, comment: "Sleek design and fast performance." },
      { user: "Taylor", rating: 4, comment: "Great phone, but a bit pricey." }
    ]
  },
  {
    title: "Dell Inspiron Laptop",
    price: 45000,
    category: 'electronics',
    desc: "The Dell Inspiron is a versatile laptop designed for everyday use, featuring an Intel Core i5 processor, 8GB RAM, and 512GB SSD storage. Its 15.6-inch Full HD display provides crisp visuals, making it ideal for work, entertainment, and light gaming.",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    reviews: [
      { user: "Blake", rating: 4, comment: "Great for productivity and battery lasts long." },
      { user: "Dana", rating: 5, comment: "Fast and reliable for daily tasks." },
      { user: "Evan", rating: 3, comment: "Good value, but screen could be brighter." }
    ]
  },
  {
    title: "Bose QuietComfort Headphones",
    price: 25000,
    category: 'electronics',
    desc: "Experience superior noise cancellation with the Bose QuietComfort headphones. These over-ear headphones deliver immersive sound quality, comfortable fit for long sessions, and up to 24 hours of battery life, perfect for travel and work.",
    img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    reviews: [
      { user: "Gina", rating: 5, comment: "Best noise cancellation I've used." },
      { user: "Hank", rating: 5, comment: "Comfortable and sound quality is top-notch." },
      { user: "Iris", rating: 4, comment: "Great for flights, but a bit bulky." }
    ]
  },
  {
    title: "Hanes Beefy-T V-Neck",
    price: 499,
    category: 'clothing',
    desc: "A classic for a reason, the Hanes Beefy-T is a reliable, durable option. This T-shirt is made with heavier cotton, which gives it a more structured feel and helps it last a long time. It's a no-frills, practical choice that's widely available",
    img: "https://images.unsplash.com/photo-1693443688057-85f57b872a3c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    reviews: [
      { user: "Sam", rating: 4, comment: "Comfortable and durable fabric." },
      { user: "Chris", rating: 4, comment: "Good fit, washes well." },
      { user: "Pat", rating: 3, comment: "Okay, but shrinks a bit." }
    ]
  },
  {
    title: "Levi's 511 Slim Fit Jeans",
    price: 1200,
    category: 'clothing',
    desc: "Levi's 511 Slim Fit Jeans offer a modern slim silhouette with stretch denim for all-day comfort. These classic blue jeans feature a mid-rise waist, five-pocket design, and durable construction, making them a wardrobe staple.",
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    reviews: [
      { user: "Jake", rating: 4, comment: "Perfect fit and very comfortable." },
      { user: "Kara", rating: 5, comment: "Love the stretch and style." },
      { user: "Liam", rating: 3, comment: "Good jeans, but fade quickly." }
    ]
  },
  {
    title: "Nike Dri-FIT T-Shirt",
    price: 800,
    category: 'clothing',
    desc: "Stay cool and dry during workouts with the Nike Dri-FIT T-Shirt. Made from moisture-wicking fabric, this short-sleeve tee features a comfortable fit, breathable design, and Nike's iconic swoosh logo.",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    reviews: [
      { user: "Mia", rating: 5, comment: "Keeps me dry during runs." },
      { user: "Noah", rating: 5, comment: "Comfortable and stylish." },
      { user: "Olivia", rating: 4, comment: "Good quality, fits well." }
    ]
  },
  {
    title: "Eames Chair",
    price: 8999,
    category: 'furniture',
    desc: "The chair typically features a solid wood frame, often made from Sheesham, mango, or teak, which provides its distinctive brown color and sturdy build. The seat and/or backrest are padded and upholstered in a grey fabric, such as linen or cotton, offering both comfort and a stylish color contrast.",
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 3,
    reviews: [
      { user: "Riley", rating: 3, comment: "Comfortable but a bit pricey." },
      { user: "Morgan", rating: 4, comment: "Stylish and sturdy." },
      { user: "Casey", rating: 2, comment: "Not as comfortable as expected." }
    ]
  },
  {
    title: "IKEA KIVIK Sofa",
    price: 25000,
    category: 'furniture',
    desc: "The IKEA KIVIK Sofa is a comfortable and stylish seating option for your living room. With deep seats, soft cushions, and a simple design, it's perfect for relaxing or entertaining guests. Available in various colors to match your decor.",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    reviews: [
      { user: "Quinn", rating: 4, comment: "Very comfortable and looks great." },
      { user: "Ryan", rating: 5, comment: "Easy to assemble and durable." },
      { user: "Sara", rating: 3, comment: "Good sofa, but cushions flatten over time." }
    ]
  },
  {
    title: "Wooden Study Desk",
    price: 4500,
    category: 'furniture',
    desc: "This sturdy wooden study desk provides ample workspace for work or study. Crafted from solid wood with a natural finish, it features drawers for storage and a spacious tabletop, ideal for home offices or bedrooms.",
    img: "https://plus.unsplash.com/premium_photo-1732730224497-2dbd157d3f42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    reviews: [
      { user: "Tyler", rating: 4, comment: "Solid build and functional." },
      { user: "Uma", rating: 5, comment: "Perfect for my home office." },
      { user: "Vince", rating: 3, comment: "Good desk, but finish chips easily." }
    ]
  },
  {
    title: "Fossil Neutra Watch",
    price: 12999,
    category: 'accessories',
    desc: "A classic watch that combines a rich brown leather strap with a polished silver-tone stainless steel case. The watch face often features multiple subdials for chronograph functionality, and the overall design is inspired by vintage aesthetics, making it both stylish and practical.",
    img: "https://images.unsplash.com/photo-1612817159450-08a180df028b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    reviews: [
      { user: "Drew", rating: 4, comment: "Stylish and functional." },
      { user: "Jamie", rating: 5, comment: "Love the vintage look." },
      { user: "Avery", rating: 3, comment: "Good, but strap is stiff." }
    ]
  },
  {
    title: "Ray-Ban Aviator Sunglasses",
    price: 1500,
    category: 'accessories',
    desc: "Iconic Ray-Ban Aviator sunglasses offer timeless style and UV protection. With metal frames, gradient lenses, and a comfortable fit, these shades are perfect for sunny days and complement any outfit.",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    reviews: [
      { user: "Wendy", rating: 5, comment: "Classic style and great protection." },
      { user: "Xander", rating: 5, comment: "Comfortable and look amazing." },
      { user: "Yara", rating: 4, comment: "Good sunglasses, but lenses scratch easily." }
    ]
  },
  {
    title: "Gucci Leather Wallet",
    price: 900,
    category: 'accessories',
    desc: "Elevate your style with the Gucci Leather Wallet. Crafted from premium leather with the signature GG logo, it features multiple card slots, a bill compartment, and a sleek design for everyday use.",
    img: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    reviews: [
      { user: "Zoe", rating: 4, comment: "Luxurious and functional." },
      { user: "Adam", rating: 5, comment: "Love the design and quality." },
      { user: "Bella", rating: 3, comment: "Nice wallet, but a bit small." }
    ]
  },
  {
    title: "Yoga Mat",
    price: 800,
    category: 'fitness',
    desc: "This non-slip yoga mat provides excellent grip and cushioning for your practice. Made from eco-friendly materials, it's lightweight, easy to clean, and perfect for yoga, pilates, or home workouts.",
    img: "https://images.unsplash.com/photo-1637157216470-d92cd2edb2e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    reviews: [
      { user: "Charlie", rating: 4, comment: "Great grip and comfortable." },
      { user: "Diana", rating: 5, comment: "Perfect for my daily yoga." },
      { user: "Ethan", rating: 3, comment: "Good mat, but rolls up easily." }
    ]
  },
  {
    title: "Adjustable Dumbbell Set",
    price: 3000,
    category: 'fitness',
    desc: "Build strength at home with this adjustable dumbbell set. Featuring weights from 5 to 50 lbs, these dumbbells are compact, durable, and ideal for a variety of exercises like curls, presses, and rows.",
    img: "https://images.unsplash.com/photo-1697129392091-d08875930fec?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    reviews: [
      { user: "Fiona", rating: 5, comment: "Versatile and easy to use." },
      { user: "George", rating: 5, comment: "Great for home workouts." },
      { user: "Hannah", rating: 4, comment: "Solid build, but heavy to adjust." }
    ]
  }
];

const dealsProductData = [
  {
    title: 'MacBook Air M2',
    img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=870&auto=format&fit=crop',
    price: 99999,
    oldPrice: 119900,
    progress: 75,
    category: 'electronics',
    rating: 5,
    desc: 'Lightweight and powerful MacBook with M2 chip.',
    reviews: [
      { user: 'John D.', rating: 5, comment: 'Amazing performance!' },
      { user: 'Jane S.', rating: 4, comment: 'Great battery life.' }
    ]
  },
  {
    title: 'Nike Air Max 270',
    img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=774&auto=format&fit=crop',
    price: 8999,
    oldPrice: 12999,
    progress: 60,
    category: 'fashion',
    rating: 5,
    desc: 'Comfortable sneakers with Air cushioning.',
    reviews: [
      { user: 'Mike R.', rating: 5, comment: 'Very comfortable.' },
      { user: 'Sarah L.', rating: 5, comment: 'Perfect fit.' }
    ]
  },
  {
    title: 'Smart Home Bundle',
    img: 'https://images.unsplash.com/photo-1730967844913-29eb5cae5f34?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 15999,
    oldPrice: 22999,
    progress: 85,
    category: 'home',
    rating: 4,
    desc: 'Complete smart home setup with lights and speakers.',
    reviews: [
      { user: 'Alex T.', rating: 4, comment: 'Easy to install.' },
      { user: 'Emma W.', rating: 5, comment: 'Love the integration.' }
    ]
  },
  {
    title: 'Sony WH-1000XM5',
    img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=870&auto=format&fit=crop',
    price: 24999,
    oldPrice: 34999,
    progress: 40,
    category: 'electronics',
    rating: 5,
    desc: 'Premium noise-cancelling headphones.',
    reviews: [
      { user: 'Chris B.', rating: 5, comment: 'Best noise cancellation.' },
      { user: 'Lisa M.', rating: 5, comment: 'Sound quality is excellent.' }
    ]
  },
  {
    title: "Levi's Denim Jacket",
    img: 'https://plus.unsplash.com/premium_photo-1661340768191-986944b36150?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3999,
    oldPrice: 5999,
    progress: 90,
    category: 'fashion',
    rating: 4,
    desc: 'Classic denim jacket for all seasons.',
    reviews: [
      { user: 'Tom H.', rating: 4, comment: 'Good quality material.' },
      { user: 'Anna K.', rating: 5, comment: 'Fits perfectly.' }
    ]
  },
  {
    title: 'Kitchen Appliance Set',
    img: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=1205&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 7999,
    oldPrice: 12999,
    progress: 55,
    category: 'home',
    rating: 5,
    desc: 'Essential kitchen appliances bundle.',
    reviews: [
      { user: 'David P.', rating: 5, comment: 'Great value for money.' },
      { user: 'Rachel G.', rating: 5, comment: 'Easy to use.' }
    ]
  },
  {
    title: 'iPhone 15 Pro Max',
    img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=870&auto=format&fit=crop',
    price: 129999,
    oldPrice: 159900,
    progress: 20,
    category: 'electronics',
    rating: 5,
    desc: 'Latest iPhone with advanced features.',
    reviews: [
      { user: 'Steve J.', rating: 5, comment: 'Incredible camera.' },
      { user: 'Maria V.', rating: 5, comment: 'Smooth performance.' }
    ]
  }
];

// Filtering variables for products page
let currentFilters = {
  search: '',
  sort: 'default',
  categories: [],
  priceRange: 50000
};

// Apply filters function
function applyFilters() {
  let filtered = window.productData.filter(product => {
    if (currentFilters.search && !product.title.toLowerCase().includes(currentFilters.search.toLowerCase())) return false;
    if (currentFilters.categories.length > 0 && !currentFilters.categories.includes(product.category)) return false;
    if (product.price > currentFilters.priceRange) return false;
    return true;
  });

  if (currentFilters.sort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentFilters.sort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentFilters.sort === 'rating-desc') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return filtered;
}

// Helper function to get cart item
function getCartItem(title) {
    title = title.replace(/\\'/g, "'");
    return cart.find(item => item.title === title);
}

// Get badge based on progress
function getBadge(progress) {
    if (progress >= 90) return 'hot';
    if (progress >= 75) return 'bestseller';
    if (progress >= 60) return 'trending';
    if (progress >= 40) return 'new';
    return 'discount';
}

// Get badge display text
function getBadgeText(badgeClass) {
    const texts = {
        hot: 'HOT',
        bestseller: 'BESTSELLER',
        trending: 'TRENDING',
        new: 'NEW',
        discount: 'DISCOUNT'
    };
    return texts[badgeClass] || '';
}

// Get cart controls HTML
function getCartControlsHTML(title) {
    const existingItem = getCartItem(title);
    const currentQty = existingItem ? existingItem.quantity : 0;
    const safeTitle = title.replace(/'/g, "\\'");

    if (currentQty > 0) {
        return `
            <div class="quantity-container">
                <button class="qty-btn minus" onclick="updateCartQuantity('${safeTitle}', -1)">-</button>
                <span class="qty-display">${currentQty}</span>
                <button class="qty-btn plus" onclick="updateCartQuantity('${safeTitle}', 1)">+</button>
            </div>
        `;
    } else {
        return `
            <div class="cart-btn-container">
                <button class="btn cart" onclick="addToCart('${safeTitle}')">Add to Cart</button>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Set productData based on page
    if (document.querySelector('.deals-page')) {
        window.productData = dealsProductData;
    } else if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        window.productData = indexProductData.slice(0, 4);
    } else {
        window.productData = [...indexProductData, ...dealsProductData];
    }

    if (document.querySelector('.deals-page')) {
        loadDealsProducts();
    } else if (document.getElementById('productGrid')) {
        loadProducts();
    }
    updateCounts();
    setupModalClosers();
    setupNavbarButtons();

    // Order success modal button listener
    if (document.getElementById('continueShoppingBtn')) {
        document.getElementById('continueShoppingBtn').addEventListener('click', closeOrderSuccessModal);
    }

    // Add filtering event listeners for products page
    if (document.getElementById('productSearch')) {
        document.getElementById('productSearch').addEventListener('input', function() {
            currentFilters.search = this.value;
            loadProducts();
        });
    }

    if (document.getElementById('sort-by')) {
        document.getElementById('sort-by').addEventListener('change', function() {
            currentFilters.sort = this.value;
            loadProducts();
        });
    }

    document.querySelectorAll('.category-list input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            currentFilters.categories = Array.from(document.querySelectorAll('.category-list input[type="checkbox"]:checked')).map(cb => cb.id);
            loadProducts();
        });
    });

    if (document.getElementById('priceRange')) {
        document.getElementById('priceRange').addEventListener('input', function() {
            currentFilters.priceRange = this.value;
            document.getElementById('priceValue').textContent = '₹' + this.value;
            loadProducts();
        });
    }

    // Deals page specific
    if (document.querySelector('.deals-page')) {
        // Category tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const category = btn.dataset.category;
                document.querySelectorAll('.product').forEach(product => {
                    if (category === 'all' || product.dataset.category === category) {
                        product.style.display = 'block';
                    } else {
                        product.style.display = 'none';
                    }
                });
            });
        });

        // Countdown
        function startCountdown() {
            const now = new Date();
            const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
            const end = endOfDay.getTime();
            const countdown = setInterval(() => {
                const distance = end - new Date().getTime();
                const hours = Math.floor(distance / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                document.getElementById('countdown-hours').textContent = hours.toString().padStart(2, '0');
                document.getElementById('countdown-minutes').textContent = minutes.toString().padStart(2, '0');
                document.getElementById('countdown-seconds').textContent = seconds.toString().padStart(2, '0');
                if (distance < 0) {
                    clearInterval(countdown);
                    document.getElementById('dealCountdown').innerHTML = '<p>Deal Expired!</p>';
                }
            }, 1000);
        }
        startCountdown();

        // Newsletter
        if (document.getElementById('subscribe-btn')) {
            document.getElementById('subscribe-btn').addEventListener('click', () => {
                const email = document.getElementById('newsletter-email').value;
                if (email) {
                    alert('Subscribed successfully!');
                    document.getElementById('newsletter-email').value = '';
                } else {
                    alert('Please enter your email.');
                }
            });
        }
    }
});

// Load deals products dynamically
function loadDealsProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    window.productData.forEach(product => {
        const { title, img, price, oldPrice, progress, category, rating } = product;
        const safeTitle = title.replace(/'/g, "\\'");

        const existingItem = getCartItem(title);
        const currentQty = existingItem ? existingItem.quantity : 0;

        let cartHtml;
        if (currentQty > 0) {
            cartHtml = `
                <div class="quantity-container">
                    <button class="qty-btn minus" onclick="updateCartQuantity('${safeTitle}', -1)">-</button>
                    <span class="qty-display">${currentQty}</span>
                    <button class="qty-btn plus" onclick="updateCartQuantity('${safeTitle}', 1)">+</button>
                </div>
            `;
        } else {
            cartHtml = `
                <div class="cart-btn-container">
                    <button class="btn cart" onclick="addToCart('${safeTitle}')">Add to Cart</button>
                </div>
            `;
        }

        const badgeClass = getBadge(progress);
        const badgeText = getBadgeText(badgeClass);

        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.setAttribute('data-category', category);
        productDiv.setAttribute('data-title', title);

        productDiv.innerHTML = `
            <div class="img-wrapper">
                <img src="${img}" alt="${title}" loading="lazy" />
                <button class="btn-icon" onclick="openModal('${safeTitle}')" aria-label="View Details">
                    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"></path>
                    </svg>
                </button>
                <button class="wishlist-btn-product" onclick="toggleWishlist('${safeTitle}')" aria-label="Add to Wishlist">
                    <i data-lucide="heart"></i>
                </button>
            </div>
            ${badgeText ? `<div class="product-badge ${badgeClass}">${badgeText}</div>` : ''}
            <div class="product-info">
                <h3>${title}</h3>
                <div class="rating" aria-label="Rating: ${rating} out of 5 stars">
                    ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}
                </div>
                <div class="price-info">
                    <span class="price">₹${price.toLocaleString()}/-</span>
                    <span class="old-price">₹${oldPrice.toLocaleString()}/-</span>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${progress}%"></div>
                    </div>
                    <div class="progress-text">${progress}% claimed</div>
                </div>
                ${cartHtml}
            </div>
        `;

        productGrid.appendChild(productDiv);
    });

    updateWishlistButtons();
    lucide.createIcons();
}

// Load products dynamically
function loadProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = ''; // Clear existing

    const filteredProducts = applyFilters();
    filteredProducts.forEach(product => {
        const safeTitle = product.title.replace(/'/g, "\\'");
        const existingItem = getCartItem(product.title);
        const currentQty = existingItem ? existingItem.quantity : 0;
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.setAttribute('data-title', product.title);
        productDiv.setAttribute('data-category', product.category || '');
        let cartHtml;
        if (currentQty > 0) {
            cartHtml = `
                <div class="quantity-container">
                    <button class="qty-btn minus" onclick="updateCartQuantity('${safeTitle}', -1)">-</button>
                    <span class="qty-display">${currentQty}</span>
                    <button class="qty-btn plus" onclick="updateCartQuantity('${safeTitle}', 1)">+</button>
                </div>
            `;
        } else {
            cartHtml = `
                <div class="cart-btn-container">
                    <button class="btn cart" onclick="addToCart('${safeTitle}')">Add to Cart</button>
                </div>
            `;
        }
        productDiv.innerHTML = `
            <div class="img-wrapper">
                <img src="${product.img}" alt="${product.title}" loading="lazy" />
                <button class="btn-icon" onclick="openModal('${safeTitle}')" aria-label="View Details">
                    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"></path>
                    </svg>
                </button>
                <button class="wishlist-btn-product" onclick="toggleWishlist('${safeTitle}')" aria-label="Add to Wishlist">
                    <i data-lucide="heart"></i>
                </button>
            </div>
            <h3>${product.title}</h3>
            <div class="rating" aria-label="Rating: ${product.rating} out of 5 stars">
                ${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}
            </div>
            <div class="price">₹${product.price.toLocaleString()}/-</div>
            ${cartHtml}
        `;
        productGrid.appendChild(productDiv);
    });

    updateWishlistButtons();
    lucide.createIcons(); // Re-create icons for new elements
}

// Open product modal
function openModal(title) {
    const product = window.productData.find(p => p.title === title);
    if (!product) return;

    document.getElementById('modalTitle').textContent = product.title;
    document.querySelector('.modal-img').src = product.img;
    document.querySelector('.modal-img').alt = product.title;
    document.querySelector('.modal-rating').textContent = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
    document.getElementById('modalDesc').textContent = product.desc;
    document.querySelector('.modal-price').textContent = `₹${product.price.toLocaleString()}/-`;

    // Reviews
    const reviewsSection = document.getElementById('modalReviews');
    reviewsSection.innerHTML = '<h4>Customer Reviews</h4>';
    product.reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review-item';
        reviewDiv.innerHTML = `
            <div class="review-user">${review.user}</div>
            <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
            <div class="review-comment">${review.comment}</div>
        `;
        reviewsSection.appendChild(reviewDiv);
    });

    updateModalCartControls(title);

    document.getElementById('productModal').classList.add('show');
    document.getElementById('productModal').setAttribute('aria-hidden', 'false');
    lucide.createIcons(); // For modal wishlist icon
}

// Update modal cart controls based on current quantity
function updateModalCartControls(title) {
    const safeTitle = title.replace(/'/g, "\\'");
    const existingItem = getCartItem(title);
    const currentQty = existingItem ? existingItem.quantity : 0;

    // Wishlist button in modal
    const isInWishlist = wishlist.some(item => item.title === title);
    const modalWishlistBtn = `<button class="modal-wishlist-btn ${isInWishlist ? 'active' : ''}" onclick="toggleWishlist('${safeTitle}')">
        <i data-lucide="heart"></i>
    </button>`;

    let cartHtml;
    if (currentQty > 0) {
        cartHtml = `
            <div class="modal-cart-controls">
                <div class="modal-quantity-container">
                    <button class="qty-btn minus" onclick="updateModalQuantity('${safeTitle}', -1)">-</button>
                    <span class="modal-qty-display">${currentQty}</span>
                    <button class="qty-btn plus" onclick="updateModalQuantity('${safeTitle}', 1)">+</button>
                </div>
            </div>
            ${modalWishlistBtn}
        `;
    } else {
        cartHtml = `
            <div class="modal-cart-controls">
                <button class="modal-cart-btn" onclick="addToCart('${safeTitle}')">Add to Cart</button>
            </div>
            ${modalWishlistBtn}
        `;
    }

    const modalCartContainer = document.querySelector('.modal-cart-container');
    modalCartContainer.innerHTML = cartHtml;
}

// Update modal quantity
function updateModalQuantity(title, delta) {
    updateCartQuantity(title, delta);
    updateModalCartControls(title);
}

// Toggle wishlist
function toggleWishlist(title) {
    title = title.replace(/\\'/g, "'");
    const product = window.productData.find(p => p.title === title);
    if (!product) return;

    const index = wishlist.findIndex(item => item.title === title);
    if (index > -1) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(product);
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateCounts();
    updateWishlistButtons();
    populateWishlistModal();
    // Update modal wishlist button if open
    const modalWishlistBtn = document.querySelector('.modal-wishlist-btn');
    if (modalWishlistBtn && document.getElementById('productModal').classList.contains('show')) {
        const modalTitle = document.getElementById('modalTitle').textContent;
        if (modalTitle === title) {
            const isInWishlist = wishlist.some(item => item.title === title);
            modalWishlistBtn.classList.toggle('active', isInWishlist);
        }
    }
}

// Add to cart (initial add)
function addToCart(title) {
    title = title.replace(/\\'/g, "'");
    const product = window.productData.find(p => p.title === title);
    if (!product) return;

    // Add with quantity 1 if not exists
    if (!getCartItem(title)) {
        cart.push({ ...product, quantity: 1 });
    }

    // Ensure no undefined items
    cart = cart.filter(item => item && item.title && item.price);

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCounts();
    populateCartModal();
    if (document.querySelector('.deals-page') && typeof loadDealsProducts === 'function') {
        loadDealsProducts();
    } else if (document.getElementById('productGrid')) {
        loadProducts();
    }

    // Update modal cart controls if modal is open
    if (document.getElementById('productModal').classList.contains('show')) {
        const modalTitle = document.getElementById('modalTitle').textContent;
        if (modalTitle === title) {
            updateModalCartControls(title);
        }
    }
}

// Update cart quantity
function updateCartQuantity(title, delta) {
    title = title.replace(/\\'/g, "'");
    const product = window.productData.find(p => p.title === title);
    if (!product) return;

    let existing = getCartItem(title);
    if (existing) {
        existing.quantity += delta;
        if (existing.quantity <= 0) {
            cart = cart.filter(item => item.title !== title);
        }
    } else if (delta > 0) {
        cart.push({ ...product, quantity: 1 });
    }

    // Ensure no undefined items
    cart = cart.filter(item => item && item.title && item.price);

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCounts();
    populateCartModal();
    if (document.querySelector('.deals-page') && typeof loadDealsProducts === 'function') {
        loadDealsProducts();
    } else if (document.getElementById('productGrid')) {
        loadProducts();
    }

    // Update modal cart controls if modal is open
    if (document.getElementById('productModal').classList.contains('show')) {
        const modalTitle = document.getElementById('modalTitle').textContent;
        if (modalTitle === title) {
            updateModalCartControls(title);
        }
    }
}

// Update counts in navbar
function updateCounts() {
    document.querySelector('.wishlist-count').textContent = wishlist.length;
    document.querySelector('.cart-count').textContent = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
}

// Update wishlist button states
function updateWishlistButtons() {
    document.querySelectorAll('.wishlist-btn-product').forEach(btn => {
        let title = btn.dataset.title;
        if (!title) {
            const titleMatch = btn.getAttribute('onclick')?.match(/'([^']+)'/);
            if (titleMatch) title = titleMatch[1];
        }
        if (title) {
            title = title.replace(/\\'/g, "'");
            const isInWishlist = wishlist.some(item => item.title === title);
            btn.classList.toggle('active', isInWishlist);
        }
    });
}

// Setup modal closers
function setupModalClosers() {
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').classList.remove('show');
            this.closest('.modal').setAttribute('aria-hidden', 'true');
        });
    });

    // Close on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('show');
                this.setAttribute('aria-hidden', 'true');
            }
        });
    });
}

// Setup navbar buttons
function setupNavbarButtons() {
    // Highlight current page
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav.main-nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Hamburger menu toggle
    document.querySelector('.hamburger-btn').addEventListener('click', function() {
        document.getElementById('mobileMenu').classList.add('active');
    });

    // Close mobile menu
    document.querySelector('.mobile-menu-close').addEventListener('click', function() {
        document.getElementById('mobileMenu').classList.remove('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', function() {
            document.getElementById('mobileMenu').classList.remove('active');
        });
    });

    document.querySelector('.wishlist-btn').addEventListener('click', function() {
        populateWishlistModal();
        document.getElementById('wishlistModal').classList.add('show');
        document.getElementById('wishlistModal').setAttribute('aria-hidden', 'false');
    });

    document.querySelector('.cart-btn').addEventListener('click', function() {
        populateCartModal();
        document.getElementById('cartModal').classList.add('show');
        document.getElementById('cartModal').setAttribute('aria-hidden', 'false');
    });
}

// Populate wishlist modal
function populateWishlistModal() {
    const wishlistItems = document.getElementById('wishlistItems');
    wishlistItems.innerHTML = '';

    if (wishlist.length === 0) {
        wishlistItems.innerHTML = '<p>Your wishlist is empty.</p>';
        return;
    }

    wishlist.forEach(item => {
        const safeTitle = item.title.replace(/'/g, "\\'");
        const itemDiv = document.createElement('div');
        itemDiv.className = 'wishlist-item';
        itemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.title}" class="wishlist-img" />
            <div class="wishlist-details">
                <h4>${item.title}</h4>
                <div class="wishlist-price">₹${item.price.toLocaleString()}/-</div>
            </div>
            <button class="remove-btn" onclick="removeFromWishlist('${safeTitle}')">&times;</button>
        `;
        wishlistItems.appendChild(itemDiv);
    });
}

// Calculate cart total
function calculateCartTotal() {
    return cart.reduce((sum, item) => {
        const price = parseFloat(item.price);
        return sum + (price * item.quantity);
    }, 0);
}

// Populate cart modal
function populateCartModal() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    // Ensure no undefined items
    cart = cart.filter(item => item && item.title && item.price);

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p><div class="cart-total">Total: ₹0/-</div>';
        return;
    }

    cart.forEach(item => {
        const safeTitle = item.title.replace(/'/g, "\\'");
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.title}" class="cart-img" />
            <div class="wishlist-details">
                <h4>${item.title}</h4>
                <div class="wishlist-price">₹${item.price.toLocaleString()}/-</div>
            </div>
            <div class="cart-quantity-container">
                <button class="qty-btn minus" onclick="updateCartQuantity('${safeTitle}', -1)">-</button>
                <span class="qty-display">${item.quantity}</span>
                <button class="qty-btn plus" onclick="updateCartQuantity('${safeTitle}', 1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart('${safeTitle}')">&times;</button>
        `;
        cartItems.appendChild(itemDiv);
    });

    // Add total
    const totalDiv = document.createElement('div');
    totalDiv.className = 'cart-total';
    totalDiv.innerHTML = `Total: ₹${calculateCartTotal().toFixed(2)}/-`;
    cartItems.appendChild(totalDiv);

    // Add place order button if cart has items
    if (cart.length > 0) {
        const placeOrderBtn = document.createElement('button');
        placeOrderBtn.id = 'placeOrderBtn';
        placeOrderBtn.className = 'place-order-btn';
        placeOrderBtn.textContent = 'Place Order';
        placeOrderBtn.addEventListener('click', placeOrder);
        cartItems.appendChild(placeOrderBtn);
    }
}

// Remove from wishlist
function removeFromWishlist(title) {
    wishlist = wishlist.filter(item => item.title !== title);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateCounts();
    updateWishlistButtons();
    populateWishlistModal();
}

// Remove from cart
function removeFromCart(title) {
    cart = cart.filter(item => item.title !== title);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCounts();
    populateCartModal();
    if (document.querySelector('.deals-page') && typeof loadDealsProducts === 'function') {
        loadDealsProducts();
    } else if (document.getElementById('productGrid')) {
        loadProducts();
    }
}

// Place order function
function placeOrder() {
    // Clear the cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCounts();
    populateCartModal();

    // Close cart modal
    document.getElementById('cartModal').classList.remove('show');
    document.getElementById('cartModal').setAttribute('aria-hidden', 'true');

    // Show order success modal
    document.getElementById('orderSuccessModal').classList.add('show');
    document.getElementById('orderSuccessModal').setAttribute('aria-hidden', 'false');
}

// Close order success modal
function closeOrderSuccessModal() {
    document.getElementById('orderSuccessModal').classList.remove('show');
    document.getElementById('orderSuccessModal').setAttribute('aria-hidden', 'true');
}
