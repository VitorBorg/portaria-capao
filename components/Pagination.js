import React from "react";

const Pagination = ({postPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i);
    }

    return (
 <nav
        className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
            <ul className="flex pagination">
                {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <div className="inline-flex mt-2 xs:mt-0">
                        <a onClick={() => paginate(number)}
                             className="text-sm text-indigo-50 transition duration-150 cursor-pointer hover:bg-green-900 bgGREEN font-semibold py-2 px-4 rounded-l">
                            {number}
                        </a>
                        &nbsp; &nbsp;
                    </div>
                </li>
                ))}
            </ul>
		</nav>
    )
}

export default Pagination;