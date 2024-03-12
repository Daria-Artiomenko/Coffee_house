import img from '../../assets/line_black_beans.svg'
import './aboutUs.scss'


const AboutUs = () => {
    return(
        <section className='about'>
            <h2>About Us</h2>
            <img src={img} alt="beans"/>
            <p className='about_text'>
            Imagine a company that is fueled by the passion for coffee and dedicated to delivering a unique taste and cozy atmosphere with every cup. Welcome to "Coffee house" - where buying coffee is not just a transaction, but a journey into the world of exquisite flavors and aromas.<br/><br/>

            "Coffee house" is more than a company; it's a lifestyle, a philosophy of morning awakenings and evening conversations. We believe that every cup of coffee can symbolize the beginning of something beautiful and inspire great achievements. Immerse yourself in the world of true coffee art with us!
            </p>
        </section>
    )
}

export default AboutUs;