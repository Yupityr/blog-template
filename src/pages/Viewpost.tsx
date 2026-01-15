import { useState } from "react";
import { supabase } from "@/services/supabaseClient";
import Readonlyeditor from "@/components/tiptap-templates/simple/Readonlyeditor";

const Viewpost = () => {
    const [post, setPost] = useState<any[]>([]);


    const getPost = async () => {

        const {error, data} = await supabase.from("blogs").select("*")

        if (error) {
            console.error("Failed to get post", error)
            return
        }

        setPost(data)
        console.log(data);
    };

    //we need use effect here for the posts

    return (
        <>
            <button onClick={getPost}>
                test
            </button>
            {post.map(post => (
            <div>
                <p>{post.title}</p>
                <Readonlyeditor postContent={post.body}/>
            </div>
            ))}
            <div>test</div>
        </>
    );
};

export default Viewpost;