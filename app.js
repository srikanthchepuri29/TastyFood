// TastyFood - Static Swiggy-Inspired Interactive Application Engine

// Initialize Data in LocalStorage if not present
const defaultMenuItems = [
    {
        "id": 1,
        "category": "pizzas",
        "name": "Double Cheese Margherita",
        "description": "A classic delight loaded with extra mozzarella cheese, fresh basil leaves, and signature marinara sauce on a fresh hand-tossed crust.",
        "price": 349.00,
        "image_url": "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.7,
        "prep_time": 25,
        "is_available": true
    },
    {
        "id": 2,
        "category": "pizzas",
        "name": "Spicy Paneer Deluxe",
        "description": "Spicy marinated paneer chunks, crisp capsicum, red onions, and hot red paprika toppings with spicy schezwan sauce.",
        "price": 399.00,
        "image_url": "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.5,
        "prep_time": 30,
        "is_available": true
    },
    {
        "id": 3,
        "category": "pizzas",
        "name": "Loaded Chicken Pepperoni",
        "description": "Lover of meat? Get chicken pepperoni slices, smoked chicken breast pieces, hot jalapenos, and mozzarella.",
        "price": 499.00,
        "image_url": "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.8,
        "prep_time": 28,
        "is_available": true
    },
    {
        "id": 4,
        "category": "burgers",
        "name": "Classic Aloo Tikki Burger",
        "description": "Crisp potato patty, fresh tomato slices, shredded onions, creamy veg mayo, and toasted sesame buns.",
        "price": 129.00,
        "image_url": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.3,
        "prep_time": 15,
        "is_available": true
    },
    {
        "id": 5,
        "category": "burgers",
        "name": "Crunchy Veg Cheese Burst",
        "description": "Deep-fried premium mix vegetable patty filled with melted liquid cheese, lettuce, jalapenos, and cocktail dressing.",
        "price": 179.00,
        "image_url": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.6,
        "prep_time": 20,
        "is_available": true
    },
    {
        "id": 6,
        "category": "burgers",
        "name": "Spicy Crispy Chicken Burger",
        "description": "Golden crispy fried chicken breast fillet dipped in hot spice oil, topped with cool ranch dressing and pickles.",
        "price": 229.00,
        "image_url": "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.7,
        "prep_time": 20,
        "is_available": true
    },
    {
        "id": 7,
        "category": "biryanis",
        "name": "Royal Dum Veg Biryani",
        "description": "Fragrant basmati rice layered with garden-fresh vegetables, paneer cubes, and hand-ground spices, slow-cooked on dum.",
        "price": 279.00,
        "image_url": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.6,
        "prep_time": 35,
        "is_available": true
    },
    {
        "id": 8,
        "category": "biryanis",
        "name": "Hyderabadi Chicken Biryani",
        "description": "Classic recipe from Hyderabad: tender chicken pieces marinated in yogurt and spices, layered with saffron basmati rice.",
        "price": 349.00,
        "image_url": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.9,
        "prep_time": 40,
        "is_available": true
    },
    {
        "id": 9,
        "category": "biryanis",
        "name": "Special Mutton Dum Biryani",
        "description": "Slow-cooked lamb pieces marinated in traditional spices, layered with premium saffron long-grain rice.",
        "price": 449.00,
        "image_url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.8,
        "prep_time": 45,
        "is_available": true
    },
    {
        "id": 10,
        "category": "drinks",
        "name": "Fresh Mint Mojito",
        "description": "Refreshing fizzy mocktail made with crushed fresh mint leaves, lime slices, sugar syrup, and a splash of club soda.",
        "price": 99.00,
        "image_url": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.4,
        "prep_time": 10,
        "is_available": true
    },
    {
        "id": 11,
        "category": "drinks",
        "name": "Iced Vanilla Latte swirls",
        "description": "Double shot of premium espresso blended with chilled milk, ice cubes, and rich vanilla syrup swirls.",
        "price": 149.00,
        "image_url": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.5,
        "prep_time": 10,
        "is_available": true
    },
    {
        "id": 12,
        "category": "drinks",
        "name": "Creamy Alphonso Mango Lassi",
        "description": "Traditional sweet yogurt drink blended with fresh sweet Alphonso mango pulp, saffron strands, and crushed pistachios.",
        "price": 119.00,
        "image_url": "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.7,
        "prep_time": 10,
        "is_available": true
    },
    {
        "id": 13,
        "category": "icecreams",
        "name": "Chocolate Lava Cake",
        "description": "Warm chocolate cake with a molten liquid dark chocolate center that oozes out. Served hot.",
        "price": 129.00,
        "image_url": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.8,
        "prep_time": 15,
        "is_available": true
    },
    {
        "id": 14,
        "category": "icecreams",
        "name": "Sizzling Walnut Brownie",
        "description": "Fudgy dark chocolate brownie loaded with roasted walnuts. Perfect dessert craving.",
        "price": 199.00,
        "image_url": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.6,
        "prep_time": 15,
        "is_available": true
    },
    {
        "id": 15,
        "category": "pizzas",
        "name": "Tandoori Chicken Pizza",
        "description": "Tender pieces of spicy tandoori chicken, red onions, and green chilies, topped with fresh coriander leaves.",
        "price": 449.00,
        "image_url": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.8,
        "prep_time": 25,
        "is_available": true
    },
    {
        "id": 16,
        "category": "burgers",
        "name": "Ultimate Double Bacon Whopper",
        "description": "Double grilled chicken patties layered with cheese slices, crispy turkey bacon, lettuce, and smokehouse BBQ sauce.",
        "price": 279.00,
        "image_url": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.7,
        "prep_time": 22,
        "is_available": true
    },
    {
        "id": 17,
        "category": "biryanis",
        "name": "Saffron Egg Dum Biryani",
        "description": "Boiled eggs marinated in special spices and layered with fragrant long grain basmati rice and saffron.",
        "price": 289.00,
        "image_url": "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.5,
        "prep_time": 30,
        "is_available": true
    },
    {
        "id": 18,
        "category": "nonveg",
        "name": "Royal Butter Chicken Masala",
        "description": "Tender boneless tandoori chicken cooked in a rich, buttery, creamy tomato gravy flavored with kasuri methi.",
        "price": 329.00,
        "image_url": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.9,
        "prep_time": 25,
        "is_available": true
    },
    {
        "id": 19,
        "category": "nonveg",
        "name": "Fiery Tandoori Chicken Platter",
        "description": "Half chicken marinated in yogurt, Kashmiri red chilies, and tandoori spices, roasted in a clay tandoor.",
        "price": 389.00,
        "image_url": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.8,
        "prep_time": 28,
        "is_available": true
    },
    {
        "id": 20,
        "category": "nonveg",
        "name": "Mutton Seekh Kebab",
        "description": "Minced mutton mixed with fresh herbs and Indian spices, skewered and grilled to juicy perfection.",
        "price": 349.00,
        "image_url": "https://images.unsplash.com/photo-1615557960901-d409e45500c2?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.7,
        "prep_time": 20,
        "is_available": true
    },
    {
        "id": 21,
        "category": "drinks",
        "name": "Premium Oreo Milkshake",
        "description": "Thick milkshake blended with creamy vanilla ice cream, cold milk, and crushed chocolate Oreo cookies, topped with whipped cream.",
        "price": 129.00,
        "image_url": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.6,
        "prep_time": 10,
        "is_available": true
    },
    {
        "id": 22,
        "category": "drinks",
        "name": "Blue Lagoon Mocktail",
        "description": "A sweet and refreshing tropical drink with blue curacao syrup, lemon juice, sugar, and club soda over crushed ice.",
        "price": 109.00,
        "image_url": "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.4,
        "prep_time": 8,
        "is_available": true
    },
    {
        "id": 23,
        "category": "icecreams",
        "name": "Double Chocolate Fudge Ice Cream",
        "description": "Vibrant and rich chocolate ice cream layered with gooey chocolate fudge sauce and dark chocolate chips.",
        "price": 149.00,
        "image_url": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.8,
        "prep_time": 10,
        "is_available": true
    },
    {
        "id": 24,
        "category": "icecreams",
        "name": "Creamy Strawberry Sundae",
        "description": "Double scoop of fresh strawberry ice cream topped with real strawberry glaze, fresh fruit slices, and a waffle wafer.",
        "price": 159.00,
        "image_url": "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.7,
        "prep_time": 10,
        "is_available": true
    },
    {
        "id": 25,
        "category": "icecreams",
        "name": "Roasted Almond Scoop",
        "description": "Premium slow-churned almond ice cream infused with golden honey and loaded with crunchy roasted almond chunks.",
        "price": 139.00,
        "image_url": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.6,
        "prep_time": 10,
        "is_available": true
    },
    {
        "id": 26,
        "category": "pizzas",
        "name": "Classic Corn & Cheese Pizza",
        "description": "Sweet golden corn kernels mixed with creamy rich liquid cheese spread and mozzarella on a crispy hand-stretched crust.",
        "price": 249.00,
        "image_url": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.3,
        "prep_time": 20,
        "is_available": true
    },
    {
        "id": 27,
        "category": "pizzas",
        "name": "Farmhouse Fresh Pizza",
        "description": "Delightful combination of grilled mushrooms, fresh crisp capsicum, juicy tomatoes, and sweet red onions.",
        "price": 379.00,
        "image_url": "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.6,
        "prep_time": 25,
        "is_available": true
    },
    {
        "id": 28,
        "category": "pizzas",
        "name": "Paneer Makhani Delight",
        "description": "Cottage cheese chunks marinated in rich makhani sauce, layered with mozzarella, red capsicum, and yellow bell peppers.",
        "price": 419.00,
        "image_url": "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.7,
        "prep_time": 28,
        "is_available": true
    },
    {
        "id": 29,
        "category": "pizzas",
        "name": "Garden Veggie Supreme",
        "description": "Loaded with black olives, baby corn, fresh mushrooms, baby spinach leaves, and dynamic jalapeño rounds.",
        "price": 319.00,
        "image_url": "https://images.unsplash.com/photo-1541743607253-b962edf9c6cf?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.4,
        "prep_time": 22,
        "is_available": true
    },
    {
        "id": 30,
        "category": "pizzas",
        "name": "Five Cheese Blast",
        "description": "Unbelievable blend of 5 rich cheeses: Mozzarella, Cheddar, Gouda, Parmesan, and a signature cheese spread drizzle.",
        "price": 459.00,
        "image_url": "https://images.unsplash.com/photo-1594007654729-407edd1a229a?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.8,
        "prep_time": 26,
        "is_available": true
    },
    {
        "id": 31,
        "category": "pizzas",
        "name": "Smoked BBQ Chicken Pizza",
        "description": "Smoky pulled chicken breast chunks coated with honey BBQ sauce, fresh red onions, and loads of melted cheese.",
        "price": 489.00,
        "image_url": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.7,
        "prep_time": 27,
        "is_available": true
    },
    {
        "id": 32,
        "category": "pizzas",
        "name": "Keema Masala Pizza",
        "description": "Spicy minced chicken keema spread, coriander sprinkles, red onions, and hot green chilies over marinara base.",
        "price": 499.00,
        "image_url": "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.6,
        "prep_time": 29,
        "is_available": true
    },
    {
        "id": 33,
        "category": "pizzas",
        "name": "Chicken Tikka Pizza",
        "description": "Clay oven roasted chicken tikka pieces, crisp red onions, and capsicum, with mint mayo swirl toppings.",
        "price": 469.00,
        "image_url": "https://images.unsplash.com/photo-1588315029055-680b2a089f33?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.7,
        "prep_time": 25,
        "is_available": true
    },
    {
        "id": 34,
        "category": "pizzas",
        "name": "Spicy Pepper Chicken Pizza",
        "description": "Loaded with black pepper chicken chunks, spicy chicken salami, red paprika flakes, and extra mozzarella.",
        "price": 479.00,
        "image_url": "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.5,
        "prep_time": 26,
        "is_available": true
    },
    {
        "id": 35,
        "category": "pizzas",
        "name": "Chicken Sausage Crust",
        "description": "Juicy chicken sausage slices, mushrooms, black olives, and melted mozzarella cheese on classic crust.",
        "price": 429.00,
        "image_url": "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.4,
        "prep_time": 24,
        "is_available": true
    },
    {
        "id": 36,
        "category": "burgers",
        "name": "Premium Paneer Lava Burger",
        "description": "A thick crispy fried paneer patty stuffed with liquid cheese that oozes out. Topped with peri-peri mayo.",
        "price": 199.00,
        "image_url": "https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.5,
        "prep_time": 18,
        "is_available": true
    },
    {
        "id": 37,
        "category": "burgers",
        "name": "Crispy Veg Maharaja Burger",
        "description": "Double decker burger with two crispy vegetable patties, cheese slice, shredded lettuce, and thousand island sauce.",
        "price": 219.00,
        "image_url": "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.6,
        "prep_time": 20,
        "is_available": true
    },
    {
        "id": 38,
        "category": "burgers",
        "name": "Double Cheese Margherita Burger",
        "description": "Fresh potato herb patty sandwiched between two cheese slices, dynamic basil spread, and sliced tomato buns.",
        "price": 159.00,
        "image_url": "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.4,
        "prep_time": 15,
        "is_available": true
    },
    {
        "id": 39,
        "category": "burgers",
        "name": "Spicy Jalapeno Veg Burger",
        "description": "Crisp mixed vegetable patty, hot jalapeno rounds, spicy garlic aioli, and shredded onions on sesame buns.",
        "price": 149.00,
        "image_url": "https://images.unsplash.com/photo-1513185158878-8d8c2a2a3e3c?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.3,
        "prep_time": 16,
        "is_available": true
    },
    {
        "id": 40,
        "category": "burgers",
        "name": "Swiss Mushroom Fusion Burger",
        "description": "Mouthwatering vegetable patty topped with grilled button mushrooms, melted Swiss cheese slice, and caramelized onions.",
        "price": 189.00,
        "image_url": "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.5,
        "prep_time": 18,
        "is_available": true
    },
    {
        "id": 41,
        "category": "burgers",
        "name": "Classic Grilled Chicken Burger",
        "description": "Flame grilled chicken breast fillet marinated in herbs, topped with crisp lettuce, sliced tomato, and creamy herb mayonnaise.",
        "price": 239.00,
        "image_url": "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.6,
        "prep_time": 18,
        "is_available": true
    },
    {
        "id": 42,
        "category": "burgers",
        "name": "Double Chicken Tower Burger",
        "description": "Two crispy fried chicken patties stacked high with double cheddar cheese slices, pickles, and cool ranch dressing.",
        "price": 329.00,
        "image_url": "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.8,
        "prep_time": 22,
        "is_available": true
    },
    {
        "id": 43,
        "category": "burgers",
        "name": "Smokehouse BBQ Chicken Burger",
        "description": "Grilled chicken patty, sweet smokey BBQ sauce glaze, fried onion rings, crisp lettuce, and cheddar melt.",
        "price": 269.00,
        "image_url": "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.6,
        "prep_time": 19,
        "is_available": true
    },
    {
        "id": 44,
        "category": "burgers",
        "name": "Fluffy Egg & Cheese Burger",
        "description": "Two fried farm-fresh eggs, dynamic cheese slice, raw onions, and custom chili tomato spread on warm buns.",
        "price": 159.00,
        "image_url": "https://images.unsplash.com/photo-1521305916504-4a1121188589?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.4,
        "prep_time": 14,
        "is_available": true
    },
    {
        "id": 45,
        "category": "burgers",
        "name": "Fiery Peri Peri Chicken Burger",
        "description": "Golden crispy fried chicken fillet tossed in extra-spicy peri-peri spice dust, cool mayo, and iceberg lettuce.",
        "price": 249.00,
        "image_url": "https://images.unsplash.com/photo-1499746024268-5827e22688dc?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.7,
        "prep_time": 20,
        "is_available": true
    },
    {
        "id": 46,
        "category": "biryanis",
        "name": "Paneer Tikka Dum Biryani",
        "description": "Tandoori paneer tikka cubes cooked in a spicy gravy, layered with fragrant saffron basmati rice and brown onions.",
        "price": 299.00,
        "image_url": "https://images.unsplash.com/photo-1631515243361-c69f25e3505c?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.6,
        "prep_time": 30,
        "is_available": true
    },
    {
        "id": 47,
        "category": "biryanis",
        "name": "Lucknowi Subz Dum Biryani",
        "description": "Awadhi style delicate vegetable biryani cooked with green peas, carrots, french beans, in milk-infused saffron rice.",
        "price": 269.00,
        "image_url": "https://images.unsplash.com/photo-1626855276583-0bd6a6ca7f36?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.5,
        "prep_time": 28,
        "is_available": true
    },
    {
        "id": 48,
        "category": "biryanis",
        "name": "Kaju Kishmish Shahi Biryani",
        "description": "A sweet and savory royal veg biryani cooked with butter-roasted cashews, golden raisins, and rich spices.",
        "price": 319.00,
        "image_url": "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.7,
        "prep_time": 32,
        "is_available": true
    },
    {
        "id": 49,
        "category": "biryanis",
        "name": "Soya Chaap Dum Biryani",
        "description": "Soft soya chaap cubes marinated in tandoori spices, slow-cooked in dum layers with long-grain rice.",
        "price": 279.00,
        "image_url": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.4,
        "prep_time": 25,
        "is_available": true
    },
    {
        "id": 50,
        "category": "biryanis",
        "name": "Jackfruit Dum Biryani",
        "description": "Marinated raw baby jackfruit (kathal) chunks cooked with curd and hand-ground spices, layered with basmati rice.",
        "price": 289.00,
        "image_url": "https://images.unsplash.com/photo-1618449808021-1798709db0a0?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.5,
        "prep_time": 35,
        "is_available": true
    },
    {
        "id": 51,
        "category": "biryanis",
        "name": "Kolkata Style Chicken Biryani",
        "description": "Fragrant and light rice recipe with juicy chicken, boiled egg, and the signature slow-cooked spiced potato.",
        "price": 359.00,
        "image_url": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.8,
        "prep_time": 35,
        "is_available": true
    },
    {
        "id": 52,
        "category": "biryanis",
        "name": "Spicy Kabab Dum Biryani",
        "description": "Soft grilled chicken seekh kabab pieces layered in thick onion-tomato gravy and slow-cooked with basmati rice.",
        "price": 369.00,
        "image_url": "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.7,
        "prep_time": 30,
        "is_available": true
    },
    {
        "id": 53,
        "category": "biryanis",
        "name": "Mughlai Mutton Dum Biryani",
        "description": "Traditional royal recipe: tender lamb chunks slow-cooked in ghee, layered with shahi saffron rice.",
        "price": 469.00,
        "image_url": "https://images.unsplash.com/photo-1637806930600-37fa8892069d?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.9,
        "prep_time": 45,
        "is_available": true
    },
    {
        "id": 54,
        "category": "biryanis",
        "name": "Fish Dum Biryani",
        "description": "Boneless fish fillets marinated in southern spices, cooked with aromatic basmati rice, mint, and fresh lemon.",
        "price": 399.00,
        "image_url": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.6,
        "prep_time": 32,
        "is_available": true
    },
    {
        "id": 55,
        "category": "biryanis",
        "name": "Prawns Masala Dum Biryani",
        "description": "Spiced prawns cooked in a tangy masala base, slow-cooked in dum layers with long-grain saffron rice.",
        "price": 429.00,
        "image_url": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.8,
        "prep_time": 35,
        "is_available": true
    },
    {
        "id": 56,
        "category": "nonveg",
        "name": "Kadai Chicken Lahori",
        "description": "Juicy chicken pieces cooked with freshly crushed coriander seeds, black pepper, bell peppers, and tomato gravy.",
        "price": 319.00,
        "image_url": "https://images.unsplash.com/photo-1627308595260-6fad84c40413?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.6,
        "prep_time": 24,
        "is_available": true
    },
    {
        "id": 57,
        "category": "nonveg",
        "name": "Mughlai Mutton Rogan Josh",
        "description": "A classic Kashmiri lamb dish cooked with oil, dynamic spices, and flavored with dry ginger and ratan jot.",
        "price": 429.00,
        "image_url": "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.8,
        "prep_time": 30,
        "is_available": true
    },
    {
        "id": 58,
        "category": "nonveg",
        "name": "Spicy Chicken Chettinad",
        "description": "Fiery southern recipe: chicken simmered in a spicy coconut gravy roasted with traditional chettinad spices.",
        "price": 329.00,
        "image_url": "https://images.unsplash.com/photo-1610057099443-fde8c4d90ef8?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.7,
        "prep_time": 26,
        "is_available": true
    },
    {
        "id": 59,
        "category": "nonveg",
        "name": "Garlic Butter Pepper Prawns",
        "description": "Tender prawns tossed in roasted garlic cloves, fresh black pepper grits, unsalted butter, and fresh spring greens.",
        "price": 449.00,
        "image_url": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.9,
        "prep_time": 22,
        "is_available": true
    },
    {
        "id": 60,
        "category": "nonveg",
        "name": "Golden Crispy Fish Fingers",
        "description": "Crumb fried premium fish fillets served with dynamic homemade tartar dipping sauce and fresh lime slices.",
        "price": 299.00,
        "image_url": "https://images.unsplash.com/photo-1579618218290-39a48f764a3a?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.5,
        "prep_time": 18,
        "is_available": true
    },
    {
        "id": 61,
        "category": "nonveg",
        "name": "Tangdi Kebab Platter",
        "description": "Three pieces of chicken drumsticks marinated in rich cashew cream and spices, roasted in clay oven.",
        "price": 349.00,
        "image_url": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.7,
        "prep_time": 28,
        "is_available": true
    },
    {
        "id": 62,
        "category": "nonveg",
        "name": "Chicken Tikka Masala Curry",
        "description": "Roasted chicken tikka chunks cooked in a spicy, flavorful orange-colored gravy of tomatoes, onions, and cream.",
        "price": 339.00,
        "image_url": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.8,
        "prep_time": 25,
        "is_available": true
    },
    {
        "id": 63,
        "category": "nonveg",
        "name": "Malabar Fish Curry",
        "description": "Kerala style fish curry cooked in a delicious coconut milk base flavored with raw mango pieces and curry leaves.",
        "price": 359.00,
        "image_url": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.6,
        "prep_time": 26,
        "is_available": true
    },
    {
        "id": 64,
        "category": "nonveg",
        "name": "Bhuna Gosht Mutton Masala",
        "description": "Boneless mutton cooked slowly in its own juices with thick brown onion gravy till the mutton is extremely tender.",
        "price": 439.00,
        "image_url": "https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.8,
        "prep_time": 30,
        "is_available": true
    },
    {
        "id": 65,
        "category": "nonveg",
        "name": "Chicken Shawarma Wrap Roll",
        "description": "Grilled pulled chicken marinated in garlic-herb spices, rolled in flat bread with cabbage slaw and garlic mayo.",
        "price": 189.00,
        "image_url": "https://images.unsplash.com/photo-1626700051175-6518c4793fdf?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.5,
        "prep_time": 15,
        "is_available": true
    },
    {
        "id": 66,
        "category": "drinks",
        "name": "Classic Chilled Cold Coffee",
        "description": "Smooth blend of premium coffee powder, chilled whole milk, sugar, and ice cubes, served with chocolate syrup swirls.",
        "price": 139.00,
        "image_url": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.5,
        "prep_time": 10,
        "is_available": true
    },
    {
        "id": 67,
        "category": "drinks",
        "name": "Fresh Watermelon Mint Cooler",
        "description": "Juiced fresh watermelon slices, fresh mint leaves, lime juice, and a pinch of black salt over crushed ice.",
        "price": 109.00,
        "image_url": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.4,
        "prep_time": 8,
        "is_available": true
    },
    {
        "id": 68,
        "category": "drinks",
        "name": "Sweet Strawberry Milkshake",
        "description": "Vibrant thick shake blended with strawberry ice cream, fresh strawberries, and topped with strawberry sprinkles.",
        "price": 129.00,
        "image_url": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.5,
        "prep_time": 10,
        "is_available": true
    },
    {
        "id": 69,
        "category": "drinks",
        "name": "Virgin Piña Colada Twist",
        "description": "Refreshing mocktail of fresh pineapple juice, sweetened coconut milk cream, and crushed ice.",
        "price": 149.00,
        "image_url": "https://images.unsplash.com/photo-1546173159-315724a31696?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.6,
        "prep_time": 12,
        "is_available": true
    },
    {
        "id": 70,
        "category": "drinks",
        "name": "Classic Lemon Iced Tea",
        "description": "Chilled black tea decoction sweetened with brown sugar syrup, lemon slices, and mint leaves.",
        "price": 99.00,
        "image_url": "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.3,
        "prep_time": 8,
        "is_available": true
    },
    {
        "id": 71,
        "category": "drinks",
        "name": "Sweet Masala Buttermilk",
        "description": "Traditional cool buttermilk blended with black salt, cumin powder, dynamic fresh coriander, and ginger.",
        "price": 79.00,
        "image_url": "https://images.unsplash.com/photo-1556881286-fc6915169721?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.6,
        "prep_time": 6,
        "is_available": true
    },
    {
        "id": 72,
        "category": "drinks",
        "name": "Dark Chocolate Milkshake",
        "description": "Rich shake blended with premium dark cocoa powder, chocolate fudge ice cream, and chocolate curls.",
        "price": 139.00,
        "image_url": "https://images.unsplash.com/photo-1600718374662-0483d2b90400?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.7,
        "prep_time": 10,
        "is_available": true
    },
    {
        "id": 73,
        "category": "drinks",
        "name": "Sparkling Peach Lemonade",
        "description": "Sweet peach syrup mixed with freshly squeezed lemons, sparkling soda water, and ice cubes.",
        "price": 119.00,
        "image_url": "https://images.unsplash.com/photo-1510626176961-4b57d4f40208?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.5,
        "prep_time": 9,
        "is_available": true
    },
    {
        "id": 74,
        "category": "drinks",
        "name": "Chilled Shahi Jaljeera",
        "description": "Spicy Indian digestive summer drink made with roasted cumin, dynamic mint extract, raw mango powder, and boondi.",
        "price": 69.00,
        "image_url": "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.4,
        "prep_time": 5,
        "is_available": true
    },
    {
        "id": 75,
        "category": "drinks",
        "name": "Refreshing Kiwi Mint Spritzer",
        "description": "Muddled fresh kiwi pulp, lime juice, mint leaves, sprite, and club soda served chilled.",
        "price": 129.00,
        "image_url": "https://images.unsplash.com/photo-1589227365533-cee630bd59bd?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.4,
        "prep_time": 8,
        "is_available": true
    },
    {
        "id": 76,
        "category": "icecreams",
        "name": "Classic Vanilla Bean Scoop",
        "description": "Smooth, rich ice cream made with real Madagascar vanilla bean seeds, served cold.",
        "price": 99.00,
        "image_url": "https://images.unsplash.com/photo-1570197789401-b521487fc533?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.4,
        "prep_time": 8,
        "is_available": true
    },
    {
        "id": 77,
        "category": "icecreams",
        "name": "Red Velvet Sundae Scoop",
        "description": "Double scoop of red velvet cream ice cream layered with cream cheese chunks and velvet cake crumbs.",
        "price": 169.00,
        "image_url": "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.7,
        "prep_time": 12,
        "is_available": true
    },
    {
        "id": 78,
        "category": "icecreams",
        "name": "Sweet Alphonso Mango Scoop",
        "description": "Real Alphonso mango pulp blended into thick ice cream cream base. Perfect seasonal delight.",
        "price": 119.00,
        "image_url": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.6,
        "prep_time": 8,
        "is_available": true
    },
    {
        "id": 79,
        "category": "icecreams",
        "name": "Butterscotch Crunch Sundae",
        "description": "Creamy butterscotch scoop loaded with caramelized cashew praline chunks and sweet butterscotch syrup.",
        "price": 129.00,
        "image_url": "https://images.unsplash.com/photo-1549396569-3fa785521111?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.5,
        "prep_time": 10,
        "is_available": true
    },
    {
        "id": 80,
        "category": "icecreams",
        "name": "Premium Death by Chocolate",
        "description": "Double scoop chocolate fudge ice cream, chocolate cake crumbs, hot fudge syrup, and roasted cashews.",
        "price": 229.00,
        "image_url": "https://images.unsplash.com/photo-1505394033223-4047469e2703?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.9,
        "prep_time": 15,
        "is_available": true
    },
    {
        "id": 81,
        "category": "icecreams",
        "name": "Mango Kulfi Stick Slice",
        "description": "Traditional thick Indian reduced milk kulfi flavored with alphonso mango, cardamoms, and pistachios.",
        "price": 99.00,
        "image_url": "https://images.unsplash.com/photo-1505394133493-234e44a8566f?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.7,
        "prep_time": 7,
        "is_available": true
    },
    {
        "id": 82,
        "category": "icecreams",
        "name": "Shahi Kesar Pista Scoop",
        "description": "Royal saffron and pistachio flavor blend loaded with real sliced pistachios and saffron threads.",
        "price": 139.00,
        "image_url": "https://images.unsplash.com/photo-1608930476079-f58c9f698413?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.8,
        "prep_time": 9,
        "is_available": true
    },
    {
        "id": 83,
        "category": "icecreams",
        "name": "Wild Blueberry Cheese Gelato",
        "description": "Rich artisanal Italian style cream cheese gelato swirled with tasty wild blueberry compote.",
        "price": 159.00,
        "image_url": "https://images.unsplash.com/photo-1534706936960-85aa4b1c4bdf?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.7,
        "prep_time": 10,
        "is_available": true
    },
    {
        "id": 84,
        "category": "icecreams",
        "name": "Hot Fudge Chocolate Tower",
        "description": "Chocolate fudge cake slice topped with dynamic scoop of vanilla ice cream, hot fudge sauce, and almond toppings.",
        "price": 189.00,
        "image_url": "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.8,
        "prep_time": 12,
        "is_available": true
    },
    {
        "id": 85,
        "category": "icecreams",
        "name": "Fresh Tender Coconut Scoop",
        "description": "ARTISAN coconut milk ice cream loaded with tender baby coconut meat shreds. Super light and refreshing.",
        "price": 129.00,
        "image_url": "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.6,
        "prep_time": 9,
        "is_available": true
    },
    {
        "id": 86,
        "category": "biryanis",
        "name": "Awadhi Gosht Dum Biryani",
        "description": "Mouthwatering slow-cooked Awadhi mutton biryani with aromatic spices.",
        "price": 459.00,
        "image_url": "https://images.unsplash.com/photo-1626777553757-5517b1897d26?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.8,
        "prep_time": 35,
        "is_available": true
    },
    {
        "id": 87,
        "category": "biryanis",
        "name": "Malabar Fish Dum Biryani",
        "description": "Kerala style fish biryani cooked with small grain Kaima rice and special spices.",
        "price": 389.00,
        "image_url": "https://images.unsplash.com/photo-1585857188823-776e8a7c2a9a?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.6,
        "prep_time": 32,
        "is_available": true
    },
    {
        "id": 88,
        "category": "biryanis",
        "name": "Sindhi Spicy Chicken Biryani",
        "description": "Tangy and spicy Sindhi style chicken biryani with potatoes and prunes.",
        "price": 349.00,
        "image_url": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.7,
        "prep_time": 35,
        "is_available": true
    },
    {
        "id": 89,
        "category": "biryanis",
        "name": "Bhatkali Chicken Biryani",
        "description": "Unique coastal style white biryani cooked in onion and green chilli paste.",
        "price": 339.00,
        "image_url": "https://images.unsplash.com/photo-1634863071378-43d2c88ee948?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.5,
        "prep_time": 30,
        "is_available": true
    },
    {
        "id": 90,
        "category": "biryanis",
        "name": "Kashmiri Shahi Zafrani Biryani",
        "description": "Rich saffron base biryani layered with sweet dry fruits, apples and cherries.",
        "price": 369.00,
        "image_url": "https://images.unsplash.com/photo-1543353071-10c8ba85a904?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.6,
        "prep_time": 38,
        "is_available": true
    },
    {
        "id": 91,
        "category": "veg",
        "name": "Shahi Paneer Butter Masala",
        "description": "Cottage cheese cubes cooked in a rich, sweet tomato butter gravy with hand-picked spices.",
        "price": 279.00,
        "image_url": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.7,
        "prep_time": 25,
        "is_available": true
    },
    {
        "id": 92,
        "category": "veg",
        "name": "Dal Makhani Bukhara",
        "description": "Slow-cooked black lentils overnight in butter and cream for that rich smoky flavor.",
        "price": 249.00,
        "image_url": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.8,
        "prep_time": 30,
        "is_available": true
    },
    {
        "id": 93,
        "category": "veg",
        "name": "Kadai Paneer Peshawari",
        "description": "Paneer chunks cooked in spicy kadai gravy with bell peppers and coriander seeds.",
        "price": 289.00,
        "image_url": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.6,
        "prep_time": 24,
        "is_available": true
    },
    {
        "id": 94,
        "category": "veg",
        "name": "Chana Masala Amritsari",
        "description": "Spicy chickpeas cooked in authentic Punjabi style spices with tangy tomato gravy.",
        "price": 199.00,
        "image_url": "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.5,
        "prep_time": 20,
        "is_available": true
    },
    {
        "id": 95,
        "category": "veg",
        "name": "Malai Kofta Curry",
        "description": "Soft paneer and potato dumplings simmered in a creamy, velvety cashew gravy.",
        "price": 299.00,
        "image_url": "https://images.unsplash.com/photo-1585934580916-52a1ca56cfad?w=500&auto=format&fit=crop&q=80",
        "is_veg": true,
        "rating": 4.7,
        "prep_time": 28,
        "is_available": true
    },
    {
        "id": 96,
        "category": "nonveg",
        "name": "Andhra Chili Chicken",
        "description": "Spicy and tangy stir-fried chicken chunks coated in green chili paste and curry leaves.",
        "price": 319.00,
        "image_url": "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.6,
        "prep_time": 22,
        "is_available": true
    },
    {
        "id": 97,
        "category": "nonveg",
        "name": "Goan Fish Curry",
        "description": "Classic Goan style fish cooked in freshly grated coconut, red chilies, and tamarind.",
        "price": 389.00,
        "image_url": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.7,
        "prep_time": 25,
        "is_available": true
    },
    {
        "id": 98,
        "category": "nonveg",
        "name": "Chicken Korma Zafrani",
        "description": "Rich and aromatic chicken curry simmered in smooth cashew nut paste, yogurt, and saffron.",
        "price": 349.00,
        "image_url": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.8,
        "prep_time": 28,
        "is_available": true
    },
    {
        "id": 99,
        "category": "nonveg",
        "name": "Mutton Keema Matar",
        "description": "Spicy minced mutton cooked with fresh green peas, whole spices, and coriander.",
        "price": 399.00,
        "image_url": "https://images.unsplash.com/photo-1560684352-8497838a2229?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.7,
        "prep_time": 30,
        "is_available": true
    },
    {
        "id": 100,
        "category": "nonveg",
        "name": "Crispy Lemon Garlic Chicken",
        "description": "Crispy pan-fried chicken breast fillets glazed with a rich, tangy lemon garlic butter sauce.",
        "price": 329.00,
        "image_url": "https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?w=500&auto=format&fit=crop&q=80",
        "is_veg": false,
        "rating": 4.6,
        "prep_time": 22,
        "is_available": true
    }
];

