
const products = [
  {id:1, name: "Vintage Leather Trench", category: "Unisex", price: 14900, imageUrl: "images/vintage-trench.jpg", summary: "1980s · Fine condition with a rich even pantina.", description: "A rare 1980s vintage leather trench in fine condition, featuring a rich even patina. Designed with a structured silhouette and timeless tailoring for elevated everyday wear."},
  {id:2, name: "Crocodile Leather Coat", category: "Unisex", price: 18500, imageUrl: "images/crocodile-coat.jpg", summary: "Vintage · Hand-finished panels with natural variation.", description: "A statement coat crafted in crocodile-embossed leather with a strong, architectural drape. A collector’s piece that balances bold texture with refined minimalism."}, 
  {id:3, name: "Cashmere Overcoat", category: "Unisex", price: 11800, imageUrl: "images/cashmere-overcoat.jpg", summary: "Italian · Double-breasted silhouette", description: "A classic cashmere overcoat with a clean, tailored profile and a soft, luxurious finish. Lightweight warmth meets understated elegance — perfect for city winters and evening layering."},
  {id:4, name: "Wool Tailored Blazer", category: "Unisex", price: 4100, imageUrl: "images/wool-blazer.jpg", summary: "1980s · Sharp shoulders, relaxed drape", description: "A tailored wool blazer cut with clean lines and a flattering structure. Designed to elevate denim, trousers, or skirts — a wardrobe anchor for polished minimal dressing."},
  {id:5, name: "Silk Button-Down Shirt", category: "Unisex", price: 2200, imageUrl: "images/silk-shirt.jpg", summary: "French · Fluid finish, natural sheen", description: "A silk button-down shirt with a fluid drape and subtle sheen. Effortless, elevated, and endlessly versatile — from boardroom tailoring to evening styling."},
  {id:6, name: "Merino Knit Sweater", category: "Unisex", price: 1600, imageUrl:"images/merino-sweater.jpg" , summary: "Fine gauge · Soft structure", description: "A merino knit sweater with a soft feel and breathable warmth. Designed to sit perfectly on the body without bulk — a minimalist essential for everyday luxury"},
  {id:7, name: "Structured Wool Coat", category: "Clothing-Women", price: 9200 , imageUrl: "images/wool-coat.jpg", summary: "Italian · Clean lines, sculpted shoulders", description: "A structured wool coat designed with a crisp silhouette and elevated finishing. The perfect outer layer for a polished look — timeless, feminine, and powerful."},
  {id:8, name: "Silk Midi Dress", category: "Clothing-Women", price: 3400, imageUrl: "images/silk-dress.jpg", summary: "Minimal cut · Fluid drape", description: "A silk midi dress with a graceful drape and refined movement. Designed for understated glamour — minimal lines, maximum impact, and a luxurious feel against the skin."},
  {id:9, name: "Cashmere Knit Top", category: "Clothing-Women", price: 1800, imageUrl: "images/cashmere-top.jpg", summary: "Soft handle · Relaxed fit", description: "A cashmere knit top with a smooth finish and flattering fit. Quiet luxury at its best — a refined essential designed to pair effortlessly with tailored pieces."},
  {id:10, name: "Solemo Suede Jacket", category: "Clothing-Men", price: 8300, imageUrl: "images/solemo-suede-jacket.jpg", summary: "Crafted in Italy · Lamb suede · Vintage finishCrafted in Italy from supple lamb-suede, this piece embodies quiet refinement and enduring style.", description: "A suede jacket with a refined cut and rich texture. A modern classic designed to elevate casual looks while staying understated and masculine."},
  {id:11, name: "Silk-Lined Blazer", category: "Clothing-Men", price: 5200, imageUrl: "images/silk-lined-blazer.jpg", summary: "1980s · Soft shoulder construction", description: "A tailored blazer finished with a silk lining for smooth comfort and elevated wear. Sharp structure meets premium craftsmanship — ideal for formal and smart-casual styling."},
  {id:12, name: "Tailored Wool Trousers", category: "Clothing-Men", price: 3800, imageUrl: "images/tailored-wool-trousers.jpg", summary: "High-rise · Straight-leg silhouette", description: "Tailored wool trousers designed for structure, comfort, and a polished drape. A wardrobe staple that pairs effortlessly with knits, shirts, and blazers."},
  {id:13, name: "Swiss Automatic Watch", category: "Accessories", price: 9900, imageUrl: "images/swiss-automatic-watch.jpg", summary: "Swiss automatic · Heritage craftsmanship", description: "A Swiss automatic wristwatch designed with minimalist elegance and precision engineering. A heritage accessory — subtle, powerful, and made to last."},
  {id:14, name: "Gold Signet Ring", category: "Accessories", price: 4400, imageUrl: "images/gold-signet-ring.jpg", summary: "Polished finish · Minimal", description: "A gold signet ring with a timeless silhouette and bold finish. Designed to be worn daily — a refined statement piece that adds quiet authority to any look."},
  {id:15, name: "Leather Weekender Bag", category: "Accessories", price: 3600, imageUrl: "images/leather-weekender-bag.jpg", summary: "Hand-finished · Natural patina", description: "A leather weekender bag crafted for short escapes and polished travel. Spacious interior, refined structure, and durable finishing — designed to age beautifully."},
  {id:16, name: "Gold Chain Bracelet", category: "Accessories", price: 2700, imageUrl: "images/gold-chain-bracelet.jpg", summary: "18k gold · Fine links, subtle clasp", description: "A gold chain bracelet designed with clean links and a refined finish. Elegant on its own, perfect for stacking — a timeless accessory for everyday luxury."},
  {id:17, name: "Silk Twill Scarf", category: "Accessories", price: 1100, imageUrl: "images/silk-twill-scarf.jpg", summary: "Italian · Hand-rolled edges", description: "A silk twill scarf with a soft finish and elegant drape. Designed to be styled at the neck, hair, or handbag — a versatile accent with understated sophistication."},
  {id:18, name: "Leather Ankle Boots", category: "Shoes-Women", price: 2900, imageUrl: "images/leather-ankle-boots.jpg", summary: "Italian · Clean profile, stacked heel", description: "Leather ankle boots designed with a sleek profile and strong structure. Effortlessly stylish and endlessly wearable — built for city days and elevated evenings."},
  {id:19, name: "Leather Strap Sandals", category: "Shoes-Women", price: 1650, imageUrl: "images/leather-strap-sandals.jpg", summary: "Minimal design · Slim straps", description: "Leather strap sandals with a clean, minimalist silhouette. Elegant, breathable, and timeless — designed to elevate warm-weather looks without overstatement."},
  {id:20, name: "Satin Pointed-Toe Mule", category: "Shoes-Women", price: 2180, imageUrl: "images/satin-pointed-toe-mule.jpg", summary: "Elegant satin · Sculpted heel, sleek silhouette", description: "A satin pointed-toe mule designed for modern elegance. Minimal yet striking — perfect for evenings, events, and refined day-to-night styling."},
  {id:21, name: "Leather Loafer", category: "Shoes-Men", price: 1950, imageUrl: "images/leather-loafer.jpg", summary: "Minimal construction · Smooth vamp", description: "A classic leather loafer with a refined finish and effortless slip-on design. Ideal for tailored outfits or elevated casual looks — timeless and versatile."},
  {id:22, name: "Leather Low-Top Sneaker", category: "Shoes-Men", price: 1700, imageUrl: "images/leather-low-top-sneakers.jpg", summary: "Hand-finished · Vintage-inspired", description: "A leather low-top sneaker with a clean silhouette and luxury finish. Designed for understated everyday wear — comfort, simplicity, and polish in one."},
  {id:23, name: "Leather Lace-Up Boots", category: "Shoes-Men", price: 2400, imageUrl: "images/leather-lace-up-boots.jpg", summary: "Structured sole · Refined profile", description: "Leather lace-up boots crafted for structure and durability. A bold, timeless staple — designed to carry you through winter with confidence and style."},
]


