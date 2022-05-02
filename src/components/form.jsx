import React, { useState } from "react";
import Info from "./info";

export default function Form() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState({
        password: '',
        confirm: '',
    });

    const [fnameErr, setfnameErr] = useState("");
    const [lnameErr, setlnameErr] = useState("");
    const [emailErr, setemailErr] = useState("");
    const [passwordErr, setpasswordErr] = useState({
        password: "",
        confirm: ""
    })
    const handleFname = (e) => {
        if(e.target.value.length < 2) {
            setfnameErr("First Name must be at least 2 characters.")
        } else {
            setFname(e.target.value)
            setfnameErr('')
        }
    }
    const handleLname = (e) => {
        if(e.target.value.length < 2) {
            setlnameErr("Last Name must be at least 2 characters.")
        } else {
            setLname(e.target.value)
            setlnameErr('')
        }
    }
    const handleEmail = (e) => {
        if(e.target.value.length < 5) {
            setemailErr("Email must be at least 5 characters.")
        } else {
            setEmail(e.target.value)
            setemailErr('')
        }
    }
    const handlePassword = (e) => {
        if(e.target.getAttribute('name') == 'password') {
            if(e.target.value.length < 8) {
                setpasswordErr({
                    password: "Password must be at least 8 characters.",
                    confirm: passwordErr.confirm
                })
            } else {
                setPassword({
                    password: e.target.value,
                    confirm: password.confirm
                })
                setpasswordErr({
                    password: "",
                    confirm: passwordErr.confirm
                })
            }
        } else {
            if(e.target.value != password.password) {
                setpasswordErr({
                    password: passwordErr.password,
                    confirm: "Passwords must match",
                })
            } else {
                setPassword({
                    password: password.password,
                    confirm: e.target.value
                })
                setpasswordErr({
                    password: passwordErr.password,
                    confirm: "",
                })
            }
        }
    }
    return (
        <div style={formStyle}>
            <form onSubmit={(e) => e.preventDefault()}>
                <div style={formGroup}>
                    <label htmlFor="fname">First Name: </label>
                    <input style={inputStyle} type="text" onChange={handleFname}/>
                </div>
                {fnameErr?<p style={{color:'red'}}>{fnameErr}</p>:''}
                <div style={formGroup}>
                    <label htmlFor="lname">Last Name: </label>
                    <input style={inputStyle} type="text" onChange={handleLname}/>
                </div>
                {lnameErr?<p style={{color:'red'}}>{lnameErr}</p>:''}
                <div style={formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input style={inputStyle} type="text" onChange={handleEmail}/>
                </div>
                {emailErr?<p style={{color:'red'}}>{emailErr}</p>:''}
                <div style={formGroup}>
                    <label htmlFor="password">Password: </label>
                    <input name="password" style={inputStyle} type="text" onChange={handlePassword}/>
                </div>
                {passwordErr.password?<p style={{color:'red'}}>{passwordErr.password}</p>:''}
                <div style={formGroup}>
                    <label htmlFor="confirm">Confirm Password: </label>
                    <input name="confirm" style={inputStyle} type="text" onChange={handlePassword}/>
                </div>
                {passwordErr.confirm?<p style={{color:'red'}}>{passwordErr.confirm}</p>:''}
            </form>
            <Info fname={fname} lname={lname} email={email} password={password} />
        </div>
    )
}

const formStyle = {
    width: '40%',
    margin: '10px auto',
    textAlign: 'start',
}

const formGroup = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
    backgroundColor: 'beige',
    padding: '15px',
    borderRadius: '10px'
}

const inputStyle = {
    width: '50%',
}