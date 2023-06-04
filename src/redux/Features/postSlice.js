import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

import * as api from "./api";
export const createPost = createAsyncThunk(
    "post/addPost",
    async ({ formValue, navigate, toast }, { rejectWithValue }) => {
        try {
            const { data } = await api.createPost(formValue);

            console.log(data)
            toast.success("Post created succesfully");
            navigate("/");
            return data;
        } catch (err) {
            console.log(err);
            return rejectWithValue(err.response.data);
        }
    }
);
export const getAllPosts = createAsyncThunk("post/getAllPosts", async ({ user }) => {
    try {
        const { data } = await api.getAllPosts(user);

        console.log(data)


        return data;
    } catch (err) {
        console.log(err);
        return err;
    }

})

export const getAllPostsByUserId = createAsyncThunk("post/getAllPostsByUserid", async ({
    userId }) => {
    try {
        const { data } = await api.getAllPostsById(userId);

        return data;
    } catch (err) {
        console.log(err);
        return err;
    }

})

export const getAllTimeLinePosts = createAsyncThunk("post/getAllTimelineposts", async ({
    userId }) => {
    try {
        const { data } = await api.getAllTimelinePosts(userId);

        return data;
    } catch (err) {
        console.log(err);
        return err;
    }

})
const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: [],
        post: {},
        userPosts: [],
        timeLinePosts: [],
        error: '',
        loading: false,

    },
    reducers: {


    },
    extraReducers: {

        [createPost.pending]: (state, action) => {
            state.loading = true

        },
        [createPost.fulfilled]: (state, action) => {
            state.loading = false;
            state.post = action.payload

        },
        [createPost.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload;

        },

        [getAllPosts.pending]: (state, action) => {
            state.loading = true

        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload

        },
        [getAllPosts.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload;

        },
        [getAllPostsByUserId.pending]: (state, action) => {
            state.loading = true

        },
        [getAllPostsByUserId.fulfilled]: (state, action) => {
            state.loading = false;
            state.userPosts = action.payload

        },
        [getAllPostsByUserId.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload;

        },
        [getAllTimeLinePosts.pending]: (state, action) => {
            state.loading = true

        },
        [getAllTimeLinePosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.timeLinePosts = action.payload

        },
        [getAllTimeLinePosts.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload;

        }
    }
})
// Destructure and export the plain action creators


export default postSlice.reducer