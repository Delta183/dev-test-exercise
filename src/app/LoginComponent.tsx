"use client"; // have to use this to mark the component as a client file
import React, { useState }  from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import validator from 'validator'

const initialState = { email: '', password: ''};

const LoginComponent = () => {
    const [formData, setFormData] = useState(initialState);
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('')
    const [isInvalid, setIsInvalid] = useState(false)

    // This will toggle the state of the visibility of the password
    const handleShowPassword = () => setShowPassword(!showPassword);
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, [e.target.name]: e.target.value });

    // The function utilizing the validator package
    const validateEmail = (e : React.ChangeEvent<HTMLInputElement>) => {
        var email = e.target.value
      
        if (validator.isEmail(email)) {
           setEmailError('Valid Email :)')
           // Simulteaneously set the invalid value in the form
           setIsInvalid(false)
        } else {
           setEmailError('Enter valid Email!')
           setIsInvalid(true)
        }
      }

    return (
    <div className="container" >
        <h1 className="text-center">Log In</h1>
        <Form autoComplete="off">
            {/* First Segment */}
            <Form.Group className="m-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control
                name="email"
                type="email" 
                placeholder="Enter your email..." 
                onChange={validateEmail}
                isInvalid={isInvalid}
                required
                />
               
            </Form.Group>
        
            {/* Second Segment */}
            <Form.Group className="m-3">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                    <Form.Control
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password..." 
                    onChange={handleChange}
                    />
                    <Button onClick={handleShowPassword} variant="outline-secondary" id="button-addon2">
                        Show Password
                    </Button>
                </InputGroup>
            </Form.Group>
            {/* Submit Button */}
            <Button className="m-3" variant="primary" type="submit" >
                Log In
        </Button>
        </Form>
    </div>
    )   
}


export default LoginComponent;