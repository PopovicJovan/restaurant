import styles from '../components.module.css';
import restaurantImg from '../../assets/restaurant.jpg';
import {LoremIpsum} from "lorem-ipsum";


const AboutUs = () => {

    const lorem = new LoremIpsum().generateParagraphs(1)


    return (
        <div className={"w-full py-10 flex flex-col md:flex-row justify-center items-center gap-6"}>
            <div id={"images"} className={"w-full md:w-1/3 flex flex-col justify-center items-center gap-2"}>
                <img src={restaurantImg} className={styles['about-us-img'] + " w-3/4 md:w-1/2 h-auto"}/>
                <img src={restaurantImg} className={styles['about-us-img'] +  " w-3/4 md:w-1/2 h-auto"}/>
            </div>
            <div className={"w-full md:w-1/2 "}>
                <p className={"text-center uppercase text-5xl " + styles['about-us-head']}>about us</p>
                <p className={"mt-5 px-5 text-justify "}>
                    {lorem}
                    {lorem}
                    {lorem}
                    <br/><br/>
                    {lorem}
                    {lorem}
                    <br/><br/>
                    {lorem}
                </p>
            </div>
        </div>
    )
}

export default AboutUs;