// ===============================
// SETUP / MEMORY
// ===============================

const emptyContainer = document.querySelector('.empty-container');

// This displays how many items are selected
const countDisplay = document.querySelector('#selection-count');

const cartList = document.querySelector("#cart-list"); 

const cartTotal = document.querySelector("#cart-total")
// This array is the memory of the system
// It answers: what is selected right now?
const selectedCards = [];

// These are all the clickable product cards
// You must select elements before adding behavior
const productCards = document.querySelectorAll('.product-card');

function renderCart() {
  cartList.innerHTML = ""; 
  let total =0; 
}

// ===============================
// INTERACTION LOGIC
// ===============================

//The forEach loop does not handle clicks.
//It prepares cards to handle clicks later.
productCards.forEach((card) => {

  // Each card gets its own click behavior
  card.addEventListener('click', () => {

    // This extracts the meaningful data from the DOM
    // The array stores data, not DOM elements
    const productId = Number(card.dataset.id);



    // -------------------------------
    // MEMORY UPDATE (add / remove)
    // -------------------------------

    if (selectedCards.includes(productId))  {
      // If already selected → remove from memory
      const index = selectedCards.indexOf(productName);
      selectedCards.splice(index, 1);

   
    } else {                                                                                                                 
      // If not selected → add to memory
      selectedCards.push(productName);


    }

    // -------------------------------
    // UI UPDATE: counter
    // -------------------------------

    countDisplay.textContent = selectedCards.length;

    // -------------------------------
    // DEBUG SNAPSHOT
    // -------------------------------

    console.log("Current Selection:", selectedCards);
    console.log("Current Count:", selectedCards.length);
  
    });
  });
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