const defaultDeliveryBoys = [
    { id: 1, name: "Raj Kumar", phone: "+91 9876543210", current_lat: 12.9716, current_lng: 77.5946, status: "available" },
    { id: 2, name: "Amit Patel", phone: "+91 9123456789", current_lat: 12.9716, current_lng: 77.5946, status: "available" },
    { id: 3, name: "Sandeep Singh", phone: "+91 8887776665", current_lat: 12.9716, current_lng: 77.5946, status: "available" }
];

// Initialize Storage Helpers
function getStoredData(key, fallback) {
    const val = localStorage.getItem(key);
    if (!val) {
        localStorage.setItem(key, JSON.stringify(fallback));
        return fallback;
    }
    return JSON.parse(val);
}

function setStoredData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Global States
let menuItems = getStoredData("tastyfood_menu", defaultMenuItems);
if (!menuItems || menuItems.length < 95) {
    menuItems = defaultMenuItems;
    setStoredData("tastyfood_menu", defaultMenuItems);
}
let deliveryBoys = getStoredData("tastyfood_drivers", defaultDeliveryBoys);
let ordersList = getStoredData("tastyfood_orders", []);
let cart = getStoredData("tastyfood_cart", []);
const defaultAccounts = [
    { name: "Demo User", email: "demo@example.com", password: "password123" }
];
let accounts = getStoredData("tastyfood_accounts", defaultAccounts);

