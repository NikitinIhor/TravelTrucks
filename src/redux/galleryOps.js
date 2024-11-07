import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getAllGallery = createAsyncThunk(
  "gallery/getAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/campers");

      return res.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
