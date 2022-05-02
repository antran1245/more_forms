import React from "react";

export default function Info(props) {
    return (
        <div>
            <p><b>Data Input</b></p>
            <p>First Name: {props.fname}</p>
            <p>Last Name: {props.lname}</p>
            <p>Email: {props.email}</p>
            <p>Password: {props.password.password}</p>
            <p>Confirm Password: {props.password.confirm}</p>
        </div>
    )
}