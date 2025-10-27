@include('web.layouts.header')
  <style>
      header {
          background: #000;
      }
  </style>
  <!-- Page-wrapper-Start -->
  <div class="page_wrapper">
      <!-- Contact Us Section Start -->
      <section class="contact_section">
          <div class="container">
              <div class="section_title" data-aos="fade-up" data-aos-duration="1500">
                  <span class="title_badge">Contact Us</span>
                  <h2>Any questions? <span>Let's talk</span></h2>
                  <p class="conatctUsPara">Have a question about BeautySuite Pro or want to know how it can help your
                      business?
                      Our team is here to assist you. Reach out to us anytime — we’d love to hear from you.</p>
              </div>

              <ul class="contact_listing">
                  <li data-aos="fade-up" data-aos-duration="1500">
                      <span class="icon">
                          <img src="{{ asset('web_assets/images/mail_icon.png') }}" alt="image">
                      </span>
                      <span class="lable">Email us</span>
                      <a href="mailto:info@beautypro.com">info@beautypro.com</a>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="150">
                      <span class="icon">
                          <img src="{{ asset('web_assets/images/phone_icon.png') }}" alt="image">
                      </span>
                      <span class="lable">Call us</span>
                      <a href="tel:1234567899">+1 123 456 7890</a>
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
                      <span class="icon">
                          <img src="{{ asset('web_assets/images/location_icon.png') }}" alt="image">
                      </span>
                      <span class="lable">Our location</span>
                      <a target="_blank" href="https://www.google.com/maps">Open Google Maps</a>
                  </li>
              </ul>
          </div>
      </section>
      <!-- Contact Us Section End -->

      <!-- Contact Form Section Start -->
      <section class="contact_form row_am" data-aos="fade-in" data-aos-duration="1500">
          <div class="contact_inner">
              <div class="container">
                  <div class="section_title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                      <span class="title_badge">Message us</span>
                      <h2>Drop a message us</h2>
                      <p>Fill up form below, our team will get back soon</p>
                  </div>
                  <form data-aos="fade-up" data-aos-duration="1500">
                      <div class="row">
                          <div class="col-md-3">
                              <div class="form-group">
                                  <input type="text" class="form-control" placeholder="Name *" required>
                              </div>
                          </div>
                          <div class="col-md-3">
                              <div class="form-group">
                                  <input type="email" class="form-control" placeholder="Email *" required>
                              </div>
                          </div>
                          <!-- <div class="col-md-4">
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Company Name">
                </div>
              </div> -->
                          <div class="col-md-3">
                              <div class="form-group">
                                  <select class="form-control">
                                      <option value="">Country</option>
                                      <option value="">India</option>
                                      <option value="">USA</option>
                                  </select>
                              </div>
                          </div>
                          <div class="col-md-3">
                              <div class="form-group">
                                  <input type="text" class="form-control" placeholder="Phone">
                              </div>
                          </div>
                          <!-- <div class="col-md-4">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Website">
                </div>
              </div> -->
                          <div class="col-md-12">
                              <div class="form-group">
                                  <textarea class="form-control" placeholder="Comments"></textarea>
                              </div>
                          </div>
                          <div class="col-md-8">
                              <div class="coustome_checkbox">
                                  <label for="term_checkbox">
                                      <input type="checkbox" id="term_checkbox">
                                      <span class="checkmark"></span>
                                      I agree to receive emails, newsletters and promotional messages
                                  </label>
                              </div>
                          </div>
                          <div class="col-md-4 text-right">
                              <div class="btn_block">
                                  <button class="btn puprple_btn ml-0">Submit</button>
                                  <div class="btn_bottom"></div>
                              </div>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </section>
      <!-- Contact Form Section End -->
  </div>
  <!-- Page-wrapper-End -->
@include('web.layouts.footer')
