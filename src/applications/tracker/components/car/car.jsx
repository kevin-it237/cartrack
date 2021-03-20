import React, {useState} from 'react';
import car from '../../../../assets/images/car.png'
import './car.scss'

const Car = () => {

    return (
        <div className='car'>
            <h4 className="title">Car 1</h4>
            <img src={car} alt="car" />
            <p className="vitss">35km/h</p>
            <p className="desc">Ecole des postes, Yaoundé</p>
        </div>
    )
  
}


export default Car;