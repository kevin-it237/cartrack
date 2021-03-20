import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import {useHistory} from 'react-router-dom'
import { ReactComponent as Eye } from '../../../../assets/icons/eye.svg';
import { ReactComponent as Uneye } from '../../../../assets/icons/uneye.svg';
import Button from '../../../../app/components/buttons/button/button';
import carImg from '../../../../assets/images/car.png'
import './auth.screen.scss'


const Login = () => {
    const history = useHistory()
    const dispatch= useDispatch()

    const [showPassword, setPassword] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [loginForm, setLoginForm] = useState({email: "", password: ""})
    const [registerForm, setRegisterForm] = useState({name: "", surname: "", PhoneNumber: "", email: "", password: "", confirmation: ""})
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [formError, setformError] = useState(null)


    const onSubmit = (e) => {
        e.preventDefault();
        if (submited) { return }
        if(isLoginForm) {
            // Login
        } else {
            // Signup
            setformError(null)
        }
        setSubmited(true);
    }

    
    // Change form input values. 
    const onChange = (e) => setLoginForm({...loginForm,  [e.target.name]: e.target.value })
    const onChange2 = (e) => {
        setRegisterForm({...registerForm,  [e.target.name]: e.target.value })
        setformError(null)
    }

    return (
        <div className="auth-container">
            <form onSubmit={onSubmit} className="auth-container__card" >
                <img src={carImg} alt="" className="auth-container__logo" />
                <h2 className="auth-container__title">{isLoginForm ? "Login to my account": "Create my account"}</h2>

                {
                    isLoginForm ?
                    <>
                        {Object.keys(loginForm).map((input, index) => (
                            <div key={index} className="auth-container__input-container">
                                <input
                                    name={input}
                                    onChange={onChange}
                                    value={loginForm[input]}
                                    placeholder={`${input}`}
                                    type={input === 'password' ? showPassword ? 'text' : 'password' : 'email'}
                                    autoComplete={"off"}
                                    required
                                    className={`auth-container__input ${input === 'password' ? 'password' : ''}`}
                                />
                                {input === 'password' ? showPassword ? <Uneye onClick={() => setPassword(!showPassword)} /> : <Eye onClick={() => setPassword(!showPassword)} /> : ''}
                            </div>
                        ))}
                    </>:
                    <>
                        {Object.keys(registerForm).map((input, index) => {
                            let type = 'text'
                            if(input === 'password'|| input ==='confirmation') {
                                if(showPassword) {
                                    type = 'text'
                                } else {
                                    type = 'password'
                                }
                            } else if (input === 'email') {
                                type = 'email'
                            }
                            return (
                                <div key={index} className="auth-container__input-container">
                                    <input
                                        name={input}
                                        onChange={onChange2}
                                        value={registerForm[input]}
                                        placeholder={`${input}`}
                                        type={type}
                                        autoComplete={"off"}
                                        required
                                        className={`auth-container__input ${(input === 'password' || input === 'confirmation') ? 'password' : ''}`}
                                    />
                                    {(input === 'password' || input === 'confirmation') ? showPassword ? <Uneye onClick={() => setPassword(!showPassword)} /> : <Eye onClick={() => setPassword(!showPassword)} /> : ''}
                                </div>
                            )
                        })}
                    </>
                }
                {formError&&<div className="error-box"><p className="error-text">{formError}</p></div>}

                <Button 
                    variant="primary" 
                    type="submit" 
                    loading={submited}
                    size="xl"
                    className="auth-container__button-primary" 
                    disabled={submited}>
                    {isLoginForm ? "Login": "Create account"}
                </Button>

                <div className="auth-container__line-element">
                    <span className="auth-container__line-text">or</span>
                    <p onClick={() => setIsLoginForm(!isLoginForm)} className="auth-text">{isLoginForm ? "Sign Up here": "Login to my account"}</p>
                </div>

            </form>
        </div>)
}


export default Login;