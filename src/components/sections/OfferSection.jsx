import styles from "../components.module.css";
import ImageDescriptionBlock from "../ImageDescriptionBlock.jsx";
import wineImage from "../../assets/wine_image.jpg";
import meatImage from "../../assets/meat_image.jpg";
import cakeImage from "../../assets/cake_image.jpg";
import {useEffect, useState} from "react";


const OfferSection = () => {

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


    return (
        <div className={"m-auto gap-y-2  bg-white flex flex-col " + styles['offer-layout']} id={"offer"}>
            <p className={"p-0 m-0 mt-2 text-center uppercase text-2xl md:text-4xl " + styles['offer-head']}>Luxury on Every Plate</p>
            <div className={"w-full " + styles['offer-div']}>
                <div className={" "}>
                    <ImageDescriptionBlock source={wineImage} head={"Discover Our Exquisite Wines"} description={"Indulge in a handpicked selection of the finest wines. Each sip tells a story of craftsmanship and tradition. Elevate your dining experience with the perfect pairing."}/>
                </div>
                <div className={" mt-5 "}>
                    <ImageDescriptionBlock source={meatImage} head={"Explore the finest cuts"} description={"Savor premium cuts, carefully selected for their quality and taste. Expertly prepared to bring out rich, deep flavors. A true delight for meat lovers."} switchDiv={!["xs", "sm"].includes(breakpoint)}/>
                </div>
                <div className={" mt-5 "}>
                    <ImageDescriptionBlock source={cakeImage} head={"Indulge in Heavenly Desserts"} description={"Experience pure sweetness in every bite. Crafted with the finest ingredients for an unforgettable taste. The perfect ending to a luxurious meal."}/>
                </div>
            </div>
        </div>
    )
}

export default OfferSection;
