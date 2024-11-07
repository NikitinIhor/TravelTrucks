import { createSlice } from "@reduxjs/toolkit";
import { getAllGallery } from "./galleryOps";

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    galleryArr: [],
    loading: false,
    error: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllGallery.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.galleryArr = [];
      })
      .addCase(getAllGallery.fulfilled, (state, action) => {
        state.loading = false;
        state.galleryArr = action.payload;
        state.error = false;
      })
      .addCase(getAllGallery.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.galleryArr = [];
      });
  },
});

export const selectGallery = (state) => state.gallery.galleryArr;
export const selectLoading = (state) => state.gallery.loading;
export const selectError = (state) => state.gallery.error;

export default gallerySlice.reducer;