// Active location and coupon states
let activeLocation = getStoredData("tastyfood_location", {
    name: "Indiranagar, Bengaluru",
    lat: 12.9716,
    lng: 77.5946
});
let activeCoupon = null;

// Tracking variables
let activeTrackingOrderId = null;
let activeTrackingMap = null;
let activeSelectionMap = null;
let activeSelectionMarker = null;
let trackingIntervals = {
    animation: null,
    polling: null
};
let trackingDriverMarker = null;
let trackingRouteIndex = 0;
let trackingRoutePoints = [];

// DOMContentLoaded Handler
document.addEventListener('DOMContentLoaded', () => {
    // Initial UI Elements Init
    lucide.createIcons();
    initAppRouting();
    renderStorefrontMenu();
    updateCartDrawer();
    initCartOverlay();
    initFilterHandlers();
    initNavbarFeatures();
    
    // Admin events
    initAdminPortal();
});

// ==================== VIEW ROUTING CONTROLLERS ====================
function showView(viewId) {
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.add('hidden'));
    const viewSection = document.getElementById(viewId);
    if (viewSection) {
        viewSection.classList.remove('hidden');
        window.scrollTo(0, 0);
    }
    
    // Clear open drawer
    closeCartPanel();

    // Specific Map Initializations when switching views
    if (viewId === 'view-checkout') {
        initCheckoutSelectionMap();
    } else {
        if (activeSelectionMap) {
            activeSelectionMap.remove();
            activeSelectionMap = null;
            activeSelectionMarker = null;
        }
    }
    
    if (viewId !== 'view-tracking') {
        clearTrackingIntervals();
    }
}

