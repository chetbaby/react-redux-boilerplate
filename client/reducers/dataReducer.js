import { actionTypes } from '../constants/actionTypes';

const initialState = {
  user: {
    avatar: 'CHETB',
    collections: {
      imgId: [],
      searches: [],
      notifications: [],
    },
  },
  image: {
    id: '',
    description: '',
  },
  display: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
      console.log('this is the reducer');
      return {};

    default:
      return state;
  }
};

export default dataReducer;
 