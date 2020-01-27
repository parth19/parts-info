import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './new-request.css';
import StyledButton from '../../commons/styled-button/styled-button';
import { setCurrentPath } from '../../actions';
import { path } from '../../constants';

function mapDispatchToProps(dispatch) {
  return {
    setCurrentPath: pathValue => dispatch(setCurrentPath(pathValue))
  };
}

/**
 * @desc This component is the first page of application for user to see and initiate new request.
 * @param setCurrentPath : Calls this method defined in action to set current path
 */
class NewReqeust extends React.Component<{ setCurrentPath: any }, {}> {
  constructor(props){
    super(props);
    this.props.setCurrentPath(path.newRequest);
  }

  render(){
    return (
      <div>
        <Link to={path.numberOfParts} ><StyledButton>New Request</StyledButton></Link>
      </div>
    );
  }

}

export default connect(
  null,
  mapDispatchToProps
)(NewReqeust);
