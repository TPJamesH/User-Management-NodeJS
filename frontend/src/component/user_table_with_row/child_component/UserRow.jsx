//Destructured directly from function parameter

import UpdateUserModal from "../../panel_update_user/updateUserPanel"
import DeleteUser from "../../panel_delete_user/deleteUserPanel"
const UserRow = ({ 
    index, 
    item, 
    reloadFunction, 
    setItems }) => {
    
    return (

        <tr className="bg-white border-b" key={index}>
            <td className="px-6 py-4 text-center" id={"NameValue " + item.token}>
                {item.firstName + " " + item.lastName}
            </td>
            <td className="px-6 py-4 text-center" id={"emailValue " + item.token}>
                {item.email}
            </td>
            <td className="px-6 py-4 text-center" id={"balanceValue " + item.token}>
                {item.balance}
            </td>
            <td>
                <UpdateUserModal item={item} reloadFunction={reloadFunction} setItems={setItems} />
                <DeleteUser item={item} reloadFunction={reloadFunction} setItems={setItems} />
            </td>
        </tr>
    )
}

export default UserRow
