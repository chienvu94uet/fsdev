import { MODAL } from "../AppAction";

function modalReducer(state, action) {
  switch (action.type) {
    case MODAL.SHOW:
      return {
        ...state,
        isShow: true,
        name: action.payload.name,
        status: action.payload.status,
        id: action.payload.id,
      };
    case MODAL.CLOSE:
      return {
        ...state,
        isShow: false,
        name: "",
        status: null,
      };
    default:
      return state;
  }
}

export default modalReducer;
