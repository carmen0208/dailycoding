const initialState = {
  redditList: [],
  fetchRedditListError: null,
  fetchRedditListPendding: false
}
export default function redditReducer(state = initialState, action ) {
  switch( action.type) {
    case 'EXAMPLES_FETCH_REDDIT_LIST_BEGIN':
      // console.log('I am in reducer')
      return {
        ...state,
        fetchRedditListPendding: true,
        fetchRedditListError: null,
      }
    case 'EXAMPLES_FETCH_REDDIT_LIST_SUCCESS':
      // The request is success
      // console.log(`I am in reducer ${action.data}`)
      return {
        ...state,
        redditList: action.data.data.children,
        fetchRedditListPendding: false,
        fetchRedditListError: null,
      }
    case 'EXAMPLES_FETCH_REDDIT_LIST_FAILURE':
      // The request is failed
      return {
        ...state,
        fetchRedditListPendding: false,
        fetchRedditListError: action.data.error,
      };
    default:
      return state
  }
}