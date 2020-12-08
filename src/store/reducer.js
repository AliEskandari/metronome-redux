
// Actions
const TOGGLE_PLAY_STATUS = "TOGGLE_PLAY_STATUS";
const SET_VOLUME = "SET_VOLUME";

// Reducer
const initialState = {
    playStatus: false,
    volume: .5
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_PLAY_STATUS:
            return { ...state, playStatus: !state.playStatus }
        case SET_VOLUME:
            return {...state, volume: action.volume }
        default:
            return state;
    }
};

// Action Creators
export function togglePlayStatus() {
    return { type: TOGGLE_PLAY_STATUS }
}

export function setVolume(volume) {
    return { type: SET_VOLUME, volume };
}
