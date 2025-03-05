export default function InputField (
    {
        label, 
        type, 
        attrName,
        placeholder, 
        value, 
        widthStyle = "w-1/6", 
        refHook
    }
) {
    return (
        <input
            ref={refHook}
            name={attrName}
            type={type} 
            placeholder={placeholder} 
            value={value}
            className={widthStyle + " border p-2 hover:border-blue-500"}
        />
    );
}