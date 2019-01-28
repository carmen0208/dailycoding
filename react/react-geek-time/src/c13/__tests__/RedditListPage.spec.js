import React from 'react'
import { shallow } from 'enzyme'
import { RedditListPage } from '../RedditListPage'

describe('RedditLastPage',()=> {
  it('renders node with correct class name',()=> {
    const props = {
      actions: {},
      redditList: []
    }
    const renderedComponent = shallow(<RedditListPage {...props}/>)

    expect(renderedComponent.find('.examples-reddit-list-page').length).toBe(1)
    expect(renderedComponent.find('.no-items-tip').length).toBe(1)
  })

  it('renders list items when there\'s data',()=> {
    const props = {
      actions: {},
      redditList: [{ data: { id: 'id', title: 'title', url: 'url' } }]
    }
    const renderedComponent = shallow(<RedditListPage {...props} />)

    expect(renderedComponent.find('.examples-reddit-list-page').length).toBe(1)
  })

  it('should disable fetch button when fetching reddit', () => {
    const pageProps = {
      redditList: [],
      fetchRedditListPendding: true,
      actions: {},
    }
    const renderedComponent = shallow(<RedditListPage {...pageProps} />)

    expect(renderedComponent.find('.btn-fetch-reddit[disabled]').length).toBe(1)
  })

  it('should show error if fetch failed', () => {
    const pageProps = {
      redditList: [],
      fetchRedditListError: new Error('server error'),
      actions: {},
    }
    const renderedComponent = shallow(<RedditListPage {...pageProps} />)

    expect(renderedComponent.find('.fetch-list-error').length).toBe(1)
  })

  it('fetch reddit list button clicked', () => {
    const pageProps = {
      redditList: [],
      actions: {
        fetchRedditList: jest.fn()
      }
    }
    const renderedComponent = shallow(<RedditListPage {...pageProps} />)
    renderedComponent.find('.btn-fetch-reddit').simulate('click')
    expect(pageProps.actions.fetchRedditList.mock.calls.length).toBe(1)
  })
})