function initAppRouting() {
    const homeBtn = document.getElementById('nav-home');
    const menuBtn = document.getElementById('nav-menu');
    const adminBtn = document.getElementById('nav-admin');
    const logoLnk = document.getElementById('logo-lnk');
    const footerLogoLnk = document.getElementById('footer-logo-lnk');
    
    const setNavActive = (activeEl) => {
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        if (activeEl) activeEl.classList.add('active');
    };

    homeBtn.addEventListener('click', () => {
        showView('view-home');
        setNavActive(homeBtn);
    });

    if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showView('view-home');
            setNavActive(homeBtn);
            const heading = document.getElementById('menu-title-heading');
            if (heading) heading.scrollIntoView({ behavior: 'smooth' });
        });
    }

    adminBtn.addEventListener('click', () => {
        showView('view-admin');
        setNavActive(adminBtn);
        renderAdminDashboard();
    });

    logoLnk.addEventListener('click', (e) => {
        e.preventDefault();
        showView('view-home');
        setNavActive(homeBtn);
    });

    footerLogoLnk.addEventListener('click', (e) => {
        e.preventDefault();
        showView('view-home');
        setNavActive(homeBtn);
    });

    // Cart checkout button trigger
    const checkoutBtn = document.getElementById('cart-checkout-btn');
    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            showView('view-checkout');
            setNavActive(null);
        }
    });
}

// ==================== CART INTERACTION ====================
function initCartOverlay() {
    const cartToggle = document.getElementById('cart-toggle-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartOverlay = document.getElementById('cart-overlay');

    const toggleCart = () => {
        document.getElementById('cart-drawer').classList.toggle('open');
        cartOverlay.classList.toggle('open');
    };

    cartToggle.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);
}

function closeCartPanel() {
    document.getElementById('cart-drawer').classList.remove('open');
    document.getElementById('cart-overlay').classList.remove('open');
}

function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    const cartItem = cart.find(c => c.id === itemId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image_url: item.image_url,
            quantity: 1
        });
    }
    
    setStoredData("tastyfood_cart", cart);
    updateCartDrawer();
    showToast(`Added ${item.name} to cart!`);
}

function updateCartQuantity(itemId, change) {
    const cartItemIndex = cart.findIndex(c => c.id === itemId);
    if (cartItemIndex === -1) return;

    cart[cartItemIndex].quantity += change;
    
    if (cart[cartItemIndex].quantity <= 0) {
        cart.splice(cartItemIndex, 1);
    }
    
    setStoredData("tastyfood_cart", cart);
    updateCartDrawer();
}

function removeItemFromCart(itemId) {
    cart = cart.filter(c => c.id !== itemId);
    setStoredData("tastyfood_cart", cart);
    updateCartDrawer();
}

