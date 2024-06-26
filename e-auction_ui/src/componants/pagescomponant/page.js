import './page.css'
function Page() {
    return (
       <>

<br/>
         {/* Home section */}
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
                  <h2>Pages<span>Page</span></h2>
                </div>
                <p>Pages</p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

       </>
    );
}
export default Page;