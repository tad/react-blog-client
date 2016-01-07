import Repository from './data/repository.js';

function myBlog(state, action) {
  if (typeof state === 'undefined')
    return Repository().getInitialState();

  return state;
}

export default myBlog;
