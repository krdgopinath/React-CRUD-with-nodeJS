import React, { use, useRef, useState } from 'react'
import './FormValidation.css';

const LoginForm = () => {

  const [loginData,setLoginData]=useState({uname:'',pass:''});
  const [error, setError]=useState('');
  const [isModalOpen,setIsModalOpen]=useState(false);
  const userref=useRef(null);

  const handleLogin=()=>{
    console.log(loginData)
    if (loginData.uname.trim() === "" || loginData.pass.trim() ==="")
    {
      setError("Username or Password is blank");
      userref.current.focus();
    }
    else if (loginData.uname!="dsm" || loginData.pass!="dsm")
    {
      setError("Invalid username/Password");
      setLoginData({uname:'',pass:''});
      userref.current.focus();
    }
    else {
      alert('Login successful');
      setError('');
    }
  }
  return (
    <div className='login-container'>
        <form className='login-form'>
           { error && ( <div className='error'>{error}</div>)}
            <div className='form-row'>
              <h2>Login Forms</h2>
            </div>
            <div className='form-row'>
                <label htmlFor='uname'>Username</label>
                <input type='text' name="uname" placeholder='Enter username' value={loginData.uname} ref={userref} onChange={(e)=> setLoginData({...loginData, [e.target.name]:e.target.value})} />
            </div>
            <div className='form-row'>
                <label htmlFor='pwd'>Password</label>
                <input type='password' name="pass" placeholder='Enter password' value={loginData.pass} onChange={(e)=> setLoginData({...loginData,[e.target.name]:e.target.value})} />
            </div>
            <div className='form-row button-row'>
             <button type='button' onClick={handleLogin}>Login</button>
            </div>
             <div className='form-row button-row'>
             <button type='button' onClick={()=>setIsModalOpen(true)} >Sign up</button>
             {isModalOpen && <SignUpModal onClose={() => setIsModalOpen(false)}  />}
            </div>
        </form>
    </div>
  )
}


// signup form component

const SignUpModal = ({ onClose }) => {
  const [signupData, setSignupData] = useState({ fname: '', lname: '', email:'',pass:'' });

  const handleSubmit = () => {
    
  };

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <h2>Sign Up</h2>
          <button className='close-btn' onClick={onClose}>
            &times;
          </button>
        <div className='form-row'>
          <label>FirstName</label>
          <input
            type='text'
            name="fname"
            placeholder='Enter Firstname'
            value={signupData.fname}
            onChange={(e) =>
              setSignupData({ ...signupData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className='form-row'>
          <label>Password</label>
          <input
            type='text'
            name="lname"
            placeholder='Enter Lastname'
            value={signupData.lname}
            onChange={(e) =>
              setSignupData({ ...signupData, [e.target.name]: e.target.value })
            }
          />
        </div>
         <div className='form-row'>
          <label>Email</label>
          <input
            type='text'
            name="email"
            placeholder='Enter Email'
            value={signupData.email}
            onChange={(e) =>
              setSignupData({ ...signupData, [e.target.name]: e.target.value })
            }
          />
        </div>
         <div className='form-row'>
          <label>Password</label>
          <input
            type='password'
            name='pass'
            placeholder='Enter Password'
            value={signupData.pass}
            onChange={(e) =>
              setSignupData({ ...signupData, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className='form-row button-row'>
          <button type='button' onClick={handleSubmit}>
            Submit
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default LoginForm
