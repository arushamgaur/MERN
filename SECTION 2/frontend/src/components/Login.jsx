import { useFormik } from "formik"
import React from 'react'

const Login = () => {

  //initializing formik
  const loginform = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    onSubmit: (values) => {
      console.log(values);
      //submit value to the backend
    }
  });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card w-25 shadow-lg rounded-3">
        <div className="card-body p-5">
          <i className="fa-solid fa-lock fa-3x d-block text-center" />
          <h2 className="text-center my-5">LOGIN FORM</h2>
          <form onSubmit={loginform.handleSubmit}>
            <label htmlFor="">Email</label>
            <input className="form-control mb-4 rounded-3" type="email" name="email" onChange={loginform.handleChange} value={loginform.values.email} />
            <label htmlFor="">Password</label>
            <input className="form-control mb-4 rounded-3" type="password" name="password" onChange={loginform.handleChange} value={loginform.values.password} />
            <button type="submit" className="btn btn-danger w-100 mt-4 rounded-3">LOGIN</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login