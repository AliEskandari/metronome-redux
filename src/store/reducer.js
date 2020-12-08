
// Actions
const TOGGLE_PLAY_STATUS = "TOGGLE_PLAY_STATUS";

// Reducer
const initialState = {
    playStatus: false
}

export default function reducer(state = initialState, action) {
 switch (action.type) {
     case TOGGLE_PLAY_STATUS:
        return {...state, playStatus: !state.playStatus }

     default:
        return state;
 }
};

// Action Creators
export function togglePlayStatus() {
    return { type: TOGGLE_PLAY_STATUS }
}
