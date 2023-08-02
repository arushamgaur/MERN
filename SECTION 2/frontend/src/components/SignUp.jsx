import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {

  const Navigate = useNavigate


  const signupform = useFormik({
    initialValues: {
      email:'',
      password:'',
      name:''
    },
    
    onSubmit: async(values) => {
      console.log(values);

      //sending request to backend
      const res = await fetch('http://localhost:5000/user/add',{
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status);

      if(res.status === 200){
        Swal.fire({
          icon: 'success',
          title: 'SignUp Success !!',
          text: 'Now Login to continue'
        });
        Navigate('/login');
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops !!',
          text: 'Some Error Occured'
        });
      }
    }
  });

  const uploadFile = async (e) => {
    let file = e.target.files[0];
    
    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('http://localhost:5000/util/uploadfile', {
      method: 'POST',
      body: fd
    });

    console.log(res.status);
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card w-25 shadow-lg rounded-5">
        <div className="card-body p-5">
          <i className="fa-solid fa-lock fa-3x d-block text-center" />
          <h2 className="text-center my-5">Signup Form</h2>
          <form>
            <label htmlFor="">Name</label>
            <input className="form-control mb-4 rounded-5" type="text" name="name" onChange={signupform.handleChange} value={signupform.values.name} />
            <label htmlFor="">Email</label>
            <input className="form-control mb-4 rounded-5" type="email" name="email" onChange={signupform.handleChange} value={signupform.values.email} />
            <label htmlFor="">Password</label>
            <input className="form-control mb-4 rounded-5" type="password" name="password" onChange={signupform.handleChange} value={signupform.values.password} />
            <label htmlFor="">Upload File</label>
            <input type="file" onChange={uploadFile} />
            <button type="submit" className="btn btn-danger w-100 mt-4 rounded-5">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;