import React from 'react'

const ContactUs = () => {
  return (
    <div>
  <section className="contactus">
    <div className="row">
      <div className="contactcol">
        <div>
          <div className="heading">
            <i className="bx bx-world" />
            <span>
              <h1>Reach Us</h1>
            </span>
          </div>
        </div>
        <div>
          <i className="bx bx-current-location" />
          <span>
            <h5>8631 W 3rd St, Los Angeles</h5>
            <p>CA 90048, United States</p>
          </span>
        </div>
        <div>
          <i className="bx bxs-phone" />
          <span>
            <h5>+1 0123456789</h5>
            <p>Monday to Saturday, 10AM to 6PM</p>
          </span>
        </div>
        <div>
          <i className="bx bx-envelope" />
          <span>
            <h5>info@abc.com</h5>
            <p>Email us your query</p>
          </span>
        </div>
      </div>
      <div className="contactcol1">
        <h1>
          <i className="bx bx-info-circle" />
          Contact Us
        </h1>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required=""
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          required=""
        />
        <input
          type="number"
          name="subject"
          placeholder="Enter your phone number"
          required=""
        />
        <input
          type="text"
          name="subject"
          placeholder="Enter your subject"
          required=""
        />
        <textarea
          rows={8}
          name="message"
          placeholder="Message"
          required=""
          defaultValue={""}
        />
        <a href="" className="herobtn">
          SEND MESSAGE
        </a>
      </div>
    </div>
  </section>
</div>

  )
}

export default ContactUs