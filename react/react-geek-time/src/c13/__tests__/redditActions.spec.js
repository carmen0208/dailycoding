import _ from 'lodash'
import nock from 'nock'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

import fetchRedditList from '../redditActions'

const host = 'http://www.reddit.com/'
axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

const middleware = [thunk]
const mockStore = configureMockStore(middleware)
describe('redditActions',()=> {
  afterEach(() => {
    nock.cleanAll()
  })

  it('dispatches success action when redditActions succeeds',()=> {
    const list = _.times(2, i => ({
      data: {
        id: `id${i}`,
        title: `test${i}`,
        url: `http://example.com/test${i}`,
      },
    }))

    nock(host)
      .get('/r/reactjs.json')
      .reply(200, { data: { children: list } })

    const store = mockStore({ redditRedditList: []})
    return store.dispatch(fetchRedditList()).then(()=> {
      // getActions is a function from 'redux-mock-store'
      // usage: https://github.com/dmitry-zaets/redux-mock-store
      const actions = store.getActions()
      expect(actions[0]).toHaveProperty('type', 'EXAMPLES_FETCH_REDDIT_LIST_BEGIN')
      expect(actions[1]).toHaveProperty('type', 'EXAMPLES_FETCH_REDDIT_LIST_SUCCESS')
    })
  })
})