import {
  GraphQLObjectType
} from 'graphql';
import articles from './articles';

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    articles
  }),
});

export default Query;
