import styles from "../components.module.css";
import MakeReservationButton from "../MakeReservationButton.jsx";
import NavBar from "../NavBar.jsx";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Home = () => {

    const handleArrow = (id) => {
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
    }

    return (
        <div className={styles['mainpage-picture-bg'] + " w-full"} id={"home"}>
            <div className={"fixed top-0 right-0 me-2 mt-2 md:mt-16 z-50"}>
                <MakeReservationButton text={"reserve table"} onClick={() => handleArrow("reserve")}/>
            </div>
            <span className={"block md:hidden absolute z-50 top-2 start-2 text-4xl lg:text-5xl font-serif font-bold text-white uppercase p-0 m-0 tracking-tighter "}>
                    JoRest
                </span>
            <div className={styles['mainpage-overlay']}></div>
            <NavBar />
            <div className={"p-0 m-0 relative top-1/4 text-center "}>
                <p className={styles['mainpage-head-p'] + " p-0 m-0"}>JOVAN RESTAURANT</p>
                <span className={styles['mainpage-head-span'] + " p-0 m-0"}>EXPLORE WHAT LUXURY MEANS</span>
            </div>
            <div className={"fixed bottom-2 end-2 z-50"}>
                <FaArrowAltCircleUp size={50} color={"gold"} onClick={() => handleArrow("home")}/>
            </div>
        </div>
    )
}

export default Home;