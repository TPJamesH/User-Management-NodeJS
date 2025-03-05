import GridTable from "../grid_table/GridTable";
import loadUserData from "./api/UserTableService";
import UserCard from "./child_component/UserCard";
import SearchPanel from "../search_filter/searchPanel";
import NewUserModal from "../modal/modal";
import deleteUserPanel from "../panel_delete_user/deleteUserPanel";
import updateUserModal from "../panel_update_user/updateUserPanel";
export default function UserTable() {
    return (
        <GridTable CardComponent={UserCard} 
                    loadItemApi={loadUserData}
                    NewItemModal={NewUserModal}
                    SearchPanel={SearchPanel}
                    deleteUserPanel={deleteUserPanel}
                    updateUserModal={updateUserModal}
        />
    );
}
