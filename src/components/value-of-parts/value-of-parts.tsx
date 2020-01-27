import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { storePartsValue, setCurrentPath } from '../../actions';
import StyledButton from '../../commons/styled-button/styled-button';
import './value-of-parts.css';
import { colors, path } from '../../constants';

interface state {
  enableNextButton: any;
  partsValueArr: Array<number>;
}

function mapDispatchToProps(dispatch) {
  return {
    storePartsValue: numberOfParts => dispatch(storePartsValue(numberOfParts)),
    setCurrentPath: pathValue => dispatch(setCurrentPath(pathValue))
  };
}

const mapStateToProps = state => {
  return {
    numberOfParts: state.numberOfParts
  };
}

let partValues = {};

/**
 * @desc This component renders input box based on number of parts entered by user. it allows user to assign value to each part.
 * @param setCurrentPath : Calls this method defined in action to set current path
 * @param numberOfParts : picks up number of parts entered by user on previous page and renders textboxes accordingly.
 * @param storePartsValue: save value of each part entered by user.
 */
class ValueofParts extends React.Component<{ storePartsValue: any, numberOfParts: any, setCurrentPath: any }, state> {
  constructor(props) {
    super(props);
    this.state = {
      enableNextButton: false,
      partsValueArr: []
    }
    this.handlePartValueChange = this.handlePartValueChange.bind(this);
    this.submitPartValues = this.submitPartValues.bind(this);

    this.props.setCurrentPath(path.valueOfParts);
  }

  /**
   * @desc the method is an event callback based on user input for value of each part
   * @param e element
   * @param index 
   */
  handlePartValueChange(e, index) {
    try {
      partValues[index] = parseInt(e.target.value);
      const re = /^[0-9\b]+$/;
      let partsValueArray = this.state.partsValueArr;

      // if value is not blank, then test the regex

      if (((e.target) as any).value === '' || re.test(((e.target) as any).value)) {
        partsValueArray[index] = ((e.target) as any).value;
        this.setState({
          partsValueArr: partsValueArray
        });
      }
      var sum = 0;
      var x;
      for (x in partValues) {
        sum += partValues[x];
      }

      if (sum === 100) {
        this.setState({
          enableNextButton: true
        })
      }
    } catch (e) {
      console.log(e);
      alert('something went wrong. Please try again.');
    }
  }

  /**
   * @desc stores the value of each part as an object using actions
   */
  submitPartValues() {
    this.props.storePartsValue(partValues);
  }


  render() {

    return (
      <form className="PartsValueSection">
        <div className="inputParts">
          {[...Array(this.props.numberOfParts)].map((x, i) =>
            <div className="inputPartsValueContainer">
              <label className="inputPartValueLabel">Part {i + 1} %</label>
              <input className="inputPartValueTextbox" id={i + ""}
                value={this.state.partsValueArr[i] ? this.state.partsValueArr[i] : ""}
                onChange={e => this.handlePartValueChange(e, i)} ></input>
            </div>
          )}
        </div>
        <div className="submitPartsValueContainer">
          <Link to={path.numberOfParts} ><StyledButton backgroundColor={colors.previousButton} >Previous</StyledButton></Link>
          <Link to={path.successPage} ><StyledButton disabled={!this.state.enableNextButton} onClick={this.submitPartValues}>Next</StyledButton></Link>
        </div>
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ValueofParts);