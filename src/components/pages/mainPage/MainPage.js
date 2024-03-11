import AboutUs from "../../aboutUs/AboutUs";
import Best from "../../best/Best";
// import Footer from "../../footer/Footer";
import Header from "../../header/Header";

import PromoMain from "../../promoMain/PromoMain";
import './mainPage.scss';

const MainPage = (props) => {
    return (
        <>
            <div className='promo'>
                <Header/>
                <PromoMain/>
            </div>
            <AboutUs/>
            <Best data={props.data}/>
            {/* <Footer/> */}
        </>
    )
}

export default MainPage;