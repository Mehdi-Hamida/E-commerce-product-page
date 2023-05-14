//Make burger menu appear and disappear on button click
const burgerMenuBtn = document.querySelector("#burger-menu");

burgerMenuBtn.addEventListener("click", () =>
{
    burgerMenuBtn.classList.toggle("active");
});



//In the toggleCart function, we first check if the user clicks outside the cart using cart.contains(event.target). If the user clicks outside the cart, we check whether the cart is open or closed using the isCartOpen variable. If the cart is open, we close it by removing the "opened" class and changing the isCartOpen variable to false. Otherwise, we open the cart by adding the "opened" class and changing the isCartOpen variable to true.
const cartBtn = document.querySelector("#cart-icon");
const cart = document.querySelector("#cart");

function toggleCart(event)
{
    if (event.target === cartBtn)
    {
      cart.classList.toggle("opened");
    }
    else if (cart.classList.contains("opened") && !cart.contains(event.target)) // When the user clicks anywhere on the page, the "click" event is fired and an Event object is created by the browser. This object contains information about the click event, such as the DOM element the user clicked on. Then when the toggleCart function is called in response to the click event, the corresponding Event object is automatically passed to the function as the first argument. We can then use this Event object to retrieve the DOM element on which the user clicked
    {
      cart.classList.remove("opened");
    }
}
document.addEventListener("click", toggleCart);



//Image slider
const presentationImages = document.querySelectorAll(".presentation-images");
const prevArrow = document.querySelector(".prev-nav-arrow");
const nextArrow = document.querySelector(".next-nav-arrow");

function useNavigationArrows()
{
    let i = 0;
    presentationImages[i].classList.add("visible-img");
    
    nextArrow.addEventListener("click", () =>
    {
        if (i < presentationImages.length - 1)
        {
            i++;
            presentationImages[i-1].classList.remove("visible-img");
            presentationImages[i].classList.add("visible-img");
        }
    
        else
        {
            return;
        }
    });

    prevArrow.addEventListener("click", () =>
    {
        if (i <= presentationImages.length - 1 && i > 0)
        {
            presentationImages[i].classList.remove("visible-img");
            presentationImages[i-1].classList.add("visible-img");
            i--;
        }

        else
        {
            return;
        }
    });
}
useNavigationArrows();



//Product amount selector
const productAmountNumber = document.querySelector("#product-quantity-number");
const increaseProductAmountBtn = document.querySelector("#increase-product-quantity-btn");
const decreaseProductAmountBtn = document.querySelector("#decrease-product-quantity-btn");
let productQuantity = 0;

function selectProductQuantity()
{
    increaseProductAmountBtn.addEventListener("click", () =>
    {
        productQuantity++;
        productAmountNumber.innerHTML = productQuantity;
    });

    decreaseProductAmountBtn.addEventListener("click", () =>
    {
        if (productQuantity > 0)
        {
            productQuantity--;
        }

        else
        {
            productQuantity == 0;
        }

        productAmountNumber.innerHTML = productQuantity;
    });
}
selectProductQuantity();



//Calculate product's final price
const productPrice = 125;
let productFinalPrice;

function calculateProductFinalPrice()
{
    productFinalPrice = productQuantity * productPrice;
}



//Updating the badge showing the number of products in the cart
const itemsInCartNumberBadge = document.querySelector("#items-in-cart-number-badge");

function updateItemsInCartNumberBadge()
{
    itemsInCartNumberBadge.innerHTML = productQuantity;
}



//Make "Add to cart" button work
const addToCartBtn = document.querySelector("#add-to-cart-btn");
const cartProductsContainer = document.querySelector("#cart-products-container");

function addProductToCart()
{
    addToCartBtn.addEventListener("click", () =>
    {
        calculateProductFinalPrice();
        
        const cartProductStructure = 
        `<div class='cart-single-product-container'>
        <img class="product-in-cart-img" src="./images/image-product-1-thumbnail.jpg" alt="Fall Limited Edition Sneakers" title="Thumbnail presentation picture of Fall Limited Edition Sneakers">
        <div class='product-in-cart-informations'>
            <p class='cart-product-name'>Fall Limited Edition Sneakers</p>
            <p class='cart-product-amount-and-price'><span>$`+ productPrice +`</span> <span>x `+ productQuantity +`</span> <span class="total-price">$`+ productFinalPrice + `</span></p>
        </div>
        <img class="product-in-cart-delete" src="./images/icon-delete.svg" alt="Trash can icon" title="Delete product icon">
        </div>`;

        if (productQuantity > 0)
        {
            cartProductsContainer.classList.remove("empty");
            cartProductsContainer.innerHTML = cartProductStructure;
            itemsInCartNumberBadge.classList.add("visible");
            updateItemsInCartNumberBadge();
        }

        else
        {
            itemsInCartNumberBadge.classList.remove("visible");
            alert("Please select at least 1 item");
        }

    });
}
cartProductsContainer.classList.add("empty");
cartProductsContainer.innerHTML = "Your cart is empty.";
addProductToCart();



//Make the thrash button in cart work
const cartDeleteBtn = document.querySelector(".product-in-cart-delete");

cartProductsContainer.addEventListener("click", event =>
{
    if (event.target.classList.contains("product-in-cart-delete"))
    {
        cartProductsContainer.classList.add("empty");
        itemsInCartNumberBadge.classList.remove("visible")
        cartProductsContainer.innerHTML = "Your cart is empty.";
    }
});