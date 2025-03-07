import styles from './components.module.css';

const MyInput = ({placeholder, className, type="text"}) => {
    return (
        <div className={" " + className}>
            <input type={type} placeholder={placeholder}
                   className={"w-full px-4 border-1 border-gray-700 rounded-sm " + styles['my-input']}/>
        </div>
    )
}

export default MyInput;