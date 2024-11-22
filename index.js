// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};



// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    elMenu = document.getElementById('menu');
    elMenu.classList.add('menu');
    
    // Loop through each category and its items in the menu object
   for( const category in menu)
    {
        const items =  menu[category];

        // Create an element to represent the category
        let elCategory = document.createElement('div');  
        
        // Set the text content of the category element to the category name
        elCategory.textContent = `${category}`;
 
        // Append the category element to the menu container
        elMenu.appendChild(elCategory);
 
        // Create an element to represent a list of items
        let elList = document.createElement('ul');

        // Append a list of items element to the menu container
        elCategory.appendChild(elList);
 
 
        // Loop through the items in the category and create list items
        for(let i = 0; i < items.length; i++)
        {
            // Create a list item element
            let elItem = document.createElement('li');
 
            // Set the text content of the list item element to the item name
            elItem.textContent = `${items[i]}`;

            // Attach a click event listener to the list item to add it to the order
            elItem.addEventListener('click', ()=> {
                                                    console.log(`${items[i]}`);
                                                    addToOrder(items[i]);
                                                });

            // Append the list item to the list of items
            elList.appendChild(elItem);
        }
           
    }
            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
     const elOrderItems = document.querySelector('#order-items');
     const elOrderTotal = document.getElementById('order-total');

    // Create a list item for the order
    let elListItem = document.createElement('li');
            
    // Set the text content of the list item to the item name
    elListItem.textContent = `${itemName}`;
    
    // Append the list item to the order items list
    elOrderItems.append(elListItem);
    
    // Calculate and update the total price
    

    // Update the text content of the order total element with the new total

}


// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
