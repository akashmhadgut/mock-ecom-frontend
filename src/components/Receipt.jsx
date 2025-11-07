import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Receipt = ({ receipt }) => {
  const navigate = useNavigate();

  if (!receipt)
    return (
      <Container className="text-center mt-5">
        <h4>No receipt found.</h4>
        <Button variant="primary" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </Container>
    );

  return (
    <Container className="mt-5">
      <Card className="shadow p-4">
        <h3 className="mb-4">🧾 Order Receipt</h3>
        <p><strong>Name:</strong> {receipt.name}</p>
        <p><strong>Email:</strong> {receipt.email}</p>
        <p><strong>Total:</strong> ₹{receipt.total}</p>
        <p><small>{new Date(receipt.timestamp).toLocaleString()}</small></p>

        <Button variant="primary" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </Card>
    </Container>
  );
};

export default Receipt;
