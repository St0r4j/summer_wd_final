const shirt={
    productName: "Columbia Men's Bahama Ii Short Sleeve Shirt",
    productOwner: "Columbia",
    imageURL: "",
}

function openModal() {
    var modal = document.getElementById("modal");

    modal.style.visibility = "visible";
}

function closeModal() {
    var modal = document.getElementById("modal");

    modal.style.visibility = "hidden";
}

function addToCart() {
    // var modal = document.getElementById('modal');

    // // create a h4 element and store in variable x
    // // update x inner text with shirt
    // modal.setAttribute('src', shirt)

    // const addImage = document.createElement('img');
    var dummyObj = {
        imgSrc: "./images/Columbia_Mens_Bahama_Ii_Short_Sleeve_Shirt_Collegiate_Navy_pic1.jpg",
        name: "Columbia Men's Bahama Ii Short Sleeve Shirt",
        owner: "Columbia",
        price: "$40.00",
        qty: "1"
    }
    var modalContent = document.getElementById('modal-content');
    const newDiv = document.createElement('div');
    newDiv.classList.add('shoppingCartItem');
    newDiv.innerHTML = createHTML(dummyObj);
    console.log("hello?",newDiv);
    modalContent.appendChild(newDiv);

}



function createHTML(productObj) {
    const innerHTMLString = `<img id="cartImage" src="${productObj.imgSrc}" alt=""><ul>Name: ${productObj.name}</ul><ul>Manufacturer: ${productObj.owner}</ul><ul>Price: ${productObj.price}</ul><ul>Quantity: ${productObj.qty}</ul>`;
    console.log(innerHTMLString)
    return innerHTMLString;
}
