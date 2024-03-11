import AboutBeans from "../../aboutBeans/AboutBeans";
import Header from "../../header/Header";

import CoffeeFilter from "../../coffeeFilter/CoffeeFilter";
import './ourCoffee.scss';


const OurCoffee = (props) => {
    return(
        <>
            <div className="our-coffee">
                <Header/>
                <h2>Our Coffee</h2>
            </div>
            <AboutBeans/>
            <CoffeeFilter data={props.data}/>

        </>
    )
}

export default OurCoffee;