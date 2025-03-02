import styles from './components.module.css';
import { MdFileDownload } from "react-icons/md";

const MenuButton = ({ onClick, label, className }) => {
    return (
        <div className={"rounded-xl border-2 border-gold m-auto px-5 flex justify-between items-center " + styles['menu-button'] + className}>
            <span className={"my-auto text-gray-300 uppercase"}>{label}</span>
            <MdFileDownload size={50} color={"gray"} onClick={onClick}/>
        </div>
    )
}

export default MenuButton;