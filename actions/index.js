import { messageTypes } from 'eric-config'

export function sync() {
  return (dispatch, getState, {emit}) => {
    emit(messageTypes.sync)
  }
}
