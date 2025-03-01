import NavBar from "../components/NavBar.jsx";
import styles from './pages.module.css';
import MakeReservationButton from "../components/MakeReservationButton.jsx";

const MainPage = () => {
    return (
        <div className={styles['mainpage-picture-bg'] + " w-full"}>
            <div className={"fixed top-0 right-0 me-2 mt-2"}>
                <MakeReservationButton text={"reserve table"}/>
            </div>
            <div className={styles['mainpage-overlay']}></div>
            <NavBar />
            <div className={"p-0 m-0 relative top-1/4 text-center "}>
                <p className={styles['mainpage-head-p'] + " p-0 m-0"}>JOVAN RESTAURANT</p>
                <span className={styles['mainpage-head-span'] + " p-0 m-0"}>EXPLORE WHAT LUXURY MEANS</span>
            </div>
        </div>
    )
}

export default MainPage;