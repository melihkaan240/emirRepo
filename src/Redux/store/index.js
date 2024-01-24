import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "../api/apiSlice";
import domainReducer from "../subfinder/subfinderSlice"
export const store = configureStore({
  reducer: {
    api: apiReducer, // 'params' yerine 'api' olarak değiştirildi, slice adıyla uyumlu olmalı
    domain : domainReducer
  },
});