import styles from './components.module.css';

const MyTextArea = ({placeholder, className, maxLength}) => {
    return (
        <div className={" " + className}>
            <textarea placeholder={placeholder} maxLength={maxLength}
                      className={"w-full px-4 py-4 border-1 border-gray-700 rounded-sm " + styles['my-text-area']}/>
        </div>
    )
}

export default MyTextArea;