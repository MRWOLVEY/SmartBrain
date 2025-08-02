import React from "react";

export const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_URL":
      return { ...state, imgUrl: action.payload };
    case "SET_BOXES":
      return { ...state, boxes: [...state.boxes, action.payload] };
    case "CLEAR_STATE":
      return { ...state, imgUrl: "", boxes: [] };
    default:
      return state;
  }
};
