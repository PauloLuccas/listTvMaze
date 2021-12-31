const INITIAL_STATE = {
    data: []
};

export default function favorites(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_FAVORITES':
            return {...state, data: [...state.data, action.title]};
        default:
            return state;
    }
}


