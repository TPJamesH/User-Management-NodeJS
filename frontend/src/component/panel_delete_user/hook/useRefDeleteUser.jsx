import { useRef } from 'react';
import DeleteUser from "../api/deleteUser"
const useRefDeleteUser = () => {
    const userFormRef = useRef(null);

    const deleteUser = async (token, reloadUsersFunc,setItems) => {

        let response = await DeleteUser(token);
        if (response.status == 200) {
            reloadUsersFunc()
        }
        // handle error cases here
    }
    return {
        userFormRef,
        deleteUser
    }
}
export default  useRefDeleteUser;