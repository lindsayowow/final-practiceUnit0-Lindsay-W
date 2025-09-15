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

// Customer clicks on list of entrees. A list of dishes are presented.
const readline = require('readline-sync'); // example of readline-sync from Values, Data Types, and Operations - will be used later down
let entree1 = ["Spaghetti and Meatballs", "Fettucini Alfredo", "Baked Lasagne", "Shrimp Scampi", "Eggplant Parmesan"];
console.log(`Please select an entree: \n`, entree1); // Example of template literals - Values, Data Types, and Operations

//Customer clicks on desired dish. Customization menu pops up.

console.log("Fettucini Alfredo is selected.") //this is just an example since there isn't a button for the user to press in this code yet.

//Customer is given option to swap out each ingredient in dish, or exclude it.

if (entree1 = "Fettucini Alfredo") {  // Example of control structures and logic
    let ingredientsFettAlf = ["Linguini noodles", "Alfredo Sauce", "Pepper"]; // Example of building arrays 
    console.log(ingredientsFettAlf);
    let firstSwap = readline.question(`Please enter the ingredient you would like to swap: \n\x1b[31m(for this example please enter Linguini noodles as logic is not fully built)\x1b[0m  `);
    console.log(firstSwap, "is selected.")
} else {
    console.log("Entree1 is added to bag and display loops to beginning menu to allow for a second choice as desired.")
}

//If customer choses to swap, a list of appropriate swaps including markup prices appears.
//Below we will use the user input from the readline question in the code for now, but the imagined app would also be buttons.

    if (firstSwap = "Linguini noodles") {
        let noodles = ["linguini", "spaghetti", "ziti", "rotini"];
        let noodlePrices = [8.99, 6.50, 11.00, 6.75];
        console.log(noodles); 
        console.log(noodlePrices);
        let firstNoodle = readline.question(`Please choose your desired noodle: `); 
    } else if (firstSwap = "Alfredo Sauce") {
        let sauces = ["Alfredo", "Marinara", "Meat", "Butter and Garlic"];
        let saucePrices = [3, 2, 2, 4];
        console.log(sauces, saucePrices);
        let firstSauce = readline.question(`Please choose your desired sauce: `)//continued example of readline-sync
    } else if (firstSwap = "Pepper") {
        let spices = ["Salt", "Pepper", "Garlic", "Parmesan"];
        console.log(spices);
        let firstSpice = readline.question(`Please choose your desired spice`);
    }

/*Additional options for putting a food "on the side" appears as well as temperature and preparation preferences.
Customer is returned to the main menu for the dish pops up, and the customer can choose the next ingredient customization.
After the customer is finished swapping out ingredients (if any) then they can choose a button for additional ingredients.  
A list of add-ons appears with their respective markup cost.*/

let addOnOption = readline.question(`Would you like any add-ons? \n\x1b[31m(say yes!)  \x1b[0m`);

if (addOnOption == "yes") {
    let addOns = [
        ["cilantro", "basil"],
        ["cumin", "tumeric"],
        ["garlic bread", "butter"]
    ];
if (addOnOption == "yes") {
    console.log(addOns);
    choiceAddOn = addOns[0][0]; // Using Arrays
    console.log("The add-on(s) you have chosen : ", choiceAddOn); 
}
}
/*When the diner completes the selection process, the item is added to the 'bag' for checkout.
Entree selection continues as desired by customer.
Prior to checkout, the app displays the complete order to the customer and asks for verification.*/

let orderSelection = {entree1: "Fettucini Alfredo", noodleChoice: "Your Noodle Choice goes here", typeOfAddOn: choiceAddOn}; // Example of Creating and Using Objects
console.log("Your complete order is: ", orderSelection); 

/*In the checkout process, the customer is asked information including name, address, email, and phone number.
The app totals the price of each dish plus markups, and displays for customer.
Customer clicks ok, then app asks for payment information.
Order then completes. 
*/