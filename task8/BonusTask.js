let container = document.querySelector(".products");

let productPromise = new Promise((resolve, reject) =>  {

    fetch("https://fakestoreapi.com/products")

    .then(response => response.json())

    .then(products => {
        resolve(products);

    });

 });

    // Use Promise

    productPromise.then(products => {

        products.forEach(product => {

    // Create Card        

        let card = document.createElement("div")

        card.className = "card";

    // Add Product Details

        card.innerHTML = `
            
            <img src="${product.image}">

            <h3>Title: ${product.title}</h3>

            <p>Caretory: ${product.category}</P>

            <p>Description: ${product.description}</p>

            <p>Price: ${product.price}</p>

            <p>Rating: ${product.rating.rate}</p>

            <p>Review: ${product.rating.count}</p>
            
            `;
    // Create Button        

        let button = document.createElement("button")

        button.innerHTML = " BYE NOW";

    // Add Button to card        

        card.append(button);

    // Add Card to UI

        container.append(card);

        });
   
});