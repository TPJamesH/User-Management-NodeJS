const ButtonAdd = ({
    buttonLabel,
    handler,
    sizeStyle = "px-4 w-auto h-12"
}) => {

    const buttonStyle = 
    `
        text-white text-xl 
        bg-yellow-500 rounded
        items-center justify-center
        ${sizeStyle}
    `

    return (
        <button 
            className={buttonStyle}
            onClick={handler}
        >
            {buttonLabel}
        </button>
    );
};

export default ButtonAdd;