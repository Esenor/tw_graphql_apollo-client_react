import gql from 'graphql-tag'
import { getClient } from './apolloClient'

export default async function generateCustomers () {
  return new Promise((resolve, reject) => {
    let client = getClient()
    let listCustomersMutation = gql`
      mutation {
        customers: truncateCustomers
      }
    `
    client.mutate({
      mutation: listCustomersMutation
    }).then((data) => {
      resolve(data)
    }).catch((error) => {
      reject(error)
    })
  })
}
