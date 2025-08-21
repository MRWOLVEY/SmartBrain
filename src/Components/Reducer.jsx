import React from "react";

const inc = (score) => {
  return parseInt(score) + 1;
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_URL":
      if (state.imgUrl === action.payload) return state;
      return { ...state, imgUrl: action.payload };
    case "CLEAR_BOXES":
      return { ...state, boxes: [] };
    case "LOGIN":
      return {
        ...state,
        token: action.payload,
        id: action.payload,
      };
    case "INCREMENT_SCORE":
      return {
        ...state,
        profile: {
          ...state.profile,
          entries: inc(state.profile.entries),
        },
      };
    case "SET_PROFILE":
      return { ...state, profile: action.payload };
    case "SET_BOXES":
      return { ...state, boxes: [...state.boxes, action.payload] };
    case "LOGOUT":
      return {
        ...state,
        token: "",
        id: "",
        profile: {},
        imgUrl: "",
        boxes: [],
      };
    default:
      return state;
  }
};
