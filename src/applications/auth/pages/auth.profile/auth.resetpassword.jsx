import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import {useHistory} from 'react-router-dom'
import { authSignIn, authRegister} from '../../redux/reducer/actions';
import { ReactComponent as Eye } from '../../../../assets/icons/eye.svg';
import { ReactComponent as Uneye } from '../../../../assets/icons/uneye.svg';
import Button from '../../../../app/components/buttons/button/button';
import carImg from '../../../../assets/images/car.png'
import './auth.profile.scss'


const ResetPassword = () => {

    const [formError, setformError] = useState(null)
    const [showPassword, setPassword] = useState(false);
    const [form, setForm] = useState({
        password: "password",
        confirmation: "",
    })

    const onSubmit = (e) => {
        e.preventDefault();
        
    }

    // Change form input values. 
    const onChange = (e) => setForm({...form,  [e.target.name]: e.target.value })

    return (
        <div className="profile-page">
            <div className="profile-header">
                <h3>My Account</h3>
                <div className="image-box">
                    <img src={carImg} alt="" className="auth-container__logo" />
                </div>
            </div>
            <div className="profile-container">
                <form onSubmit={onSubmit} className="auth-container__card" >
                    {Object.keys(form).map((input, index) => (
                        <div key={index} className="auth-container__input-container">
                            <input
                                name={input}
                                onChange={onChange}
                                value={form[input]}
                                placeholder={`${input}`}
                                type={showPassword ? 'text': 'password'}
                                autoComplete={"off"}
                                required
                                className={`auth-container__input`}
                            />
                            {input === 'password' ? showPassword ? <Uneye onClick={() => setPassword(!showPassword)} /> : <Eye onClick={() => setPassword(!showPassword)} /> : ''}
                        </div>
                    ))}
                    {formError&&<div className="error-box"><p className="error-text">{formError}</p></div>}

                    <Button 
                        variant="primary" 
                        type="submit" 
                        loading={false}
                        size="xl"
                        className="auth-container__button-primary" 
                        disabled={false}>
                        Save
                    </Button>

                </form>
            </div>
        </div>
    )
}


export default ResetPassword;