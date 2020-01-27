import React from 'react';
import StatusStyled from './styled-steps';
import { connect } from 'react-redux';
import './steps.css';
import { colors, path } from '../../constants';

/**
 * @desc This component shows the steps on top part of webpage for user to know, which page he is on and how many more steps are pending.
 * @param currentPath : to decide which steps to highlight based on currentpath
 */
class Steps extends React.Component<{currentPath}, {}> {

  render(){
    // deciding which step numbers should be highlighted based on the currentPath user is on.
      let isStepOneActive = this.props.currentPath === path.numberOfParts || this.props.currentPath === path.valueOfParts || this.props.currentPath === path.successPage;
      let isStepTwoActive = this.props.currentPath === path.valueOfParts || this.props.currentPath === path.successPage;
      let isStepThreeActive = this.props.currentPath === path.successPage;

    return (
    <div className="statusContainer">
        <StatusStyled backgroundColor={isStepOneActive ? colors.activeStep : colors.pendingStep}><span>1</span></StatusStyled>
        <StatusStyled backgroundColor={isStepTwoActive ? colors.activeStep : colors.pendingStep}><span>2</span></StatusStyled>
        <StatusStyled backgroundColor={isStepThreeActive ? colors.activeStep : colors.pendingStep} isLastElement={true}><span>3</span></StatusStyled>
    </div>
    );
  }

}

export default connect(
    null
  )(Steps);
