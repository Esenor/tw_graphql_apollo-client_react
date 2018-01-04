import { setCustomersList } from './sync'
import getAllCustomers from '../../request/getAllCustomers'
import generateCustomers from '../../request/generateCustomers'
import truncateCustomers from '../../request/truncateCustomers'

/**
 *
 */
export function getCustomersList () {
  return async function (dispatch) {
    getAllCustomers().then((data) => {
      dispatch(setCustomersList(data))
    })
  }
}
/**
 *
 */
export function generateRandomCustomers () {
  return async function (dispatch, getState) {
    generateCustomers().then(() => {
      dispatch(getCustomersList())
    })
  }
}
/**
 *
 */
export function truncateAllCustomers () {
  return async function (dispatch, getState) {
    truncateCustomers().then(() => {
      dispatch(getCustomersList())
    })
  }
}
