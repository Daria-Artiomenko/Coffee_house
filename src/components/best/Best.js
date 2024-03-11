import { Link } from 'react-router-dom';

import './best.scss';


const Best = (props) => {
    const { data } = props;

    const items = data.slice(0, 3).map(item => {
        return (
          <Link to={`/OurCoffee/${item.id}`} className="best_item" key={item.id}>
            <div>
              <img className="best_item-img"
                src={item.thumbnail}
                alt="coffee"/>
              <div className="best_item-name">{item.name}</div>
              <div className="best_item-price">{item.price}$</div>
            </div>
          </Link>
        );
    });

    return (
        <section className="best">
            <h2 className='subtitle'>Our best</h2>
            <div className='best-list'>
                {items}
            </div>
        </section>
    )
}

export default Best;