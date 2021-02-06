import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from "../components/user/userSlice";
import showsReducer from "../components/Shows/showsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    shows: showsReducer,
  },
});
