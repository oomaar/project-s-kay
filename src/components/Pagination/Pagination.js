import React, { useEffect } from 'react';
import "./Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate, paginatePrev, paginateNext, currentPage, indexOfLastPage, prevPage, nextPage }) => {
    const pageNumbers = [];

    for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="cont">
                <button onClick={() => currentPage > 1 && paginatePrev(prevPage)}>prev</button>
                {pageNumbers.map(number => (
                    <li key={number} className="as">
                        <a onClick={() => paginate(number)} href="!#" className="asas">
                            {number}
                        </a>
                    </li>
                ))}
                <button onClick={() => currentPage < indexOfLastPage && paginateNext(nextPage)}>Next</button>
            </ul>
        </nav>
    )
}

export default Pagination;
