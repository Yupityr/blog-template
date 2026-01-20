
import { useParams } from "react-router-dom";
import { useAppSelector,useAppDispatch } from "@/app/store";
import { useEffect } from "react";
import { deletePost, setPage,fetchPostsByUserId } from "@/features/postsSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Userposts = () => {
    
    const dispatch = useAppDispatch()
    const params = useParams()
    const {posts, loading, error} = useAppSelector((state) => state.posts)
    
    const navigate = useNavigate()

    const { currentPage } = useAppSelector(
    state => state.posts.pagination
    )
    const { totalPages } = useAppSelector(
    state => state.posts.pagination
    )

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => navigate('/'), 1500);
            return () => clearTimeout(timer);
        }
    }, [error, navigate]);

    useEffect(() => {
        const userId = params.userId;
        if (userId){
            dispatch(fetchPostsByUserId(userId))
            console.log(userId);
        }
    },[dispatch, params.userId])

    return (
        <>
            <div className="flex flex-col min-h-[75vh] max-w-lg mx-auto">
                <div className="text-center my-4 font-bold">
                    <h1>Your Posts</h1>
                </div>
                {loading && <p className="text-center">Loading...</p> }
                {posts.length === 0 && !loading && !error && <p className="text-center">No posts found.</p>}
                {!loading && !error && posts.map(blog => (
                    <div className='flex flex-row border my-4 border-gray-200 rounded-lg p-6 shadow-sm mx-4' key={blog.id}>
                        <div className='flex flex-row justify-between w-full'>
                            <div className="flex items-center">
                                <Link className='' to={`/post/${blog.post_id}`}>
                                    <h3>
                                        {blog.title}
                                    </h3>
                                </Link>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button onClick={() =>navigate(`/post/edit/${blog.post_id}`)}>
                                    Edit
                                </button>
                                <button onClick={() => dispatch(deletePost(blog.post_id))}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='flex flex-row justify-center my-4 mt-auto'>
                    <button disabled={currentPage === 1} onClick={() => dispatch(setPage(currentPage - 1))}>
                        Prev
                    </button>
                    <p className='content-center mx-4'>{currentPage} of {totalPages}</p>
                    <button disabled={currentPage === totalPages} onClick={() => dispatch(setPage(currentPage + 1))}>
                         Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default Userposts