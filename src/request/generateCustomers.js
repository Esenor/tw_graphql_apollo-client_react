import gql from 'graphql-tag'
import apolloClient from './apolloClient'

export default async function generateCustomers () {
  return new Promise((resolve, reject) => {
    let client = apolloClient.getClient()
    let listCustomersMutation = gql`
      mutation {
        customers: generateRandomCustomers {
          id,
          name,
          lastName,
          mail,
          addresses {
            id,
            street,
            city,
            zipcode
          }
        }
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
