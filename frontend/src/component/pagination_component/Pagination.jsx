import usePagination from "./hook/usePagination"
import PaginationControls from "./child_component/paginationControl";
const Pagination = ({
    setItems,
    pageSize,
    pageNo,
    fetchFunction,
    totalElement}) => {

    const {currentPage,nextPage,prevPage,setPage, totalItems} = usePagination({
        fetchData: fetchFunction,
        pageSize,pageNo,setItems,totalElement});
    
    return (
        <PaginationControls
            currentPage={currentPage}
            totalItems={totalItems}
            pageSize ={pageSize}
            nextPage={nextPage}
            prevPage={prevPage}
            setPage={setPage}
            />
    )
}

export default Pagination