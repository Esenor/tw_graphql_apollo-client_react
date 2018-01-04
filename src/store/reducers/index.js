import initialState from '../initialState.json'
import { ACTIONS_TYPES } from '../'

/**
 *
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIONS_TYPES.GET_CUSTOMERS_LIST:
      return updateListCustomers(state, action)
    default:
      return state
  }
}

/**
 *
 * @param {*} state
 * @param {*} difference
 */
function updateState (state, difference) {
  return Object.assign({}, state, difference)
}

/**
 *
 * @param {*} state
 * @param {*} action
 */
function updateListCustomers (state, action) {
  let difference = {
    listCustomers: action.payload.data
  }
  console.log(difference)

  let nexState = updateState(state, difference)

  return nexState
}
