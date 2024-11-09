import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getAllGallery = createAsyncThunk(
  "gallery/getAll",
  async ({ page = 1, perPage = 4 }, thunkAPI) => {
    try {
      const res = await axios.get("/campers", {
        params: {
          page,
          limit: perPage,
        },
      });

      const { total, items } = res.data;

      return { items, total };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  "gallery/camper",
  async (ID, thunkAPI) => {
    try {
      const res = await axios.get(`/campers/${ID}`);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
