import {HIDE_ALERT, SHOW_ALERT} from "../types";

const handlers = {
    [SHOW_ALERT] : (state, {paylaod}) => ({...paylaod, visible: true}),
    [HIDE_ALERT] : state => ({...state, visible: false}),
    DEFAULT : state => state
}

const alertReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
};

export default alertReducer;