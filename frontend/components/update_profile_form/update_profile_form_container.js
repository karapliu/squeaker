import { connect } from 'react-redux';
import { updateMember } from '../../actions/member_actions';
import UpdateProfileForm from './update_profile_form';

const mapStateToProps = state => ({
  currentMember: state.entities.members[state.session.currentMemberId],
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  processForm: member => dispatch(updateMember(member))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProfileForm);