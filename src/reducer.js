// import {Map, List} from 'immutable'
// import action_creators from './action_creators'

const initialState = {
  blogTitle: 'My React Redux Blog'
};

function myBlog(state, action) {
  if (typeof state === 'undefined')
    return initialState;

  return state;
}

export default myBlog;
