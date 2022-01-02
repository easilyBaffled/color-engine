import { createEntityAdapter } from "@reduxjs/toolkit";
import { _dynamicChange, _staticChange } from "@/store/util";

export const adapter = createEntityAdapter();
export const staticChange = _staticChange(adapter);

export const dynamicChange = _dynamicChange(adapter);
