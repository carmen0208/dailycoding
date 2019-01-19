import React, { Component } from 'react'
import './RedditListPage.css'
import { Provider, connect} from 'react-redux'
import { createStore, combineReducers, bindActionCreators } from 'redux'
import redditReducer from './redditReducer'
import fetchRedditList from './redditActions'

export class RedditListPage extends Component {
  render() {
    const { fetchRedditList } = this.props.actions
    const  redditList  = this.props.redditList
    return(
      <div className="examples-reddit-list-page">
      <h1>Reddit API Usage</h1>
      <p>This demo shows how to use Redux async actions to fetch data from Reddit's REST API.</p>
      <button className="btn-fetch-reddit"  onClick={fetchRedditList}>
      </button>

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
  return {
    redditList: state.redditList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({fetchRedditList},dispatch)
  }
}
const ConnectedCounter = connect(mapStateToProps,mapDispatchToProps)(RedditListPage)


// Create Store
const store = createStore(redditReducer)

export default class RedditListPageSample extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <ConnectedCounter />
      </Provider>
    )
  }
}
