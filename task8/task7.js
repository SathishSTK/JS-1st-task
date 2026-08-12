fetch("https://fakestoreapi.com/products")

    .then(response => response.json())

    .then(products => {

        let productData = "";

            products.forEach(product => {

                productData += `
                    
                 <div class="card">

                    <p>Product: ${product.title}</p>

                    <p>Rating: ${product.rating.rate}</p>

                    <p>Reviews: ${product.rating.count}</p>

                    </div>
                    
                    `;
                });

                document.getElementById("products").innerHTML = productData;

            });