 fetch("https://fakestoreapi.com/products")

            .then(response => response.json())

            .then(products => {

                let productData = "";

                products.forEach(product => {

                    productData += `
                    
                        <div class="card">

                            <h3>${product.title}</h3>

                            <img src="${product.image}">

                            <p>Description: ${product.description}</p>

                            <p>Category: ${product.category}</p>

                            <p>Price: $${product.price}</p>

                            <p>Rating: ${product.rating.rate}</p>

                        </div>
                    
                    `;
                });

                document.getElementById("products").innerHTML = productData;

            });

  