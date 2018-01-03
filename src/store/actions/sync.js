import { ACTIONS_TYPES } from '../index'

/**
 *
 * @param {*} message
 */
export function setCustomersList (data = {data: {}}) {
  if (data.data) {
    if (data.data.customers) {
      return {
        type: ACTIONS_TYPES.GET_CUSTOMERS_LIST,
        payload: {
          data: data.data.customers
        }
      }
    }
  }
  return {
    type: ACTIONS_TYPES.GET_CUSTOMERS_LIST,
    payload: {
      data: []
    }
  }
}
