import { userData } from '../../mockData';

const LOGIN_USER = 'user/LOGIN_USER';

export const login = (payload) => {
  return {
    type: LOGIN_USER,
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

    default:
      return state;
  }
};

export default userDataController;
