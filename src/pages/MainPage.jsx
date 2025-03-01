import NavBar from "../components/NavBar.jsx";
import styles from './pages.module.css';
import MakeReservationButton from "../components/MakeReservationButton.jsx";
import ImageDescriptionBlock from "../components/ImageDescriptionBlock.jsx";
import wineImage from '../assets/wine_image.jpg';
import meatImage from '../assets/meat_image.jpg';
import cakeImage from '../assets/cake_image.jpg';
import {loremIpsum} from "lorem-ipsum";
import {useEffect, useState} from "react";

const MainPage = () => {
    const [breakpoint, setBreakpoint] = useState("");

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            if (width < 640) setBreakpoint("xs");
            else if (width < 768) setBreakpoint("sm");
            else if (width < 1024) setBreakpoint("md");
            else if (width < 1280) setBreakpoint("lg");
            else setBreakpoint("xl");
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    const loremText = loremIpsum({ count: 7, units: 'sentences' });

    return (
        <>
            <div className={styles['mainpage-picture-bg'] + " w-full"} id={"home"}>
                <div className={"fixed top-0 right-0 me-2 mt-16 z-50"}>
                    <MakeReservationButton text={"reserve table"}/>
                </div>
                <div className={styles['mainpage-overlay']}></div>
                <NavBar />
                <div className={"p-0 m-0 relative top-1/4 text-center "}>
                    <p className={styles['mainpage-head-p'] + " p-0 m-0"}>JOVAN RESTAURANT</p>
                    <span className={styles['mainpage-head-span'] + " p-0 m-0"}>EXPLORE WHAT LUXURY MEANS</span>
                </div>
            </div>
            <div className={"m-auto gap-y-2  bg-white flex flex-col " + styles['offer-layout']} id={"offer"}>
                <p className={"p-0 m-0 mt-2 text-center uppercase " + styles['offer-head']}>Luxury on Every Plate</p>
                <div className={"w-full " + styles['offer-div']}>
                    <div className={"h-1/3 "}>
                        <ImageDescriptionBlock source={wineImage} head={"Discover Our Exquisite Wines"} description={loremText}/>
                    </div>
                    <div className={"h-1/3 "}>
                        <ImageDescriptionBlock source={meatImage} head={"Discover Our Handpicked Meat"} description={loremText} switchDiv={breakpoint !== 'sm'}/>
                    </div>
                    <div className={"h-1/3"}>
                        <ImageDescriptionBlock source={cakeImage} head={"Indulge in Heavenly Desserts"} description={loremText}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage;