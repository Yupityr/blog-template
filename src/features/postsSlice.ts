import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { supabase } from "@/services/supabaseClient";

export interface Post{
    id:string;
    title:string;
}

interface PostsState{
    posts:Post[];
    currentPost: Post| null;
}

const initialState:PostsState = {
    posts:[],
    currentPost:null,
}

const postSlice = createSlice({
    name:"post",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(createPost.fulfilled, (state,action) => {
            state.posts = action.payload;
        })
    }
});


export const fetchPosts = createAsyncThunk('posts/fetchPosts',
    async (e:any) => {
        e.preventDefault();
        try {
            const {data,error} = await supabase.from('blogs').select('*').order('created_at', {ascending:false});

            if (error) throw error;
            return data as Post[]
        } catch (error:any){
            return error
        }
    }
)

export const createPost = createAsyncThunk('posts/fetchPosts',
    async (newPost: {title: string; body:any; }) => {
        try {
           
            const {data,error} = await supabase.from('blogs').insert([newPost]);
            if(error)throw error;
            return data;
            
        } catch (error:any){
            return error
        }
    }
)



export default postSlice.reducer;
