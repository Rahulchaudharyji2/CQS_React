import { useContext } from "react";
import { CartContext } from "../context/CartContext";

 function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            {item.name}
            <button onClick={() => removeFromCart(item.id)}>❌</button>
          </div>
        ))
      )}
    </div>
  );
}
export default Cart;