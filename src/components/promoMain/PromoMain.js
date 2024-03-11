import './promoMain.scss';
import img from '../../assets/line_white_beans.svg';
import { Link } from 'react-router-dom';
const PromoMain = () => {
    return (
        <section className='promo_text'>
            <h1 className='promo_text-title'>Everything You Love About Coffee</h1>
            <img src={img} alt="coffee beans"/>
            <div className='promo_text-main'>
                <p>We makes every day full of energy and taste</p>
                <p>Want to try our beans?</p>
            </div>
            
            <Link to='/OurCoffee' className='more'>More</Link>
        </section>
        
    )
}
export default PromoMain;