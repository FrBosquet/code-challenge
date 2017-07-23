import {types} from '../actions/index';

const initialState = {
  articles: []
}

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.READ_ARTICLES:
      return Object.assign({}, state, {
        articles: action.articles
      });

    case types.ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: [
          ...action.articles,
          {
            author: action.author,
            content: action.content,
            excerpt: action.excerpt,
            id: action.id,
            published: action.published,
            tags: action.tags,
            title: action.title,
          }
        ]
      })
    default:
      return state;
  }
}

export {
  articleReducer
}
