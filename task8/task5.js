
    fetch("https://fakestoreapi.com/products")

        .then(response => response.json())

            .then(products => {

                let productData = "";

                products.forEach(product => {

                    productData += `
                    
                        <div class="product">

                            <p>Title: ${product.title}</p>

                            <p>Category: ${product.category}</p>

                            <p>Price: $${product.price}</p>

                        </div>
                    
                    `;
                });

                document.getElementById("products").innerHTML = productData;

            });