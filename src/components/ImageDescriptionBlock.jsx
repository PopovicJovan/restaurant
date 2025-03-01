

const ImageDescriptionBlock = ({source, head, description, switchDiv=false}) => {

    return (
        <div className={"w-full h-full px-2 flex flex-col md:flex-row m-auto"}>
                {!switchDiv && (
                    <>
                        <img src={source} alt={"image"} className={"w-1/2 h-1/2 md:h-full m-0 mx-auto"}/>
                        <div className={"p-0 w-full md:w-1/2 m-0 mx-auto md:my-auto"}>
                            <p className={"p-0 m-0 text-2xl lg:text-3xl uppercase text-center"}>{head}</p>
                            <p className={"p-0 m-0 px-2 mt-3 text-center"}>{description}</p>
                        </div>
                    </>
                )}
                {switchDiv && (
                    <>
                        <div className={"p-0 w-full md:w-1/2 m-0 mx-auto md:my-auto"}>
                            <p className={"p-0 m-0 text-2xl lg:text-3xl uppercase text-center"}>{head}</p>
                            <p className={"p-0 m-0 px-2 mt-3 text-center"}>{description}</p>
                        </div>
                        <img src={source} alt={"image"} className={"w-1/2 h-1/2 md:h-full m-0 mx-auto"}/>
                    </>
                )}

        </div>
    )

}

export default ImageDescriptionBlock;