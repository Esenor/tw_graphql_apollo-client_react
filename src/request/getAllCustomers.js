import gql from 'graphql-tag'
import { getClient } from './apolloClient'

export default async function getAllCustomers () {
  return new Promise((resolve, reject) => {
    let client = getClient()
    let listCustomersQuery = gql`
      query {
        customers: listCustomers {
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
    client.query({
      query: listCustomersQuery
    }).then((data) => {
      resolve(data)
    }).catch((error) => {
      reject(error)
    })
  })
}
