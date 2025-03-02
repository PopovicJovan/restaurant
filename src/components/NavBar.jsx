import styles from './components.module.css';
import {Link} from "react-router-dom";

const NavBar = () => {



    return (
        <nav className={styles['nav'] + " px-5 flex justify-center items-center"}>
            <ul className={"flex gap-x-12 " + styles['nav-list'] }>
                <li className={"flex justify-center items-center"}>
                    <Link to={"/"} >HOME</Link>
                </li>
                <li className={"flex justify-center items-center "} >MENU</li>
                <li className={"flex justify-center items-center "}>
                    <span className={"text-4xl lg:text-5xl font-serif font-bold text-gold uppercase p-0 m-0 tracking-tighter "}>
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