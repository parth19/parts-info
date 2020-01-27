import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { storeNumberOfParts, setCurrentPath } from '../../actions';
import StyledButton from '../../commons/styled-button/styled-button';
import './number-of-parts.css';
import { colors, path } from '../../constants';

interface Istate {
  numberOfParts: any;
  enableNextButton: boolean;
  numberOfPartsState: any
}

function mapDispatchToProps(dispatch) {
  return {
    storeNumberOfParts: numberOfParts => dispatch(storeNumberOfParts(numberOfParts)),
    setCurrentPath: pathValue => dispatch(setCurrentPath(pathValue))
  };
}

/**
 * @desc This component is the second page of application which allows user to enter number of parts.
 * @param setCurrentPath : Calls this method defined in action to set current path
 * @param storeNumberOfParts : Calls this method defined in action to store number of parts given by user.
 */
class NumberofParts extends React.Component<{ storeNumberOfParts: any, setCurrentPath: any }, Istate> {
  constructor(props) {
    super(props);
    this.state = {
      numberOfParts: "",
      enableNextButton: false,
      numberOfPartsState: ""
    }
    this.storeNumberofParts = this.storeNumberofParts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.props.setCurrentPath(path.numberOfParts);

  }

  /**
   * @desc the method gets called on submission of number of parts. It calls action to store it in a state var.
   */
  storeNumberofParts() {
    try {
      let numberOfParts = parseInt(this.state.numberOfParts);
      this.props.storeNumberOfParts({ numberOfParts });
    } catch(e){
      console.log(e);
      alert('Something wrong. Please try again');
    }
  }

  /**
   * @desc this is an event callback based on user input in number of parts textbox. It validates the input
   * and only then enabled next button.
   * @param event 
   */
  handleChange(event: React.FormEvent) {
    const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex and set state.
    if (((event.target) as any).value === '' || re.test(((event.target) as any).value)) {
      this.setState({
        numberOfPartsState: ((event.target) as any).value,
        numberOfParts: ((event.target) as any).value,
        enableNextButton: ((event.target) as any).value !== "" || ((event.target) as any).value !== undefined
      })
    }
  }


  render() {
    return (
      <div className="numberOfPartsSection">
        <div className="inputNumberOfParts">
          <label className="inputNumberOfPartsLabel">Number of Parts :</label>
          <input type="text" className="inputNumberOfPartsTextbox"
            onChange={e => this.handleChange(e)}
            value={this.state.numberOfParts}
          ></input>
        </div>
        <div className="submitNumberofParts">
          <Link to={path.newRequest} ><StyledButton backgroundColor={colors.previousButton}>Previous</StyledButton></Link>
          <Link to={path.valueOfParts} ><StyledButton onClick={this.storeNumberofParts} disabled={!this.state.enableNextButton}>Next</StyledButton></Link>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NumberofParts);