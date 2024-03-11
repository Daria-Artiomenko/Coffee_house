import AboutGoods from "../../aboutGoods/AboutGoods";
import CoffeeList from "../../coffeeList/CoffeeList";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";


const ForPleasure = (props) => {
    
    return(
        <>
            <div className="our-coffee">
                <Header/>
                <h2>For your pleasure</h2>
            </div>
            <AboutGoods/>
            <CoffeeList data={props.data}/>
            {/* <Footer/> */}
        </>
    )
}
export default ForPleasure;