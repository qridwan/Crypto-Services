import { createStore } from "redux";
import { DataReducers } from "../Reducers/datas";

export const store = createStore(DataReducers)