import { Link } from 'react-router-dom';
import coffeeWithLines from '../../assets/line_black_beans.svg';
// import woman from '../../assets/about_beans.png';

import './coffeeItem.scss';

const CoffeeItem = ({coffee}) => {

    const {name, thumbnail, country, description, price} = coffee;

    return(
        <section className='coffee_single-item'>
                <img src={thumbnail} alt="coffee" className="coffee_single-item-img"/>
                <div className='coffee_single-item-about'>
                    <h2 className='subtitle'>About {name}</h2>
                    <img src={coffeeWithLines} alt="coffee beans" />
                    <div className='coffee_single-item-info'>
                        <div className='coffee_single-item-country'><span className='country'>Country: </span> {country}</div>
                        <div className='coffee_single-item-descr'><span className='descr'>Description: </span>{description}</div>
                        <div className='coffee_single-item-price'><span className='price'>Price:  </span>{price}$</div>
                    </div>
                    <Link to='/OurCoffee' className='back'>Back to all</Link>
                </div>

        </section>
    )
}

export default CoffeeItem;