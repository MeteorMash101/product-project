import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
			<Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
				<Container>
				<Navbar.Brand href="/">Product Payments</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<NavDropdown title="Edit Prices" id="collasible-nav-dropdown">
							<NavDropdown.Item>Red: </NavDropdown.Item>
							<NavDropdown.Item>Green: </NavDropdown.Item>
							<NavDropdown.Item>Blue: </NavDropdown.Item>
							<NavDropdown.Divider/>
							<NavDropdown.Item>Set Default</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Select Payment API" id="collasible-nav-dropdown">
							<NavDropdown.Item>Stripe</NavDropdown.Item>
							<NavDropdown.Item>PayPal</NavDropdown.Item>
							<NavDropdown.Item>JPMorgan</NavDropdown.Item>
							<NavDropdown.Divider/>
							<NavDropdown.Item>Set Default</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link>Hello [Test User]!</Nav.Link>
						<HeaderCartButton onClick={props.onClick}/>
					</Nav>
				</Navbar.Collapse>
				</Container>
			</Navbar>
  );
};

export default Header;
