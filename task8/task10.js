// Select Container

let container = document.querySelector(".products");

// Get Products from API

fetch("https://fakestoreapi.com/products")

    .then(response => response.json())

    .then(products => {

        products.forEach(c => {

        // Create Card

        let card = document.createElement("div");

        card.className = "card";

        // Display Product Details

        card.innerHTML = `
                    
            <img src="${c.image}">

            <h3>Title: ${c.title}</h3>

            <p>Category: ${c.category}</p>

            <p>Description: ${c.description}</p>

            <p>Price: $${c.price}</p>

            <p>Rating: ${c.rating.rate}</p>

            <p>Reviews: ${c.rating.count}</p>

        `;

        // Create Buy Button

        let button = document.createElement("button");

            button.innerHTML = "BUY NOW";

        // Add Button to Card

            card.append(button);

        // Add Card to Container

            container.append(card);

    });

});