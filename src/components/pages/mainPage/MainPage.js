import AboutUs from "../../aboutUs/AboutUs";
import Best from "../../best/Best";
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
        </>
    )
}

export default MainPage;