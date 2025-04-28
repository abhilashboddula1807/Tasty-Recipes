// Sample recipe data (in a real application, this would come from an API)
const recipes = [
    {
        id: 1,
        title: "Butter Chicken",
        image: "https://source.unsplash.com/random/300x200/?butter-chicken",
        description: "A rich and creamy Indian curry made with tender chicken pieces in a spiced tomato sauce.",
        cuisine: "Indian",
        type: "Main Course",
        tags: ["Spicy", "Creamy", "Dinner", "Chicken"]
    },
    {
        id: 2,
        title: "Biryani",
        image: "https://source.unsplash.com/random/300x200/?biryani",
        description: "Fragrant basmati rice cooked with aromatic spices, tender meat, and caramelized onions.",
        cuisine: "Indian",
        type: "Main Course",
        tags: ["Rice", "Spicy", "Festive", "Lunch"]
    },
    {
        id: 3,
        title: "Masala Dosa",
        image: "https://source.unsplash.com/random/300x200/?masala-dosa",
        description: "Crispy rice crepe filled with spiced potato mixture, served with coconut chutney and sambar.",
        cuisine: "Indian",
        type: "Breakfast",
        tags: ["Vegetarian", "South Indian", "Quick"]
    },
    {
        id: 4,
        title: "Palak Paneer",
        image: "https://source.unsplash.com/random/300x200/?palak-paneer",
        description: "Creamy spinach curry with soft paneer cubes, seasoned with aromatic spices.",
        cuisine: "Indian",
        type: "Main Course",
        tags: ["Vegetarian", "Healthy", "Dinner"]
    },
    {
        id: 5,
        title: "Chole Bhature",
        image: "https://source.unsplash.com/random/300x200/?chole-bhature",
        description: "Spicy chickpea curry served with deep-fried bread, a popular North Indian breakfast.",
        cuisine: "Indian",
        type: "Breakfast",
        tags: ["Vegetarian", "Street Food", "Spicy"]
    },
    {
        id: 6,
        title: "Rogan Josh",
        image: "https://source.unsplash.com/random/300x200/?rogan-josh",
        description: "Aromatic Kashmiri lamb curry with rich, deep flavors and tender meat.",
        cuisine: "Indian",
        type: "Main Course",
        tags: ["Lamb", "Spicy", "Dinner"]
    },
    {
        id: 7,
        title: "Idli Sambar",
        image: "https://source.unsplash.com/random/300x200/?idli-sambar",
        description: "Soft steamed rice cakes served with lentil-based vegetable stew and coconut chutney.",
        cuisine: "Indian",
        type: "Breakfast",
        tags: ["Vegetarian", "Healthy", "South Indian"]
    },
    {
        id: 8,
        title: "Tandoori Chicken",
        image: "https://source.unsplash.com/random/300x200/?tandoori-chicken",
        description: "Marinated chicken cooked in a traditional clay oven, served with mint chutney.",
        cuisine: "Indian",
        type: "Appetizer",
        tags: ["Grilled", "Spicy", "Party"]
    },
    {
        id: 9,
        title: "Dal Makhani",
        image: "https://source.unsplash.com/random/300x200/?dal-makhani",
        description: "Creamy black lentils cooked with butter and cream, a rich and comforting dish.",
        cuisine: "Indian",
        type: "Main Course",
        tags: ["Vegetarian", "Comfort Food", "Dinner"]
    },
    {
        id: 10,
        title: "Pav Bhaji",
        image: "https://source.unsplash.com/random/300x200/?pav-bhaji",
        description: "Spicy mashed vegetable curry served with buttered bread rolls, a Mumbai street food favorite.",
        cuisine: "Indian",
        type: "Snack",
        tags: ["Vegetarian", "Street Food", "Quick"]
    },
    {
        id: 11,
        title: "Gulab Jamun",
        image: "https://source.unsplash.com/random/300x200/?gulab-jamun",
        description: "Soft, melt-in-mouth milk solids dumplings soaked in sugar syrup, a popular Indian dessert.",
        cuisine: "Indian",
        type: "Dessert",
        tags: ["Sweet", "Festive", "Vegetarian"]
    },
    {
        id: 12,
        title: "Vada Pav",
        image: "https://source.unsplash.com/random/300x200/?vada-pav",
        description: "Spicy potato fritter in a bun with chutneys, Mumbai's favorite street food.",
        cuisine: "Indian",
        type: "Snack",
        tags: ["Vegetarian", "Street Food", "Quick"]
    },
    {
        id: 13,
        title: "Mango Lassi",
        image: "https://source.unsplash.com/random/300x200/?mango-lassi",
        description: "Creamy yogurt-based drink blended with sweet mango pulp and a hint of cardamom.",
        cuisine: "Indian",
        type: "Beverage",
        tags: ["Sweet", "Refreshing", "Summer", "Vegetarian"]
    },
    {
        id: 14,
        title: "Nimbu Pani",
        image: "https://source.unsplash.com/random/300x200/?lemonade",
        description: "Traditional Indian lemonade with a touch of black salt and roasted cumin, perfect for hot days.",
        cuisine: "Indian",
        type: "Beverage",
        tags: ["Tangy", "Refreshing", "Summer", "Quick"]
    },
    {
        id: 15,
        title: "Jaljeera",
        image: "https://source.unsplash.com/random/300x200/?jaljeera",
        description: "Spiced cumin water with mint and tamarind, a digestive drink with a unique flavor.",
        cuisine: "Indian",
        type: "Beverage",
        tags: ["Spicy", "Digestive", "Summer", "Healthy"]
    }
];

