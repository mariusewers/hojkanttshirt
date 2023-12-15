document.addEventListener("DOMContentLoaded", function () {
    

    var urlParams = new URLSearchParams(window.location.search);
    var productId = parseInt(urlParams.get("id"));

    var productDetailsSection = document.getElementById("product-details");

    var selectedProduct = products.find(product => product.id === productId);

    var productNameElement = document.getElementById("product-name");
    var productImageElement = document.getElementById("product-image");
    var productDescriptionElement = document.getElementById("product-description");
    var productPriceElement = document.getElementById("product-price");
    var addToCartButton = document.getElementById("add-to-cart-button");

    productNameElement.textContent = selectedProduct.name;
    productImageElement.src = selectedProduct.image;
    productImageElement.alt = selectedProduct.name;
    productDescriptionElement.textContent = selectedProduct.description;
    productPriceElement.textContent = selectedProduct.price.toLocaleString("da-DK", { style: "currency", currency: "DKK" });

    function addToCart() {
        var cartItem = {
            id: selectedProduct.id,
            name: selectedProduct.name,
            price: selectedProduct.price,
            image: selectedProduct.image,
        };

        var cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(cartItem);
        localStorage.setItem("cart", JSON.stringify(cart));

        window.location.href = "cart.html";
    }

    addToCartButton.addEventListener("click", addToCart);
});


