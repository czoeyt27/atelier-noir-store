// ===============================
// SETUP / MEMORY
// ===============================

const emptyContainer = document.querySelector('.empty-container');

// This displays how many items are selected
const countDisplay = document.querySelector('#selection-count');

// This array is the memory of the system
// It answers: what is selected right now?
const selectedCards = [];

// These are all the clickable product cards
// You must select elements before adding behavior
const productCards = document.querySelectorAll('.product-card');


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
    const productName = card.querySelector('h4').innerText;


    // -------------------------------
    // MEMORY UPDATE (add / remove)
    // -------------------------------

    if (selectedCards.includes(productName)) {
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

  // Luxury vintage collection
const products = [
  {
    id: 1,
    name: "Vintage Leather Trench",
    price: 4200,
    era: "1980s",
    condition: "Excellent",
    description: "Supple leather trench coat with a timeless silhouette."
  },
  {
    id: 2,
    name: "Silk Scarf – Paris",
    price: 1800,
    era: "1970s",
    condition: "Very Good",
    description: "Hand-rolled silk scarf sourced from a Parisian estate."
  },
  {
    id: 3,
    name: "Gold-Tone Wristwatch",
    price: 6500,
    era: "1960s",
    condition: "Good",
    description: "Minimalist gold-tone watch with mechanical movement."
  }
];
