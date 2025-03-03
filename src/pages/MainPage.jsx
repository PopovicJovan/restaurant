import NavBar from "../components/NavBar.jsx";
import styles from './pages.module.css';
import MakeReservationButton from "../components/MakeReservationButton.jsx";
import OfferSection from "../components/sections/OfferSection.jsx";
import MenuSection from "../components/sections/MenuSection.jsx";

const MainPage = () => {

    return (
        <>
            <div className={styles['mainpage-picture-bg'] + " w-full"} id={"home"}>
                <div className={"fixed top-0 right-0 me-2 mt-2 md:mt-16 z-50"}>
                    <MakeReservationButton text={"reserve table"}/>
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
            </div>
            <OfferSection />
            <MenuSection />
        </>
    )
}

export default MainPage;