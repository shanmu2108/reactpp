import main from './main-logo.png'
import { Link } from 'react-router-dom';
import visible from './visible.png'
import { render } from '@testing-library/react';
import React, { component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Login = () => {
	/*const[values,setValues]=React.useState({
			password:"",
			showPassword:false,*/


	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	let navigate = useNavigate();





	/* const handleClickShowPassword =() =>{
			 console.log("test")
			 setValues({...values,showPassword:!values.showPassword});
	 };
 
	 const handleMouseDownPassword = (event) => {
			 event.preventDefault();
		 };
 
	 const handlePasswordChange = (event, prop) => {
			setValues({ ...values, [prop]: event.target.value });
		}
		console.log(values)*/


	async function login() {
		console.log(email, password);
		let item = { email, password }
		let endpoint = await fetch("https://api.playinvicta.com/api/v1/auth/user_login", {
			method: 'POST',
			headers: {
				"content-type": "application/json",
				"Accept": "application/json",

			},
			body: JSON.stringify(item)
		})
		endpoint = await endpoint.json();
		//localStorage.setItem("user-data",json.stringify(endpoint))
		window.localStorage.setItem('token', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzcxNTYwMDMsImRhdGEiOnsiaWQiOiI2MjA3Y2U4ODBlNGFjMGY4MzgzZDkyNGIiLCJlbWFpbCI6InJpY2tAYWRtaW4uY29tIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTY0NTYyMDAwM30.RV0hrPYE13Y01ahLNp5cgP9OGsy94Zy32FJ-Oezl4VI");
		navigate("/allUsers");
	}





	return (
		<div className='login'>
			<div className='im'>
				<img src={main} alt="main" id='ime' width={100} />
			</div>
			<div className='sec'>
				<label id='em' >Email address</label>
				<div>
					<input
						type="email"
						required
						onChange={(e) => setEmail(e.target.value)}
						placeholder='example@mail.com'
						id='email'
					></input>
				</div>

				<label id='pm'>Password</label>
				<div className='pass'>
					<input
						type=/*{values.showPassword ? "text" :*/ {"password"}
						// onChange={(event)=>handlePasswordChange(event, "password")}
						onChange={(e) => setPassword(e.target.value)}
						//value={values.password}
						required
						// onClick={handleClickShowPassword}
						placeholder='Your password'
						id='pass1' />

					<span /*</div>onClick={handleClickShowPassword}*/>
						<img src={visible} alt="vis" id='eye' width={20} />
					</span>


				</div>
			</div>
			<div className='checkbox'>
				<div className='check'>
					<input
						type="checkbox"
						id='ch'></input>
					<div className='keep'>
						keep me sign in
					</div>
					<div id='forget'>
						Forget password
					</div>
				</div>
			</div>
			<div className='last' >
				<button id='button' onClick={login}>
					Sign in
				</button>
				{/* <button id='button' onClick={() => window} >Sign in</button> */}
			</div>
		</div>
	);
}


export default Login;