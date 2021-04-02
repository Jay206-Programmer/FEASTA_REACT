import React,{useState} from 'react';
import axios from 'axios';

function Register() {

    const [data, setdata] = useState({
        first_name:'',
        last_name:'',
        email_id:'',
        password:'',
        phone_number:''
    });

      const itemSubmit = async (e)=>{
        e.preventDefault();
        console.log(data);
        await axios.post("https://feasta-postgres.herokuapp.com/auth/regestration/",data).then((result) => {
            console.log(result.data);
        }).catch((err) => {
            console.log(err);
        });

    }

    return (
        <div className="container bg-gradient-primary">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            {/* Nested Row within Card Body */}
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image" />
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                  </div>
                  <form className="user" onSubmit={itemSubmit}>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" className="form-control form-control-user" id="exampleFirstName" value={data.first_name} onChange={(e)=>{setdata({...data,first_name:e.target.value})}} placeholder="First Name" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" className="form-control form-control-user" id="exampleLastName" value={data.last_name} onChange={(e)=>{setdata({...data,last_name:e.target.value})}} placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control form-control-user" id="exampleInputEmail" value={data.email_id} onChange={(e)=>{setdata({...data,email_id:e.target.value})}} placeholder="Email Address" />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-user" id="exampleInputEmail" value={data.phone_number} onChange={(e)=>{setdata({...data,phone_number:e.target.value})}} placeholder="Contact" />
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="password" className="form-control form-control-user" id="exampleInputPassword" value={data.password} onChange={(e)=>{setdata({...data,password:e.target.value})}} placeholder="Password" />
                      </div>
                      <div className="col-sm-6">
                        <input type="password" className="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password" />
                      </div>
                    </div>
                    <input type="submit" value="Register Account" className="btn btn-primary btn-user btn-block"/>
                      
                    
                    <hr />
                    <a href="index.html" className="btn btn-google btn-user btn-block">
                      <i className="fab fa-google fa-fw" /> Register with Google
                    </a>
                    <a href="index.html" className="btn btn-facebook btn-user btn-block">
                      <i className="fab fa-facebook-f fa-fw" /> Register with Facebook
                    </a>
                  </form>
                  <hr />
                  <div className="text-center">
                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                  </div>
                  <div className="text-center">
                    <a className="small" href="login.html">Already have an account? Login!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    )
}

export default Register
