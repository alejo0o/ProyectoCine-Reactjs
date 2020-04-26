import { GraphQLClient } from 'graphql-request';

const API_URL = `https://deploy-zeit.now.sh/api` || process.env.API_ENDPOINT;

const API_HEADERS = {
  headers: {},
};

export default new GraphQLClient(API_URL, API_HEADERS);
