import { useRef } from 'react';
import addNewUser from "../api/addNewUser"

const useRefNewUser = () => {
    const userFormRef = useRef(null);

    const constructUser = () => {
        const formData = new FormData(userFormRef.current); // retrieve persisting value
        // Convert FormData to object
        const formValues = Object.fromEntries(formData.entries()); //turn to JSON 
        userFormRef.current.reset(); // remove data in the input fields
        return formValues
    }

    const submitUser = async (e, reloadUsersFunc) => {
        e.preventDefault(); //prevent default submission handler
        const user = constructUser(); //get form data as object
        let response = await addNewUser(user);
        if (response.status == 200) {
            reloadUsersFunc();
        }
        // handle error cases here
    }
    return {
        userFormRef,
        submitUser
    }
}
export default useRefNewUser;