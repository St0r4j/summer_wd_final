// FUNCTION FOR OPENING THE CART THROUGH THE USE OF A MODAL

function openModal() {
    var modal = document.getElementById("modal");

    modal.style.visibility = "visible";
}

// FUNCTION FOR CLOSING THE CART THROUGH THE USE OF A MODAL

function closeModal() {
    var modal = document.getElementById("modal");

    modal.style.visibility = "hidden";
}

// FUNCTION FOR ADDING ITEMS TO THE CART

function addToCart() {
    // CREATED AN OBJECT TO HOLD INFORMATION ABOUT THE PRODUCT (STARTING WITH STATIC DATA)
    var dummyObj = {
        // FILLED THE OBJECT WITH CORRESPONDING KEYS AND THEIR VALUES (KEY: "VALUE")
        imgSrc: "./images/Columbia_Mens_Bahama_Ii_Short_Sleeve_Shirt_Collegiate_Navy_pic1.jpg",
        name: "Columbia Men's Bahama Ii Short Sleeve Shirt",
        owner: "Columbia",
        price: "$40.00",
        qty: "1"
    }
    // INITIALIZED VARIABLES IN ORDER TO SHIFT DATA INTO THE SHOPPING CART 
    var modalContent = document.getElementById('modal-content'); // LINKS MODAL TO VARIABLES FOR PARSING DATA
    const newDiv = document.createElement('div'); // CREATES A VARIABLE TO CREATE NEW DIV ELEMENTS
    newDiv.classList.add('shoppingCartItem'); // ADDED A NEW DIV ELEMENT TO SHOPPING CART
    newDiv.innerHTML = createHTML(dummyObj); // PLACES THE OBJECT DATA FROM THE STATIC DATA INTO THE DIV ELEMENTS
    //console.log("hello?",newDiv);  // <-- TEST IN ORDER TO ENSURE THE INITIALIZATION WAS WORKING
    modalContent.appendChild(newDiv); // MAKES THE NEW DIV ELEMENTS CHILDREN OF modalContent

}

function createHTML(productObj) {
    const innerHTMLString = `<img id="cartImage" src="${productObj.imgSrc}" alt=""><ul>Name: ${productObj.name}</ul><ul>Manufacturer: ${productObj.owner}</ul><ul>Price: ${productObj.price}</ul><ul>Quantity: ${productObj.qty}</ul>`;
    console.log(innerHTMLString)
    return innerHTMLString;
}
