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
                    <input style={inputStyle} type="text" onChange={(e) => setLname(e.target.value)}/>
                </div>
                {lnameErr?<p style={{color:'red'}}>{lnameErr}</p>:''}
                <div style={formGroup}>
                    <label htmlFor="email">Email: </label>
                    <input style={inputStyle} type="text" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                {emailErr?<p style={{color:'red'}}>{emailErr}</p>:''}
                <div style={formGroup}>
                    <label htmlFor="password">Password: </label>
                    <input style={inputStyle} type="text" onChange={(e) => setPassword({password: e.target.value, confirm: password.confirm})}/>
                </div>
                {passwordErr.password?<p style={{color:'red'}}>{passwordErr.password}</p>:''}
                <div style={formGroup}>
                    <label htmlFor="confirm">Confirm Password: </label>
                    <input style={inputStyle} type="text" onChange={(e) => setPassword({confirm: e.target.value, password: password.password})}/>
                </div>
                
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