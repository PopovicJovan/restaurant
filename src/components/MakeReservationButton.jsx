import styles from './components.module.css';

const MakeReservationButton = ({text, onClick}) => {
    return (
        <div className={styles['make-reservation-button']} onClick={onClick}>
            {text}
        </div>
    )
}

export default MakeReservationButton;