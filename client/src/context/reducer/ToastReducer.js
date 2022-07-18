import { TOAST } from "../AppAction";

function toastReducer(state, action) {
  switch (action.type) {
    case TOAST.SHOW:
      return {
        ...state,
        isShow: true,
        content: action.payload.content,
      };
    case TOAST.CLOSE:
      return {
        ...state,
        isShow: false,
        content: "",
      };
    default:
      return state;
  }
}

export default toastReducer;
