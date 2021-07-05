import React from 'react';
import { connect } from 'react-redux';
import InputSearch from "../../../../app/components/inputs/input.search/input.search";
import ProductItem from '../../components/product.item/product.item';
import './home.scss' 

const Home = () => {

    return (
        <div id="home">
            <div className="search">
                <InputSearch placeholder="Type something to search here..." />
            </div>

            <div className="section-title">
                <h2>Services</h2>
                <span></span>
            </div>
            
            <div className="services-wrapper">
                <div className="service-item service-item--1">
                    <div className="service-title">
                        <h2>Produits</h2>
                        <span></span>
                    </div>
                </div>
                <div className="service-item service-item--2">
                    <div className="service-title">
                        <h2>Cheveux</h2>
                        <span></span>
                    </div>
                </div>
            </div>

            <div className="section-title">
                <h2>Produits</h2>
                <span></span>
            </div>
            
            <div className="products-wrapper">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    )
  
}

const mapStateToProps = ({}) =>({
    
})

export default connect(mapStateToProps)(Home);