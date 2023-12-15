document.addEventListener("DOMContentLoaded", function () {
    var cartSection = document.getElementById("cart");

    var cartItemsContainer = document.getElementById("cart-items");
    var subtotalAmount = document.getElementById("subtotal-amount");
    var totalAmount = document.getElementById("total-amount");

    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    for (var i = 0; i < cart.length; i++) {
        var cartItem = cart[i];

        var cartItemElement = document.createElement("div");
        cartItemElement.className = "cart-item";

        var cartItemImage = document.createElement("img");
        cartItemImage.src = cartItem.image;
        cartItemImage.alt = cartItem.name;

        var cartItemInfo = document.createElement("div");
        cartItemInfo.className = "cart-item-info";

        var cartItemName = document.createElement("p");
        cartItemName.textContent = cartItem.name;

        var cartItemPrice = document.createElement("p");
        cartItemPrice.textContent = cartItem.price.toLocaleString("da-DK", { style: "currency", currency: "DKK" });

        var removeButton = document.createElement("img");
        removeButton.src = "/images/remove-produkt.svg"; 
        removeButton.alt = "Fjern";
        removeButton.className = "remove-button";
        removeButton.addEventListener("click", createRemoveHandler(cartItem.id));

        cartItemInfo.appendChild(cartItemName);
        cartItemInfo.appendChild(cartItemPrice);

        cartItemElement.appendChild(cartItemImage);
        cartItemElement.appendChild(cartItemInfo);
        cartItemElement.appendChild(removeButton);

        cartItemsContainer.appendChild(cartItemElement);
    }

    var subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    var total = subtotal + 50; 

    subtotalAmount.textContent = subtotal.toLocaleString("da-DK", { style: "currency", currency: "DKK" });
    totalAmount.textContent = total.toLocaleString("da-DK", { style: "currency", currency: "DKK" });

    function createRemoveHandler(productId) {
        return function () {
            var indexToRemove = cart.findIndex(item => item.id === productId);

            if (indexToRemove !== -1) {
                cart.splice(indexToRemove, 1);
                localStorage.setItem("cart", JSON.stringify(cart));

                cartItemsContainer.innerHTML = "";
                for (var i = 0; i < cart.length; i++) {
                    var updatedCartItem = cart[i];
                    var updatedCartItemElement = createCartItemElement(updatedCartItem);
                    cartItemsContainer.appendChild(updatedCartItemElement);
                }

                var updatedSubtotal = cart.reduce((sum, item) => sum + item.price, 0);
                var updatedTotal = updatedSubtotal + 50; 

                subtotalAmount.textContent = updatedSubtotal.toLocaleString("da-DK", { style: "currency", currency: "DKK" });
                totalAmount.textContent = updatedTotal.toLocaleString("da-DK", { style: "currency", currency: "DKK" });
            }
        };
    }

    function createCartItemElement(cartItem) {
        var cartItemElement = document.createElement("div");
        cartItemElement.className = "cart-item";

        var cartItemImage = document.createElement("img");
        cartItemImage.src = cartItem.image;
        cartItemImage.alt = cartItem.name;

        var cartItemInfo = document.createElement("div");
        cartItemInfo.className = "cart-item-info";

        var cartItemName = document.createElement("p");
        cartItemName.textContent = cartItem.name;

        var cartItemPrice = document.createElement("p");
        cartItemPrice.textContent = cartItem.price.toLocaleString("da-DK", { style: "currency", currency: "DKK" });

        var removeButton = document.createElement("img");
        removeButton.src = "/images/remove-produkt.svg"; 
        removeButton.alt = "Fjern";
        removeButton.className = "remove-button";
        removeButton.addEventListener("click", createRemoveHandler(cartItem.id));

        cartItemInfo.appendChild(cartItemName);
        cartItemInfo.appendChild(cartItemPrice);

        cartItemElement.appendChild(cartItemImage);
        cartItemElement.appendChild(cartItemInfo);
        cartItemElement.appendChild(removeButton);

        return cartItemElement;
    }
});
