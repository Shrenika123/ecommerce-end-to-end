import React from 'react'
import './home.css'
import Product from '../Product/Product'
import SlideShow from '../SlideShow/SlideShow'
const home = () => {

    return (<div className="home-main">

        
        {/* <img className="home-image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Shoes/September/SSW/GW/GW_PC_3000x1200._CB404931379_.jpg" alt="Shoes super saver weekend" height="400px" width="1500px" ></img> */}
        <SlideShow/>
        <div className="home-row">
            <Product
                id={1}
                rating={4}
                title="product machine"
                productImg="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_DB_QC_372x232_1._SY232_CB433700930_.jpg"
                price={100000}
            />
            <Product rating={4}
                id={2}
                title="product machine"
                productImg="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_DB_QC_372x232_1._SY232_CB433700930_.jpg"
                price={100000}
            />
            <Product
                id={3}
                rating={4}
                title="product machine"
                productImg="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_DB_QC_372x232_1._SY232_CB433700930_.jpg"
                price={100000}
            />
        </div>
        <div className="home-row">
            <Product
                id={4}
                rating={4}
                title="product machine"
                productImg="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_DB_QC_372x232_1._SY232_CB433700930_.jpg"
                price={100000}
            />

            <Product
                id={5}
                rating={4}
                title="product machine"
                productImg="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_DB_QC_372x232_1._SY232_CB433700930_.jpg"
                price={100000}
            />
        </div>

    </div>)
}

export default home
