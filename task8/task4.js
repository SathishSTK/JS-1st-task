// Select Gallary

let gallary = document.querySelector(".gallary");

fetch("https://fakestoreapi.com/products")

.then(response => response.json())

.then(products =>  {

    products.forEach(product =>  {

        //Create Image

        let image = document.createElement("img")

        //Set image

        image.src = product.image;

        //Add image to Gallary

        gallary.appendChild(image)
    });

});