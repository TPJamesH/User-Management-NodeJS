import { useEffect, useState } from 'react';

/*State and behavior management */
function HeadlessInput({ children, ...props }) {
    const [value, setValue] = useState(props.value || '');

    const handleChange = (e) => {
        setValue(e.target.value);
    };
   //  console.log(props.name + ": " + value)

    
    return children({
        value, //passed in extra attribute
        onChange: handleChange, //passed in extra attribute
        ...props // type, name, placeholder, disabled, required
    });
}

export { HeadlessInput }