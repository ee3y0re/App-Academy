import { connect } from "react-redux";
import { createNewUser } from '../../actions/session';
import SignUp from './signup';

//start making the beginning part of presentational container:
// - import react
// - initialize the class
// - render and for now return a div
// - remember to export

//sign up component doesn't rely on state, so we go straight to dispatch
const mapDispatchToProps = (dispatch) => {
  return  {
    createNewUser: formUser => dispatch(createNewUser(formUser))
  }
};

export default connect(null, mapDispatchToProps)(SignUp);
