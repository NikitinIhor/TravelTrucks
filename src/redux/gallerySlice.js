import { createSlice } from "@reduxjs/toolkit";
import { getAllGallery, getCamperById } from "./galleryOps";

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    galleryArr: [],
    selectedCamper: [],
    loading: false,
    error: false,
    page: 1,
    perPage: 4,
    totalItems: 23,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllGallery.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllGallery.fulfilled, (state, action) => {
        const { total, items } = action.payload;
        state.loading = false;
        state.galleryArr = [...state.galleryArr, ...items];
        state.page += 1;
        state.totalItems = total;
        state.error = false;
      })
      .addCase(getAllGallery.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.galleryArr = [];
      })
      .addCase(getCamperById.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.selectedCamper = action.payload;
      })
      .addCase(getCamperById.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const selectGallery = (state) => state.gallery.galleryArr;
export const selectTotalItems = (state) => state.gallery.totalItems;
export const selectCamper = (state) => state.gallery.selectedCamper;
export const selectLoading = (state) => state.gallery.loading;
export const selectError = (state) => state.gallery.error;

export default gallerySlice.reducer;
