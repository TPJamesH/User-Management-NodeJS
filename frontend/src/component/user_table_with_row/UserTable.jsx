import GridTable from "../grid_table_with_row/GridTable";
import loadUserData from "./api/UserTableService";
import UserRow from "./child_component/UserRow";
import Pagination from "../pagination_component/Pagination";
import SearchPanel from "../search_filter/searchPanel";
import showByPage from "../pagination_component/api/showByPage";
import NewUserModal from "../modal/modal";
export default function UserTableWithRow() {
    const pageSize = 5
    const pageNo = 0
    //a higher-order function that returns another function
    const loadItemPaginated = (pageNo,pageSize) => showByPage(pageNo,pageSize) //reference instead of call
    return (
        <GridTable RowComponent={UserRow}
            loadItemApi={loadUserData}
            Pagination={Pagination}
            NewItemModal={NewUserModal}
            SearchPanel={SearchPanel}
            loadItemPaginated={loadItemPaginated}
            pageSize = {pageSize}
            pageNo = {pageNo}

        />
    );
}
