import './App.css';
import { CalltoAction } from './components/CalltoAction';
import { Features } from './components/Features/Features';
import { Stats } from './components/Stats/Stats';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Pricing } from './components/Pricing/Pricing.js';
import { Faq } from './components/Faq/Faq.js';
import { CalltoAction2 } from './components/CalltoAction2/CalltoAction2.js';
import { ContactForm } from './components/ContactForm/ContactForm.js';

function App() {
  return (
    <div className='home-page-wrapper'>     

      {/*banner start*/}

      <div className="banner py-5 position-relative">
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-lg-6">
              <div className="diuhwerer_left">
                <h1 className="display-3 fw-bold">Maecenas Vitae Consectetur Led <span>Vestibulum Ante</span></h1>

                <p className="mt-4">Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.</p>

                <div className="iduhjewewr_oiererr d-flex align-items-center mt-5">
                  <button className="btn me-3 btn-main">Get Started</button>

                  <button className="btn fw-bold d-flex align-items-center btn-transparent"><i className="bi me-2 bi-play-circle"></i> Play Video</button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 position-relative">
              <img src="assets/images/illustration-1.webp" className="img-fluid" alt="" />

              <div className="diweouhrwerwer position-absolute bottom-0 mb-2 end-0 me-5 bg-white p-3 rounded-2">
                <div className="dewcrrtrtrttr">
                  <ul className="d-flex align-items-center ps-0">
                    <li>
                      <img src="assets/images/avatar-1.webp" className="img-fliud" alt="" />
                    </li>

                    <li>
                      <img src="assets/images/avatar-2.webp" className="img-fliud" alt="" />
                    </li>

                    <li>
                      <img src="assets/images/avatar-3.webp" className="img-fliud" alt="" />
                    </li>

                    <li>
                      <img src="assets/images/avatar-4.webp" className="img-fliud" alt="" />
                    </li>

                    <li>
                      <img src="assets/images/avatar-5.webp" className="img-fliud" alt="" />
                    </li>

                    <li>
                      <h6 className="mb-0">12+</h6>
                    </li>
                  </ul>

                  <p className="mb-0 text-center text-muted px-4">12,000+ lorem ipsum dolor sit amet <br /> consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>

          <div className="diehwiurwer_wrapper row align-items-center rounded-4 bg-white mt-4 py-5 px-4">
            <div className="col-lg-3 mb-lg-0 mb-md-0 mb-sm-2 mb-2">
              <div className="duhejwrr_inner">
                <div className="doereree rounded-pill position-relative">
                  <i className="bi bi-trophy position-absolute"></i>
                </div>

                <div className="dewoijrwer_right">
                  <h5 className="fw-bold">3x Won Awards</h5>

                  <h6 className="mb-0 text-muted">Vestibulum ante ipsum</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-lg-0 mb-md-0 mb-sm-2 mb-2">
              <div className="duhejwrr_inner">
                <div className="doereree rounded-pill position-relative">
                  <i className="bi bi-briefcase position-absolute"></i>
                </div>

                <div className="dewoijrwer_right">
                  <h5 className="fw-bold">6.5k Faucibus</h5>

                  <h6 className="mb-0 text-muted">Nullam quis ante</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-lg-0 mb-md-0 mb-sm-2 mb-2">
              <div className="duhejwrr_inner">
                <div className="doereree rounded-pill position-relative">
                  <i className="bi bi-graph-up position-absolute"></i>
                </div>

                <div className="dewoijrwer_right">
                  <h5 className="fw-bold">80k Mauris</h5>

                  <h6 className="mb-0 text-muted">Etiam sit amet orci</h6>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="duhejwrr_inner">
                <div className="doereree rounded-pill position-relative">
                  <i className="bi bi-award position-absolute"></i>
                </div>

                <div className="dewoijrwer_right">
                  <h5 className="fw-bold">6x Phasellus</h5>

                  <h6 className="mb-0 text-muted">Vestibulum ante ipsum</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*banner end*/}

      <main>
        <section id="about" className="about section">
          <div className="container">    
            <div className="row gy-4 align-items-center justify-content-between">    
              <div className="col-xl-5">
                <span className="about-meta">MORE ABOUT US</span>
                <h2 className="about-title">Voluptas enim suscipit temporibus</h2>
                <p className="about-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    
                <div className="row feature-list-wrapper">
                  <div className="col-md-6">
                    <ul className="feature-list">
                      <li><i className="bi bi-check-circle-fill"></i> Lorem ipsum dolor sit amet</li>
                      <li><i className="bi bi-check-circle-fill"></i> Consectetur adipiscing elit</li>
                      <li><i className="bi bi-check-circle-fill"></i> Sed do eiusmod tempor</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="feature-list">
                      <li><i className="bi bi-check-circle-fill"></i> Incididunt ut labore et</li>
                      <li><i className="bi bi-check-circle-fill"></i> Dolore magna aliqua</li>
                      <li><i className="bi bi-check-circle-fill"></i> Ut enim ad minim veniam</li>
                    </ul>
                  </div>
                </div>
    
                <div className="info-wrapper">
                  <div className="row gy-4">
                    <div className="col-lg-5">
                      <div className="profile d-flex align-items-center gap-3">
                        <img src="assets/images/avatar-1.webp" alt="CEO Profile" className="profile-image" />
                        <div>
                          <h4 className="profile-name">Mario Smith</h4>
                          <p className="profile-position">CEO &amp; Founder</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="contact-info d-flex align-items-center gap-2">
                        <i className="bi bi-telephone-fill"></i>
                        <div>
                          <p className="contact-label">Call us anytime</p>
                          <p className="contact-number">+123 456-789</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="col-xl-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                <div className="image-wrapper">
                  <div className="images position-relative aos-init aos-animate" data-aos="zoom-out" data-aos-delay="400">
                    <img src="assets/images/about-5.webp" alt="Business Meeting" className="img-fluid main-image rounded-4" />
                    <img src="assets/images/about-2.webp" alt="Team Discussion" className="img-fluid small-image rounded-4" />
                  </div>
                  <div className="experience-badge floating">
                    <h3>15+ <span>Years</span></h3>
                    <p>Of experience in business service</p>
                  </div>
                </div>
              </div>
            </div>    
          </div>  
        </section>

        <Features />

        <section id="features-cards" className="features-cards section">
          <div className="container">  
            <div className="row gy-4">  
              <div className="col-xl-3 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                <div className="feature-box orange">
                  <i className="bi bi-award"></i>
                  <h4>Corporis voluptates</h4>
                  <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
              </div>
    
              <div className="col-xl-3 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                <div className="feature-box blue">
                  <i className="bi bi-patch-check"></i>
                  <h4>Explicabo consectetur</h4>
                  <p>Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore</p>
                </div>
              </div>
    
              <div className="col-xl-3 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
                <div className="feature-box green">
                  <i className="bi bi-sunrise"></i>
                  <h4>Ullamco laboris</h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
              </div>
    
              <div className="col-xl-3 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="400">
                <div className="feature-box red">
                  <i className="bi bi-shield-check"></i>
                  <h4>Labore consequatur</h4>
                  <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
              </div>  
            </div>  
          </div>  
        </section>

        <section id="features-2" className="features-2 section">
          <div className="container">  
            <div className="row align-items-center">  
              <div className="col-lg-4">  
                <div className="feature-item text-end mb-5 aos-init aos-animate" data-aos="fade-right" data-aos-delay="200">
                  <div className="d-flex align-items-center justify-content-end gap-4">
                    <div className="feature-content">
                      <h3>Use On Any Device</h3>
                      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia.</p>
                    </div>
                    <div className="feature-icon flex-shrink-0">
                      <i className="bi bi-display"></i>
                    </div>
                  </div>
                </div>
    
                <div className="feature-item text-end mb-5 aos-init aos-animate" data-aos="fade-right" data-aos-delay="300">
                  <div className="d-flex align-items-center justify-content-end gap-4">
                    <div className="feature-content">
                      <h3>Feather Icons</h3>
                      <p>Phasellus ullamcorper ipsum rutrum nunc nunc nonummy metus vestibulum volutpat sapien arcu sed augue aliquam erat volutpat.</p>
                    </div>
                    <div className="feature-icon flex-shrink-0">
                      <i className="bi bi-feather"></i>
                    </div>
                  </div>
                </div>
    
                <div className="feature-item text-end aos-init aos-animate" data-aos="fade-right" data-aos-delay="400">
                  <div className="d-flex align-items-center justify-content-end gap-4">
                    <div className="feature-content">
                      <h3>Retina Ready</h3>
                      <p>Aenean tellus metus bibendum sed posuere ac mattis non nunc vestibulum fringilla purus sit amet fermentum aenean commodo.</p>
                    </div>
                    <div className="feature-icon flex-shrink-0">
                      <i className="bi bi-eye"></i>
                    </div>
                  </div>
                </div>  
              </div>
    
              <div className="col-lg-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                <div className="phone-mockup text-center">
                  <img src="assets/images/phone-app-screen.webp" alt="Phone Mockup" className="img-fluid" />
                </div>
              </div>
    
              <div className="col-lg-4">  
                <div className="feature-item mb-5 aos-init aos-animate" data-aos="fade-left" data-aos-delay="200">
                  <div className="d-flex align-items-center gap-4">
                    <div className="feature-icon flex-shrink-0">
                      <i className="bi bi-code-square"></i>
                    </div>
                    <div className="feature-content">
                      <h3>W3c Valid Code</h3>
                      <p>Donec vitae sapien ut libero venenatis faucibus nullam quis ante etiam sit amet orci eget eros faucibus tincidunt.</p>
                    </div>
                  </div>
                </div>
    
                <div className="feature-item mb-5 aos-init aos-animate" data-aos="fade-left" data-aos-delay="300">
                  <div className="d-flex align-items-center gap-4">
                    <div className="feature-icon flex-shrink-0">
                      <i className="bi bi-phone"></i>
                    </div>
                    <div className="feature-content">
                      <h3>Fully Responsive</h3>
                      <p>Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum.</p>
                    </div>
                  </div>
                </div>
    
                <div className="feature-item aos-init aos-animate" data-aos="fade-left" data-aos-delay="400">
                  <div className="d-flex align-items-center gap-4">
                    <div className="feature-icon flex-shrink-0">
                      <i className="bi bi-browser-chrome"></i>
                    </div>
                    <div className="feature-content">
                      <h3>Browser Compatibility</h3>
                      <p>Nullam dictum felis eu pede mollis pretium integer tincidunt cras dapibus vivamus elementum semper nisi aenean vulputate.</p>
                    </div>
                  </div>
                </div>  
              </div>
            </div>  
          </div>  
        </section>

        <CalltoAction />

        <Testimonials />

        <Stats />

        <section id="services" className="services section light-background">        
          <div className="container section-title aos-init aos-animate" data-aos="fade-up">
            <h2>Services</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
    
          <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">  
            <div className="row g-4">  
              <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div className="service-card d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-activity"></i>
                  </div>
                  <div>
                    <h3>Nesciunt Mete</h3>
                    <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                    <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
    
              <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                <div className="service-card d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-diagram-3"></i>
                  </div>
                  <div>
                    <h3>Eosle Commodi</h3>
                    <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                    <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
    
              <div className="col-lg-6 aos-init" data-aos="fade-up" data-aos-delay="300">
                <div className="service-card d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-easel"></i>
                  </div>
                  <div>
                    <h3>Ledo Markt</h3>
                    <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                    <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
    
              <div className="col-lg-6 aos-init" data-aos="fade-up" data-aos-delay="400">
                <div className="service-card d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-clipboard-data"></i>
                  </div>
                  <div>
                    <h3>Asperiores Commodit</h3>
                    <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                    <a href="service-details.html" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>  
            </div>  
          </div>  
        </section>
        
        <Pricing />

        <Faq />

        <CalltoAction2 />

        <ContactForm />
      </main>      
    </div>
  );
}

export default App;