import Application from '../presentationals/Application'
import { connect } from 'react-redux'
import { getCustomersList, generateRandomCustomers, truncateAllCustomers } from '../../store/actions/async'

export default connect(
  function mapStateToProps (state) {
    return {
      listCustomers: state.listCustomers
    }
  },
  function mapDispatchToProps (dispatch) {
    return {
      refreshCustomers: () => dispatch(getCustomersList()),
      generateRandomCustomers: () => dispatch(generateRandomCustomers()),
      truncateCustomers: () => dispatch(truncateAllCustomers())
    }
  }
)(Application)
