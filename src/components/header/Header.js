import './header.scss';
import coffee from '../../assets/white_beans.svg';
import { Link } from 'react-router-dom';
const Header = () => {
    return(
        <header className='header'>
            <img src={coffee} alt="coffee beans"/>
            <nav className='navigation'>
                <Link to='/' className='main'>Coffee house</Link>
                <Link to='/OurCoffee'>Our coffee</Link>
                <Link to='/ForPleasure'>For your pleasure</Link>
            </nav>
        </header>
    )
}

export default Header;