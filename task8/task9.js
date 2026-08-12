fetch("https://fakestoreapi.com/products")

    .then(response => response.json())

    .then(products => {

        let productData = "";

        products.forEach(product => {

           productData += `
                    
            <div class="card">

                <h3>${product.title}</h3>

                 <button>Buy for $${product.price}</button>

             </div>
                    
        `;

        });

        document.getElementById("products").innerHTML = productData;

    });