import useGridTableLoadData from "./hook/useGetGridTableData";
import showByPage from "../pagination_component/api/showByPage";
const GridTable = ({
    RowComponent,
    NewItemModal,
    SearchPanel,
    Pagination,
    loadItemPaginated,
    pageSize,
    pageNo,
    loadItemApi

}) => {
    //Due to closures, loadItemPaginated has already captured pageNo and pageSize when it was created in the UserTableWithRow component
    const { items, fetchItems, setItems } = useGridTableLoadData(loadItemPaginated)
    return (
        <>
            < NewItemModal reloadFunction={fetchItems} />


            <SearchPanel setFunction={setItems} />
            <div className="relative overflow-x-auto flex justify-center">
                <table className="text-sm text-center rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-center">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Email
                            </th>

                            <th scope="col" className="px-6 py-3 text-center">
                                Balance
                            </th>

                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {items && items.length > 0 ?
                            items.map((item, index) => (
                                <RowComponent item={item} key={index} reloadFunction={fetchItems} setItems ={setItems}/>
                            )) : (<p className="transform translate-x-3/4">No items available</p>)}

                    </tbody>
                </table>


            </div>
            <Pagination setItems={setItems}  
                        pageSize={pageSize} 
                        pageNo = {pageNo}
                        fetchFunction={loadItemPaginated} 
                        totalElement={loadItemApi}  />
        </>
    );
};

export default GridTable;
