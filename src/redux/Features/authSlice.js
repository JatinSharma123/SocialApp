import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import * as api from "./api";
export const login = createAsyncThunk(
    "auth/login",
    async ({ formValue, navigate, toast }, { rejectWithValue }) => {
        try {

            const { data } = await api.signIn(formValue);
            toast.success("Login Successfully");

            console.log(data);
            navigate("/");
            return data;
        } catch (err) {
            toast.error("Wrong Details !!!");

            return rejectWithValue(err.response.data);
        }
    }
);

export const register = createAsyncThunk(
    "auth/register",
    async ({ formValue, profileImage, coverImage, navigate, toast }, { rejectWithValue }) => {
        console.log(formValue, profileImage, coverImage)
        try {

            const { data } = await axios.post('http://localhost:5000/api/auth/register', { formValue, profileImage, coverImage });
            toast.success("Register Successfully");
            navigate("/");
            console.log(data)

            return data;
        } catch (err) {
            console.log(err);
            toast.error("Wrong Details !!!");
            return rejectWithValue(err);
        }
    }
);

export const getAllUsers = createAsyncThunk(
    "auth/getAllUsers",
    async () => {
        try {

            const { data } = await api.getAllUsers();



            return data;
        } catch (err) {
            console.log(err);

            return err;
        }
    }
);



export const getUserById = createAsyncThunk(
    "user/getUserById",
    async ({ id }) => {
        try {

            const { data } = await api.getUser(id);

            console.log(data)

            return data;
        } catch (err) {
            console.log(err);

            return err;
        }
    }
);
export const followUser = createAsyncThunk(
    "auth/followUser",
    async ({ id, userId }) => {
        try {

            const { data } = await
                axios.put(`http://localhost:5000/api/users/follow/${id}`, { userId });

            console.log(data)

            return data;
        } catch (err) {
            console.log(err);

            return err;
        }
    }
);


export const unFollowUser = createAsyncThunk(
    "auth/unfollowUser",
    async ({ id, userId }) => {
        try {

            const { data } = await
                axios.put(`http://localhost:5000/api/users/unfollow/${id}`, { userId });

            console.log(data)

            return data;
        } catch (err) {
            console.log(err);

            return err;
        }
    }
);


export const likePost = createAsyncThunk(
    "auth/likePost",
    async ({ postId, userId }) => {
        try {

            const { data } = await
                axios.put(`http://localhost:5000/api/posts/like/${postId}`, { userId });

            console.log(data)

            return data;
        } catch (err) {
            console.log(err);

            return err;
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        users: [],
        error: '',
        loading: false,
        getUser: null

    },
    reducers: {

        logoutHandler: (state, action) => {

            state.user = null;
            state.users = [];
            state.posts = [];

        }
    },
    extraReducers: {
        [register.pending]: (state, action) => {
            state.loading = true

        },
        [register.fulfilled]: (state, action) => {
            state.loading = false
            state.user = action.payload

        },
        [register.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [login.pending]: (state, action) => {
            state.loading = true

        },
        [login.fulfilled]: (state, action) => {
            state.loading = false
            state.user = action.payload

        },
        [login.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [getAllUsers.pending]: (state, action) => {
            state.loading = true

        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.loading = false
            state.users = action.payload

        },
        [getAllUsers.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [getUserById.pending]: (state, action) => {
            state.loading = true

        },
        [getUserById.fulfilled]: (state, action) => {
            state.loading = false
            state.getUser = action.payload

        },
        [getUserById.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [followUser.pending]: (state, action) => {
            state.loading = true

        },
        [followUser.fulfilled]: (state, action) => {
            state.loading = false

        },
        [followUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [unFollowUser.pending]: (state, action) => {
            state.loading = true

        },
        [unFollowUser.fulfilled]: (state, action) => {
            state.loading = false

        },
        [unFollowUser.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [likePost.pending]: (state, action) => {
            state.loading = true

        },
        [likePost.fulfilled]: (state, action) => {
            state.loading = false

        },
        [likePost.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }

    }
})
// Destructure and export the plain action creators

export const { logoutHandler } = authSlice.actions;
export default authSlice.reducer