function updateCartDrawer() {
    const itemsList = document.getElementById('cart-items-list');
    const badge = document.getElementById('cart-badge-qty');
    const totalVal = document.getElementById('cart-total-value');
    const checkoutBtn = document.getElementById('cart-checkout-btn');

    // Update Badge
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    badge.textContent = totalCount;
    
    // Scale animation
    badge.style.transform = 'scale(1.3)';
    setTimeout(() => badge.style.transform = 'scale(1)', 200);

    if (cart.length === 0) {
        itemsList.innerHTML = `
            <div style="text-align:center;padding:60px 20px;color:var(--text-muted);display:flex;flex-direction:column;align-items:center;gap:15px;">
                <span style="font-size:48px;">🛒</span>
                <p style="font-weight:600;">Your cart is empty</p>
                <p style="font-size:12px;">Add items from our delicious menu to get started!</p>
            </div>
        `;
        totalVal.textContent = '₹0.00';
        checkoutBtn.disabled = true;
        return;
    }

    let html = '';
    let totalSum = 0;
    
    cart.forEach(item => {
        const itemSubtotal = item.price * item.quantity;
        totalSum += itemSubtotal;
        
        html += `
            <div class="cart-item-row">
                <img src="${item.image_url}" alt="${item.name}" style="width:50px;height:50px;border-radius:8px;object-fit:cover;border:1px solid var(--border-grey);">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">₹${item.price}</div>
                </div>
                <div class="quantity-controls">
                    <button onclick="updateCartQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateCartQuantity(${item.id}, 1)">+</button>
                </div>
                <button onclick="removeItemFromCart(${item.id})" style="background:transparent;border:none;color:var(--text-muted);cursor:pointer;font-size:18px;margin-left:5px;">✕</button>
            </div>
        `;
    });

    itemsList.innerHTML = html;
    totalVal.textContent = '₹' + totalSum.toFixed(2);
    checkoutBtn.disabled = false;
}

// ==================== STOREFRONT SEARCH & FILTER ====================
let vegOnlyActive = false;

function initFilterHandlers() {
    const vegToggleBtn = document.getElementById('veg-toggle-btn');
    const vegIndicator = document.getElementById('veg-toggle-indicator');
    const searchInput = document.getElementById('search-input');
    const searchSuggestions = document.getElementById('search-suggestions');
    const searchBtn = document.getElementById('search-btn');

    if (vegToggleBtn && vegIndicator) {
        vegToggleBtn.addEventListener('click', () => {
            vegOnlyActive = !vegOnlyActive;
            if (vegOnlyActive) {
                vegToggleBtn.style.borderColor = 'var(--secondary)';
                vegToggleBtn.style.color = 'var(--secondary)';
                vegIndicator.style.background = 'var(--secondary)';
            } else {
                vegToggleBtn.style.borderColor = 'var(--border-grey)';
                vegToggleBtn.style.color = 'var(--text-dark)';
                vegIndicator.style.background = 'var(--text-muted)';
            }
            filterStorefrontMenu();
        });
    }

    // Category chips click
    const chips = document.querySelectorAll('.category-chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            filterStorefrontMenu();
        });
    });

    // Real-time search inputs & suggestions dropdown
    if (searchInput && searchSuggestions) {
        searchInput.addEventListener('input', () => {
            filterStorefrontMenu();
            
            const query = searchInput.value.toLowerCase().trim();
            if (!query) {
                searchSuggestions.innerHTML = '';
                searchSuggestions.classList.add('hidden');
                return;
            }

            // Suggest active menu items whose name or category matches query
            const matches = menuItems.filter(item => 
                item.is_available && 
                (item.name.toLowerCase().includes(query) || 
                 item.category.toLowerCase().includes(query))
            );

            if (matches.length === 0) {
                searchSuggestions.innerHTML = `
                    <div style="padding: 12px 16px; font-size: 13px; color: var(--text-muted); text-align: center;">
                        No dishes found for "${query}"
                    </div>
                `;
                searchSuggestions.classList.remove('hidden');
                return;
            }

            let html = '';
            matches.slice(0, 6).forEach(item => {
                html += `
                    <div class="search-suggestion-item" data-name="${item.name}">
                        <div class="item-details">
                            <span class="item-name">${item.name}</span>
                            <span class="item-meta">${item.is_veg ? '🟢 veg' : '🔴 non-veg'} • ${item.category}</span>
                        </div>
                        <span class="item-price">₹${item.price.toFixed(2)}</span>
                    </div>
                `;
            });

            searchSuggestions.innerHTML = html;
            searchSuggestions.classList.remove('hidden');

            // Click suggestion
            searchSuggestions.querySelectorAll('.search-suggestion-item').forEach(el => {
                el.addEventListener('click', () => {
                    const name = el.dataset.name;
                    searchInput.value = name;
                    searchSuggestions.classList.add('hidden');
                    filterStorefrontMenu();
                    const heading = document.getElementById('menu-title-heading');
                    if (heading) heading.scrollIntoView({ behavior: 'smooth' });
                });
            });
        });

        // Hide suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
                searchSuggestions.classList.add('hidden');
            }
        });

        // Show suggestions on focus if not empty
        searchInput.addEventListener('focus', () => {
            if (searchInput.value.trim()) {
                searchSuggestions.classList.remove('hidden');
            }
        });
    }

    // Search button click handler
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            filterStorefrontMenu();
            if (searchSuggestions) {
                searchSuggestions.classList.add('hidden');
            }
            const heading = document.getElementById('menu-title-heading');
            if (heading) heading.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

function renderStorefrontMenu() {
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;

    menuGrid.innerHTML = '';
    
    // Sort items so active/available ones are first
    menuItems.forEach(item => {
        // Skip rendering if disabled in admin portal
        if (!item.is_available) return;

        const card = document.createElement('div');
        card.className = 'food-card';
        card.dataset.id = item.id;
        card.dataset.category = item.category;
        card.dataset.name = item.name.toLowerCase();
        card.dataset.desc = item.description.toLowerCase();
        card.dataset.veg = item.is_veg ? "true" : "false";

        card.innerHTML = `
            <div class="food-card-img">
                <img src="${item.image_url}" alt="${item.name}">
                <span class="badge-veg-nonveg ${item.is_veg ? 'veg' : 'nonveg'}">
                    ${item.is_veg ? '🟢 Veg' : '🔴 Non-Veg'}
                </span>
                <span class="food-rating">★ ${item.rating}</span>
            </div>
            <div class="food-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div style="display: flex; align-items: center; gap: 8px; font-size: 11px; color: var(--text-muted); margin-bottom: 15px; font-weight: 600;">
                    <span style="background: var(--primary-light); color: var(--primary); padding: 2px 6px; border-radius: 4px; font-size: 9px; font-weight: 700;">${item.prep_time} MINS</span>
                    <span>•</span>
                    <span>Free Delivery</span>
                </div>
                <div class="food-footer">
                    <div class="food-price"><span>₹</span>${item.price.toFixed(2)}</div>
                    <button class="add-cart-icon-btn" onclick="addToCart(${item.id})">
                        <i data-lucide="plus"></i>
                    </button>
                </div>
            </div>
        `;
        menuGrid.appendChild(card);
    });
    
    lucide.createIcons();
}

