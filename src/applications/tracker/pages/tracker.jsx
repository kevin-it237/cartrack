import React, {useState} from 'react';
import { connect } from 'react-redux';
import Button from '../../../app/components/buttons/button/button'
import Car from '../components/car/car'
import Modal from '../../../app/components/modal/modal'
import GoogleMapReact from 'google-map-react';
import './tracker.scss'

const Tracker = () => {
    const [selectedCar, setSelectedCar] = useState(null)
    const [profileForm, setProfileForm] = useState({
        name: "", 
        moduleId: "", 
    })
    const [newCarModal, setNewCarModal] = useState(false)
    const [addNumberModal, setAddNumberModal] = useState(false)

    const closeModal = () => {
        setNewCarModal(false)
        setAddNumberModal(false)
    }

    // Change form input values. 
    const onChange = (e) => setProfileForm({...profileForm,  [e.target.name]: e.target.value })

    const defaultProps = {lat: 3.844119, lng: 11.501346}

    const selectCar = (car) => {
        console.log(car)
    }

    return (
        <>
        <div id="tracker">
            {/* Uncomment the map */}
            {/* <GoogleMapReact
                defaultCenter={defaultProps}
                defaultZoom={15}
            >
            </GoogleMapReact> */}
            <div className="tracker-header">
                <div className="menu">
                    <h3>{selectedCar || 'Select a car'}</h3>
                    <p onClick={() => setNewCarModal(true)}>+</p>
                </div>
                <div className="selected-car">
                    <Car />
                </div>
            </div>

            <div className="tracker-cars--list">
                <Car selectCar={() => selectCar()} />
                <Car selectCar={() => selectCar()} />
                <Car selectCar={() => selectCar()} />
                <Car selectCar={() => selectCar()} />
            </div>
        </div>

        {/* Add phone number modal */}
       {addNumberModal&&
       <Modal hide={closeModal}>
            <div className="form-container__card">
                <div className="modal-header">
                    <div className="menu">
                        <h3>{'Add phone number'}</h3>
                        <p onClick={() => setNewCarModal(true)}>+</p>
                    </div>
                    <div className="numbers--list">
                        <div className="number--item">
                            <p>+237655789410</p>
                            <div className='remove--btn'>-</div>
                        </div>
                        <div className="number--item">
                            <p>+237655789410</p>
                            <div className='remove--btn'>-</div>
                        </div>
                        <div className="number--item">
                            <p>+237655789410</p>
                            <div className='remove--btn'>-</div>
                        </div>
                        <div className="number--item">
                            <p>+237655789410</p>
                            <div className='remove--btn'>-</div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>}

        {/* Add new car modal */}
        {newCarModal&&
        <Modal show={true} hide={closeModal}>
            <div className="form-container__card">
                <h2>New automobile</h2>
                {Object.keys(profileForm).map((input, index) => (
                    <div key={index} className="auth-container__input-container">
                        <input
                            name={input}
                            onChange={onChange}
                            value={profileForm[input]}
                            placeholder={`${input}`}
                            type={'text'}
                            autoComplete={"off"}
                            required
                            className={`auth-container__input`}
                        />
                    </div>
                ))}
                <Button 
                    variant="primary" 
                    type="submit" 
                    loading={false}
                    size="xl"
                    className="auth-container__button-primary" 
                    disabled={false}>
                    Create
                </Button>
            </div>
        </Modal>}
        
        </>
    )
  
}

const mapStateToProps = ({}) =>({
    
})

export default connect(mapStateToProps)(Tracker);