import db from '../db';

const articlesResolver = () =>{
  return db.Article.find();
}

export {
  articlesResolver
}
