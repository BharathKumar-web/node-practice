import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import PathwaySlice from "../features/popel-admin/PropelAdminSlice";
const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    pathwaySlice: PathwaySlice,
  },
});

export default store;
