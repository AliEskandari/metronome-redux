
// Actions
const TOGGLE_PLAY_STATUS = "TOGGLE_PLAY_STATUS";
const SET_VOLUME = "SET_VOLUME";
const SET_BPM = "SET_BPM";
const INCREMENT_BPM = "INCREMENT_BPM";

// Reducer
const initialState = {
    playStatus: false,
    volume: .5,
    bpm: 100
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_PLAY_STATUS:
            return { ...state, playStatus: !state.playStatus }
        case SET_VOLUME:
            return { ...state, volume: action.volume }
        case SET_BPM:
            return { ...state, bpm: action.bpm }
        case INCREMENT_BPM: {
            return { ...state, bpm: state.bpm + action.delta }
        }
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

export function setBpm(bpm) {
    return { type: SET_BPM, bpm }
}

export function incrementBpm(delta) {
    return { type: INCREMENT_BPM, delta }
}
