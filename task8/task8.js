fetch("https://fakestoreapi.com/products")

    .then(response => response.json())

    .then(products => {

        let productData = "";

            products.forEach(product => {

            productData += `
                    
                <div class="card">

                    <p>Title: ${product.title}</p>

                    <p> Description: ${product.description.slice(0, 20)} </p>

                </div>
                    
                    `;
                });

                document.getElementById("products").innerHTML = productData;

            });