function filterStorefrontMenu() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    const activeChip = document.querySelector('.category-chip.active');
    const activeCategory = activeChip ? activeChip.dataset.category : 'all';
    
    const cards = document.querySelectorAll('#menu-grid .food-card');
    
    cards.forEach(card => {
        const id = parseInt(card.dataset.id);
        const name = card.dataset.name;
        const desc = card.dataset.desc;
        const category = card.dataset.category;
        const isVeg = card.dataset.veg === 'true';

        const matchesSearch = name.includes(query) || desc.includes(query);
        const matchesCategory = activeCategory === 'all' || category === activeCategory;
        const matchesVeg = !vegOnlyActive || isVeg;

        if (matchesSearch && matchesCategory && matchesVeg) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// ==================== CHECKOUT FLOW ====================
function initCheckoutSelectionMap() {
    const defaultLat = activeLocation.lat;
    const defaultLng = activeLocation.lng;
    
    // Auto-fill checkout fields if user is logged in
    const user = getStoredData("tastyfood_user", null);
    if (user) {
        const nameInput = document.getElementById('checkout-name');
        const emailInput = document.getElementById('checkout-email');
        if (nameInput && !nameInput.value) nameInput.value = user.name || '';
        if (emailInput && !emailInput.value) emailInput.value = user.email || '';
    }
    
    // Set summary items
    const summaryList = document.getElementById('checkout-items-summary');
    const subtotalText = document.getElementById('checkout-subtotal');
    const totalText = document.getElementById('checkout-total');
    
    let html = '';
    let subtotal = 0;
    
    cart.forEach(item => {
        const cost = item.price * item.quantity;
        subtotal += cost;
        html += `
            <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 10px; border-bottom: 1px solid var(--border-grey);">
                <div>
                    <h4 style="font-size: 14px; font-weight: 600;">${item.name}</h4>
                    <span style="font-size: 12px; color: var(--text-muted);">Qty: ${item.quantity}</span>
                </div>
                <span style="font-weight: 700; color: var(--primary);">₹${cost.toFixed(2)}</span>
            </div>
        `;
    });
    
    summaryList.innerHTML = html;
    subtotalText.textContent = '₹' + subtotal.toFixed(2);
    
    activeCoupon = null; // reset coupon on opening checkout
    updateCheckoutBilling(subtotal);

    // Hook up coupon code events
    const couponInput = document.getElementById('coupon-code-input');
    const applyCouponBtn = document.getElementById('apply-coupon-btn');
    const couponMessage = document.getElementById('coupon-message');

    if (couponInput && applyCouponBtn && couponMessage) {
        couponInput.value = '';
        couponMessage.style.display = 'none';
        
        applyCouponBtn.onclick = () => {
            const code = couponInput.value.trim().toUpperCase();
            if (!code) {
                couponMessage.textContent = 'Please enter a coupon code.';
                couponMessage.style.color = '#e74c3c';
                couponMessage.style.display = 'block';
                return;
            }

            if (code === 'TASTY50') {
                if (subtotal >= 199) {
                    const discount = Math.min(subtotal * 0.5, 150);
                    activeCoupon = { code: 'TASTY50', discount: discount };
                    couponMessage.textContent = `Coupon Applied! 50% discount of ₹${discount.toFixed(2)} deducted.`;
                    couponMessage.style.color = 'var(--secondary)';
                    couponMessage.style.display = 'block';
                    showToast('Promo coupon applied successfully!');
                } else {
                    couponMessage.textContent = 'Min order amount for TASTY50 is ₹199.';
                    couponMessage.style.color = '#e74c3c';
                    couponMessage.style.display = 'block';
                }
            } else if (code === 'WELCOME100') {
                if (subtotal >= 399) {
                    activeCoupon = { code: 'WELCOME100', discount: 100.00 };
                    couponMessage.textContent = 'Coupon Applied! Flat ₹100 discount deducted.';
                    couponMessage.style.color = 'var(--secondary)';
                    couponMessage.style.display = 'block';
                    showToast('Promo coupon applied successfully!');
                } else {
                    couponMessage.textContent = 'Min order amount for WELCOME100 is ₹399.';
                    couponMessage.style.color = '#e74c3c';
                    couponMessage.style.display = 'block';
                }
            } else if (code === 'FREESHIP') {
                activeCoupon = { code: 'FREESHIP', discount: 0.00 };
                couponMessage.textContent = 'Coupon Applied! Free shipping is active.';
                couponMessage.style.color = 'var(--secondary)';
                couponMessage.style.display = 'block';
                showToast('Promo coupon applied successfully!');
            } else {
                couponMessage.textContent = 'Invalid Coupon Code!';
                couponMessage.style.color = '#e74c3c';
                couponMessage.style.display = 'block';
                activeCoupon = null;
            }

            updateCheckoutBilling(subtotal);
        };
    }

    // Initialize Map Selector
    if (activeSelectionMap) return;
    
    activeSelectionMap = L.map('selection-map', {
        zoomControl: false,
        scrollWheelZoom: true
    }).setView([defaultLat, defaultLng], 13);
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(activeSelectionMap);

    activeSelectionMarker = L.marker([defaultLat, defaultLng], {
        draggable: true
    }).addTo(activeSelectionMap);

    activeSelectionMap.on('click', (e) => {
        activeSelectionMarker.setLatLng(e.latlng);
    });

    // Handle Form Submit
    const form = document.getElementById('checkout-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const finalTotal = activeCoupon ? Math.max(0, subtotal - activeCoupon.discount) : subtotal;
        placeOrder(finalTotal);
    };
}

function placeOrder(totalAmount) {
    const customerName = document.getElementById('checkout-name').value;
    const customerPhone = document.getElementById('checkout-phone').value;
    const customerEmail = document.getElementById('checkout-email').value;
    const customerAddress = document.getElementById('checkout-address').value;
    
    const pinnedLatLng = activeSelectionMarker.getLatLng();
    const orderId = ordersList.length + 1;
    
    // Choose available driver
    let assignedDriver = deliveryBoys.find(d => d.status === 'available');
    if (!assignedDriver) {
        // Recycle first driver
        assignedDriver = deliveryBoys[0];
    }
    
    assignedDriver.status = 'busy';
    // Position driver at restaurant start (around 1km away)
    assignedDriver.current_lat = pinnedLatLng.lat + 0.007;
    assignedDriver.current_lng = pinnedLatLng.lng - 0.007;
    setStoredData("tastyfood_drivers", deliveryBoys);

    const newOrder = {
        id: orderId,
        customer_name: customerName,
        customer_phone: customerPhone,
        customer_email: customerEmail,
        customer_address: customerAddress,
        latitude: pinnedLatLng.lat,
        longitude: pinnedLatLng.lng,
        items: [...cart],
        total_amount: totalAmount,
        status: 'placed',
        delivery_boy: {
            id: assignedDriver.id,
            name: assignedDriver.name,
            phone: assignedDriver.phone,
            lat: assignedDriver.current_lat,
            lng: assignedDriver.current_lng
        },
        created_at: new Date().toLocaleTimeString()
    };
    
    ordersList.push(newOrder);
    setStoredData("tastyfood_orders", ordersList);
    
    // Clear Cart
    cart = [];
    setStoredData("tastyfood_cart", cart);
    updateCartDrawer();
    
    // Switch to tracking view
    startLiveTracking(orderId);
}

// ==================== LIVE TRACKING & SIMULATION ====================
function clearTrackingIntervals() {
    if (trackingIntervals.animation) clearInterval(trackingIntervals.animation);
    if (trackingIntervals.polling) clearInterval(trackingIntervals.polling);
    trackingIntervals.animation = null;
    trackingIntervals.polling = null;
    
    if (activeTrackingMap) {
        activeTrackingMap.remove();
        activeTrackingMap = null;
    }
    trackingDriverMarker = null;
    trackingRouteIndex = 0;
    trackingRoutePoints = [];
}

function startLiveTracking(orderId) {
    activeTrackingOrderId = orderId;
    clearTrackingIntervals();
    showView('view-tracking');

    const order = ordersList.find(o => o.id === orderId);
    if (!order) return;

    // Fill UI Details
    document.getElementById('active-order-id-label').textContent = `Active Order #${order.id}`;
    document.getElementById('driver-name-text').textContent = order.delivery_boy.name;
    document.getElementById('driver-phone-text').textContent = order.delivery_boy.phone;
    document.getElementById('driver-call-lnk').setAttribute('href', `tel:${order.delivery_boy.phone}`);
    
    updateTimelineStatusUI(order.status);

    // Initialize map
    const restLat = order.latitude + 0.008;
    const restLng = order.longitude - 0.008;
    const custLat = order.latitude;
    const custLng = order.longitude;
    const centerLat = (restLat + custLat) / 2;
    const centerLng = (restLng + custLng) / 2;

    activeTrackingMap = L.map('map', {
        zoomControl: true,
        scrollWheelZoom: false
    }).setView([centerLat, centerLng], 14);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        maxZoom: 20
    }).addTo(activeTrackingMap);

    function getCustomMarker(emoji, color) {
        return L.divIcon({
            html: `<div style="background-color: ${color}; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; border: 2px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">${emoji}</div>`,
            className: 'custom-icon',
            iconSize: [36, 36],
            iconAnchor: [18, 18]
        });
    }

    // Add Markers
    L.marker([restLat, restLng], { icon: getCustomMarker('🍳', '#fc8019') }).addTo(activeTrackingMap).bindPopup('TastyFood Kitchen');
    L.marker([custLat, custLng], { icon: getCustomMarker('🏠', '#60b246') }).addTo(activeTrackingMap).bindPopup('Your Address');
    
    // Dashed Route
    L.polyline([[restLat, restLng], [custLat, custLng]], {
        color: 'var(--primary)',
        weight: 3,
        dashArray: '5, 8'
    }).addTo(activeTrackingMap);

    // Initial Driver Position
    trackingDriverMarker = L.marker([order.delivery_boy.lat, order.delivery_boy.lng], {
        icon: getCustomMarker('🏍️', '#f1c40f')
    }).addTo(activeTrackingMap).bindPopup('Rider Position');

    // Generate Route points
    trackingRoutePoints = [];
    const steps = 120;
    for (let i = 0; i <= steps; i++) {
        const ratio = i / steps;
        const wiggle = 0.0008 * Math.sin(ratio * Math.PI * 6);
        trackingRoutePoints.push([
            restLat + (custLat - restLat) * ratio + (ratio > 0.05 && ratio < 0.95 ? wiggle : 0),
            restLng + (custLng - restLng) * ratio + (ratio > 0.05 && ratio < 0.95 ? -wiggle : 0)
        ]);
    }

    // Adjust Bounds
    const bounds = L.latLngBounds([[restLat, restLng], [custLat, custLng]]);
    activeTrackingMap.fitBounds(bounds, { padding: [40, 40] });

    // Begin Polling DB changes
    trackingIntervals.polling = setInterval(() => {
        pollOrderStatusChanges();
    }, 2000);
}

function pollOrderStatusChanges() {
    const updatedOrders = getStoredData("tastyfood_orders", []);
    const order = updatedOrders.find(o => o.id === activeTrackingOrderId);
    if (!order) return;

    updateTimelineStatusUI(order.status);
    
    if (order.status === 'out_for_delivery') {
        if (!trackingIntervals.animation) {
            startDriverTransitAnimation(order);
        }
    } else if (order.status === 'delivered') {
        if (trackingIntervals.animation) clearInterval(trackingIntervals.animation);
        trackingDriverMarker.setLatLng([order.latitude, order.longitude]);
        trackingDriverMarker.bindPopup('<b>Order Delivered!</b>').openPopup();
        clearInterval(trackingIntervals.polling);
    } else if (order.status === 'cancelled') {
        clearTrackingIntervals();
        alert("This order was cancelled by Admin.");
        showView('view-home');
    }
}

function startDriverTransitAnimation(order) {
    if (trackingIntervals.animation) clearInterval(trackingIntervals.animation);
    
    trackingIntervals.animation = setInterval(() => {
        if (trackingRouteIndex >= trackingRoutePoints.length) {
            clearInterval(trackingIntervals.animation);
            // Automark as delivered in localstorage
            markOrderDeliveredLocalStorage(order.id);
            return;
        }

        const point = trackingRoutePoints[trackingRouteIndex];
        trackingDriverMarker.setLatLng(point);
        
        // Sync driver coordinate in localStorage
        const latestOrders = getStoredData("tastyfood_orders", []);
        const idx = latestOrders.findIndex(o => o.id === order.id);
        if (idx !== -1) {
            latestOrders[idx].delivery_boy.lat = point[0];
            latestOrders[idx].delivery_boy.lng = point[1];
            setStoredData("tastyfood_orders", latestOrders);
            
            // Sync in global array too
            const drvIdx = deliveryBoys.findIndex(d => d.id === latestOrders[idx].delivery_boy.id);
            if (drvIdx !== -1) {
                deliveryBoys[drvIdx].current_lat = point[0];
                deliveryBoys[drvIdx].current_lng = point[1];
                setStoredData("tastyfood_drivers", deliveryBoys);
            }
        }
        
        trackingRouteIndex++;
    }, 150);
}

function markOrderDeliveredLocalStorage(orderId) {
    const latestOrders = getStoredData("tastyfood_orders", []);
    const idx = latestOrders.findIndex(o => o.id === orderId);
    if (idx !== -1) {
        latestOrders[idx].status = 'delivered';
        setStoredData("tastyfood_orders", latestOrders);
        
        // Release delivery boy
        const dboyId = latestOrders[idx].delivery_boy.id;
        const drvIdx = deliveryBoys.findIndex(d => d.id === dboyId);
        if (drvIdx !== -1) {
            deliveryBoys[drvIdx].status = 'available';
            deliveryBoys[drvIdx].current_lat = 12.9716;
            deliveryBoys[drvIdx].current_lng = 77.5946;
            setStoredData("tastyfood_drivers", deliveryBoys);
        }
    }
}

