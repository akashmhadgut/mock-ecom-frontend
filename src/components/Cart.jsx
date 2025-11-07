import React from "react";
import { Button } from "react-bootstrap";

const Cart = ({ cart, handleAdd, handleDecrease, handleRemove, handleCheckout }) => {
  return (
    <div className="mt-3">
      <h4 className="mb-3">🛒 Your Cart</h4>

      {cart.items.length === 0 ? (
        <p className="text-muted">No items in your cart.</p>
      ) : (
        <>
          {cart.items.map((i) => (
            <div
              key={i._id}
              className="d-flex justify-content-between align-items-center border-bottom py-3"
            >
              <div className="flex-grow-1">
                <h6 className="mb-1">{i.productId.name}</h6>
                <small className="text-muted">₹{i.productId.price} each</small>
              </div>

              <div className="d-flex align-items-center">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => handleDecrease(i.productId._id)}
                >
                  −
                </Button>
                <span className="mx-2">{i.qty}</span>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => handleAdd(i.productId._id)}
                >
                  +
                </Button>
              </div>

              <div className="text-end ms-3">
                <strong>₹{i.productId.price * i.qty}</strong>
              </div>

              <Button
                variant="outline-danger"
                size="sm"
                className="ms-3"
                onClick={() => handleRemove(i._id)}
              >
                ✕
              </Button>
            </div>
          ))}

          <div className="d-flex justify-content-between align-items-center mt-3">
            <h5>Total:</h5>
            <h5>₹{cart.total}</h5>
          </div>

          <div className="text-end mt-3">
            <Button onClick={handleCheckout}>Proceed to Checkout</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
