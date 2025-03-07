import styles from "./components.module.css";


const MyButton = ({className, text, onClick=()=>{}}) => {
    return (
        <div className={" " + className}>
            <button className={"w-full px-4 border-1 border-gray-700 rounded-sm " + styles['my-button']}  onClick={onClick}>
                <span>{text}</span>
            </button>
        </div>
    )
}

export default MyButton;