function updateTimelineStatusUI(status) {
    const steps = ['placed', 'preparing', 'out_for_delivery', 'delivered'];
    const activeIdx = steps.indexOf(status);
    
    // Status Badge
    const badge = document.getElementById('order-status-badge');
    badge.className = `status-badge ${status}`;
    badge.textContent = status.replace(/_/g, ' ');

    steps.forEach((step, idx) => {
        const stepEl = document.getElementById(`step-${step}`);
        if (stepEl) {
            stepEl.classList.remove('active', 'completed');
            if (idx < activeIdx) {
                stepEl.classList.add('completed');
            } else if (idx === activeIdx) {
                stepEl.classList.add('active');
            }
        }
    });
}

// ==================== ADMIN PORTAL CONSOLE ====================
function initAdminPortal() {
    const addBtn = document.getElementById('admin-add-item-btn');
    const formBox = document.getElementById('admin-add-item-form-container');
    const cancelBtn = document.getElementById('add-dish-cancel');
    const submitBtn = document.getElementById('add-dish-submit');

    if (addBtn && formBox && cancelBtn && submitBtn) {
        addBtn.addEventListener('click', () => {
            formBox.classList.toggle('hidden');
        });

        cancelBtn.addEventListener('click', () => {
            formBox.classList.add('hidden');
        });

        submitBtn.addEventListener('click', () => {
            saveNewDishFromAdmin();
        });
    }
}

function saveNewDishFromAdmin() {
    const name = document.getElementById('add-dish-name').value;
    const category = document.getElementById('add-dish-category').value;
    const price = parseFloat(document.getElementById('add-dish-price').value);
    const time = parseInt(document.getElementById('add-dish-time').value);
    const img = document.getElementById('add-dish-image').value || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop';
    const isVeg = document.getElementById('add-dish-veg').checked;

    if (!name || isNaN(price) || isNaN(time)) {
        alert("Please fill all required dish details!");
        return;
    }

    const newDish = {
        id: menuItems.length + 1,
        category: category,
        name: name,
        description: `${name} is prepared fresh using rich select ingredients by our culinary experts.`,
        price: price,
        image_url: img,
        is_veg: isVeg,
        rating: 4.5,
        prep_time: time,
        is_available: true
    };

    menuItems.push(newDish);
    setStoredData("tastyfood_menu", menuItems);
    
    // Clear Form
    document.getElementById('add-dish-name').value = '';
    document.getElementById('add-dish-price').value = '';
    document.getElementById('add-dish-time').value = '';
    document.getElementById('add-dish-image').value = '';
    document.getElementById('admin-add-item-form-container').classList.add('hidden');

    // Refresh storefront and admin view
    renderStorefrontMenu();
    renderAdminDashboard();
    showToast(`Added ${name} to store menu!`);
}

function toggleItemAvailabilityAdmin(itemId) {
    const idx = menuItems.findIndex(i => i.id === itemId);
    if (idx !== -1) {
        menuItems[idx].is_available = !menuItems[idx].is_available;
        setStoredData("tastyfood_menu", menuItems);
        renderStorefrontMenu();
        showToast(`${menuItems[idx].name} availability toggled!`);
    }
}

function updateOrderStatusAdmin(orderId, newStatus) {
    const latestOrders = getStoredData("tastyfood_orders", []);
    const idx = latestOrders.findIndex(o => o.id === orderId);
    if (idx !== -1) {
        latestOrders[idx].status = newStatus;
        
        // Release driver if cancelled or delivered manually
        if (newStatus === 'cancelled' || newStatus === 'delivered') {
            const dboyId = latestOrders[idx].delivery_boy.id;
            const drvIdx = deliveryBoys.findIndex(d => d.id === dboyId);
            if (drvIdx !== -1) {
                deliveryBoys[drvIdx].status = 'available';
                deliveryBoys[drvIdx].current_lat = 12.9716;
                deliveryBoys[drvIdx].current_lng = 77.5946;
                setStoredData("tastyfood_drivers", deliveryBoys);
            }
        }
        
        setStoredData("tastyfood_orders", latestOrders);
        ordersList = latestOrders; // Sync in-memory global state
        
        renderAdminDashboard();
        showToast(`Order #${orderId} status set to ${newStatus}`);
    }
}

