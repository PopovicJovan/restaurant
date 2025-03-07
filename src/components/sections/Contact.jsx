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
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const center = {lat:42.4355, lng:19.2591}
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
                    <LoadScript googleMapsApiKey={apiKey}>
                        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                            <Marker position={center} />
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </div>
    )


}

export default Contact;