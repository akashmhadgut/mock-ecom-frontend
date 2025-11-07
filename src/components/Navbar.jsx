import React from "react";
import { Navbar as BSNavbar, Nav, Button, Container, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ user, logout, cart, toggleCart }) => {
  return (
    <BSNavbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <BSNavbar.Brand className="fw-bold">🛍️ Vibe Commerce</BSNavbar.Brand>

        <Nav className="ms-auto d-flex align-items-center gap-3">
          {user ? (
            <>
              <span className="text-white">Hi, {user.name}</span>

              {/* 🛒 Cart Icon */}
              <Button
                variant="outline-light"
                className="position-relative"
                onClick={toggleCart}
              >
                <FaShoppingCart size={18} />
                {cart.items?.length > 0 && (
                  <Badge
                    bg="danger"
                    pill
                    className="position-absolute top-0 start-100 translate-middle"
                  >
                    {cart.items.length}
                  </Badge>
                )}
              </Button>

              {/* 🔒 Logout */}
              <Button variant="outline-light" size="sm" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <Button href="/login" variant="outline-light" size="sm">
              Login
            </Button>
          )}
        </Nav>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
