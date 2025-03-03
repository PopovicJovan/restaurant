import styles from './components.module.css';
import {Link} from "react-router-dom";

const NavBar = () => {



    return (
        <nav className={styles['nav'] + " absolute px-2 md:px-5 flex justify-center items-center top-16 md:top-0 w-full border-1 border-t-gray-600 border-b-gray-600 md:border-0  "}>
            <ul className={"w-full flex justify-center gap-x-2 md:gap-x-12 " + styles['nav-list'] }>
                <li className={"flex justify-center items-center"}>
                    <Link to={"/"} >HOME</Link>
                </li>
                <li className={"flex justify-center items-center "} >MENU</li>
                <li className={"flex justify-center items-center "}>
                    <span className={"hidden md:block  text-4xl lg:text-5xl font-serif font-bold uppercase p-0 m-0 tracking-tighter "}>
                    JoRest
                    </span>
                </li>
                <li className={"flex justify-center items-center " }>ABOUT US</li>
                <li className={"flex justify-center items-center " }>CONTACT US</li>
            </ul>
        </nav>
    )
}

export default NavBar;