import styles from '../components.module.css'
import {Button, Input} from "antd";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Contact = () => {
    const containerStyle = {
        "height": "400px",
        "width": "400px",
        "max-width": "90%"
    };

    const { TextArea } = Input;
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const center = {lat:42.4355, lng:19.2591}
    return (
        <div className={"border-2 border-black py-5 md:py-10"} id={"contact"}>
            <div className={styles['contact-layout'] + " mx-auto flex flex-col md:flex-row justify-around"}>
                <div className={styles['contact-form'] + " flex flex-col w-full md:w-1/2 gap-y-3 justify-center items-center mx-auto"}>
                    <p className={"text-center uppercase text-5xl "}>contact us</p>
                    <Input placeholder={"Name"} size={"large"} />
                    <Input placeholder={"Email"} size={"large"} />
                    <Input placeholder={"Phone number"} size={"large"} />
                    <TextArea
                        showCount
                        maxLength={200}
                        placeholder="Input your message"
                        style={{
                            height: 150,
                            resize: 'none',
                        }}
                    />
                    <Button type={"primary"} size={"large"} className={"w-full mt-2"}>Send</Button>
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