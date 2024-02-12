import { userData } from '../../mockData';
console.log('유저데이터 디폴트값', userData[0]);
const LOGIN_USER = 'user/LOGIN_USER';
const JOIN_USER = 'user/JOIN_USER';
const AUTH_USER = 'user/AUTH_USER';

export const login = (payload) => {
  return {
    type: LOGIN_USER,
    payload
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
  userData
};

const userDataController = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return; //
    case JOIN_USER:
      return;

    default:
      return state;
  }
};

export default userDataController;
