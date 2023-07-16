import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/post/postSlice";
import usersSlice from "../features/post/users/usersSlice";

const Store = configureStore({
    reducer:{
        posts:postSlice,
        users:usersSlice
    }
})

export default Store;