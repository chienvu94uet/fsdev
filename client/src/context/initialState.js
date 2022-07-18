const initialState = {
  auth: {
    isLoggedIn: false,
    username: "",
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
