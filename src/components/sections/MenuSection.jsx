import MenuButton from "../MenuButton.jsx";
import menu from '../../assets/menu.pdf';
import {useEffect, useState} from "react";

const MenuSection = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);




    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = menu;
        link.download = 'Wine-Menu.pdf';
        link.click();
    }

    const labels = [
        width >= 640 ? "Get Our Wine Menu" : "wine menu",
        width >= 640 ? "Get Our Meat Selection" : "meat selection",
        width >= 640 ? "Download Dessert Menu" : "dessert menu",
        width >= 640 ? "Explore Our Drinks Selection" : "drinks selection",
        width >= 640 ? "Discover Our Full Menu" : "full menu"
    ];

    return (
        <>
            <div className={"w-full pt-4 pb-16 bg-black border-2 border-gold"} id={"menu"}>
                <p className={"text-white text-center text-5xl uppercase my-5"}>Our Menu</p>
                {labels.map((label, index) => {
                    return <MenuButton key={index} label={label} onClick={handleDownload} className={" mt-3"}/>
                })}
            </div>
        </>
    )
}

export default MenuSection;