const PaginationControls = ({ 
    currentPage,
    totalItems, 
    pageSize, 
    nextPage, 
    prevPage, 
    setPage }) => {
    const totalPages = Math.ceil(totalItems / pageSize);
    return (
        <div>
            <nav aria-label="Page navigation">
                <ul className="inline-flex -space-x-px text-base pt-6 h-10">

                    <li>
                        <a  href="#"onClick={prevPage} disabled = {currentPage === 0} className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">Previous</a>
                    </li>
                    {
                    //The Array.from function generates an array with totalPages number of elements.
                    //Just the iteration of the array is needed, and any data is irrelevant
                    //(_, i) => ...: This is a callback function that is executed for each element of the array. The first argument(supposed to be the current iterated element)_ is ignored (conventionally used to indicate an unused variable), and the second argument i represents the current index of the array element.
                    }
                    {Array.from({ length: totalPages }, (_, i) => (
                        <li>
                            <a   href="#" key={i} onClick = {() => setPage(i)} 
                            className={currentPage ===i ?'active flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700':'flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'}>
                                {i + 1}
                             </a>
                        </li>

                    ))}

                    <li>
                        <a onClick={nextPage} disabled ={currentPage === pageSize - 1} class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default PaginationControls;