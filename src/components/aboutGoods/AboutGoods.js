import aboutGoods from '../../assets/about_goods.png';
import coffeeWithLines from '../../assets/line_black_beans.svg';


const AboutGoods = () => {

    return (
        <section className='about'>
            <div className="about_beans">
                <img src={aboutGoods} alt="woman with coffee" className="about_beans-img"/>
                <div className='about_beans-info'>
                    <h2 className='subtitle'>About our goods</h2>
                    <img src={coffeeWithLines} alt="coffee beans" />
                    <p>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/>
                        <br/>
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. <br/>
                        As greatly removed calling pleased improve an.<br/> Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                </div>
            </div>
            <div className='line'></div>
        </section>
    )
}
export default AboutGoods;