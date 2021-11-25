import {Link} from 'react-router-dom';
import { Button , Navbar ,Nav , Container} from 'react-bootstrap';

import  logo from '../../assets/image/finalLogo.png';
import './style.css';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<Navbar collapseOnSelect expand="lg">
			<Container>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className='btn-registration'>
						<Link to='/signUp'><Button className='btn signUp' variant="link">مستخدم جديد</Button></Link>
						<Link to='/signIn'><Button className='btn signIn' variant='success'>تسجيل دخول</Button></Link>
					</Nav>
					<Nav className="navbar-pg">
						<NavLink exact to="/" activeClassName="join-now" className='nav-item  '>الصفحة الرئيسية</NavLink>
						<NavLink to="/about" activeClassName="join-now" className='nav-item  '>من نحن</NavLink>
						<NavLink to="/service" activeClassName="join-now" className='nav-item  '>خدماتنا  </NavLink>
						<NavLink to="/comuncation" activeClassName="join-now" className='nav-item  '>تواصل معنا</NavLink>
						<NavLink to="/subscribe" activeClassName="join-now" className='nav-item  '>اشترك الآن</NavLink>

						{/* <Nav.Link href="/" className='nav-item'>من نحن</Nav.Link>
						<Nav.Link href="/" className='nav-item'>خدماتنا</Nav.Link>
						<Nav.Link href="/" className='nav-item'>تواصل معنا</Nav.Link>
						<Nav.Link href="/subscribe" className='nav-item '>اشترك الآن</Nav.Link> */}
					</Nav>
				</Navbar.Collapse>
				<Navbar.Brand href="/" className='logo'><img src={logo} alt='logo'/></Navbar.Brand>
			</Container>
		</Navbar>
	);
}

export default Header;
