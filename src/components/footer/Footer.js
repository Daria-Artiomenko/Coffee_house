import { Link } from 'react-router-dom';
import coffee from '../../assets/black_beans.svg';
import coffeeWithLines from '../../assets/line_black_beans.svg';
import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='navigation'>
                <img src={coffee} alt="coffee beans"/>
                <nav className='navigation-items'>
                    <Link to='/' className='main'>Coffee house</Link>
                    <Link to='/OurCoffee'>Our coffee</Link>
                    <Link to='/ForPleasure'>For your pleasure</Link>
                </nav>
            </div>
            <img src={coffeeWithLines} alt="coffee" className='coffee' />
        </footer>
    )
}
export default Footer;