import jwt_decode from "jwt-decode";
const token = localStorage.getItem("token");

let isLoggedIn = false,
  userName = "";
if (token) {
  var decoded = jwt_decode(token);
  userName = decoded.username;
  isLoggedIn = true;
}
const initialState = {
  auth: {
    isLoggedIn,
    userName,
  },
  modal: {
    isShow: false,
    name: "",
    status: null,
    id: 0,
  },
  toast: {
    isShow: false,
  },
};

export default initialState;
