import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oabadz1l0h01xxhhlwckdl/master',
  cache: new InMemoryCache()
})