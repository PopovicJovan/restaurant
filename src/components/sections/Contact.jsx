import styles from '../components.module.css'
import {Button, Input} from "antd";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import MyInput from "../MyInput.jsx";
import MyTextArea from "../MyTextArea.jsx";
import MyButton from "../MyButton.jsx";
import {useNavigate} from "react-router-dom";

const Contact = () => {
    const containerStyle = {
        "height": "400px",
        "width": "400px",
        "max-width": "90%"
    };

    const { TextArea } = Input;
    const navigate = useNavigate();
    return (
        <div className={"border-2 border-black py-5 md:py-10"} id={"contact"}>
            <div className={styles['contact-layout'] + " mx-auto flex flex-col md:flex-row justify-around"}>
                <div className={styles['contact-form'] + " flex flex-col w-full md:w-1/2 gap-y-3 justify-center items-center mx-auto"}>
                    <p className={"text-center uppercase text-5xl font-bold"}>contact us</p>
                    <div className={"w-full flex gap-x-2"}>
                        <MyInput placeholder={"Name"} className={"w-1/2"}/>
                        <MyInput placeholder={"Phone number"} className={"w-1/2"}/>
                    </div>
                    <MyInput placeholder={"Email"} className={"w-full"}/>
                    <MyTextArea
                        maxLength={200}
                        placeholder="Input your message"
                        className={"w-full"}
                    />
                    <MyButton text={"CONTACT"} className={"w-full"} onClick={() => navigate(0)}/>
                </div>
                <div className={" w-full md:w-1/2 flex justify-center items-center mt-2 md:mt-0"}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23287.140038844256!2d19.273270185281874!3d42.44127939226318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2s!4v1741689478510!5m2!1ssr!2s"
                        className={styles['google-map']}></iframe>
                </div>
            </div>
        </div>
    )


}

export default Contact;