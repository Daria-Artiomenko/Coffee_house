import { Link } from 'react-router-dom';
import './coffeeList.scss';

const CoffeeList = (props) => {
    
    const {data} = props;

    const coffeeList = data.map(item => {
		return(
			<Link to={`/OurCoffee/${item.id}`} className="coffee_item" key={item.id}>
            <div>
              <img className="coffee_item-img"
                src={item.thumbnail}
                alt="coffee"/>
              <div className="coffee_item-name">{item.name}</div>
              <div className="coffee_item-country">{item.country}</div>
              <div className="coffee_item-price">{item.price}$</div>
            </div>
          </Link>
		)
    });

    return (
		<div className='coffee_list'>
			{coffeeList}
		</div>	
	)
}

export default CoffeeList;