import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addUser = createAsyncThunk("user/addUser", async (userData) => {
  try {
    const response = await axios.post("https://fullstack-server-vuxt.onrender.com/insertUser", {
      uname: userData.uname,
      password: userData.password,
      email: userData.email,
      pic: userData.pic,
    });
    const msg = response.data.users;
    return msg;
  } catch (error) {
    console.log(error);
  }
});

export const getUser = createAsyncThunk("user/getUser", async (userData) => {
  try {
    const response = await axios.post("https://fullstack-server-vuxt.onrender.com/login", {
      password: userData.password,
      email: userData.email,
    });

    return response.data.user;
  } catch (error) {
    // console.log(error);
    alert("invalid credntials !!!" + error);
    initialValues.users = {};
  }
});

const initialValues = {
  users: {},
  message: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const UserSlice = createSlice({
  name: "user",
  initialState: initialValues,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(addUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.message = action.payload.message;
        state.users = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default UserSlice.reducer;
