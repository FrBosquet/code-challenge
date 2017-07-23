import {
  GraphQLString,
  GraphQLList,
  GraphQLID
} from 'graphql';
import articleType from '../types/article';
import {articleByIdResolver} from '../resolvers';

const articleById = {
  type: articleType,
  description: "Retrieve an article from the db given its Id",
  args: {
    id: {
      type: GraphQLString
    }
  },
  resolve: articleByIdResolver
}

export default articleById;
