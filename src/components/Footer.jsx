import { FaInstagram, FaFacebook, FaTwitter, FaPhoneSquare } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import styles from './components.module.css';

const Footer = () => {
    const handleClick = (id) => {
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
    }


    return (
        <footer className={"pt-8 pb-16 bg-black"}>
            <p className={"text-center font-bold color-gold"}>© Made by Jovan Popović</p>
            <div className={"w-full flex flex-col sm:flex-row mt-5"}>
                <div className={"w-full sm:w-2/3 flex justify-around " + styles['footer-social-media-working-hours'] }>
                    <div className={styles['footer-list']}>
                        <ul className={"color-gold flex flex-col gap-y-2"}>
                            <li className={"flex justify-start items-center gap-x-3"}><FaInstagram size={30}/> our_instagram11_</li>
                            <li className={"flex justify-start items-center gap-x-3"}><FaFacebook size={30}/> Our Facebook</li>
                            <li className={"flex justify-start items-center gap-x-3"}><FaTwitter size={30}/> Our Twitter</li>
                            <li className={"flex justify-start items-center gap-x-3"}><CiMail size={30}/> ourmail@gmail.com</li>
                            <li className={"flex justify-start items-center gap-x-3"}><FaPhoneSquare size={30}/> (+382) 67 600 006</li>
                        </ul>
                    </div>
                    <div className={styles['footer-working-hours']}>
                        <ul className={"color-gold flex flex-col gap-y-1"}>
                            <li>Monday: 09:00 - 21:00</li>
                            <li>Tuesday: 09:00 - 21:00</li>
                            <li>Wednesday: 09:00 - 21:00</li>
                            <li>Thursday: 09:00 - 21:00</li>
                            <li>Friday: 09:00 - 21:00</li>
                            <li>Saturday: 09:00 - 21:00</li>
                            <li>Sunday: 09:00 - 21:00</li>
                        </ul>
                    </div>
                </div>
                <div className={styles['footer-quick-links'] + " w-full sm:w-1/3 flex justify-center"}>
                    <div className={"color-gold flex flex-row sm:flex-col justify-around sm:justify-start  w-full sm:w-auto mt-3 sm:mt-0 text-sm sm:text-xl"}>
                        <span onClick={() => handleClick("home")}>HOME</span>
                        <span onClick={() => handleClick("contact")}>CONTACT</span>
                        <span onClick={() => handleClick("about")}>ABOUT US</span>
                        <span onClick={() => handleClick("menu")}>MENU</span>
                        <span onClick={() => handleClick("home")}>RESERVATION</span>
                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer;