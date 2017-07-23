import {
  GraphQLList
} from 'graphql';
import articleType from '../types/article';
import {articlesResolver} from '../resolvers';

const articles = {
  type: new GraphQLList(articleType),
  description: "Retrieve every article in the db",
  resolve: articlesResolver
}

export default articles;
