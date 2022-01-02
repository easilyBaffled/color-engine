import { createEntityAdapter } from "@reduxjs/toolkit";
import { _dynamicChange, _staticChange } from "@/store/util";

export const bodiesAdapter = createEntityAdapter();
export const staticChange = _staticChange(bodiesAdapter);

export const dynamicChange = _dynamicChange(bodiesAdapter);
