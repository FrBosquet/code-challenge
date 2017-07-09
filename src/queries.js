export const ARTICLES_QUERY = `{
  articles {
    author
    excerpt
    id
    title
  }
}`;

export const ARTICLE_DETAIL_QUERY = `{
  articles {
    author
    excerpt
  }
}`;
