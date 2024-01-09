import { useSearchParams } from "react-router-dom";

const Pagination = ({
   // pageNumbers,
   // setCurrentPage,
   // currentPage,
   totalRepositories,
}) => {
   const [searchParams, setSearchParams] = useSearchParams();
   const minPages = [1, 2, 3];
   const totalPage = Math.ceil(totalRepositories / 10);

   const pageNumbers = [];
   for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i);
   }

   const currentPage = parseFloat(searchParams.get("pageNumber"));
   return (
      <nav aria-label="Page navigation example">
         <ul className="inline-flex -space-x-px text-base h-10">
            <li>
               <button
                  disabled={currentPage === 1}
                  onClick={() => {
                     setSearchParams((prev) => {
                        prev.set("pageNumber", currentPage - 1);
                        return prev;
                     });
                  }}
                  className={`${
                     currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
                  } flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700`}>
                  Previous
               </button>
            </li>
            {totalPage > 3 ? (
               <>
                  {minPages.map((number) => (
                     <li
                        onClick={() => {
                           setSearchParams((prev) => {
                              prev.set("pageNumber", number);
                              return prev;
                           });
                        }}
                        key={number}
                        className={`flex ${
                           1 === number ? "bg-gray-200" : ""
                        } cursor-pointer items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
                        {number}
                     </li>
                  ))}
                  <li className="items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300">
                     ...
                  </li>
               </>
            ) : (
               <>
                  {pageNumbers.map((number) => (
                     <li
                        onClick={() => {
                           setSearchParams((prev) => {
                              prev.set("pageNumber", number);
                              return prev;
                           });
                        }}
                        key={number}
                        className={`flex ${
                           currentPage === number ? "bg-gray-200" : ""
                        } cursor-pointer items-center justify-center px-4 h-10 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
                        {number}
                     </li>
                  ))}
               </>
            )}

            <li>
               <button
                  disabled={currentPage === totalPage}
                  onClick={() => {
                     setSearchParams((prev) => {
                        prev.set("pageNumber", currentPage + 1);
                        return prev;
                     });
                  }}
                  className={`${
                     currentPage === totalPage
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                  } flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700`}>
                  Next
               </button>
            </li>
         </ul>
      </nav>
   );
};

export default Pagination;
