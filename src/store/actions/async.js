import { setCustomersList } from './sync'
import apolloClient from '../../apolloClient'
import gql from 'graphql-tag'

/**
 *
 */
export function getCustomersList () {
  return async function (dispatch) {
    let client = apolloClient.getClient()
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
      console.log(JSON.stringify(data))
      dispatch(setCustomersList(data))
    }).catch((error) => {
      console.log(error)
    })
  }
}
