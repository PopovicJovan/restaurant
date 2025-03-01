import styles from './components.module.css';

const MakeReservationButton = ({text}) => {
    return (
        <div className={styles['make-reservation-button']}>
            {text}
        </div>
    )
}

export default MakeReservationButton;