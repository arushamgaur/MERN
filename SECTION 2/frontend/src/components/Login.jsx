import React from 'react'

const Login = () => {
  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="image-container">
                  {/* Replace 'your_image_url_here' with the actual image URL */}
                  <img
                    src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                    alt="Login Image"
                    className="img-fluid img-blur"
                  />
                  <div className="image-text">
                    {/* Add the text you want to display over the image */}
                    <h4 className='fs-1'>Welcome to our website!</h4>
                    <p>Please log in to continue.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="login-form">
                  <h2>Login</h2>
                  <form>
                    <div className="form-group">
                      <label>Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">
                      Submit
                    </button>
                  </form>
                  <div className="alternative-login mt-3">
                    <p>Or login with:</p>
                    <div className="icon-container">
                      {/* Add the icons for alternative login methods (e.g., Google, Twitter, GitHub) */}
                      <i className="fab fa-google fa-lg mr-10"></i>
                      <i className="fab fa-twitter fa-lg mr-10"></i>
                      <i className="fab fa-github fa-lg"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login