import {
    RECEIVE_STEPS,
    RECEIVE_STEP,
    REMOVE_STEP
} from "../actions/step_actions";

const initialState = {
    1: {
        id: 1,
        title: "planning the project",
        todo_id: 1,
        done: false
    },
    2: {
        id: 2,
        title: "whisk",
        todo_id: 2,
        done: true
    }
};

const stepsReducer = (state = initialState, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_STEPS:
            action.steps.forEach(step => {
                nextState[step.id] = step;
            });
            return nextState;
        case RECEIVE_STEP:
            nextState[action.step.id] = action.step;
            return nextState;
        case REMOVE_STEP:
            delete nextState[action.step.id];
            return nextState;
        default:
            return state;
    }
};

export default stepsReducer;