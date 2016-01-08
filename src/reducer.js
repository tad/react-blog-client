import Repository from './data/repository.js';

/*eslint-disable */ 
function myBlog(state, action) {
  if (typeof state === 'undefined')
    return Repository().getInitialState();

  return state;
}
/*eslint-disable */
export default myBlog;
