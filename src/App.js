import React from 'react';
import './App.css';
import { Login, Shows, Slider } from './components';

export default function App() {
    return (
        <div className="app">
            {/* <TestRedux /> 
            <Login />
            <Shows /> */}
            <Slider />
        </div>
    )
}



// Pagination Test

// , { useState, useEffect }
// import axios from 'axios';
// import { Header, Post, Pagination } from './components';

// const [posts, setPosts] = useState([]);
// const [loading, setLoading] = useState(false);
// const [currentPage, setCurrentPage] = useState(1);
// const [postsPerPage] = useState(9);

// let prevPage = currentPage - 1;
// let nextPage = currentPage + 1;

// useEffect(() => {
//     const fetchPost = async () => {
//         setLoading(true);
//         const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
//         setPosts(res.data);
//         setLoading(false);
//     }

//     fetchPost();
// }, []);

// // console.log(posts);

// // Get Current Posts
// const indexOfLastPost = currentPage * postsPerPage;
// const indexOfFirstPost = indexOfLastPost - postsPerPage;
// const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

// const indexOfLastPage = Math.ceil(posts.length / postsPerPage) - 1;
// console.log(indexOfLastPage);

// const paginate = (pageNumber) => setCurrentPage(pageNumber);
// const paginatePrev = (pageNumber) => setCurrentPage(pageNumber);
// const paginateNext = (pageNumber) => setCurrentPage(pageNumber);

// <div className="app">
// <h1>My Blog</h1>
// <Post posts={currentPosts} loading={loading} />
// <Pagination
//     postsPerPage={postsPerPage}
//     totalPosts={posts.length}
//     paginate={paginate}
//     paginatePrev={paginatePrev}
//     paginateNext={paginateNext}
//     currentPage={currentPage}
//     indexOfLastPage={indexOfLastPage}
//     prevPage={prevPage}
//     nextPage={nextPage}
// />


// <div class="container-fluid padding">
//     <div class="row text-center padding">

//         <div class="col-xs-12 col-sm-6 col-md-4">
//             <i class="fas fa-code"></i>
//             <h3>HTML5</h3>
//             <p>ai 7aga ai 7aga ai 7aga ai 7aga ai 7aga</p>
//         </div>

//         <div class="col-xs-12 col-sm-6 col-md-4">
//             <i class="fas fa-bold"></i>
//             <h3>BOOTSTRAP</h3>
//             <p>ai 7aga ai 7aga ai 7aga ai 7aga ai 7aga</p>
//         </div>

//         <div class="col-sm-12 col-md-4">
//             <h3>CSS3</h3>
//             <p>ai 7aga ai 7aga ai 7aga ai 7aga ai 7aga</p>
//         </div>

//     </div>
// </div>
// </div>