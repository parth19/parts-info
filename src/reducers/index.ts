const initialState = {
  numberOfParts: 0,
  currentPath: '/'
};

const partsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "STORENUMBEROFPARTS":
      console.log(action.payload.numberOfParts);
      return Object.assign({}, state, {
        numberOfParts: action.payload.numberOfParts
      });

    case "SETCURRENTPATH":
      console.log(action.payload.currentPath);
      return Object.assign({}, state, {
        currentPath: action.payload.currentPath
      });
    default:
      return state;
  }
};

export default partsReducer;