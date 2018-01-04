const fetch = require('node-fetch')
const { ApolloClient } = require('apollo-client')
const { HttpLink } = require('apollo-link-http')
const { InMemoryCache } = require('apollo-cache-inmemory')

module.exports = {
  getClient: () => {
    return new ApolloClient({
      link: new HttpLink({
        uri: 'http://localhost:3042',
        fetch: fetch
      }),
      cache: new InMemoryCache()
    })
  }
}
