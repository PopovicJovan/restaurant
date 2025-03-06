import styles from './components.module.css';
import {Link} from "react-router-dom";

const NavBar = () => {

    const handleClick = (id) => {
        document.getElementById(id).scrollIntoView({behavior: "smooth"});
    }

    return (
        <nav className={styles['nav'] + " absolute px-2 md:px-5 flex justify-center items-center top-16 md:top-0 w-full border-1 border-t-gray-600 border-b-gray-600 md:border-0  "}>
            <ul className={"w-full flex justify-center gap-x-2 md:gap-x-12 " + styles['nav-list'] }>
                <li className={"flex justify-center items-center"} onClick={() => handleClick("home")}>
                    HOME
                </li>
                <li className={"flex justify-center items-center "} onClick={() => handleClick("menu")}>MENU</li>
                <li className={"flex justify-center items-center "} onClick={() => handleClick("home")}>
                    <span className={"hidden md:block  text-4xl lg:text-5xl font-serif font-bold uppercase p-0 m-0 tracking-tighter "}>
                    JoRest
                    </span>
                </li>
                <li className={"flex justify-center items-center " } onClick={() => handleClick("about")}>ABOUT US</li>
                <li className={"flex justify-center items-center " } onClick={() => handleClick("contact")}>CONTACT US</li>
            </ul>
        </nav>
    )
}

export default NavBar;