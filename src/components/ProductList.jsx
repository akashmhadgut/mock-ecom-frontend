import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const ProductList = ({ products, handleAdd, handleDecrease, cart, user }) => {
  // helper to find item qty from cart
  const getQty = (productId) => {
    const item = cart.items.find((i) => i.productId._id === productId);
    return item ? item.qty : 0;
  };

  return (
    <div>
      <h2 className="text-center mb-4 text-2xl font-bold text-gray-800">
        Featured Products
      </h2>
      <Row>
        {products.map((p) => {
          const qty = getQty(p._id);
          return (
            <Col key={p._id} md={4} className="mb-4">
              <div className="card p-3 shadow-sm hover:shadow-lg transition duration-200">
                <img
                  src={p.image}
                  alt={p.name}
                  className="img-fluid mb-2 rounded"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <h5 className="text-lg font-semibold">{p.name}</h5>
                <p className="text-gray-600">₹{p.price}</p>

                {user ? (
                  qty > 0 ? (
                    // if already in cart, show quantity controls
                    <div className="d-flex justify-content-center align-items-center">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleDecrease(p._id)}
                      >
                        −
                      </Button>
                      <span className="mx-2">{qty}</span>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => handleAdd(p._id)}
                      >
                        +
                      </Button>
                    </div>
                  ) : (
                    // if not in cart yet
                    <Button
                      onClick={() => handleAdd(p._id)}
                      className="w-100"
                      variant="primary"
                    >
                      Add to Cart
                    </Button>
                  )
                ) : (
                  // if user not logged in
                  <Button className="w-100" variant="outline-secondary" disabled>
                    Login to Add
                  </Button>
                )}
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ProductList;
