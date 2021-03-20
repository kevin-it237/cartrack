import React, { useState, useEffect } from 'react';
import Button from '../../../../app/components/buttons/button/button';
import carImg from '../../../../assets/images/car.png'
import './auth.profile.scss'


const AuthProfile = () => {

    const [formError, setformError] = useState(null)
    const [profileForm, setProfileForm] = useState({
        name: "", 
        surname: "", 
        phoneNumber: "", 
        email: "", 
        password: ""
    })

    const onSubmit = (e) => {
        e.preventDefault();
    }

    // Change form input values. 
    const onChange = (e) => setProfileForm({...profileForm,  [e.target.name]: e.target.value })

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
                    {Object.keys(profileForm).map((input, index) => (
                        <div key={index} className="auth-container__input-container">
                            <input
                                name={input}
                                onChange={onChange}
                                value={profileForm[input]}
                                placeholder={`${input}`}
                                type={input === 'email' ? 'email' : 'text'}
                                autoComplete={"off"}
                                required
                                className={`auth-container__input`}
                            />
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


export default AuthProfile;