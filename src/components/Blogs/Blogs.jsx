import React, { useEffect } from 'react'
// import AOS from "aos";
// import "aos/dist/aos.css";
import Blog from './Blog/Blog'
import './Blogs.css'
const Blogs = () => {
    return (
        <div id='blogs' className="blogs">
            <div className="blogs__title heading">//Blogs</div>
            <div className="blogs__blog">
                <Blog title={"Priority Queue VS Set"} content={"Understanding time complexity of Dijkstra priority queue vs set vs queue. In this blog, we delve into two distinct implementations of Dijkstra's algorithm, each employing a different data structure — the priority queue and the set."} link={'https://dev.to/abhiman7/pq-vs-set-54dn'} ></Blog>
                <Blog title={"Inside JS and 5 falsey Values"} content={"Unveiling the JavaScript Stack: How Code Runs and the Intricacies of Falsey Values"} link={'https://dev.to/abhiman7/js-insider-and-5-falsey-values-3mli'} ></Blog>
            </div>
        </div>
    )
}

export default Blogs