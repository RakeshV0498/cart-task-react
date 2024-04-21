import {
  Badge,
  Container,
  Dropdown,
  DropdownToggle,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">MyShop Cart</Link>
          </Navbar.Brand>
          <Nav>
            <Dropdown alignright>
              <DropdownToggle variant="primary">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge bg="info">{10}</Badge>
              </DropdownToggle>
              <Dropdown.Menu style={{ minwidth: 370 }}>
                <span style={{ padding: 10 }}>Cart is Empty</span>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
