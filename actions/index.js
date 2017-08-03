import * as config from '../config'
const { messageTypes } = config

export function startUp() {
  return (dispatch, getState, {emit}) => {
    emit(messageTypes.stateRequested)
  }
}