
import { useParams } from "react-router-dom";
import { useAppSelector,useAppDispatch } from "@/app/store";
import { useEffect } from "react";
import { deletePost, fetchPosts, setPage } from "@/features/postsSlice";
import { Link } from "react-router-dom";



const Userposts = () => {
    
    const dispatch = useAppDispatch()
    const params = useParams()

    const blogs = useAppSelector((state) => state.posts.posts.filter(p => p.user_id === params.userId))
    
    const { currentPage } = useAppSelector(
    state => state.posts.pagination
    )
    const { totalPages } = useAppSelector(
    state => state.posts.pagination
    )

    useEffect(() => {
        dispatch(fetchPosts())
    },[currentPage, dispatch, totalPages])



    useEffect(() => {
        dispatch(fetchPosts())
    },[dispatch])

    

    return (
        <>
            <div>
                {blogs.map(blog => (
                    <div className='flex flex-row bg-white border border-gray-200 rounded-lg p-6 shadow-sm' key={blog.id}>
                        <div className='flex flex-row'>
                            <Link className='mx-2' to={`/post/${blog.post_id}`}>
                                <h3>
                                    {blog.title}
                                </h3>
                            </Link>
                            
                            <Link className='mx-2' to={`/post/edit/${blog.post_id}`}>
                                <h3>
                                    Edit
                                </h3>
                            </Link>
                            <button onClick={() => dispatch(deletePost(blog.post_id))}>
                                deleyt
                            </button>
                        </div>
                        {/* <h3>
                            {blog.title}
                        </h3> */}
                    </div>
                ))}
                <div className='flex flex-row justify-center my-4'>
                    <button disabled={currentPage === 1} onClick={() => dispatch(setPage(currentPage - 1))}>
                        Prev
                    </button>
                    <p className='content-center mx-4'>{currentPage} of {totalPages}</p>
                    <button onClick={() => dispatch(setPage(currentPage + 1))}>
                         Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default Userposts