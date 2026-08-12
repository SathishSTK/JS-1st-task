

        // Get Products from API

        fetch("https://fakestoreapi.com/products")

            .then(response => response.json())

            .then(products => {

                let ProductData = "";

                products.forEach(product => {

                    ProductData += `
                    
                        <div class="newcard">

                            <h3>Title: ${product.title}</h3>

                            <p>Description: ${product.description.slice(0, 50)}</p>

                            <p>Price: $${product.price}</p>

                        </div>
                    
                    `;
                });

                document.getElementById("products").innerHTML = ProductData;

            });