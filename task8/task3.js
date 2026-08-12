
        // Get Products from API

        fetch("https://fakestoreapi.com/products")

            .then(response => response.json())

            .then(products => {

                let productData = "";

                products.forEach(product => {

                    productData += `
                    
                        <div class="newproduct">

                            <p>Product: ${product.title}</p>

                            <p>Price: $${product.price}</p>

                            <p>Category: ${product.category}</p>

                            <img src="${product.image}">

                        </div>
                    
                    `;
                });

                document.querySelector(".api").innerHTML = productData;

            });
            