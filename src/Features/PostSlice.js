import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const savePost = createAsyncThunk("posts/savePost", async (postData) => {
  try {
    const response = await axios.post("http://localhost:8080/savePost", {
      email: postData.email,
      message: postData.msg,
      lang: postData.lang,
      lat: postData.lat,
    });
    const post = response.data.post;
    return post;
  } catch (error) {
    console.log(error);
  }
});

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const response = await axios.get("http://localhost:8080/getPosts");

    return response.data.posts;
  } catch (error) {
    console.log(error);
  }
});

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (postData) => {
    try {
      const response = await axios.put("http://localhost:8080/updatePost", {
        postMsg: postData.postMsg,
        postId: postData.postId,
      });
      const post = response.data.post;
      return post;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/deletePost/${postId}`
      );

      return response.data.message;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialValues = {
  posts: [],
  likes: [],
  status: "idle",
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const PostSlice = createSlice({
  name: "posts",
  initialState: initialValues,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // savepost
      .addCase(savePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(savePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(savePost.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      // getposts
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      // update post
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.posts = action.payload;
      })
      .addCase(updatePost.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      // delete post
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.posts = action.payload;
      })
      .addCase(deletePost.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default PostSlice.reducer;
