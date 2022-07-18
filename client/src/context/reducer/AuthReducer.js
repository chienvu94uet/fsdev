import { AUTH } from "../AppAction";

function authReducer(state, action) {
  switch (action.type) {
    case AUTH.UPDATE_AUTH:
      return {
        ...state,
        userName: action.payload.userName,
        userEmail: action.payload.userEmail,
        isLoggedIn: action.payload.isLoggedIn,
      };

    default:
      return state;
  }
}

export default authReducer;
