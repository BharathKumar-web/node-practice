import { createSlice } from "@reduxjs/toolkit";

const PROPE_ADMIN = "propelAdmin";
const propelAdmin = createSlice({
  name: PROPE_ADMIN,
  initialState: {
    createPathwayModal: false,
  },
  reducers: {
    handleCreatePathwayModal: (state, action) => {
      state.createPathwayModal = action.payload.modal;
    },
  },
});
export const propelAdminSliceActions = propelAdmin.actions;
export default propelAdmin.reducer;
