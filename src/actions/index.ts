/**
 * @desc Saves number of parts entered by user in state
 * @param numberOfParts 
 * @return value of number of parts to reducer.
 */
export const storeNumberOfParts = (numberOfParts) => {
    return {
        type: 'STORENUMBEROFPARTS',
        payload: numberOfParts
    }
}

/**
 * @desc Saves value of each part, entered by user.
 * @param partsValue 
 * @return value of each parts as an object to reducer.
 */
export const storePartsValue = (partsValue) => {
    return {
        type: 'STOREPARTSVALUE',
        payload: {
            partsValue: partsValue
        }
    }
}

/**
 * @desc Sets current path in state variable. So some of the components can be rendered accrodingly.
 * @param pathValue
 * @return value of path to reducer.
 */
export const setCurrentPath = (pathValue) => {
    return {
        type: 'SETCURRENTPATH',
        payload: {
            currentPath: pathValue
        }
    }
}