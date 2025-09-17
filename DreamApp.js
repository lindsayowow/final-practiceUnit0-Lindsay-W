/* Dream application:  
Enhanced Italian Restaurant Online Menu Order Selection
Complete pseudocode design:  
Customer clicks on list of entrees.  
A list of dishes are presented.
Customer clicks on desired dish.
Customization menu pops up.
Customer is given option to swap out each ingredient in dish, or exclude it.  
If customer choses to swap, a list of appropriate swaps including markup prices appears.
Additional options for putting a food "on the side" appears as well as temperature and preparation preferences.
Customer is returned to the main menu for the dish pops up, and the customer can choose the next ingredient customization.
After the customer is finished swapping out ingredients (if any) then they can choose a button for additional ingredients.  
A list of add-ons appears with their respective markup cost.
When the diner completes the selection process, the item is added to the 'bag' for checkout.
Entree selection continues as desired by customer.
Prior to checkout, the app displays the complete order to the customer and asks for verification.
In the checkout process, the customer is asked information including name, address, email, and phone number.
The app totals the price of each dish plus markups, and displays for customer.
Customer clicks ok, then app asks for payment information.
Order then completes. 
*/

//START PROGRAM

// example of readline-sync from Values, Data Types, and Operations - will be used later down
const readline = require('readline-sync'); 

// hoisted variables for clarity
// Example of Building Arrays

let meatOrVeg = ["meatballs", "chicken", "mushrooms"];
let sauces = ["alfredo", "marinara", "olive oil"];
let noodles = ["linguini", "spaghetti", "tagliatelle"];
let addOns = [
    ["salt", "black pepper", "red pepper"],
    ["cilantro", "basil", "garlic", "oregano"],
    ["butter", "parmesean", "onion"]
];
let entrees = ["Spaghetti and Meatballs", "Chicken Alfredo", "Pasta al Funghi"];
let entreePrices = [12, 15, 8];
let meatPrices = [4, 6, 2];
let saucePrices = [3, 2, 4];
let noodlePrices = [8, 6, 11];

//these variables would be used to total the order at the end.

let meatballPrice = meatPrices[0];
let chickenPrice = meatPrices[1];
let mushroomPrice = meatPrices[2];
let alfredoPrice = [0];
let marinaraPrice = [1];
let oliveOilPrice = [2];
let linguiniPrice = [0];
let spaghettiPrice = [1];
let tagliatellePrice = [2];

// Example of Using Arrays
let ingrSpagMeat = [meatOrVeg[0], sauces[1], noodles[1]];
let ingrChxAlf = [meatOrVeg[1], sauces[0], noodles[0]];
let ingrPastaFungi = [meatOrVeg[2], sauces[2], noodles[2]];

// Customer clicks on list of entrees from website main menu page. A list of dishes are presented.
//  This code entry requires correct spelling and spacing, (capitalization unimportant).
// Ideally the app would be buttons instead of text questions.

console.log(entrees);
console.log("**Cost:**  ", entreePrices);
let firstDish = readline.question(`Please select an entree: \n`, entrees).toUpperCase(); // Example of template literals and newline - Stringing Characters Together
console.log(firstDish + " is selected.");

let wantSwap = readline.question("Would you like to swap any ingredients? (yes/no) ").toUpperCase();

if (wantSwap === "YES") {
    // Nested conditional with 3 options - example of control structures and logic
    if (firstDish === "CHICKEN ALFREDO") {
        console.log(ingrChxAlf);
    } else if (firstDish === "SPAGHETTI AND MEATBALLS") {
        console.log(ingrSpagMeat);
    } else if (firstDish === "PASTA AL FUNGHI") {
        console.log(ingrPastaFungi);
    } else {
        console.log("Please return to main menu and enter a valid entree.");
    }
} else {     
    console.log(`\x1b[31mInformational:  \nIf customer does not want to swap, entree1 is added to bag \nand display loops to beginning menu to allow for a second choice as desired. \x1b[0m`); 
}

let firstSwap = readline.question(`Please enter the ingredient you would like to swap or remove below. (if none, enter "NONE") `).toUpperCase();

if (wantSwap === "YES") {
    if (firstSwap === "MEATBALLS" || firstSwap === "CHICKEN" || firstSwap === "MUSHROOMS") {
        console.log(meatOrVeg);
        console.log("**Cost:**  ", meatPrices);
    } else if (firstSwap === "ALFREDO" || firstSwap === "MARINARA" || firstSwap === "OLIVE OIL") {
        console.log(sauces);
         console.log("**Cost:**  ", saucePrices);
    } else if (firstSwap === "LINGUINI" || firstSwap === "SPAGHETTI" || firstSwap === "TAGLIATELLE") {
        console.log(noodles);
         console.log("**Cost:**  ", noodlePrices);
    } else {
        console.log("Please return to entree selection and enter a valid ingredient.");
        console.log(`\x1b[31mInformational:  \nAt this point, the menu would cycle back to the beginning of this decision tree. \x1b[0m`);
    }
} else {     
     
}
let firstIngSwap = readline.question(`Enter Replacement Ingredient:  (if you would like to remove above ingredient, enter "NONE") `).toUpperCase();
    
console.log(`\x1b[31mInformational:  \nOnly if the customer has swapped an ingredient, would the below appear. \x1b[0m`); 

let secondSwap = readline.question('Would you like to swap a second ingredient? (yes/no) ');
//the menu would cycle back to the ingredient decision tree. 

let onTheSide = readline.question(`If you would like any ingredient on the side, please enter it here:  `);

//Additional options for temperature and preparation preferences would also show here.

console.log("Add-On Menu:  \nNo additional charge.");
   console.log(addOns);

let addOnOption = readline.question(`Enter add-on choices:  `);

//Dish is then added to the bag for checkout. 

let moreFood;

do {
    moreFood = readline.question("Would you to add something else?  ").toUpperCase();

    if (moreFood === "YES") {
        console.log(`\x1b[31mInformational:  \n.Here, menu would cycle around and repeat the whole process again. \x1b[0m`);
    } else if (moreFood === "NO") {
    } else  { 
    console.log('Please enter a valid response.'); 
    }

} while (moreFood !=="YES" && moreFood !== "NO"); // I looked up how to do this loop because I really wanted to use it.

/* Second/Third/etc entree selection continues as desired by customer.
Prior to checkout, the app displays the complete order to the customer and asks for verification.*/

let orderSelection = {firstDish, firstIngSwap, onTheSide, addOnOption}; // Example of Creating and Using Objects
console.log("Your complete order is: ", orderSelection); 

const nameFull = readline.question(`Please enter your name:  `); // example of values, data types and operations (using const)

/*In the checkout process, the customer is asked information including name, address, email, and phone number.
The app totals the price of each dish plus markups, and displays for customer.
Customer clicks ok, then app asks for payment information.
Order then completes. 
*/

console.log("Thank you " + nameFull + " for your order!")