import Immutable, { List, Map } from 'immutable'
import { messageTypes } from 'eric-config'

const cloud = (state = new Map(), action) => {
    switch (action.type) {
        case messageTypes.sync:
            return Immutable.fromJS(action.payload)

        default:
            return state
    }
}

export default cloud
