import {
  GraphQLSchema
} from 'graphql';
import Query from './queries/Query';

const Schema = new GraphQLSchema({
  query: Query,
});

export default Schema;
