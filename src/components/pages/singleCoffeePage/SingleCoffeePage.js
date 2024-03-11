import CoffeeItem from "../../coffeeItem/CoffeeItem";
import Header from "../../header/Header";
import { Link, useParams } from "react-router-dom";

const SingleCoffeePage = (props) => {

    const {coffeeId} = useParams();
    const {data} = props;
  
    const searchCoffeeById = (id) => data.find((item) => item.id === +id);
    const coffee = searchCoffeeById(coffeeId);

    if (!coffee) {
      return (
        <>
            <h3>This page doesn't exist</h3>
            <Link to='/OurCoffee'>Back to all</Link>
        </>
        
      );
    }
    return(
        <>
            <div className="our-coffee">
                <Header/>
                <h2>Our Coffee</h2>
            </div>
            <CoffeeItem coffee={coffee} />
        </>   
    )
    
}
export default SingleCoffeePage;