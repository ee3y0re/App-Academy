export const RECEIVE_STEP = "RECEIVE_STEP";
export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const REMOVE_STEP = "REMOVE_STEP";


export const receiveStep = (step) => {
    return {
        type: RECEIVE_STEP,
        step: step,
    };
};

export const receiveSteps = (steps) => {
    return {
        type: RECEIVE_STEPS,
        steps: steps,
    };
};

export const removeStep = (step) => {
    return {
        type: REMOVE_STEP,
        step: step,
    };
};