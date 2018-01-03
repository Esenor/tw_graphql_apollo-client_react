import Application from '../presentationals/Application'
import { connect } from 'react-redux'

export default connect(
  function mapStateToProps (state) {
    return {
      listCustomers: state.listCustomers
    }
  }
)(Application)
