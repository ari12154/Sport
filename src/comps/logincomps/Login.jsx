import React from 'react'
import './Login.css';

export default function Login() {
  return (
    <div className='perent_Login'>
      <div className='login_div'>
        <h1>welcome to our site</h1>
        <input  className='inp_name' type="text" placeholder='name' />
        <br />
        <br />
        <input className='inp_pass' type="text" placeholder='password' />
        <br />
        <br />
<button className='btn_sign'>sign in</button>
      </div>
    </div>
  )
}