function renderAdminDashboard() {
    // Read fresh updates
    const activeOrders = getStoredData("tastyfood_orders", []);
    const activeDrivers = getStoredData("tastyfood_drivers", []);
    
    // Render Stats
    const deliveredOrders = activeOrders.filter(o => o.status === 'delivered');
    const totalRevenue = deliveredOrders.reduce((acc, o) => acc + o.total_amount, 0);
    const pendingOrdersCount = activeOrders.filter(o => o.status !== 'delivered' && o.status !== 'cancelled').count || activeOrders.filter(o => o.status !== 'delivered' && o.status !== 'cancelled').length;

    document.getElementById('admin-total-sales').textContent = '₹' + totalRevenue.toFixed(2);
    document.getElementById('admin-active-orders').textContent = pendingOrdersCount;
    document.getElementById('admin-completed-orders').textContent = deliveredOrders.length;
    document.getElementById('admin-total-items').textContent = menuItems.length;

    // Render Orders Table
    const tbody = document.getElementById('admin-orders-tbody');
    tbody.innerHTML = '';
    
    activeOrders.slice().reverse().forEach(order => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><b>#${order.id}</b></td>
            <td>
                <div style="font-weight:600;">${order.customer_name}</div>
                <div style="font-size:11px;color:var(--text-muted);">${order.customer_phone}</div>
            </td>
            <td>
                <div style="font-weight:700;color:var(--primary);">₹${order.total_amount.toFixed(2)}</div>
                <div style="font-size:11px;color:var(--text-muted);">${order.items.length} items</div>
            </td>
            <td>
                <div style="font-size:12px;">${order.delivery_boy.name}</div>
            </td>
            <td>
                <select class="admin-select-status" onchange="updateOrderStatusAdmin(${order.id}, this.value)">
                    <option value="placed" ${order.status === 'placed' ? 'selected' : ''}>Order Placed</option>
                    <option value="preparing" ${order.status === 'preparing' ? 'selected' : ''}>Kitchen Prep</option>
                    <option value="out_for_delivery" ${order.status === 'out_for_delivery' ? 'selected' : ''}>Out for Delivery</option>
                    <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>Delivered</option>
                    <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                </select>
            </td>
            <td>
                <button onclick="startLiveTracking(${order.id})" class="admin-btn" style="padding:4px 8px;font-size:11px;background:#3498db;">Track Map</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    // Render Drivers table
    const drvBody = document.getElementById('admin-drivers-tbody');
    drvBody.innerHTML = '';
    activeDrivers.forEach(driver => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><b>${driver.name}</b></td>
            <td>${driver.phone}</td>
            <td style="font-family:monospace;font-size:12px;color:var(--text-muted);">
                Lat: ${driver.current_lat.toFixed(4)}, Lng: ${driver.current_lng.toFixed(4)}
            </td>
            <td>
                <span class="status-badge ${driver.status === 'available' ? 'delivered' : 'out_for_delivery'}" style="font-size:10px;padding:2px 8px;">
                    ${driver.status}
                </span>
            </td>
        `;
        drvBody.appendChild(tr);
    });

    // Render Catalog Manager
    const catalogList = document.getElementById('admin-inventory-list');
    catalogList.innerHTML = '';
    
    menuItems.forEach(item => {
        const itemRow = document.createElement('div');
        itemRow.style.display = 'flex';
        itemRow.style.justifyContent = 'space-between';
        itemRow.style.alignItems = 'center';
        itemRow.style.paddingBottom = '12px';
        itemRow.style.borderBottom = '1px solid var(--border-grey)';
        
        itemRow.innerHTML = `
            <div style="display:flex;align-items:center;gap:12px;">
                <img src="${item.image_url}" alt="${item.name}" style="width:40px;height:40px;border-radius:6px;object-fit:cover;">
                <div>
                    <h4 style="font-size:13px;font-weight:600;">${item.name}</h4>
                    <span style="font-size:11px;color:var(--text-muted);">₹${item.price} | ${item.category}</span>
                </div>
            </div>
            <label class="switch">
                <input type="checkbox" ${item.is_available ? 'checked' : ''} onchange="toggleItemAvailabilityAdmin(${item.id})">
                <span class="slider"></span>
            </label>
        `;
        catalogList.appendChild(itemRow);
    });
}

// ==================== NOTIFICATION TOASTS ====================
function showToast(message) {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.left = '20px';
        toast.style.background = 'var(--secondary)';
        toast.style.color = '#fff';
        toast.style.padding = '12px 24px';
        toast.style.borderRadius = '8px';
        toast.style.fontFamily = 'var(--font-outfit)';
        toast.style.fontWeight = '600';
        toast.style.zIndex = '2000';
        toast.style.boxShadow = 'var(--shadow-premium)';
        toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
    }, 2500);
}

// ==================== NAVBAR FEATURES (LOCATION, OFFERS, HELP, PROFILE) ====================
let navbarMiniMap = null;
let navbarMiniMarker = null;
let locationSearchTimeout = null;

function initNavbarFeatures() {
    const locBtn = document.getElementById('location-selector-btn');
    const locDropdown = document.getElementById('location-dropdown');
    const locText = document.getElementById('current-location-text');
    
    const searchInput = document.getElementById('location-search-input');
    const suggestionsBox = document.getElementById('location-suggestions-container');
    const loadingSpinner = document.getElementById('location-search-loading');
    
    if (locText && activeLocation) {
        locText.textContent = activeLocation.name;
    }

    if (locBtn && locDropdown) {
        locBtn.addEventListener('click', (e) => {
            if (e.target.closest('#location-dropdown')) return;
            
            const isOpen = locDropdown.classList.toggle('open');
            if (isOpen) {
                locDropdown.style.display = 'flex';
                setTimeout(() => {
                    initNavbarMiniMap();
                }, 150);
            } else {
                locDropdown.style.display = 'none';
            }
            e.stopPropagation();
        });

        locDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        document.addEventListener('click', () => {
            locDropdown.classList.remove('open');
            locDropdown.style.display = 'none';
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim();
            if (locationSearchTimeout) clearTimeout(locationSearchTimeout);

            if (query.length < 3) {
                suggestionsBox.innerHTML = '<div style="padding: 10px; font-size: 12px; color: var(--text-muted); text-align: center;">Type address above (e.g. Indiranagar, Bengaluru)</div>';
                if (loadingSpinner) loadingSpinner.classList.add('hidden');
                return;
            }

            if (loadingSpinner) loadingSpinner.classList.remove('hidden');

            locationSearchTimeout = setTimeout(() => {
                fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`)
                    .then(res => res.json())
                    .then(data => {
                        if (loadingSpinner) loadingSpinner.classList.add('hidden');
                        renderLocationSuggestions(data);
                    })
                    .catch(err => {
                        console.error("Geocoding fetch error:", err);
                        if (loadingSpinner) loadingSpinner.classList.add('hidden');
                        suggestionsBox.innerHTML = '<div style="padding: 10px; font-size: 12px; color: #e74c3c; text-align: center;">⚠️ Failed to load address suggestions.</div>';
                    });
            }, 500);
        });
    }

    function renderLocationSuggestions(places) {
        if (!places || places.length === 0) {
            suggestionsBox.innerHTML = '<div style="padding: 10px; font-size: 12px; color: var(--text-muted); text-align: center;">No matches found. Try another search.</div>';
            return;
        }

        suggestionsBox.innerHTML = '';
        places.forEach(place => {
            const parts = place.display_name.split(',');
            const titleName = parts[0].trim();
            const subTitle = parts.slice(1).join(',').trim();

            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.innerHTML = `
                <i data-lucide="map-pin"></i>
                <div style="flex: 1;">
                    <strong>${titleName}</strong>
                    <p style="font-size: 10px; color: var(--text-muted); margin: 2px 0 0 0; line-height: 1.2; word-break: break-word;">${subTitle}</p>
                </div>
            `;

            item.onclick = () => {
                const lat = parseFloat(place.lat);
                const lng = parseFloat(place.lon);
                const cleanName = titleName + (parts[1] ? `, ${parts[1].trim()}` : '');

                activeLocation = { name: cleanName, lat, lng };
                setStoredData("tastyfood_location", activeLocation);

                if (locText) locText.textContent = cleanName;

                if (navbarMiniMap && navbarMiniMarker) {
                    navbarMiniMap.setView([lat, lng], 14);
                    navbarMiniMarker.setLatLng([lat, lng]);
                }

                if (activeSelectionMap && activeSelectionMarker) {
                    activeSelectionMap.setView([lat, lng], 13);
                    activeSelectionMarker.setLatLng([lat, lng]);
                }

                showToast(`Location set to: ${cleanName}`);
                if (searchInput) searchInput.value = '';
                suggestionsBox.innerHTML = '<div style="padding: 10px; font-size: 12px; color: var(--text-muted); text-align: center;">Type address above (e.g. Indiranagar, Bengaluru)</div>';
                locDropdown.classList.remove('open');
                locDropdown.style.display = 'none';
            };

            suggestionsBox.appendChild(item);
        });

        lucide.createIcons({
            attrs: {
                style: 'width: 14px; height: 14px; color: var(--primary); flex-shrink: 0;'
            },
            name: 'map-pin'
        });
    }

    const toggleModal = (modalId, show) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            if (show) {
                modal.classList.add('open');
            } else {
                modal.classList.remove('open');
            }
        }
    };

    const offersBtn = document.getElementById('nav-offers-btn');
    const closeOffersBtn = document.getElementById('close-offers-btn');
    if (offersBtn) offersBtn.addEventListener('click', () => toggleModal('offers-modal', true));
    if (closeOffersBtn) closeOffersBtn.addEventListener('click', () => toggleModal('offers-modal', false));

    const helpBtn = document.getElementById('nav-help-btn');
    const closeHelpBtn = document.getElementById('close-help-btn');
    if (helpBtn) helpBtn.addEventListener('click', () => toggleModal('help-modal', true));
    if (closeHelpBtn) closeHelpBtn.addEventListener('click', () => toggleModal('help-modal', false));

    const showAuthView = (viewName) => {
        const loginView = document.getElementById('login-view');
        const registerView = document.getElementById('register-view');
        const modalTitle = document.getElementById('auth-modal-title');
        if (viewName === 'login') {
            if (loginView) loginView.classList.remove('hidden');
            if (registerView) registerView.classList.add('hidden');
            if (modalTitle) modalTitle.textContent = "Customer Login";
        } else {
            if (loginView) loginView.classList.add('hidden');
            if (registerView) registerView.classList.remove('hidden');
            if (modalTitle) modalTitle.textContent = "Customer Registration";
        }
    };

    const profileBtn = document.getElementById('nav-profile-btn');
    const closeProfileBtn = document.getElementById('close-profile-btn');
    if (profileBtn) {
        profileBtn.addEventListener('click', () => {
            const user = getStoredData("tastyfood_user", null);
            if (user) {
                if (confirm("Are you sure you want to log out?")) {
                    localStorage.removeItem("tastyfood_user");
                    updateProfileNavbar();
                    showToast("Logged out successfully!");
                }
            } else {
                showAuthView('login');
                toggleModal('profile-modal', true);
            }
        });
    }
    if (closeProfileBtn) closeProfileBtn.addEventListener('click', () => toggleModal('profile-modal', false));

    const copyBtns = document.querySelectorAll('.copy-coupon-btn');
    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const code = btn.dataset.code;
            navigator.clipboard.writeText(code).then(() => {
                btn.textContent = 'Copied!';
                showToast(`Coupon code ${code} copied to clipboard!`);
                setTimeout(() => {
                    btn.textContent = 'Copy Code';
                }, 2000);
            });
        });
    });

    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isOpen = item.classList.contains('open');
            
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('open');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });

            if (!isOpen) {
                item.classList.add('open');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // Auth Modal Toggling
    const goToRegisterBtn = document.getElementById('go-to-register');
    const goToLoginBtn = document.getElementById('go-to-login');
    if (goToRegisterBtn) {
        goToRegisterBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showAuthView('register');
        });
    }
    if (goToLoginBtn) {
        goToLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showAuthView('login');
        });
    }

    // Login Form Submit
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value;

            const storedAccounts = getStoredData("tastyfood_accounts", defaultAccounts);
            const user = storedAccounts.find(acc => acc.email.toLowerCase() === email.toLowerCase());

            if (user && user.password === password) {
                setStoredData("tastyfood_user", { name: user.name, email: user.email });
                updateProfileNavbar();
                toggleModal('profile-modal', false);
                showToast(`Welcome back, ${user.name}!`);
                loginForm.reset();
            } else {
                alert("Invalid email or password. Hint: Try demo@example.com / password123");
            }
        });
    }

    // Register Form Submit
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('register-name').value.trim();
            const email = document.getElementById('register-email').value.trim();
            const password = document.getElementById('register-password').value;

            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }

            const storedAccounts = getStoredData("tastyfood_accounts", defaultAccounts);
            const emailExists = storedAccounts.some(acc => acc.email.toLowerCase() === email.toLowerCase());

            if (emailExists) {
                alert("Email address is already registered!");
                return;
            }

            // Create and save account
            const newAccount = { name, email, password };
            storedAccounts.push(newAccount);
            setStoredData("tastyfood_accounts", storedAccounts);

            showToast("Registration successful! Please login.");
            registerForm.reset();
            showAuthView('login');

            // Prefill email in login form for better UX
            const loginEmailInput = document.getElementById('login-email');
            if (loginEmailInput) {
                loginEmailInput.value = email;
            }
        });
    }

    updateProfileNavbar();
}

function initNavbarMiniMap() {
    const lat = activeLocation.lat;
    const lng = activeLocation.lng;

    if (!navbarMiniMap) {
        navbarMiniMap = L.map('navbar-mini-map', {
            zoomControl: false,
            attributionControl: false
        }).setView([lat, lng], 14);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            maxZoom: 20
        }).addTo(navbarMiniMap);

        navbarMiniMarker = L.marker([lat, lng], {
            draggable: true
        }).addTo(navbarMiniMap);

        navbarMiniMarker.on('dragend', () => {
            const pos = navbarMiniMarker.getLatLng();
            activeLocation.lat = pos.lat;
            activeLocation.lng = pos.lng;
            activeLocation.name = `Pinned: ${pos.lat.toFixed(4)}, ${pos.lng.toFixed(4)}`;
            setStoredData("tastyfood_location", activeLocation);

            const locText = document.getElementById('current-location-text');
            if (locText) locText.textContent = activeLocation.name;

            if (activeSelectionMap && activeSelectionMarker) {
                activeSelectionMap.setView([pos.lat, pos.lng], 13);
                activeSelectionMarker.setLatLng([pos.lat, pos.lng]);
            }
        });
    } else {
        navbarMiniMap.setView([lat, lng], 14);
        navbarMiniMarker.setLatLng([lat, lng]);
        navbarMiniMap.invalidateSize();
    }
}

function updateProfileNavbar() {
    const user = getStoredData("tastyfood_user", null);
    const navText = document.getElementById('nav-profile-text');
    const profileBtn = document.getElementById('nav-profile-btn');
    if (profileBtn) {
        const iconEl = profileBtn.querySelector('i');
        if (iconEl) {
            iconEl.setAttribute('data-lucide', user ? 'log-out' : 'user');
        }
    }
    if (navText) {
        if (user) {
            navText.textContent = "Logout";
        } else {
            navText.textContent = "Sign In";
        }
    }
    lucide.createIcons();
}

function updateCheckoutBilling(subtotal) {
    const subtotalText = document.getElementById('checkout-subtotal');
    const discountRow = document.getElementById('checkout-discount-row');
    const discountVal = document.getElementById('checkout-discount-value');
    const totalText = document.getElementById('checkout-total');

    let total = subtotal;

    if (activeCoupon) {
        discountRow.style.display = 'flex';
        discountVal.textContent = `-₹${activeCoupon.discount.toFixed(2)}`;
        total = subtotal - activeCoupon.discount;
    } else {
        discountRow.style.display = 'none';
    }

    if (subtotalText) subtotalText.textContent = '₹' + subtotal.toFixed(2);
    if (totalText) totalText.textContent = '₹' + Math.max(0, total).toFixed(2);
}
