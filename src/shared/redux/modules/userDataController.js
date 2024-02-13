const LOGIN_USER = 'user/LOGIN_USER';
const JOIN_USER = 'user/JOIN_USER';
const AUTH_USER = 'user/AUTH_USER';
const LOGOUT_USER = 'user/LOGOUT';

export const login = (payload) => {
  return {
    type: LOGIN_USER,
    payload
  };
};

export const logout = () => {
  return {
    type: LOGOUT_USER
  };
};

export const join = (payload) => {
  return {
    type: JOIN_USER,
    payload
  };
};

export const auth = (payload) => {
  return {
    type: AUTH_USER,
    payload
  };
};

const initialState = {
  currentUser: null
};

const userDataController = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    case LOGOUT_USER:
      return {
        ...state,
        currentUser: null
      };
    case JOIN_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default userDataController;
