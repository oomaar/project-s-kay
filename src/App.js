import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Header, Post, Pagination } from './components';



export default function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

    let prevPage = currentPage - 1;
    let nextPage = currentPage + 1;

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
            setPosts(res.data.slice(0, 100));
            setLoading(false);
        }

        fetchPost();
    }, []);

    // console.log(posts);

    // Get Current Posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const indexOfLastPage = Math.ceil(posts.length / postsPerPage) - 1;
    console.log(indexOfLastPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const paginatePrev = (pageNumber) => setCurrentPage(pageNumber);
    const paginateNext = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="app">
            <h1>My Blog</h1>
            <Post posts={currentPosts} loading={loading} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                paginatePrev={paginatePrev}
                paginateNext={paginateNext}
                currentPage={currentPage}
                indexOfLastPage={indexOfLastPage}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </div>
    )
}

{/*import { Pagination } from 'react-instantsearch-dom';
     <Pagination

defaultRefinement={currentPage}
showFirst={false}
showPrevious={false}
showNext={false}
showLast={false}
totalPages={10}
/> */}




{/*  import Pagination from '@atlaskit/pagination'; <Pagination pages={[1, 2, 3, 4, 5, 6, 7, 8, 9, indexOfLastPage]} /> */ }