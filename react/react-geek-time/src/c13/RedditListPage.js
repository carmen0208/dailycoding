import React, { Component } from 'react'
import './RedditListPage.css'
import { Provider, connect} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, bindActionCreators, applyMiddleware } from 'redux'
import redditReducer from './redditReducer'
import fetchRedditList from './redditActions'
import { composeWithDevTools } from 'redux-devtools-extension'

export class RedditListPage extends Component {
  render() {
    const { fetchRedditList } = this.props.actions
    const  {redditList, fetchRedditListPendding, fetchRedditListError}  = this.props
    return(
      <div className="examples-reddit-list-page">
      <h1>Reddit API Usage</h1>
      <p>This demo shows how to use Redux async actions to fetch data from Reddit's REST API.</p>
      <button className="btn-fetch-reddit" disabled={fetchRedditListPendding} onClick={fetchRedditList}>
        {fetchRedditListPendding ? 'Fetching': 'Fetch reactjs topics'}
      </button>
      {fetchRedditListError && (
          <div className="fetch-list-error">Failed to load: {fetchRedditListError.toString()}</div>
        )}
      {redditList.length > 0 ? (
          <ul className="examples-reddit-list">
            {redditList.map(item => (
              <li key={item.data.id}>
                <a href={item.data.url}>{item.data.title}</a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="no-items-tip">No items yet.</div>
        )}
      </div>
    )
  }
}
function mapStateToProps(state) {
  // console.log(state)
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({fetchRedditList},dispatch)
  }
}
const ConnectedCounter = connect(mapStateToProps,mapDispatchToProps)(RedditListPage)


// Create Store
const store = configStore()

function configStore(initialState) {
  // console.log(initialState)
  const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  });
  return createStore(redditReducer,
                    initialState,
                    composeEnhancers(applyMiddleware(thunkMiddleware)))
}

export default class RedditListPageSample extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <ConnectedCounter />
      </Provider>
    )
  }
}
