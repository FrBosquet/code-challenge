import {
  GraphQLObjectType
} from 'graphql';
import articles from './articles';
import articleById from './articleById';

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    articles,
    articleById
  }),

});

export default Query;
