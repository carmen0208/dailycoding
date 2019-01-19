import axios from 'axios'
export default function fetchRedditList(args = {}) {
  return dispatch => {
    // console.log('I am here')
    dispatch({
      type: 'EXAMPLES_FETCH_REDDIT_LIST_BEGIN'
    })
    const promise = new Promise((resolve, reject)=> {
      const doRequest = axios.get('http://www.reddit.com/r/reactjs.json')

      doRequest.then(
        res => {
          dispatch({
            type: 'EXAMPLES_FETCH_REDDIT_LIST_SUCCESS',
            data: res.data,
          })
          resolve(res)
        },
        err => {
          dispatch({
            type: 'EXAMPLES_FETCH_REDDIT_LIST_FAILURE',
            data:  {error: err},
          })
          reject(err);
        }
      )
    })
    return promise
  }
}