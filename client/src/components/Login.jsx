import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import Navbar from './Navbar';
require('./login.css')

function Login() {

    const history = useNavigate();

    const[user, setUser] = useState({
        email:'', password:''
    });

    let   name , value;
    const handelInputs = (e) =>{
       //console.log(e.target.name);
       //console.log(e.target.value);
        e.preventDefault();
        name =  e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value})
        console.log(user.email);
    }
    const loginUser = async(e)=>{
        e.preventDefault();
        const {email, password} =user;
      const res = await fetch('/signin',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(
          { email, password  }
        )
      });
      const data = res.json();
      console.log(data);
      if(res.status == 400 || !data){
        window.alert('Invalid username or password')
      }else{
        window.alert('Logged in Successfully')
        history('/');
      }
      
    }

  return (
    <div>
      <Navbar />
    
    <div className='container msg'>
      
        <div className='text-center'>
        <a href="https://www.animatedimages.org/cat-games-632.htm"><img src="https://www.animatedimages.org/data/media/632/animated-game-image-0324.gif" border="0" alt="animated-game-image-0324" /></a>
        </div>
        <div>
            <h1 className='text-center title'>Let's Begin the Learning</h1>
        </div>
        <form className='form-control col-6' action="POST">
          
            Email: <input className='form-control' type="email" name="email" id="email" placeholder='Enter your Email' required
                value={user.email}
                onChange={handelInputs} 
                /> <br />
            Password: <input className='form-control' type="password" name="password" id="password" placeholder='Enter your Password' required
                value={user.password}
                onChange={handelInputs}
            /><br />
            <div className='d-grid gap-2'>
                <button className='btn btn-success' onClick={loginUser}>Login</button>
            </div>
            
        </form>
        <br />
        <div>
            <p>don't have acc? <a href="register">Register</a></p>
        </div>
    </div>
    </div>
  )
}

export default Login