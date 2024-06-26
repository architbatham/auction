import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
        <div className="hero_area">
        <div className="hero_bg_box">
          <img src="assets/images/2.webp" alt=""/>
        </div>

        {/* header section starts */}
<header className="header_section">
  <div className="container">
    <nav className="navbar navbar-expand-lg custom_nav-container ">
      <a className="navbar-brand" href="index.html">
        <span>BidForTime</span>
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className=""></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" ><Link style={{color:'white'}} to="/">Home</Link><span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link"><Link style={{color:'white'}} to="/about">About</Link></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" ><Link style={{color:'white'}} to="/contact">Contact</Link></a>
          </li>
          <li className="nav-item">
            <a className="nav-link"><Link style={{color:'white'}} to="/service">Service</Link></a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Pages
            </a>
            <div className="dropdown-menu" aria-labelledby="pagesDropdown">
              <a className="dropdown-item" ><Link style={{color:'white'}} to="/pageq">Page1</Link></a>
              <a className="dropdown-item" ><Link style={{color:'white'}} to="/page2">Page2</Link></a>
              <a className="dropdown-item" ><Link style={{color:'white'}} to="/page3">Page3</Link></a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" ><Link style={{color:'white'}} to="/register">Register</Link></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" ><Link style={{color:'white'}} to="/login">Login</Link></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>


        {/* slider section */}
        <section className="slider_section ">
          <div id="customCarousel1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="detail-box">
                        <h1>Historic Coin,</h1>
                        <h1>GRADED MORGAN SILVER DOLLARS NEW IN STOCK.</h1>
                        <p>Shop a selection of Morgan Silver dollars graded and encapsulated by NGG and PCGS. Multiple mints, years and grades available</p>
                        <div className="btn-box">
                          <a href="" className="btn1">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="detail-box">
                        <h1>The Original Old Man Silver Medallion</h1>
                        <p>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
                        <div className="btn-box">
                          <a href="" className="btn1">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="detail-box">
                        <h1>Fine ART</h1>
                        <p>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
                        <div className="btn-box">
                          <a href="" className="btn1">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol className="carousel-indicators">
              <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
            </ol>
          </div>
        </section>
        {/* end slider section */}
      </div>
        </>
    );
}
export default Header; 