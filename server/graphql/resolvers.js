import db from '../db';

const articlesResolver = () =>{
  return db.Article.find();
}

const articleByIdResolver = (parent, args) =>{
  return db.Article.findById(args.id);
}

export {
  articlesResolver,
  articleByIdResolver
}
