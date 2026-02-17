// import { useDispatch, useSelector} from 'react-redux'
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor"
import { Editor } from "@tiptap/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Loader from "@/components/common/Loader"
// imports for accessing store
import { useAppDispatch } from '@/app/store'
import { createPost } from '@/features/posts/postsSlice'


const Createpost = () => {
    const dispatch = useAppDispatch()

    const [title, setTitle] = useState('')
    const [body,setBody] = useState<Editor | null>(null)
    const [status,setStatus] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async () => {
        setStatus(true)
        await dispatch(
            createPost({
                title,body:body?.getJSON()
            })
        )
        setTimeout(() => {
            setStatus(false)
            navigate('/home')
        }, 1000);
    }


    return (
        <>
            <div className="flex justify-between my-2 mx-4 gap-5">
                <input id="title" className="text-3xl w-full" type="text" placeholder="Insert Title" onChange={(e) => setTitle(e.target.value)}/>
                <button disabled={!title} onClick={handleSubmit}>
                    Post
                </button>
            </div>
            <SimpleEditor onEditorReady={setBody} />
            {status && 
                (<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                    <div>
                        <Loader />
                        Uploading Post...
                    </div>
                </div>
            )}
        </>
    );
}

export default Createpost