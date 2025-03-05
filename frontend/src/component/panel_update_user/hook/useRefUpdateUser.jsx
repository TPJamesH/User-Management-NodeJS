import { useRef } from 'react';
import updateUser from "../api/updateUser"

const useRefUpdateUser = () => {
    const userFormRef = useRef(null);

    const constructUser = () => {
        const formData = new FormData(userFormRef.current); // retrieve persisting value
        // Convert FormData to object
        const formValues = Object.fromEntries(formData.entries()); //turn to JSON 
        userFormRef.current.reset(); // remove data in the input fields
        return formValues
    }

    const submitUser = async (e, reloadUsersFunc, token,setItems) => {
        e.preventDefault(); //prevent default submission handler
        const user = constructUser(); //get form data as object
        let response = await updateUser(user, token);
        if (response.status == 200) {
            reloadUsersFunc()
        }

        // handle error cases here
    }
    return {
        userFormRef,
        submitUser
    }
}
export default useRefUpdateUser;