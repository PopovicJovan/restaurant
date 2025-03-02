import styles from './components.module.css';

const ImageDescriptionBlock = ({source, head, description, switchDiv=false}) => {

    return (
        <div className={"px-2 flex flex-col md:flex-row m-auto"}>
                {!switchDiv && (
                    <>
                        <img src={source} alt={"image"} className={"w-1/2 m-0 mx-auto " +  styles['img-desc-image']}/>
                        <div className={" w-full md:w-1/2 mx-auto mt-5 md:m-auto "}>
                            <p className={"p-0 m-0 text-2xl lg:text-3xl uppercase text-center"}>{head}</p>
                            <p className={"p-0 m-0 px-2 mt-3 text-center"}>{description}</p>
                        </div>
                    </>
                )}
                {switchDiv && (
                    <>
                        <div className={"p-0 w-3/4 md:w-1/2 mx-auto mt-5 md:m-auto "}>
                            <p className={"p-0 m-0 text-2xl lg:text-3xl uppercase text-center"}>{head}</p>
                            <p className={"p-0 m-0 px-2 mt-3 text-center"}>{description}</p>
                        </div>
                        <img src={source} alt={"image"} className={"w-1/2 m-0 mx-auto " +  styles['img-desc-image']}/>
                    </>
                )}

        </div>
    )

}

export default ImageDescriptionBlock;