// Sample breakfast items data
const breakfastItems = [
    {
        name: "Idli",
        description: "Soft and fluffy steamed rice cakes, a staple breakfast item served with sambar and coconut chutney",
        price: "₹50",
        rating: 4.8,
        category: "vegetarian",
        image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg"
    },
    {
        name: "Dosa",
        description: "Crispy rice and lentil crepes, served with sambar and coconut chutney",
        price: "₹80",
        rating: 4.9,
        category: "vegetarian",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg"
    },
    {
        name: "Pongal",
        description: "Creamy rice and lentil porridge cooked with ghee, pepper, and cumin",
        price: "₹60",
        rating: 4.5,
        category: "vegetarian",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg"
    },
    {
        name: "Upma",
        description: "Semolina cooked with vegetables and spices, a quick and healthy breakfast option",
        price: "₹45",
        rating: 4.3,
        category: "vegetarian",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg"
    },
    {
        name: "Vada",
        description: "Crispy deep-fried lentil donuts, perfect with sambar and coconut chutney",
        price: "₹40",
        rating: 4.7,
        category: "vegetarian",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg"
    },
    {
        name: "Puttu",
        description: "Steamed rice flour cylinders, typically served with kadala curry or banana",
        price: "₹55",
        rating: 4.4,
        category: "vegetarian",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg"
    },
    {
        name: "Appam",
        description: "Soft and fluffy rice pancakes with crispy edges, served with vegetable stew",
        price: "₹70",
        rating: 4.8,
        category: "vegetarian",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg"
    },
    {
        name: "Uttapam",
        description: "Thick dosa topped with vegetables, served with sambar and chutney",
        price: "₹65",
        rating: 4.6,
        category: "vegetarian",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg"
    },
    {
        name: "Pesarattu",
        description: "Green gram dosa, a protein-rich breakfast option from Andhra Pradesh",
        price: "₹75",
        rating: 4.5,
        category: "vegetarian",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg"
    },
    {
        name: "Rava Kesari",
        description: "Sweet semolina pudding flavored with saffron and cardamom",
        price: "₹45",
        rating: 4.7,
        category: "vegetarian",
        image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg"
    }
];

// DOM Elements
const recipeGrid = document.querySelector('.recipe-grid');
const searchInput = document.querySelector('.search-input');
const filterSelect = document.querySelector('.filter-select');
const sortSelect = document.querySelector('.sort-select');

// Function to create recipe card
function createRecipeCard(item) {
    return `
        <div class="recipe-card">
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="recipe-details">
                <span class="price">${item.price}</span>
                <span class="rating">⭐ ${item.rating}</span>
            </div>
        </div>
    `;
}

// Function to render recipe cards
function renderRecipes(items) {
    recipeGrid.innerHTML = items.map(createRecipeCard).join('');
}

// Function to filter and sort recipes
function updateRecipes() {
    const searchTerm = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;
    const sortValue = sortSelect.value;

    let filteredItems = recipes.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm) ||
                            item.description.toLowerCase().includes(searchTerm);
        const matchesFilter = filterValue === 'all' || item.tags.includes(filterValue);
        return matchesSearch && matchesFilter;
    });

    // Sort items
    filteredItems.sort((a, b) => {
        switch(sortValue) {
            case 'name':
                return a.title.localeCompare(b.title);
            case 'price-low':
                return parseFloat(a.price.replace('₹', '').split('-')[0]) - parseFloat(b.price.replace('₹', '').split('-')[0]);
            case 'price-high':
                return parseFloat(b.price.replace('₹', '').split('-')[0]) - parseFloat(a.price.replace('₹', '').split('-')[0]);
            case 'rating':
                return b.rating - a.rating;
            default:
                return 0;
        }
    });

    renderRecipes(filteredItems);
}

// Event Listeners
searchInput.addEventListener('input', updateRecipes);
filterSelect.addEventListener('change', updateRecipes);
sortSelect.addEventListener('change', updateRecipes);

// Initial render
updateRecipes();

// Add hover effect for recipe cards
function addHoverEffects() {
    const recipeCards = document.querySelectorAll('.recipe-card');
    recipeCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    addHoverEffects();
}); 