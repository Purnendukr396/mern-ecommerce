import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";
const IMAGE_BASE_URL = "http://localhost:5000/uploads";
import LoginPopup from "../components/LoginPopup";
import { useNavigate } from "react-router-dom";



function Cart() {

  const navigate = useNavigate();
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const token = localStorage.getItem("token");

const isLoggedIn = token !== null;
  const handleCheckout = () => {
   console.log("Button clicked");
  if (!isLoggedIn) {
    showLoginPopup();
    return;
  }

  navigate("/place-order");
};

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const { showLoginPopup } = LoginPopup();


  return (
    <div className="cart">

      <h2>YOUR CART</h2>

      {cart.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        cart.map((product) => (
          <div className="cart-items" key={product._id}>

            <div className="cart-left">

              <img
                src={`${IMAGE_BASE_URL}/${product.image?.[0]}`}
                alt={product.name}
              />

              <div className="cart-details">

                <h3>{product.name}</h3>

                <p>${product.price}</p>

              </div>

            </div>

            <div className="qty">

              <button
                onClick={() => decreaseQuantity(product._id)}
              >
                -
              </button>

              <span>{product.quantity}</span>

              <button
                onClick={() => increaseQuantity(product._id)}
              >
                +
              </button>

            </div>

            <div className="delete">

              <button
                onClick={() => removeFromCart(product._id)}
              >
                Delete
              </button>

            </div>

          </div>
        ))
      )}

      {cart.length > 0 && (
        <div className="cart-bottom">

          <div className="cart-total">

            <h2>CART TOTALS</h2>

            <div className="total-row">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>

            <div className="total-row">
              <span>Shipping Fee</span>
              <span>$10</span>
            </div>

            <div className="total-row">
              <strong>Total</strong>
              <strong>${subtotal + 10}</strong>
            </div>

           
            
            <button
  className="checkout-btn"
  onClick={handleCheckout}
>
  PROCEED TO CHECKOUT
</button>

          </div>

        </div>
      )}

    </div>
  );
}

export default Cart;