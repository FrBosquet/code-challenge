const types = {
  READ_ARTICLES : 'READ_ARTICLES'
}

const readArticles = (articles) => {
  return {
    articles,
    type: types.READ_ARTICLES
  }
}

export {
  types,
  readArticles
}
