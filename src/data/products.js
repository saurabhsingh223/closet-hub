// Mock product data
// Replace image URLs with your own product images later
// Using Unsplash for placeholder images with relevant categories

export const products = [
  // JEANS
  {
    id: 1,
    name: "Classic Blue Jeans",
    brand: "Denim Co.",
    price: 1299,
    category: "jeans",
    gender: "men",
    type: "bottomwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop&q=80",
    description: "Classic fit blue denim jeans"
  },
  {
    id: 2,
    name: "Slim Fit Black Jeans",
    brand: "Urban Style",
    price: 1499,
    category: "jeans",
    gender: "men",
    type: "bottomwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop&q=80",
    description: "Slim fit black jeans for modern look"
  },
  {
    id: 3,
    name: "Women's Skinny Jeans",
    brand: "Fashion Hub",
    price: 1399,
    category: "jeans",
    gender: "women",
    type: "bottomwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&h=500&fit=crop&q=80",
    description: "Comfortable skinny fit jeans"
  },
  {
    id: 4,
    name: "Ripped Denim Jeans",
    brand: "Street Wear",
    price: 1699,
    category: "jeans",
    gender: "unisex",
    type: "bottomwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=400&h=500&fit=crop&q=80",
    description: "Trendy ripped denim jeans"
  },

  // HOODIES
  {
    id: 5,
    name: "Black Pullover Hoodie",
    brand: "Comfort Zone",
    price: 999,
    category: "hoodies",
    gender: "men",
    type: "winterwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=500&fit=crop",
    description: "Cozy black pullover hoodie"
  },
  {
    id: 6,
    name: "Grey Zip Hoodie",
    brand: "Active Wear",
    price: 1199,
    category: "hoodies",
    gender: "unisex",
    type: "winterwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop&q=80",
    description: "Comfortable grey zip hoodie"
  },
  {
    id: 7,
    name: "Oversized Hoodie",
    brand: "Street Style",
    price: 1299,
    category: "hoodies",
    gender: "women",
    type: "winterwear",
    sizes: ["XS", "S", "M", "L"],
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    description: "Trendy oversized hoodie"
  },
  {
    id: 8,
    name: "Graphic Print Hoodie",
    brand: "Urban Legends",
    price: 1399,
    category: "hoodies",
    gender: "men",
    type: "winterwear",
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=500&fit=crop&q=80",
    description: "Stylish graphic print hoodie"
  },

  // T-SHIRTS
  {
    id: 9,
    name: "Plain White T-Shirt",
    brand: "Basic Tees",
    price: 399,
    category: "tshirts",
    gender: "men",
    type: "topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&q=80",
    description: "Essential plain white tee"
  },
  {
    id: 10,
    name: "Black V-Neck T-Shirt",
    brand: "Style Co.",
    price: 449,
    category: "tshirts",
    gender: "men",
    type: "topwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=500&fit=crop&q=80",
    description: "Classic black v-neck tee"
  },
  {
    id: 11,
    name: "Women's Crop Top",
    brand: "Trendy Wear",
    price: 499,
    category: "tshirts",
    gender: "women",
    type: "topwear",
    sizes: ["XS", "S", "M", "L"],
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
    description: "Stylish crop top"
  },
  {
    id: 12,
    name: "Striped T-Shirt",
    brand: "Casual Wear",
    price: 549,
    category: "tshirts",
    gender: "unisex",
    type: "topwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=500&fit=crop&q=80",
    description: "Classic striped tee"
  },

  // JACKETS
  {
    id: 13,
    name: "Leather Jacket",
    brand: "Premium Leather",
    price: 3999,
    category: "jackets",
    gender: "men",
    type: "winterwear",
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&q=80",
    description: "Premium leather jacket"
  },
  {
    id: 14,
    name: "Denim Jacket",
    brand: "Denim Co.",
    price: 1999,
    category: "jackets",
    gender: "unisex",
    type: "winterwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=400&h=500&fit=crop",
    description: "Classic denim jacket"
  },
  {
    id: 15,
    name: "Bomber Jacket",
    brand: "Flight Wear",
    price: 2499,
    category: "jackets",
    gender: "men",
    type: "winterwear",
    sizes: ["M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop&q=80",
    description: "Stylish bomber jacket"
  },
  {
    id: 16,
    name: "Puffer Jacket",
    brand: "Winter Essentials",
    price: 2999,
    category: "jackets",
    gender: "women",
    type: "winterwear",
    sizes: ["XS", "S", "M", "L"],
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop&q=80",
    description: "Warm puffer jacket"
  },

  // SHIRTS
  {
    id: 17,
    name: "Formal White Shirt",
    brand: "Office Wear",
    price: 899,
    category: "shirts",
    gender: "men",
    type: "topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop&q=80",
    description: "Classic formal white shirt"
  },
  {
    id: 18,
    name: "Checked Casual Shirt",
    brand: "Casual Co.",
    price: 799,
    category: "shirts",
    gender: "men",
    type: "topwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&h=500&fit=crop",
    description: "Casual checked shirt"
  },
  {
    id: 19,
    name: "Denim Shirt",
    brand: "Denim Co.",
    price: 999,
    category: "shirts",
    gender: "unisex",
    type: "topwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&h=500&fit=crop",
    description: "Versatile denim shirt"
  },
  {
    id: 20,
    name: "Floral Print Shirt",
    brand: "Summer Vibes",
    price: 849,
    category: "shirts",
    gender: "women",
    type: "topwear",
    sizes: ["XS", "S", "M", "L"],
    image: "https://images.unsplash.com/photo-1624206112918-f140f087f9b5?w=400&h=500&fit=crop&q=80",
    description: "Trendy floral print shirt"
  },

  // SWEATSHIRTS
  {
    id: 21,
    name: "Grey Crewneck Sweatshirt",
    brand: "Comfort Zone",
    price: 899,
    category: "sweatshirts",
    gender: "men",
    type: "winterwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    description: "Comfortable grey sweatshirt"
  },
  {
    id: 22,
    name: "Navy Blue Sweatshirt",
    brand: "Active Wear",
    price: 949,
    category: "sweatshirts",
    gender: "unisex",
    type: "winterwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400&h=500&fit=crop&q=80",
    description: "Classic navy sweatshirt"
  },
  {
    id: 23,
    name: "Printed Sweatshirt",
    brand: "Street Style",
    price: 1099,
    category: "sweatshirts",
    gender: "women",
    type: "winterwear",
    sizes: ["XS", "S", "M", "L"],
    image: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=400&h=500&fit=crop&q=80",
    description: "Trendy printed sweatshirt"
  },

  // SHORTS
  {
    id: 24,
    name: "Cargo Shorts",
    brand: "Outdoor Gear",
    price: 699,
    category: "shorts",
    gender: "men",
    type: "bottomwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop&q=80",
    description: "Practical cargo shorts"
  },
  {
    id: 25,
    name: "Denim Shorts",
    brand: "Summer Wear",
    price: 649,
    category: "shorts",
    gender: "women",
    type: "bottomwear",
    sizes: ["XS", "S", "M", "L"],
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop&q=80",
    description: "Casual denim shorts"
  },
  {
    id: 26,
    name: "Athletic Shorts",
    brand: "Sport Fit",
    price: 599,
    category: "shorts",
    gender: "unisex",
    type: "bottomwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop&q=80",
    description: "Comfortable athletic shorts"
  },

  // SWEATERS
  {
    id: 27,
    name: "Cable Knit Sweater",
    brand: "Winter Essentials",
    price: 1599,
    category: "sweaters",
    gender: "men",
    type: "winterwear",
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop&q=80",
    description: "Classic cable knit sweater"
  },
  {
    id: 28,
    name: "Turtleneck Sweater",
    brand: "Cozy Wear",
    price: 1399,
    category: "sweaters",
    gender: "women",
    type: "winterwear",
    sizes: ["XS", "S", "M", "L"],
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=500&fit=crop",
    description: "Elegant turtleneck sweater"
  },
  {
    id: 29,
    name: "Cardigan Sweater",
    brand: "Comfort Zone",
    price: 1499,
    category: "sweaters",
    gender: "unisex",
    type: "winterwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=400&h=500&fit=crop",
    description: "Versatile cardigan sweater"
  },
  {
    id: 30,
    name: "V-Neck Sweater",
    brand: "Classic Wear",
    price: 1299,
    category: "sweaters",
    gender: "men",
    type: "winterwear",
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=500&fit=crop&q=80",
    description: "Timeless v-neck sweater"
  },

  // NIKE PRODUCTS
  {
    id: 31,
    name: "Nike Sportswear Hoodie",
    brand: "Nike",
    price: 2499,
    category: "hoodies",
    gender: "unisex",
    type: "winterwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop&q=80",
    description: "Premium Nike hoodie with iconic swoosh"
  },
  {
    id: 32,
    name: "Nike Dri-FIT T-Shirt",
    brand: "Nike",
    price: 1299,
    category: "tshirts",
    gender: "men",
    type: "topwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=400&h=500&fit=crop&q=80",
    description: "Moisture-wicking performance tee"
  },
  {
    id: 33,
    name: "Nike Tech Fleece Joggers",
    brand: "Nike",
    price: 3499,
    category: "jeans",
    gender: "men",
    type: "bottomwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=500&fit=crop&q=80",
    description: "Premium tech fleece joggers"
  },

  // ADIDAS PRODUCTS
  {
    id: 34,
    name: "Adidas Originals Hoodie",
    brand: "Adidas",
    price: 2299,
    category: "hoodies",
    gender: "unisex",
    type: "winterwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400&h=500&fit=crop&q=80",
    description: "Classic Adidas trefoil hoodie"
  },
  {
    id: 35,
    name: "Adidas 3-Stripe T-Shirt",
    brand: "Adidas",
    price: 1199,
    category: "tshirts",
    gender: "men",
    type: "topwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=500&fit=crop&q=80",
    description: "Iconic 3-stripe design tee"
  },
  {
    id: 36,
    name: "Adidas Track Jacket",
    brand: "Adidas",
    price: 2999,
    category: "jackets",
    gender: "unisex",
    type: "winterwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop&q=80",
    description: "Classic Adidas track jacket"
  },

  // LEVI'S PRODUCTS
  {
    id: 37,
    name: "Levi's 501 Original Jeans",
    brand: "Levi's",
    price: 3499,
    category: "jeans",
    gender: "men",
    type: "bottomwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop&q=80",
    description: "Iconic Levi's 501 straight fit"
  },
  {
    id: 38,
    name: "Levi's 511 Slim Fit Jeans",
    brand: "Levi's",
    price: 3299,
    category: "jeans",
    gender: "men",
    type: "bottomwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop&q=80",
    description: "Modern slim fit jeans"
  },
  {
    id: 39,
    name: "Levi's Denim Trucker Jacket",
    brand: "Levi's",
    price: 4499,
    category: "jackets",
    gender: "unisex",
    type: "winterwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=500&fit=crop&q=80",
    description: "Classic Levi's trucker jacket"
  },
  {
    id: 40,
    name: "Levi's Graphic T-Shirt",
    brand: "Levi's",
    price: 999,
    category: "tshirts",
    gender: "unisex",
    type: "topwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&q=80",
    description: "Levi's logo graphic tee"
  },

  // H&M PRODUCTS
  {
    id: 41,
    name: "H&M Slim Fit Chinos",
    brand: "H&M",
    price: 1499,
    category: "jeans",
    gender: "men",
    type: "bottomwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop&q=80",
    description: "Versatile slim fit chinos"
  },
  {
    id: 42,
    name: "H&M Cotton Shirt",
    brand: "H&M",
    price: 1299,
    category: "shirts",
    gender: "men",
    type: "topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop&q=80",
    description: "Premium cotton dress shirt"
  },
  {
    id: 43,
    name: "H&M Oversized Hoodie",
    brand: "H&M",
    price: 1799,
    category: "hoodies",
    gender: "women",
    type: "winterwear",
    sizes: ["XS", "S", "M", "L"],
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400&h=500&fit=crop&q=80",
    description: "Trendy oversized fit hoodie"
  },
  {
    id: 44,
    name: "H&M Basic T-Shirt Pack",
    brand: "H&M",
    price: 799,
    category: "tshirts",
    gender: "unisex",
    type: "topwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=500&fit=crop&q=80",
    description: "Essential basics 2-pack"
  },

  // ZARA PRODUCTS
  {
    id: 45,
    name: "Zara Tailored Blazer",
    brand: "Zara",
    price: 3999,
    category: "jackets",
    gender: "women",
    type: "topwear",
    sizes: ["XS", "S", "M", "L"],
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=500&fit=crop&q=80",
    description: "Elegant tailored blazer"
  },
  {
    id: 46,
    name: "Zara High-Waist Jeans",
    brand: "Zara",
    price: 2499,
    category: "jeans",
    gender: "women",
    type: "bottomwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=400&h=500&fit=crop&q=80",
    description: "Trendy high-waist fit"
  },
  {
    id: 47,
    name: "Zara Knit Sweater",
    brand: "Zara",
    price: 2299,
    category: "sweaters",
    gender: "women",
    type: "winterwear",
    sizes: ["XS", "S", "M", "L"],
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop&q=80",
    description: "Soft knit sweater"
  },
  {
    id: 48,
    name: "Zara Printed Shirt",
    brand: "Zara",
    price: 1899,
    category: "shirts",
    gender: "women",
    type: "topwear",
    sizes: ["XS", "S", "M", "L"],
    image: "https://images.unsplash.com/photo-1624206112918-f140f087f9b5?w=400&h=500&fit=crop&q=80",
    description: "Fashion-forward printed shirt"
  },

  // PUMA PRODUCTS
  {
    id: 49,
    name: "Puma Essential Hoodie",
    brand: "Puma",
    price: 1999,
    category: "hoodies",
    gender: "unisex",
    type: "winterwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=500&fit=crop&q=80",
    description: "Puma logo hoodie"
  },
  {
    id: 50,
    name: "Puma Performance T-Shirt",
    brand: "Puma",
    price: 1099,
    category: "tshirts",
    gender: "men",
    type: "topwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=500&fit=crop&q=80",
    description: "DryCELL performance tee"
  },
  {
    id: 51,
    name: "Puma Track Pants",
    brand: "Puma",
    price: 2299,
    category: "jeans",
    gender: "unisex",
    type: "bottomwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=500&fit=crop&q=80",
    description: "Classic Puma track pants"
  },

  // TOMMY HILFIGER PRODUCTS
  {
    id: 52,
    name: "Tommy Hilfiger Polo Shirt",
    brand: "Tommy Hilfiger",
    price: 2499,
    category: "shirts",
    gender: "men",
    type: "topwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop&q=80",
    description: "Classic polo with flag logo"
  },
  {
    id: 53,
    name: "Tommy Hilfiger Chino Pants",
    brand: "Tommy Hilfiger",
    price: 3299,
    category: "jeans",
    gender: "men",
    type: "bottomwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop&q=80",
    description: "Premium chino pants"
  },
  {
    id: 54,
    name: "Tommy Hilfiger Bomber Jacket",
    brand: "Tommy Hilfiger",
    price: 5999,
    category: "jackets",
    gender: "men",
    type: "winterwear",
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop&q=80",
    description: "Signature bomber jacket"
  },

  // UNIQLO PRODUCTS
  {
    id: 55,
    name: "Uniqlo Heattech T-Shirt",
    brand: "Uniqlo",
    price: 999,
    category: "tshirts",
    gender: "unisex",
    type: "topwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&q=80",
    description: "Thermal technology tee"
  },
  {
    id: 56,
    name: "Uniqlo Ultra Light Down Jacket",
    brand: "Uniqlo",
    price: 3999,
    category: "jackets",
    gender: "unisex",
    type: "winterwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop&q=80",
    description: "Lightweight packable jacket"
  },
  {
    id: 57,
    name: "Uniqlo Stretch Jeans",
    brand: "Uniqlo",
    price: 1999,
    category: "jeans",
    gender: "men",
    type: "bottomwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop&q=80",
    description: "Comfortable stretch denim"
  },
  {
    id: 58,
    name: "Uniqlo Cashmere Sweater",
    brand: "Uniqlo",
    price: 2999,
    category: "sweaters",
    gender: "women",
    type: "winterwear",
    sizes: ["XS", "S", "M", "L"],
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop&q=80",
    description: "Premium cashmere blend"
  },

  // GAP PRODUCTS
  {
    id: 59,
    name: "Gap Logo Hoodie",
    brand: "Gap",
    price: 2199,
    category: "hoodies",
    gender: "unisex",
    type: "winterwear",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop&q=80",
    description: "Classic Gap logo hoodie"
  },
  {
    id: 60,
    name: "Gap Vintage Jeans",
    brand: "Gap",
    price: 2799,
    category: "jeans",
    gender: "unisex",
    type: "bottomwear",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop&q=80",
    description: "Vintage wash denim"
  }
];

// Categories for filtering
export const categories = [
  { id: "all", name: "All Products", icon: "grid" },
  { id: "jeans", name: "Jeans", icon: "shirt" },
  { id: "hoodies", name: "Hoodies", icon: "wind" },
  { id: "tshirts", name: "T-Shirts", icon: "shirt" },
  { id: "jackets", name: "Jackets", icon: "coat" },
  { id: "shirts", name: "Shirts", icon: "shirt" },
  { id: "sweatshirts", name: "Sweatshirts", icon: "wind" },
  { id: "shorts", name: "Shorts", icon: "shirt" },
  { id: "sweaters", name: "Sweaters", icon: "wind" }
];

// Gender filters
export const genderFilters = [
  { id: "all", name: "All" },
  { id: "men", name: "Men" },
  { id: "women", name: "Women" },
  { id: "unisex", name: "Unisex" }
];

// Type filters
export const typeFilters = [
  { id: "all", name: "All Types" },
  { id: "topwear", name: "Topwear" },
  { id: "bottomwear", name: "Bottomwear" },
  { id: "winterwear", name: "Winterwear" }
];

// Banner data for carousel
export const banners = [
  {
    id: 1,
    title: "New Winter Collection",
    subtitle: "Stay warm in style",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=400&fit=crop",
    cta: "Shop Now"
  },
  {
    id: 2,
    title: "Summer Sale",
    subtitle: "Up to 50% off on selected items",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=400&fit=crop",
    cta: "Explore Deals"
  },
  {
    id: 3,
    title: "Trending Styles",
    subtitle: "Discover the latest fashion",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=400&fit=crop",
    cta: "View Collection"
  }
];
