import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
  const [HeaderContent, setHeaderContent] = useState();
  const [imageSrc, setImageSrc] = useState('assets/images/2.webp');
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (token !== undefined && role === "admin") {
      setHeaderContent(
        <>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link"><Link style={{ color: 'white' }} to="/admin">Admin Home</Link><span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><Link style={{ color: 'white' }} to="/logout">Logout</Link></a>
              </li>
            </ul>
          </div>
        </>
      );
      setImageSrc('assets/images/Admin.jpg'); // Change to your desired admin image
      setTitle('Admin Page'); // Set title for admin page
      navigate('/admin'); // Programmatic navigation to admin page
    } else if (token !== undefined && role === "user") {
      setHeaderContent(
        <>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link"><Link style={{ color: 'white' }} to="/user">User Home</Link><span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><Link style={{ color: 'white' }} to="/logout">Logout</Link></a>
              </li>
            </ul>
          </div>
        </>
      );
      setImageSrc('assets/images/User.jpg'); // Change to your desired user image
      setTitle('User Page'); // Set title for user page
      navigate('/user'); // Programmatic navigation to user page
    } else {
      setHeaderContent(
        <>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link"><Link style={{ color: 'white' }} to="/">Home</Link><span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><Link style={{ color: 'white' }} to="/about">About</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><Link style={{ color: 'white' }} to="/contact">Contact</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><Link style={{ color: 'white' }} to="/service">Service</Link></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Pages
                </a>
                <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                  <a className="dropdown-item"><Link style={{ color: 'white' }} to="/page1">Page1</Link></a>
                  <a className="dropdown-item"><Link style={{ color: 'white' }} to="/page2">Page2</Link></a>
                  <a className="dropdown-item"><Link style={{ color: 'white' }} to="/page3">Page3</Link></a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link"><Link style={{ color: 'white' }} to="/register">Register</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link"><Link style={{ color: 'white' }} to="/login">Login</Link></a>
              </li>
            </ul>
          </div>
        </>
      );
      setImageSrc('assets/images/2.webp'); // Change to your desired default image
      setTitle('Welcome to E-auction website Hear You can Buy or Sell Scrole Down'); // Set default title
    }
  }, [navigate]);

  return (
    <>
      <div className="hero_area">
        <div className="hero_bg_box">
          <img src={imageSrc} alt=""/>
          <div className="image_title">{title}</div>
        </div>

        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="index.html">
                <span>E-auction</span>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className=""></span>
              </button>
              {HeaderContent}
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
