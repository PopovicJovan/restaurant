import MyInput from "../MyInput.jsx";
import styles from '../components.module.css'
import launchImg from '../../assets/launch.jpg';
import MyTextArea from "../MyTextArea.jsx";
import MyButton from "../MyButton.jsx";
import {useNavigate} from "react-router-dom";
const Reserve = () => {

    const navigate = useNavigate();

    return (
        <div className={"w-full py-10 border-2  border-black "} id={"reserve"}>
            <div className={"w-full xl:w-3/4 m-auto flex flex-col md:flex-row justify-around items-center " + styles['reserve-layout']}>
                <div className={styles['reserve'] + " flex flex-col justify-center gap-y-3 px-10"}>
                    <p className={"text-left uppercase text-5xl font-bold "}>reserve</p>
                    <div className={"w-full flex gap-x-2"}>
                        <MyInput placeholder={"Name"} className={"w-1/2"}/>
                        <MyInput placeholder={"Phone number"} className={"w-1/2"}/>
                    </div>
                    <MyInput placeholder={"Email"} className={"w-full"}/>
                    <MyInput placeholder={"Number of people"} type={"number"}/>
                    <MyTextArea
                        maxLength={200}
                        placeholder="Extra comments"
                    />
                    <MyButton text={"RESERVE"} onClick={() => navigate(0)}/>
                </div>
                <div className={"w-1/2 flex justify-center items-center"}>
                    <img src={launchImg} className={styles['reserve-img']}/>
                </div>
            </div>
        </div>
    );

}

export default Reserve;