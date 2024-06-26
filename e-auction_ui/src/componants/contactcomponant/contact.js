import './contact.css'
function Contact() {
    
    return (
        <>
     {/* Contact section */}
     <br/>
     <section className="about_section layout_margin-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="assets/images/Navi.jpg" alt=""/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>Conatct <span>Page</span></h2>
                </div>
                <p>Contact Page</p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>    
        </>
    );
}
export default Contact;